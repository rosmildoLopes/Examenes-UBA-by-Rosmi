"use client";
import React, { useState, useEffect } from 'react';
import { Question } from '@/lib/types';

interface QuestionViewProps {
  question: Question;
  questionIndex: number;
  totalQuestions: number;
  onNext: () => void;
  onPrev: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({
  question,
  questionIndex,
  totalQuestions,
  onNext,
  onPrev
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setSelectedOption(null);
    setIsSubmitted(false);
  }, [question.id]);

  const handleOptionClick = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedOption(optionId);
  };

  const checkAnswer = () => {
    if (!selectedOption) return;
    setIsSubmitted(true);
  };

  const progress = ((questionIndex + 1) / totalQuestions) * 100;

  const getOptionStyle = (optionId: string, isCorrect?: boolean) => {
    const baseStyle = "p-4 rounded-lg border-2 cursor-pointer transition-all flex items-start gap-3 text-black";
    
    if (!isSubmitted) {
      if (selectedOption === optionId) {
        return `${baseStyle} border-teal-500 bg-teal-50 ring-1 ring-teal-500`;
      }
      return `${baseStyle} border-slate-200 hover:border-teal-300 hover:bg-slate-50`;
    }

    if (isCorrect) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900`;
    }
    
    if (selectedOption === optionId && !isCorrect) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
    }

    return `${baseStyle} border-slate-100 opacity-50`;
  };

  return (
    <div className="max-w-3xl mx-auto w-full p-4">
      <div className="mb-6">
        <div className="flex justify-between text-xs font-semibold text-slate-500 mb-2">
          <span>Pregunta {questionIndex + 1} de {totalQuestions}</span>
          <span>{Math.round(progress)}% Completado</span>
        </div>
        <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-teal-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-3">
            {question.options.map((option) => (
              <div 
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className={getOptionStyle(option.id, option.isCorrect)}
              >
                <div className={`
                  w-6 h-6 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5 text-xs font-bold
                  ${isSubmitted && option.isCorrect ? 'bg-green-500 border-green-500 text-white' : 
                    isSubmitted && selectedOption === option.id && !option.isCorrect ? 'bg-red-500 border-red-500 text-white' : 
                    selectedOption === option.id ? 'bg-teal-500 border-teal-500 text-white' : 'border-slate-300 text-slate-500'}
                `}>
                  {option.id.toUpperCase()}
                </div>
                <span className="text-base">{option.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-50 p-4 border-t border-slate-200 flex justify-between items-center sticky bottom-0">
          <button
            onClick={onPrev}
            disabled={questionIndex === 0}
            className="px-4 py-2 rounded-lg font-medium text-slate-600 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
          >
            Anterior
          </button>

          {!isSubmitted ? (
            <button
              onClick={checkAnswer}
              disabled={!selectedOption}
              className="px-6 py-2 bg-teal-600 text-white rounded-lg font-bold shadow-sm hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed transition-transform active:scale-95"
            >
              Comprobar
            </button>
          ) : (
            <button
              onClick={onNext}
              className="px-6 py-2 bg-slate-800 text-white rounded-lg font-bold shadow-sm hover:bg-slate-900 transition-transform active:scale-95 flex items-center gap-2"
            >
              {questionIndex === totalQuestions - 1 ? 'Finalizar' : 'Siguiente'}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>
      
      {isSubmitted && question.explanation && (
        <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100 text-sm">
          <strong>Explicación:</strong> {question.explanation}
        </div>
      )}
    </div>
  );
};