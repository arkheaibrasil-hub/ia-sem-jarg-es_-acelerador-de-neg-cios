import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { X, Send, BotMessageSquare, Sparkles } from './icons';

interface AITutorProps {
  isOpen: boolean;
  onClose: () => void;
  lessonTitle: string;
  lessonContent: string;
}

interface Message {
  sender: 'user' | 'ai';
  text: string;
}

const AITutor: React.FC<AITutorProps> = ({ isOpen, onClose, lessonTitle, lessonContent }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setMessages([
        { sender: 'ai', text: `Olá! Sou seu tutor de IA. Faça uma pergunta sobre a lição "${lessonTitle}".` }
      ]);
      setUserInput('');
      setError(null);
    }
  }, [isOpen, lessonTitle]);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedInput = userInput.trim();
    if (!trimmedInput || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: trimmedInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);
    setError(null);

    try {
        if (!process.env.API_KEY) {
            throw new Error("API_KEY not configured.");
        }
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

        // Padrão RAG: Fornece o contexto (Recuperação) e pede ao modelo para responder com base nele (Geração).
        const context = `
        **Contexto da Lição: "${lessonTitle}"**
        ---
        ${lessonContent}
        ---
        `;
        
        const question = `**Pergunta do Aluno:** ${trimmedInput}`;

        const fullPrompt = `${context}\n\n${question}`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: fullPrompt,
            config: {
              systemInstruction: `Você é um tutor amigável para o curso 'IA Sem Jargões'. Sua única tarefa é responder à 'Pergunta do Aluno' baseando-se estritamente no 'Contexto da Lição' fornecido. Não use conhecimento externo. Seja claro e conciso em português do Brasil. Se a pergunta não puder ser respondida com o contexto, diga gentilmente: "Desculpe, só posso responder perguntas sobre o conteúdo desta lição."`
            }
        });

        const aiText = response.text;
        setMessages([...newMessages, { sender: 'ai', text: aiText }]);

    } catch (err) {
        console.error("Error calling Gemini API:", err);
        const errorMessage = "Desculpe, não consegui processar sua pergunta. Verifique se a API Key está configurada corretamente e tente novamente.";
        setError(errorMessage);
        setMessages([...newMessages, { sender: 'ai', text: errorMessage }]);
    } finally {
        setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
        <div className="fixed inset-0 bg-black bg-opacity-30 z-40" onClick={onClose}></div>
        <div className="fixed top-0 right-0 bottom-0 bg-white shadow-2xl w-full max-w-md flex flex-col transform transition-transform duration-300 ease-in-out z-50 translate-x-0" style={isOpen ? {} : {transform: 'translateX(100%)'}}>
            <header className="flex items-center justify-between p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-blue-600" />
                    <h2 className="text-lg font-bold text-gray-800">Tutor Inteligente</h2>
                </div>
                <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                    <X className="h-6 w-6" />
                </button>
            </header>

            <div ref={chatBodyRef} className="flex-1 p-4 overflow-y-auto space-y-4">
                {messages.map((msg, index) => (
                    <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                        {msg.sender === 'ai' && <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white"><BotMessageSquare className="h-5 w-5"/></div>}
                        <div className={`max-w-xs md:max-w-sm px-4 py-3 rounded-2xl ${msg.sender === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-100 text-gray-800 rounded-bl-none'}`}>
                            <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                        </div>
                    </div>
                ))}
                 {isLoading && (
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white"><BotMessageSquare className="h-5 w-5"/></div>
                        <div className="max-w-xs md:max-w-sm px-4 py-3 rounded-2xl bg-gray-100 text-gray-800 rounded-bl-none">
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-0"></span>
                                <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-150"></span>
                                <span className="h-2 w-2 bg-blue-400 rounded-full animate-bounce delay-300"></span>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <footer className="p-4 border-t border-gray-200 bg-white">
                <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="Pergunte sobre a lição..."
                        className="flex-1 w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading || !userInput.trim()} className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 transition-colors">
                        <Send className="h-5 w-5" />
                    </button>
                </form>
            </footer>
        </div>
    </>
  );
};

export default AITutor;