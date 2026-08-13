import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  FileText,
  Bookmark,
  CheckCircle2,
  Share2,
  ChevronRight,
} from 'lucide-react';
import { MarkdownArticle } from '../../types/knowledge';
import { toggleTopicBookmark, toggleTopicCompleted, getBookmarkedTopics, getCompletedTopics } from '../../utils/storage';

interface ArticleHeaderProps {
  article: MarkdownArticle;
  onStatusChange?: () => void;
}

export const ArticleHeader: React.FC<ArticleHeaderProps> = ({ article, onStatusChange }) => {
  const [bookmarks, setBookmarks] = useState(getBookmarkedTopics());
  const [completed, setCompleted] = useState(getCompletedTopics());
  const [copiedLink, setCopiedLink] = useState(false);

  const isBookmarked = bookmarks.includes(article.id);
  const isCompleted = completed.includes(article.id);

  const handleBookmarkToggle = () => {
    const updated = toggleTopicBookmark(article.id);
    setBookmarks(updated);
    if (onStatusChange) onStatusChange();
  };

  const handleCompletedToggle = () => {
    const updated = toggleTopicCompleted(article.id);
    setCompleted(updated);
    if (onStatusChange) onStatusChange();
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const domainUrl = `/category/${encodeURIComponent(article.category.toLowerCase())}`;
  const subfolderUrl = article.subcategory
    ? `/category/${encodeURIComponent(article.category.toLowerCase())}/${encodeURIComponent(article.subcategory.toLowerCase())}`
    : undefined;

  return (
    <div className="mb-8 border-b border-slate-800 pb-6">
      {/* Interactive Breadcrumb Navigation Bar */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-4 flex-wrap">
        <Link to="/" className="hover:text-indigo-400 hover:underline transition-colors font-medium">
          Learning Hub
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />

        {/* Clickable Learning Domain folder link */}
        <Link to={domainUrl} className="text-slate-300 hover:text-indigo-300 hover:underline font-semibold transition-colors">
          {article.rawFolderName || article.category}
        </Link>

        {/* Clickable Subfolder link if present */}
        {article.subcategory && subfolderUrl && (
          <>
            <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
            <Link to={subfolderUrl} className="text-cyan-400 hover:text-cyan-300 hover:underline font-semibold transition-colors">
              {article.subcategory}
            </Link>
          </>
        )}

        <ChevronRight className="w-3.5 h-3.5 text-slate-600" />

        {/* Clickable Topic link */}
        <Link to={`/topic/${article.id}`} className="text-slate-400 hover:text-slate-200 hover:underline transition-colors truncate max-w-[220px]">
          {article.fileNameClean || article.title}
        </Link>
      </nav>

      {/* Main Title & Action Bar */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
        <div>
          {/* Clickable Folder Category Pills */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <Link
              to={domainUrl}
              className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-950/80 hover:bg-indigo-900 text-indigo-300 hover:text-indigo-200 border border-indigo-800/60 uppercase tracking-wider transition-colors"
            >
              {article.rawFolderName || article.category}
            </Link>

            {article.subcategory && subfolderUrl && (
              <Link
                to={subfolderUrl}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 hover:text-cyan-200 border border-cyan-800/60 uppercase tracking-wider transition-colors"
              >
                {article.subcategory}
              </Link>
            )}

            <span className="px-2.5 py-1 text-xs font-mono text-slate-400 bg-slate-900 border border-slate-800 rounded-full">
              Doc #{article.orderNumber}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight leading-tight mb-3">
            {article.title}
          </h1>

          {/* Meta Details */}
          <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-indigo-400" />
              <span>{article.readTimeMinutes} min read</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-400" />
              <span>{article.wordCount} words</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex items-center gap-2 shrink-0 pt-2 md:pt-0">
          <button
            onClick={handleCompletedToggle}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-lg shadow-emerald-500/10'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80'
            }`}
          >
            <CheckCircle2 className={`w-4 h-4 ${isCompleted ? 'text-emerald-400' : 'text-slate-400'}`} />
            <span>{isCompleted ? 'Completed' : 'Mark Done'}</span>
          </button>

          <button
            onClick={handleBookmarkToggle}
            className={`p-2 rounded-xl text-xs font-semibold transition-all ${
              isBookmarked
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-700/80'
            }`}
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark topic'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'text-purple-400 fill-purple-400/20' : 'text-slate-400'}`} />
          </button>

          <button
            onClick={handleShareLink}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-700/80 transition-colors"
            title="Copy topic link"
          >
            <Share2 className={`w-4 h-4 ${copiedLink ? 'text-emerald-400' : 'text-slate-400'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
