
import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle } from './icons';

interface QuizProps {
  quizData: QuizQuestion[];
  onComplete: () => void;
  isCompleted: boolean;
}

const Quiz: React.FC<QuizProps> = ({ quizData, onComplete, isCompleted }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(number | null)[]>(new Array(quizData.length).fill(null));
  const [showResults, setShowResults] = useState(isCompleted);

  if (isCompleted || showResults) {
    return (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md" role="alert">
            <div className="flex items-center">
                <CheckCircle2 className="h-6 w-6 mr-3"/>
                <div>
                    <p className="font-bold">Parabéns!</p>
                    <p>Você completou esta lição com sucesso.</p>
                </div>
            </div>
        </div>
    );
  }

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
  };
  
  const handleSubmit = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      // Check results
      const correctCount = quizData.reduce((acc, question, index) => {
        return selectedAnswers[index] === question.correctAnswerIndex ? acc + 1 : acc;
      }, 0);

      // For simplicity, we'll say passing is getting at least one right if there are questions.
      if (correctCount > 0 || quizData.length === 0) {
        setShowResults(true);
        onComplete();
      } else {
        alert("Você não acertou o suficiente para passar. Tente novamente!");
        setCurrentQuestionIndex(0);
        setSelectedAnswers(new Array(quizData.length).fill(null));
      }
    }
  };

  const question = quizData[currentQuestionIndex];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-semibold text-lg text-gray-700">
          Pergunta {currentQuestionIndex + 1} de {quizData.length}
        </h3>
        <p className="mt-1 text-gray-800">{question.question}</p>
      </div>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleSelectAnswer(index)}
            className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${selectedAnswers[currentQuestionIndex] === index ? 'bg-blue-100 border-blue-500' : 'bg-white border-gray-300 hover:border-blue-400'}`}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedAnswers[currentQuestionIndex] === null}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {currentQuestionIndex < quizData.length - 1 ? 'Próxima Pergunta' : 'Finalizar Quiz'}
      </button>
    </div>
  );
};

export default Quiz;