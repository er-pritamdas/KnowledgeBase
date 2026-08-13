import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bookmark, ArrowLeft, Trash2, Clock, ChevronRight, BookOpen } from 'lucide-react';
import { getBookmarkedTopics, toggleTopicBookmark } from '../utils/storage';
import { getAllArticles } from '../utils/markdownLoader';

export const BookmarksView: React.FC = () => {
  const navigate = useNavigate();
  const [bookmarkedIds, setBookmarkedIds] = useState(getBookmarkedTopics());
  const allArticles = getAllArticles();

  const savedArticles = bookmarkedIds
    .map((id) => allArticles.find((a) => a.id === id))
    .filter(Boolean);

  const handleRemove = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = toggleTopicBookmark(id);
    setBookmarkedIds(updated);
  };

  return (
    <div className="space-y-8 pb-12">
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
            <Bookmark className="w-7 h-7 text-purple-400 fill-purple-400/20" />
            <span>Saved Bookmarks</span>
          </h1>
        </div>
        <span className="px-3.5 py-1.5 text-xs font-semibold rounded-full bg-purple-950 text-purple-300 border border-purple-800">
          {savedArticles.length} Saved
        </span>
      </div>

      {savedArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {savedArticles.map((art) => art && (
            <Link
              key={art.id}
              to={`/topic/${art.id}`}
              className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-indigo-950 text-indigo-300 border border-indigo-800 rounded-full">
                    {art.category} {art.subcategory ? `› ${art.subcategory}` : ''}
                  </span>
                  <button
                    onClick={(e) => handleRemove(art.id, e)}
                    className="p-1 text-slate-500 hover:text-red-400 rounded-lg hover:bg-slate-800 transition-colors"
                    title="Remove from bookmarks"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors mt-1">
                  {art.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {art.snippet}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-indigo-400" />
                  {art.readTimeMinutes} min read
                </span>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400" />
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="py-20 text-center glass-panel rounded-3xl border border-slate-800 max-w-lg mx-auto p-8 space-y-4">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto" />
          <h2 className="text-xl font-bold text-slate-200">No Bookmarks Saved Yet</h2>
          <p className="text-slate-400 text-xs leading-relaxed">
            Click the bookmark icon on any topic page to save guides here for quick review.
          </p>
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            <span>Browse Topics</span>
          </button>
        </div>
      )}
    </div>
  );
};
