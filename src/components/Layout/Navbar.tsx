import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  BookOpen,
  Bookmark,
  Sparkles,
  Network,
  Sun,
  Moon,
  Menu,
  X,
  CheckCircle2,
} from 'lucide-react';
import { getCompletedTopics, getBookmarkedTopics } from '../../utils/storage';
import { getAllArticles } from '../../utils/markdownLoader';

interface NavbarProps {
  onOpenSearch: () => void;
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
  theme: 'dark' | 'light';
  setTheme: (t: 'dark' | 'light') => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  toggleSidebar,
  isSidebarOpen,
  theme,
  setTheme,
}) => {
  const location = useLocation();
  const allArticles = getAllArticles();
  const [completed, setCompleted] = React.useState<string[]>(getCompletedTopics());
  const [bookmarks, setBookmarks] = React.useState<string[]>(getBookmarkedTopics());

  React.useEffect(() => {
    const handleStorageUpdate = () => {
      setCompleted(getCompletedTopics());
      setBookmarks(getBookmarkedTopics());
    };
    window.addEventListener('knowledge_pulse_storage_update', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('knowledge_pulse_storage_update', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  const completedPct = Math.round((completed.length / allArticles.length) * 100) || 0;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Left Side: Mobile Menu Button & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg text-slate-100 tracking-tight">
                  Knowledge<span className="text-indigo-400">Vault</span>
                </span>
                <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-indigo-950/80 text-indigo-300 border border-indigo-800/60 rounded-full">
                  88 DOCS
                </span>
              </div>
            </div>
          </Link>
        </div>

        {/* Middle: Global Search Input Button */}
        <div className="flex-1 max-w-md hidden md:block">
          <button
            onClick={onOpenSearch}
            className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-900/80 hover:bg-slate-800/80 border border-slate-700/60 hover:border-indigo-500/50 rounded-xl text-slate-400 transition-all text-sm group shadow-inner"
          >
            <div className="flex items-center gap-2">
              <Search className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
              <span>Search topics, codes, concepts...</span>
            </div>
            <kbd className="px-2 py-0.5 text-xs text-slate-400 bg-slate-800 border border-slate-700 rounded-md font-mono">
              Ctrl K
            </kbd>
          </button>
        </div>

        {/* Right Side: Navigation Links & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={onOpenSearch}
            className="md:hidden p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
            title="Search"
          >
            <Search className="w-5 h-5" />
          </button>

          <Link
            to="/graph"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              location.pathname === '/graph'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Network className="w-4 h-4 text-cyan-400" />
            <span>Mind Map</span>
          </Link>

          <Link
            to="/quiz"
            className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              location.pathname === '/quiz'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Flashcards</span>
          </Link>

          <Link
            to="/bookmarks"
            className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-xl transition-all ${
              location.pathname === '/bookmarks'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
            }`}
          >
            <Bookmark className="w-4 h-4 text-purple-400" />
            <span className="hidden sm:inline">Saved</span>
            {bookmarks.length > 0 && (
              <span className="px-1.5 py-0.2 text-[10px] bg-purple-950 text-purple-300 border border-purple-800/60 rounded-full font-bold">
                {bookmarks.length}
              </span>
            )}
          </Link>

          {/* Progress Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 font-medium">{completedPct}% Completed</span>
          </div>

          {/* Dark / Light Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-indigo-400" />}
          </button>
        </div>
      </div>
    </header>
  );
};
