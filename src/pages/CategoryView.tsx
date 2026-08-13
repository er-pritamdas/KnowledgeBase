import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Search,
  CheckCircle2,
  Clock,
  FileText,
  ChevronRight,
  ArrowRight,
  Folder,
} from 'lucide-react';
import { getCategoriesGrouped, CATEGORY_METADATA } from '../utils/markdownLoader';
import { IconResolver } from '../components/Common/IconResolver';
import { getCompletedTopics } from '../utils/storage';
import { getFolderIconName } from '../components/Layout/Sidebar';

export const CategoryView: React.FC = () => {
  const { name, sub } = useParams<{ name: string; sub?: string }>();
  const navigate = useNavigate();
  const categories = getCategoriesGrouped();
  const completed = getCompletedTopics();
  const [filterQuery, setFilterQuery] = useState('');

  const cleanString = (str: string) => str.toLowerCase().replace(/[^\w]/g, '');

  const catGroup = categories.find((c) => {
    if (!name) return false;
    const target = cleanString(name);
    return (
      c.name.toLowerCase() === name.toLowerCase() ||
      c.rawFolderName.toLowerCase() === name.toLowerCase() ||
      cleanString(c.name) === target ||
      cleanString(c.rawFolderName) === target
    );
  });

  if (!catGroup) {
    return (
      <div className="py-20 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-100">Folder Not Found</h2>
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-medium text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Hub</span>
        </button>
      </div>
    );
  }

  // Check if viewing a specific subfolder (e.g. Cloud -> AWS)
  const subGroup = sub
    ? catGroup.subcategories.find(
        (s) =>
          s.name.toLowerCase() === sub.toLowerCase() ||
          cleanString(s.name) === cleanString(sub)
      )
    : undefined;

  // Total topics in this context
  const targetArticles = subGroup
    ? subGroup.articles
    : [
        ...catGroup.articles,
        ...catGroup.subcategories.flatMap((s) => s.articles),
      ];

  const filteredArticles = targetArticles.filter((art) =>
    art.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
    art.fileNameClean.toLowerCase().includes(filterQuery.toLowerCase()) ||
    art.snippet.toLowerCase().includes(filterQuery.toLowerCase())
  );

  const completedCount = targetArticles.filter((a) => completed.includes(a.id)).length;
  const progressPct = targetArticles.length > 0 ? Math.round((completedCount / targetArticles.length) * 100) : 0;

  const folderDisplayName = subGroup
    ? `${catGroup.rawFolderName || catGroup.name} / ${subGroup.name}`
    : catGroup.rawFolderName || catGroup.name;

  return (
    <div className="space-y-8 pb-12">
      {/* Folder Header Banner */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 relative overflow-hidden bg-gradient-to-r from-indigo-950/40 via-slate-900 to-slate-950">
        {/* Breadcrumb back navigation */}
        <div className="flex items-center gap-2 text-xs text-indigo-400 mb-4 flex-wrap">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Learning Hub</span>
          </Link>
          {subGroup ? (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <Link to={`/category/${encodeURIComponent(catGroup.name.toLowerCase())}`} className="hover:underline text-slate-300">
                {catGroup.rawFolderName || catGroup.name}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-cyan-400 font-semibold">{subGroup.name}</span>
            </>
          ) : (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-300 font-semibold">{catGroup.rawFolderName || catGroup.name}</span>
            </>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 shadow-xl shrink-0">
              <IconResolver name={subGroup ? getFolderIconName(subGroup.name) : catGroup.iconName} size={32} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {folderDisplayName}
                </h1>
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-indigo-950 text-indigo-300 border border-indigo-800">
                  {targetArticles.length} Docs
                </span>
              </div>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {subGroup ? `Topics and learning notes inside ${subGroup.name} subfolder.` : catGroup.description}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-slate-950/80 px-4 py-3 rounded-2xl border border-slate-800 text-xs text-slate-300 shrink-0">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <div className="font-bold text-slate-100">{completedCount} of {targetArticles.length} Completed</div>
              <div className="text-slate-400 text-[11px]">{progressPct}% Progress</div>
            </div>
          </div>
        </div>
      </div>

      {/* VIEW 1: Dedicated Subfolder Page (e.g. Cloud -> AWS) */}
      {subGroup ? (
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder={`Search topics in ${subGroup.name}...`}
                className="w-full pl-9 pr-4 py-2.5 bg-slate-900 text-sm text-slate-100 placeholder-slate-400 rounded-xl border border-slate-700/80 focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredArticles.map((art) => (
              <ArticleCard key={art.id} article={art} isDone={completed.includes(art.id)} />
            ))}
          </div>
        </div>
      ) : (
        /* VIEW 2: Learning Domain Page with Subfolders shown as CARDS */
        <div className="space-y-8">
          {/* Subfolders Grid Cards */}
          {catGroup.subcategories.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
                  <Folder className="w-5 h-5 text-cyan-400" />
                  <span>Folders in {catGroup.rawFolderName || catGroup.name}</span>
                </h2>
                <span className="text-xs text-slate-400">{catGroup.subcategories.length} Subfolders</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {catGroup.subcategories.map((subItem) => {
                  const subArticles = subItem.articles;
                  const subCompleted = subArticles.filter((art) => completed.includes(art.id)).length;
                  const subPct = subArticles.length > 0 ? Math.round((subCompleted / subArticles.length) * 100) : 0;
                  const subFolderIcon = getFolderIconName(subItem.name);
                  const subCategoryUrl = `/category/${encodeURIComponent(catGroup.name.toLowerCase())}/${encodeURIComponent(subItem.name.toLowerCase())}`;

                  return (
                    <Link
                      key={subItem.name}
                      to={subCategoryUrl}
                      className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between group block relative overflow-hidden"
                    >
                      <div className="space-y-4">
                        {/* Folder Header: Icon + Total Topics Badge */}
                        <div className="flex items-center justify-between">
                          <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-inner">
                            <IconResolver name={subFolderIcon} size={24} />
                          </div>
                          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                            {subArticles.length} Topics
                          </span>
                        </div>

                        {/* Folder Title */}
                        <div>
                          <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                            <span>{subItem.name}</span>
                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-cyan-400" />
                          </h3>
                        </div>

                        {/* Topic Tags */}
                        <div className="space-y-1.5">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                            Topics in folder
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {subArticles.map((art) => (
                              <span
                                key={art.id}
                                className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-950 text-cyan-300/90 border border-slate-800/80"
                              >
                                {art.fileNameClean || art.title}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar & Percentage */}
                      <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                        <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                          <span>Completion</span>
                          <span className="text-slate-200 font-bold">
                            {subCompleted}/{subArticles.length} ({subPct}%)
                          </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${subPct}%` }}
                          />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          {/* Direct Articles (General Guides without subfolders) */}
          {catGroup.articles.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-indigo-300 border-b border-slate-800/80 pb-2">
                  General Guides ({catGroup.articles.length})
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {catGroup.articles
                  .filter((art) =>
                    art.title.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    art.fileNameClean.toLowerCase().includes(filterQuery.toLowerCase())
                  )
                  .map((art) => (
                    <ArticleCard key={art.id} article={art} isDone={completed.includes(art.id)} />
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

interface ArticleCardProps {
  article: any;
  isDone: boolean;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, isDone }) => {
  return (
    <Link
      to={`/topic/${article.id}`}
      className="glass-panel glass-panel-hover p-5 rounded-2xl border border-slate-800 flex flex-col justify-between group"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-slate-900 text-indigo-300 border border-slate-800 rounded-full">
            Doc #{article.orderNumber}
          </span>
          {isDone && (
            <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Done</span>
            </span>
          )}
        </div>

        <h4 className="text-base font-bold text-slate-100 group-hover:text-indigo-300 transition-colors">
          {article.fileNameClean || article.title}
        </h4>
        <p className="text-xs text-slate-400 mt-1.5 line-clamp-2 leading-relaxed">
          {article.snippet}
        </p>
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-indigo-400" />
            {article.readTimeMinutes} min
          </span>
          <span className="flex items-center gap-1">
            <FileText className="w-3.5 h-3.5 text-blue-400" />
            {article.wordCount} words
          </span>
        </div>
        <ChevronRight className="w-4 h-4 text-slate-500 group-hover:translate-x-1 transition-transform group-hover:text-indigo-400" />
      </div>
    </Link>
  );
};
