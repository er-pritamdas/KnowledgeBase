import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, BookOpen, ChevronRight, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { searchArticles } from '../../utils/markdownLoader';
import { SearchResult } from '../../types/knowledge';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim()) {
      const res = searchArticles(query);
      setResults(res.slice(0, 8)); // Top 8 matches
      setSelectedIndex(0);
    } else {
      setResults([]);
    }
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex].article.id);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSelect = (articleId: string) => {
    onClose();
    navigate(`/topic/${articleId}`);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
          onKeyDown={handleKeyDown}
        >
          {/* Search Header Input */}
          <div className="relative flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
            <Search className="w-5 h-5 text-indigo-400 mr-3 shrink-0" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search all 88 topics, tools, concepts..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-400 text-base focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="p-1 hover:bg-slate-800 rounded-md text-slate-400 hover:text-slate-200 transition-colors mr-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded-md font-mono">
              ESC
            </kbd>
          </div>

          {/* Search Results List */}
          <div className="overflow-y-auto p-2 divide-y divide-slate-800/50">
            {results.length > 0 ? (
              results.map((res, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <div
                    key={res.article.id}
                    onClick={() => handleSelect(res.article.id)}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`p-3.5 rounded-xl cursor-pointer transition-all duration-150 flex flex-col gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600/20 border border-indigo-500/40 text-slate-100'
                        : 'hover:bg-slate-800/60 text-slate-300 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 font-medium text-slate-100">
                        <FileText className="w-4 h-4 text-indigo-400 shrink-0" />
                        <span>{res.article.title}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="px-2.5 py-0.5 text-xs rounded-full bg-indigo-950/80 text-indigo-300 border border-indigo-800/50 font-medium">
                          {res.article.category} {res.article.subcategory ? `› ${res.article.subcategory}` : ''}
                        </span>
                        <ChevronRight className="w-4 h-4 text-slate-500" />
                      </div>
                    </div>

                    {res.snippetMatch && (
                      <p className="text-xs text-slate-400 line-clamp-2 pl-6 italic">
                        "...{res.snippetMatch}..."
                      </p>
                    )}
                  </div>
                );
              })
            ) : query.trim() ? (
              <div className="py-12 text-center text-slate-400">
                <BookOpen className="w-10 h-10 mx-auto text-slate-600 mb-3 stroke-[1.5]" />
                <p className="text-sm">No topics matching "<span className="text-indigo-400 font-medium">{query}</span>"</p>
                <p className="text-xs text-slate-500 mt-1">Try searching for concepts like Docker, React, TCP, SQL, or Azure</p>
              </div>
            ) : (
              <div className="py-8 px-4 text-center text-slate-400">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">Suggested Topics</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {['Docker', 'Kubernetes', 'React', 'TypeScript', 'REST APIs', 'PostgreSQL', 'AWS EC2', 'System Design'].map(
                    (tag) => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="px-3 py-1.5 text-xs rounded-lg bg-slate-800/80 hover:bg-indigo-900/40 text-slate-300 hover:text-indigo-300 border border-slate-700/60 transition-colors"
                      >
                        {tag}
                      </button>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 py-2.5 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded">↑</kbd>
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded">↓</kbd> to navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-800 border border-slate-700 rounded">↵</kbd> to select
              </span>
            </div>
            <span>88 Total Knowledge Base Docs</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
