import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Sparkles, ArrowLeft, RotateCw, CheckCircle2, XCircle, Brain, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { generateFlashcards } from '../utils/quizGenerator';
import { getCategoriesGrouped } from '../utils/markdownLoader';
import { Flashcard } from '../types/knowledge';

export const QuizView: React.FC = () => {
  const navigate = useNavigate();
  const categories = getCategoriesGrouped();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cards, setCards] = useState<Flashcard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [score, setScore] = useState({ correct: 0, review: 0 });

  useEffect(() => {
    const generated = generateFlashcards(selectedCategory);
    setCards(generated);
    setCurrentIndex(0);
    setIsFlipped(false);
    setScore({ correct: 0, review: 0 });
  }, [selectedCategory]);

  const currentCard = cards[currentIndex];

  const handleNext = (known: boolean) => {
    setScore((prev) => ({
      correct: known ? prev.correct + 1 : prev.correct,
      review: !known ? prev.review + 1 : prev.review,
    }));

    setIsFlipped(false);
    setTimeout(() => {
      if (currentIndex < cards.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      }
    }, 150);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Hub</span>
          </button>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-7 h-7 text-amber-400" />
            <span>Knowledge Flashcards</span>
          </h1>
        </div>

        {/* Category Filter Dropdown */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="bg-slate-900 text-xs font-semibold text-slate-200 border border-slate-700/80 px-3 py-2 rounded-xl focus:outline-none focus:border-indigo-500"
        >
          <option value="all">All Domains (88 Topics)</option>
          {categories.map((c) => (
            <option key={c.name} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Progress & Score Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 max-w-xl mx-auto px-4">
        <span className="font-mono">
          Card {cards.length > 0 ? currentIndex + 1 : 0} of {cards.length}
        </span>
        <div className="flex items-center gap-4">
          <span className="text-emerald-400 font-semibold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> {score.correct} Known
          </span>
          <span className="text-amber-400 font-semibold flex items-center gap-1">
            <RotateCw className="w-4 h-4" /> {score.review} Review
          </span>
        </div>
      </div>

      {/* Interactive Flashcard */}
      {currentCard ? (
        <div className="max-w-xl mx-auto space-y-6">
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="cursor-pointer perspective-1000 min-h-[320px] glass-panel p-8 rounded-3xl border border-slate-800 flex flex-col justify-between text-center relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 shadow-2xl hover:border-indigo-500/40 transition-colors group"
          >
            <div className="flex items-center justify-between text-xs">
              <span className="px-3 py-1 font-semibold rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                {currentCard.category}
              </span>
              <span className="text-slate-500 text-[11px]">Click card to flip</span>
            </div>

            <div className="my-auto py-6">
              {!isFlipped ? (
                <div className="space-y-4">
                  <span className="text-xs uppercase tracking-widest font-bold text-indigo-400">Question</span>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-100 leading-snug">
                    {currentCard.question}
                  </h2>
                </div>
              ) : (
                <div className="space-y-4 animate-fade-in">
                  <span className="text-xs uppercase tracking-widest font-bold text-emerald-400">Answer / Summary</span>
                  <p className="text-base text-slate-200 leading-relaxed font-normal whitespace-pre-line max-h-[220px] overflow-y-auto px-2">
                    {currentCard.answer}
                  </p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-800/60">
              <span className="font-semibold text-slate-400">{currentCard.articleTitle}</span>
              <span className="text-indigo-400 group-hover:underline">
                {isFlipped ? 'Show Question' : 'Reveal Answer'}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => handleNext(false)}
              className="flex-1 py-3 px-4 rounded-2xl bg-amber-950/80 hover:bg-amber-900/80 text-amber-300 border border-amber-800/60 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <RotateCw className="w-4 h-4" />
              <span>Needs Review</span>
            </button>

            <button
              onClick={() => handleNext(true)}
              className="flex-1 py-3 px-4 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-300 border border-emerald-800/60 font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>I Know This</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="py-20 text-center glass-panel rounded-3xl border border-slate-800 max-w-md mx-auto p-8 space-y-4">
          <Brain className="w-12 h-12 text-indigo-400 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200">Flashcards Completed!</h2>
          <p className="text-slate-400 text-xs">
            Great job testing your knowledge on {selectedCategory}.
          </p>
          <button
            onClick={() => {
              setCurrentIndex(0);
              setScore({ correct: 0, review: 0 });
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold"
          >
            Restart Flashcard Deck
          </button>
        </div>
      )}
    </div>
  );
};
