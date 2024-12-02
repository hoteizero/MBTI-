import React, { useState } from 'react';
import { Question } from './components/Question';
import { ProgressBar } from './components/ProgressBar';
import { Result } from './components/Result';
import { questions } from './data/questions';
import { Brain } from 'lucide-react';

type Answers = Record<string, number>;

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (dimension: string, value: number) => {
    setAnswers(prev => ({ ...prev, [dimension]: (prev[dimension] || 0) + (value === 0 ? 1 : -1) }));
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetake = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
  };

  const calculateResult = () => {
    return {
      type: "INTJ", // This should be calculated based on answers
      description: "INTJs are analytical problem-solvers, eager to improve systems and processes with their innovative ideas.",
      strengths: [
        "Strategic thinking",
        "Independent",
        "Analytical mindset",
        "Clear vision"
      ],
      weaknesses: [
        "May appear reserved",
        "Perfectionist tendencies",
        "Can be overly critical"
      ],
      relationships: "INTJs value deep, authentic connections and seek partners who can engage in meaningful discussions.",
      career: "INTJs excel in roles requiring strategic thinking, such as systems architecture, research, or strategic planning."
    };
  };

  if (showResult) {
    return <Result result={calculateResult()} onRetake={handleRetake} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <Brain className="mx-auto h-12 w-12 text-indigo-600" />
          <h1 className="mt-4 text-3xl font-bold text-gray-900">MBTI Personality Test</h1>
          <p className="mt-2 text-gray-600">Discover your personality type</p>
        </div>

        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        
        <Question
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          currentAnswer={answers[questions[currentQuestion].dimension]}
        />
        
        <p className="text-center text-sm text-gray-500 mt-4">
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}

export default App;