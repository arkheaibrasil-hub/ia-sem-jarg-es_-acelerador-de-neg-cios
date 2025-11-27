import React from 'react';
import { Award, Download } from './icons';

interface CertificateProps {
  studentName: string;
}

const Certificate: React.FC<CertificateProps> = ({ studentName }) => {
  const completionDate = new Date().toLocaleDateString('pt-BR');

  const handleDownloadCertificate = () => {
    try {
      if (!(window as any).jspdf || typeof (window as any).jspdf.jsPDF !== 'function') {
        console.error("jsPDF library not loaded correctly.");
        alert("Não foi possível gerar o PDF. A biblioteca de geração de PDF não foi carregada corretamente. Por favor, verifique sua conexão com a internet e recarregue a página.");
        return;
      }
      const { jsPDF } = (window as any).jspdf;

      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });

      const sanitizedName = studentName.replace(/[^a-zA-Z0-9]/g, '_');
      const fileName = `Certificado-IA-Sem-Jargoes-${sanitizedName}.pdf`;

      // Add border
      doc.setDrawColor(34, 197, 94); // green-500
      doc.setLineWidth(1.5);
      doc.rect(10, 10, 277, 190);

      // Add Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(32);
      doc.setTextColor(22, 101, 52); // green-800
      doc.text("Certificado de Conclusão", 148.5, 50, { align: 'center' });

      // Add intro text
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139); // slate-500
      doc.text("Este certificado é concedido a", 148.5, 75, { align: 'center' });

      // Add Student Name
      doc.setFontSize(40);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(30, 64, 175); // blue-800
      doc.text(studentName, 148.5, 100, { align: 'center' });

      // Add course text
      doc.setFontSize(16);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text("por concluir com sucesso o curso", 148.5, 125, { align: 'center' });

      // Add Course Name
      doc.setFontSize(24);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(31, 41, 55); // gray-800
      doc.text("IA Sem Jargões: Acelerador de Negócios", 148.5, 140, { align: 'center' });

      // Add Date
      doc.setFontSize(12);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(100, 116, 139);
      doc.text(`Concluído em: ${completionDate}`, 148.5, 165, { align: 'center' });

      doc.save(fileName);
    } catch (error) {
        console.error("An unexpected error occurred during certificate PDF generation:", error);
        alert("Ocorreu um erro inesperado ao tentar gerar o certificado. Por favor, recarregue a página e tente novamente.");
    }
  };


  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-green-200 rounded-xl shadow-lg p-8 text-center">
      <div className="flex justify-center items-center mb-4">
        <Award className="h-16 w-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-bold text-green-700">Certificado de Conclusão</h2>
      <p className="text-gray-600 mt-2">Este certificado é concedido a</p>
      <p className="text-3xl font-bold text-blue-800 my-4">{studentName}</p>
      <p className="text-gray-600">por concluir com sucesso o curso</p>
      <p className="text-xl font-semibold text-gray-800 mt-2">IA Sem Jargões: Acelerador de Negócios</p>
      <p className="text-sm text-gray-500 mt-6">Concluído em: {completionDate}</p>
       <div className="mt-8">
        <button
          onClick={handleDownloadCertificate}
          className="flex items-center justify-center gap-2 px-6 py-3 mx-auto bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors duration-300"
        >
          <Download className="h-5 w-5" />
          <span>Baixar Certificado</span>
        </button>
      </div>
    </div>
  );
};

export default Certificate;