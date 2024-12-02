import React from 'react';
import type { MBTIResult } from '../types/mbti';

interface ResultProps {
  result: MBTIResult;
  onRetake: () => void;
}

export function Result({ result, onRetake }: ResultProps) {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Your MBTI Type: {result.type}
      </h2>
      
      <p className="text-gray-600 mb-6">{result.description}</p>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Strengths</h3>
        <ul className="list-disc list-inside space-y-2">
          {result.strengths.map((strength, index) => (
            <li key={index} className="text-gray-600">{strength}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Areas for Growth</h3>
        <ul className="list-disc list-inside space-y-2">
          {result.weaknesses.map((weakness, index) => (
            <li key={index} className="text-gray-600">{weakness}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Relationships</h3>
        <p className="text-gray-600">{result.relationships}</p>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-3">Career Path</h3>
        <p className="text-gray-600">{result.career}</p>
      </div>
      
      <button
        onClick={onRetake}
        className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Take Test Again
      </button>
    </div>
  );
}