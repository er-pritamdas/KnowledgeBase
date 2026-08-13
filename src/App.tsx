import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Sidebar } from './components/Layout/Sidebar';
import { SearchModal } from './components/Search/SearchModal';
import { Home } from './pages/Home';
import { ArticleView } from './pages/ArticleView';
import { CategoryView } from './pages/CategoryView';
import { BookmarksView } from './pages/BookmarksView';
import { GraphView } from './pages/GraphView';
import { QuizView } from './pages/QuizView';
import { getSavedTheme, setSavedTheme } from './utils/storage';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [theme, setThemeState] = useState<'dark' | 'light'>(getSavedTheme());

  useEffect(() => {
    setSavedTheme(theme);
  }, [theme]);

  // Global Keyboard Listener for Cmd+K / Ctrl+K search shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-300 font-sans">
        {/* Glassmorphic Navbar */}
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
          theme={theme}
          setTheme={setThemeState}
        />

        {/* Global Search Modal */}
        <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

        {/* Main Content Layout with Sidebar */}
        <div className="flex-1 flex max-w-[1600px] w-full mx-auto">
          {/* Collapsible Category Tree Sidebar */}
          <Sidebar
            isOpen={isSidebarOpen}
            onCloseMobile={() => setIsSidebarOpen(false)}
          />

          {/* Dynamic Page Views */}
          <main className="flex-1 p-4 sm:p-6 lg:p-8 min-w-0">
            <Routes>
              <Route path="/" element={<Home onOpenSearch={() => setIsSearchOpen(true)} />} />
              <Route path="/topic/:id" element={<ArticleView />} />
              <Route path="/category/:name" element={<CategoryView />} />
              <Route path="/category/:name/:sub" element={<CategoryView />} />
              <Route path="/bookmarks" element={<BookmarksView />} />
              <Route path="/graph" element={<GraphView />} />
              <Route path="/quiz" element={<QuizView />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
