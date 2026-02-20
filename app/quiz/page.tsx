'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions, calculateArchetype } from '@/lib/questions';

export default function QuizPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[][]>(Array(questions.length).fill([]));
  const [showInsight, setShowInsight] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = [answerIndex];
    setAnswers(newAnswers);

    // Show insight if available
    const selectedAnswer = questions[currentQuestion].answers[answerIndex];
    if (selectedAnswer.insight) {
      setShowInsight(true);
      setTimeout(() => {
        setShowInsight(false);
        moveToNext();
      }, 3000);
    } else {
      moveToNext();
    }
  };

  const moveToNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete - calculate result
      const archetype = calculateArchetype(answers);
      router.push(`/results/${archetype}`);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (currentQuestion === 0 && answers[0].length === 0) {
    // Intro screen
    return (
      <main className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#1E3A8A] to-[#0A1128] flex items-center justify-center p-4">
        <div className="max-w-2xl text-center">
          <div className="text-6xl mb-6">🌌</div>
          <h1 className="text-5xl font-bold text-white mb-6">
            DISCOVER YOUR AKUTAR
          </h1>
          <p className="text-xl text-gray-200 mb-4">
            Just like Aku, every astronaut has a unique journey.
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Answer 12 questions to discover:
          </p>
          <ul className="text-left max-w-md mx-auto mb-12 space-y-3 text-gray-200">
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3">✦</span>
              Your space personality
            </li>
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3">✦</span>
              Your mission style
            </li>
            <li className="flex items-start">
              <span className="text-[#10B981] mr-3">✦</span>
              The Akutar that matches your spirit
            </li>
          </ul>
          <p className="text-sm text-gray-400 mb-8">
            Along the way, you'll learn about real astronauts who broke barriers 
            and the power of representation in space exploration.
          </p>
          <button
            onClick={() => setAnswers(prev => {
              const newAnswers = [...prev];
              newAnswers[0] = []; // Mark as started but not answered
              return newAnswers;
            })}
            className="px-12 py-4 bg-gradient-to-r from-[#DC2626] to-[#7C3AED] text-white text-xl font-bold rounded-full hover:scale-105 transition-transform shadow-2xl"
          >
            Begin Quiz 🚀
          </button>
        </div>
      </main>
    );
  }

  const question = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#0A1128] via-[#1E3A8A] to-[#0A1128] p-4">
      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto pt-8 pb-4">
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Question {currentQuestion + 1} of {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-[#10B981] to-[#7C3AED] h-2 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-4xl mx-auto mt-12">
        <div className="mb-8">
          <p className="text-sm text-[#FCD34D] mb-2 uppercase tracking-wide">
            {question.category}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            {question.text}
          </h2>
        </div>

        {/* Answers */}
        <div className="space-y-4">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className="w-full p-6 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-left hover:bg-white/10 hover:border-[#10B981] transition-all group"
            >
              <p className="text-lg text-white group-hover:text-[#10B981] transition-colors">
                {answer.text}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Insight Popup */}
      {showInsight && questions[currentQuestion].answers[answers[currentQuestion][0]]?.insight && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#7C3AED] p-8 rounded-2xl max-w-2xl border-2 border-[#FCD34D] animate-in fade-in zoom-in duration-300">
            <div className="text-4xl mb-4">💡</div>
            <h3 className="text-2xl font-bold text-white mb-4">ASTRONAUT INSIGHT</h3>
            <p className="text-lg text-gray-100 leading-relaxed">
              {questions[currentQuestion].answers[answers[currentQuestion][0]].insight}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
