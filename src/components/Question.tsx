import React from 'react';
import type { MBTIQuestion } from '../types/mbti';

interface QuestionProps {
  question: MBTIQuestion;
  onAnswer: (dimension: string, value: number) => void;
  currentAnswer?: number;
}

export function Question({ question, onAnswer, currentAnswer }: QuestionProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-medium text-gray-900 mb-4">{question.text}</h3>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(question.dimension, index)}
            className={`w-full p-4 text-left rounded-lg border transition-all ${
              currentAnswer === index
                ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 hover:border-indigo-200 hover:bg-indigo-50'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}