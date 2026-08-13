import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, BookOpen, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import { getArticleById, getAdjacentArticles } from '../utils/markdownLoader';
import { ArticleHeader } from '../components/Markdown/ArticleHeader';
import { MarkdownRenderer } from '../components/Markdown/MarkdownRenderer';
import { TableOfContents } from '../components/Markdown/TableOfContents';
import { NotesSection } from '../components/Markdown/NotesSection';
import { addRecentArticle } from '../utils/storage';

export const ArticleView: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const article = id ? getArticleById(id) : undefined;
  const { prev, next } = id ? getAdjacentArticles(id) : {};

  useEffect(() => {
    if (id) {
      addRecentArticle(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [id]);

  if (!article) {
    return (
      <div className="py-20 text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center mx-auto text-amber-400">
          <AlertTriangle className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-100">Topic Not Found</h2>
        <p className="text-slate-400 text-sm max-w-md mx-auto">
          The requested knowledge document could not be found or has been moved.
        </p>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors shadow-lg shadow-indigo-600/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Learning Hub</span>
        </button>
      </div>
    );
  }

  return (
    <motion.div
      key={article.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="pb-16"
    >
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-3 min-w-0">
          <ArticleHeader
            article={article}
            onStatusChange={() => setRefreshTrigger((prev) => prev + 1)}
          />

          {/* Render Parsed Markdown Body */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800/80 shadow-2xl">
            <MarkdownRenderer content={article.rawContent} />
          </div>

          {/* User Notes Section */}
          <NotesSection articleId={article.id} />

          {/* Next / Previous Article Footer Nav */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
            {prev ? (
              <Link
                to={`/topic/${prev.id}`}
                className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex items-center gap-3 group"
              >
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-indigo-400 group-hover:-translate-x-1 transition-transform">
                  <ChevronLeft className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Previous Topic</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                    {prev.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                to={`/topic/${next.id}`}
                className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex items-center justify-end text-right gap-3 group sm:col-start-2"
              >
                <div className="overflow-hidden">
                  <div className="text-[11px] text-slate-500 uppercase font-semibold">Next Topic</div>
                  <div className="text-sm font-bold text-slate-200 group-hover:text-indigo-300 transition-colors truncate">
                    {next.title}
                  </div>
                </div>
                <div className="p-2 rounded-xl bg-slate-900 border border-slate-700/80 text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>

        {/* Right Sticky Table of Contents Sidebar */}
        <div className="hidden lg:block lg:col-span-1">
          <TableOfContents headings={article.headings} />
        </div>
      </div>
    </motion.div>
  );
};
