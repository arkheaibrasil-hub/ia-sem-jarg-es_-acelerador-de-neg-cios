
import React from 'react';
import { GLOSSARY_DATA } from '../data/glossaryData';
import { X } from './icons';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-600">Glossário de Analogias</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <dl className="space-y-6">
            {GLOSSARY_DATA.map((item) => (
              <div key={item.concept} className="bg-gray-50 p-4 rounded-lg">
                <dt className="text-lg font-semibold text-gray-800">{item.concept}</dt>
                <dd className="mt-2 text-gray-600">{item.analogy}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="p-4 bg-gray-50 border-t rounded-b-2xl">
           <button onClick={onClose} className="w-full sm:w-auto float-right px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
             Fechar
           </button>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default GlossaryModal;