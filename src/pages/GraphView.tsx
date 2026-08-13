import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Network, ArrowLeft, BookOpen, ChevronRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { getCategoriesGrouped } from '../utils/markdownLoader';
import { IconResolver } from '../components/Common/IconResolver';

export const GraphView: React.FC = () => {
  const navigate = useNavigate();
  const categories = getCategoriesGrouped();
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0]?.name || '');

  const activeCategory = categories.find((c) => c.name === selectedCategory) || categories[0];

  return (
    <div className="space-y-8 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4">
        <div>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 mb-2 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Hub</span>
          </button>
          <h1 className="text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <Network className="w-7 h-7 text-cyan-400" />
            <span>Knowledge Mind Map</span>
          </h1>
        </div>
      </div>

      {/* Main Mindmap Canvas Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Side Domain Selector */}
        <div className="lg:col-span-1 glass-panel p-4 rounded-3xl border border-slate-800 space-y-2 max-h-[70vh] overflow-y-auto">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 px-2 mb-2">
            Select Domain
          </div>
          {categories.map((cat) => {
            const isSelected = cat.name === selectedCategory;
            const totalDocs = cat.articles.length + cat.subcategories.reduce((acc, s) => acc + s.articles.length, 0);

            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600/30 to-blue-600/30 text-white border border-indigo-500/50 shadow-lg'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-2.5 font-medium text-sm">
                  <IconResolver name={cat.iconName} size={18} className={isSelected ? 'text-cyan-400' : 'text-indigo-400'} />
                  <span>{cat.name}</span>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950/80 text-slate-400 border border-slate-800">
                  {totalDocs}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side Visual Mindmap Canvas */}
        <div className="lg:col-span-3 glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 relative bg-gradient-to-b from-slate-950/90 to-slate-900 min-h-[500px] flex flex-col justify-between">
          <div className="space-y-6">
            {/* Domain Root Hub */}
            <div className="flex items-center gap-4 bg-indigo-950/60 border border-indigo-700/60 p-5 rounded-2xl max-w-md shadow-xl">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg">
                <IconResolver name={activeCategory.iconName} size={24} />
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-indigo-300">Root Node</span>
                <h2 className="text-2xl font-extrabold text-white">{activeCategory.name}</h2>
              </div>
            </div>

            {/* Connecting line */}
            <div className="w-1 h-6 bg-gradient-to-b from-indigo-500 to-cyan-500 ml-10 rounded-full" />

            {/* Subcategories or Direct Article Nodes */}
            {activeCategory.subcategories.length > 0 ? (
              <div className="space-y-8 pl-4 sm:pl-8 border-l-2 border-slate-800/80">
                {activeCategory.subcategories.map((sub) => (
                  <div key={sub.name} className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 text-xs font-bold">
                      <Zap className="w-3.5 h-3.5" />
                      <span>{sub.name} Branch</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {sub.articles.map((art) => (
                        <Link
                          key={art.id}
                          to={`/topic/${art.id}`}
                          className="glass-panel glass-panel-hover p-3.5 rounded-xl border border-slate-800 flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors truncate">
                              {art.title}
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-cyan-400" />
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pl-4 sm:pl-8 border-l-2 border-slate-800/80 space-y-3">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-400">
                  Topic Nodes ({activeCategory.articles.length})
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {activeCategory.articles.map((art) => (
                    <Link
                      key={art.id}
                      to={`/topic/${art.id}`}
                      className="glass-panel glass-panel-hover p-3.5 rounded-xl border border-slate-800 flex items-center justify-between group"
                    >
                      <div className="flex items-center gap-2 overflow-hidden">
                        <BookOpen className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                          {art.title}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-600 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
