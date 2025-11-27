import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { COURSE_DATA } from '../data/courseData';
import { useCourseProgress } from '../context/ProgressContext';
import Quiz from '../components/Quiz';
import AITutor from '../components/AITutor';
import { ArrowLeft, Download, BotMessageSquare, ExternalLink } from '../components/icons';
import { GoogleGenAI } from "@google/genai";

const LessonView: React.FC = () => {
  const { moduleId, lessonId } = useParams<{ moduleId: string; lessonId: string }>();
  const navigate = useNavigate();
  const { markLessonAsComplete, isLessonCompleted } = useCourseProgress();
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  const module = COURSE_DATA.find(m => m.id === moduleId);
  const lesson = module?.lessons.find(l => l.id === lessonId);
  const isCompleted = lesson ? isLessonCompleted(lesson.id) : false;

  if (!module || !lesson) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Lição não encontrada</h2>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Voltar ao Início</Link>
      </div>
    );
  }

  const handleQuizComplete = () => {
    markLessonAsComplete(lesson.id);
    setTimeout(() => {
        navigate(`/module/${moduleId}`);
    }, 2000);
  };
  
  const handleDownloadPdf = async () => {
    setIsGeneratingPdf(true);
    try {
      if (!(window as any).jspdf || typeof (window as any).jspdf.jsPDF !== 'function') {
          console.error("jsPDF library not loaded correctly.");
          alert("Não foi possível gerar o PDF. A biblioteca de geração de PDF não foi carregada corretamente. Por favor, verifique sua conexão com a internet e recarregue a página.");
          setIsGeneratingPdf(false);
          return;
      }

      if (!process.env.API_KEY) {
        throw new Error("API_KEY not configured.");
      }

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

      // 1. Expand lesson content
      const contentPrompt = `
        Você é um designer instrucional especialista e autor de conteúdo para o curso 'IA Sem Jargões: Acelerador de Negócios'.
        Sua tarefa é expandir a seguinte lição em um material de aula completo, detalhado e aprofundado, com o objetivo de gerar um documento de pelo menos 12 páginas em formato PDF A4.
        **Título da Lição Original:** ${lesson.title}
        **Conteúdo Resumido Original:**
        ---
        ${lesson.content}
        ---
        **Instruções para a Expansão:**
        1.  **Estrutura:** Organize o conteúdo na seguinte estrutura, usando a formatação de markdown indicada:
            *   \`# ${lesson.title}\`
            *   \`## Introdução\` - Escreva uma introdução cativante que estabeleça o cenário e a importância do tópico.
            *   \`## [Título do Capítulo 1]\`
            *   ... (Crie pelo menos 5-7 capítulos aprofundados para atingir o comprimento desejado).
            *   \`## Conclusão\`
        2.  **Conteúdo:** Aprofunde cada conceito. Forneça exemplos de negócios práticos e analogias. Use uma linguagem clara e profissional. O conteúdo total gerado deve ser extenso o suficiente para preencher confortavelmente pelo menos 12 páginas A4.
        3.  **Formato de Saída:** Retorne apenas o texto em formato de markdown, seguindo a estrutura acima. Use \`*\` ou \`-\` para listas. Use \`* **Título:**\` para itens de lista com um título em negrito. Use \`###\` para subtítulos. Não inclua nenhuma outra explicação.
      `;
      
      const contentResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: contentPrompt,
      });
      const expandedContent = contentResponse.text;
      
      // 3. Assemble the PDF
      const { jsPDF } = (window as any).jspdf;
      const doc = new jsPDF('p', 'mm', 'a4');
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 20;
      const contentWidth = pageWidth - (margin * 2);

      // --- Cover Page ---
      // Replaced AI image generation with a static, professional design to ensure reliability and fix API quota errors.
      doc.setFillColor(30, 64, 175); // blue-800
      doc.rect(0, 0, pageWidth, pageHeight, 'F');
      
      doc.setFillColor(34, 197, 94, 0.8); // green-500 with some transparency
      doc.rect(0, 0, pageWidth, 20, 'F');
      doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
      
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.setTextColor(255, 255, 255);
      const courseTitle = 'IA Sem Jargões: Acelerador de Negócios';
      const courseTitleLines = doc.splitTextToSize(courseTitle, contentWidth);
      doc.text(courseTitleLines, pageWidth / 2, pageHeight / 2 - 30, { align: 'center' });

      doc.setLineWidth(0.5);
      doc.setDrawColor(255, 255, 255);
      doc.line(margin, pageHeight / 2 - 5, pageWidth - margin, pageHeight / 2 - 5);

      doc.setFontSize(20);
      doc.setFont('helvetica', 'normal');
      const lessonTitleLinesCover = doc.splitTextToSize(lesson.title, contentWidth);
      doc.text(lessonTitleLinesCover, pageWidth / 2, pageHeight / 2 + 10, { align: 'center' });


      // --- Content Pages ---
      doc.addPage();
      let cursorY = margin;

      const addText = (options: { text: string, fontStyle?: string, fontSize?: number, color?: [number, number, number], spaceAfter?: number, leftMargin?: number }) => {
          const { text, fontStyle = 'normal', fontSize = 12, color = [55, 65, 81], spaceAfter = 0, leftMargin = margin } = options;
          
          doc.setFont('helvetica', fontStyle);
          doc.setFontSize(fontSize);
          doc.setTextColor(color[0], color[1], color[2]);

          const effectiveWidth = contentWidth - (leftMargin - margin);
          const lines = doc.splitTextToSize(text, effectiveWidth);
          const lineHeight = fontSize * 0.65; // Increased line height slightly for better readability

          lines.forEach((line: string) => {
              if (cursorY + lineHeight > pageHeight - margin) {
                  doc.addPage();
                  cursorY = margin;
              }
              doc.text(line, leftMargin, cursorY);
              cursorY += lineHeight;
          });
          cursorY += spaceAfter;
      };

      const lines = expandedContent.split('\n');
      let paragraphBuffer: string[] = [];

      const flushParagraph = () => {
        if (paragraphBuffer.length > 0) {
            addText({text: paragraphBuffer.join(' '), spaceAfter: 6 });
            paragraphBuffer = [];
        }
      };

      for (const line of lines) {
          const trimmedLine = line.trim();
          if (trimmedLine.startsWith('# ')) continue;

          if (trimmedLine.startsWith('## ')) {
              flushParagraph();
              const title = trimmedLine.substring(3).trim();
              
              if (cursorY + 20 > pageHeight - margin) { // Check space for title block
                  doc.addPage();
                  cursorY = margin;
              }

              // Add decorative element for chapter title
              doc.setFillColor(30, 64, 175); // blue-800
              doc.rect(margin, cursorY - 4, 5, 5, 'F');

              addText({ text: title, fontStyle: 'bold', fontSize: 20, color: [30, 64, 175], spaceAfter: 12, leftMargin: margin + 8 });
          } else if (trimmedLine.startsWith('### ')) {
              flushParagraph();
              const subtitle = trimmedLine.substring(4).trim();
              addText({ text: subtitle, fontStyle: 'bold', fontSize: 16, color: [17, 24, 39], spaceAfter: 8 });
          } else if (trimmedLine.startsWith('* **')) {
              flushParagraph();
              const boldPart = trimmedLine.match(/\*\*(.*?)\*\*/)?.[1] || '';
              const restPart = trimmedLine.replace(/\* \*\*(.*?)\*\*:?/, '').trim();
              addText({ text: boldPart, fontStyle: 'bold', fontSize: 12, spaceAfter: 2 });
              addText({ text: restPart, spaceAfter: 6 });
          } else if (trimmedLine.startsWith('* ') || trimmedLine.startsWith('- ')) {
              flushParagraph();
              const text = '•  ' + trimmedLine.replace(/^\s*[\*\-]\s*/, '').replace(/\*\*/g, '');
              addText({ text, spaceAfter: 4, leftMargin: margin + 5 });
          } else if (trimmedLine === '') {
              flushParagraph();
          } else {
              paragraphBuffer.push(trimmedLine);
          }
      }
      flushParagraph();

      const sanitizedTitle = lesson.title.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `IA-Sem-Jargoes-${lesson.id}-${sanitizedTitle}.pdf`;
      doc.save(fileName);
    } catch (error: any) {
        console.error("An unexpected error occurred during PDF generation:", error);
        let errorMessage = "Ocorreu um erro inesperado ao tentar gerar o PDF. Verifique sua chave de API e tente novamente.";
        
        // Try to parse a more specific message if available, especially for rate limit errors.
        if (error && error.message) {
             if (error.message.includes("RESOURCE_EXHAUSTED") || error.message.includes("429")) {
                errorMessage = "O limite de uso da API foi excedido. Por favor, aguarde um minuto e tente novamente ou verifique seu plano e detalhes de faturamento.";
             } else {
                errorMessage = `Erro na geração do PDF: ${error.message}`;
             }
        }
        alert(errorMessage);
    } finally {
        setIsGeneratingPdf(false);
    }
  };

  return (
    <div>
        <Link to={`/module/${moduleId}`} className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar para o módulo</span>
        </Link>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
                <iframe 
                    src={lesson.videoUrl}
                    title={lesson.title}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full"
                ></iframe>
            </div>
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 flex-1">{lesson.title}</h1>
                    <div className="flex flex-wrap gap-2">
                         {lesson.lessonUrl && (
                            <a
                                href={lesson.lessonUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-300 flex-shrink-0 w-40"
                            >
                                <ExternalLink className="h-5 w-5" />
                                <span className="hidden sm:inline">Acessar Lição</span>
                            </a>
                        )}
                        <button
                            onClick={handleDownloadPdf}
                            disabled={isGeneratingPdf}
                            className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300 flex-shrink-0 disabled:bg-gray-400 disabled:cursor-not-allowed w-40"
                        >
                        {isGeneratingPdf ? (
                                <>
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    <span>Gerando PDF...</span>
                                </>
                            ) : (
                                <>
                                    <Download className="h-5 w-5" />
                                    <span className="hidden sm:inline">Baixar PDF</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className="prose max-w-none mt-4 text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: lesson.content.replace(/\n/g, '<br />') }} />
            </div>

            <div className="p-6 md:p-8 border-t border-gray-200 bg-gray-50">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Teste seu conhecimento</h2>
                <Quiz quizData={lesson.quiz} onComplete={handleQuizComplete} isCompleted={isCompleted}/>
            </div>
        </div>

        {/* Floating Action Button for AI Tutor */}
        <button
          onClick={() => setIsTutorOpen(true)}
          className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          aria-label="Abrir Tutor Inteligente"
        >
          <BotMessageSquare className="h-6 w-6" />
        </button>

        <AITutor
          isOpen={isTutorOpen}
          onClose={() => setIsTutorOpen(false)}
          lessonTitle={lesson.title}
          lessonContent={lesson.content}
        />
    </div>
  );
};

export default LessonView;