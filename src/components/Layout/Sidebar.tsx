import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, ChevronRight, Search, CheckCircle2, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCategoriesGrouped, getArticleById } from '../../utils/markdownLoader';
import { IconResolver } from '../Common/IconResolver';
import { getCompletedTopics, toggleTopicCompleted, getBookmarkedTopics, toggleTopicBookmark } from '../../utils/storage';
import { MarkdownArticle } from '../../types/knowledge';

interface SidebarProps {
  isOpen: boolean;
  onCloseMobile: () => void;
}

export function getFolderIconName(folderName: string): string {
  const lower = folderName.toLowerCase();
  if (lower.includes('devsecops')) return 'ShieldCheck';
  if (lower.includes('devops')) return 'Server';
  if (lower.includes('testing')) return 'CheckCircle2';
  if (lower.includes('networking')) return 'Network';
  if (lower.includes('ai')) return 'Cpu';
  if (lower.includes('frontend')) return 'Layout';
  if (lower.includes('backend')) return 'Terminal';
  if (lower.includes('database')) return 'Database';
  if (lower.includes('cloud') || lower.includes('aws') || lower.includes('azure') || lower.includes('gcp')) return 'Cloud';
  if (lower.includes('vmware')) return 'Server';
  if (lower.includes('system design')) return 'Layers';
  if (lower.includes('security')) return 'Lock';
  if (lower.includes('language')) return 'Code2';
  if (lower.includes('project')) return 'FolderKanban';
  return 'Folder';
}

function cleanSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onCloseMobile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const categories = getCategoriesGrouped();

  // Completed & Bookmarked topics state
  const [completedIds, setCompletedIds] = useState<string[]>(getCompletedTopics());
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(getBookmarkedTopics());

  // Keep track of expanded state for top-level folders
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  // Keep track of expanded state for subfolders
  const [expandedSubcategories, setExpandedSubcategories] = useState<Record<string, boolean>>({});

  const [filterText, setFilterText] = useState('');

  // Sync state with storage updates
  useEffect(() => {
    const handleStorageUpdate = () => {
      setCompletedIds(getCompletedTopics());
      setBookmarkedIds(getBookmarkedTopics());
    };
    window.addEventListener('knowledge_pulse_storage_update', handleStorageUpdate);
    window.addEventListener('storage', handleStorageUpdate);
    return () => {
      window.removeEventListener('knowledge_pulse_storage_update', handleStorageUpdate);
      window.removeEventListener('storage', handleStorageUpdate);
    };
  }, []);

  // Synchronize sidebar auto-expand & active state with route changes
  useEffect(() => {
    if (location.pathname.startsWith('/category/')) {
      const parts = location.pathname.split('/category/')[1].split('/');
      const rawCatParam = decodeURIComponent(parts[0] || '');
      const rawSubParam = parts[1] ? decodeURIComponent(parts[1]) : undefined;

      const catGroup = categories.find((c) =>
        c.name.toLowerCase() === rawCatParam.toLowerCase() ||
        c.rawFolderName.toLowerCase() === rawCatParam.toLowerCase() ||
        cleanSlug(c.name) === cleanSlug(rawCatParam) ||
        cleanSlug(c.rawFolderName) === cleanSlug(rawCatParam)
      );

      if (catGroup) {
        setExpandedCategories((prev) => ({ ...prev, [catGroup.name]: true }));

        if (rawSubParam) {
          const subGroup = catGroup.subcategories.find((s) =>
            s.name.toLowerCase() === rawSubParam.toLowerCase() ||
            cleanSlug(s.name) === cleanSlug(rawSubParam)
          );
          if (subGroup) {
            setExpandedSubcategories((prev) => ({
              ...prev,
              [`${catGroup.name}-${subGroup.name}`]: true,
            }));
          }
        }
      }
    } else if (location.pathname.startsWith('/topic/')) {
      const topicId = location.pathname.split('/topic/')[1];
      const article = getArticleById(topicId);
      if (article) {
        setExpandedCategories((prev) => ({ ...prev, [article.category]: true }));
        if (article.subcategory) {
          setExpandedSubcategories((prev) => ({
            ...prev,
            [`${article.category}-${article.subcategory}`]: true,
          }));
        }
      }
    }
  }, [location.pathname, categories]);

  const toggleCategory = (name: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const toggleSubcategory = (categoryName: string, subName: string) => {
    const key = `${categoryName}-${subName}`;
    setExpandedSubcategories((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleFolderClick = (categoryName: string) => {
    toggleCategory(categoryName);
    navigate(`/category/${encodeURIComponent(categoryName.toLowerCase())}`);
    onCloseMobile();
  };

  const handleSubfolderClick = (categoryName: string, subName: string) => {
    toggleSubcategory(categoryName, subName);
    navigate(`/category/${encodeURIComponent(categoryName.toLowerCase())}/${encodeURIComponent(subName.toLowerCase())}`);
    onCloseMobile();
  };

  // Toggle completion for a single file
  const handleToggleFileCompleted = (articleId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = toggleTopicCompleted(articleId);
    setCompletedIds(updated);
  };

  // Toggle bookmark for a single file
  const handleToggleBookmark = (articleId: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const updated = toggleTopicBookmark(articleId);
    setBookmarkedIds(updated);
  };

  // Toggle completion for an entire folder / subfolder
  const handleToggleFolderCompleted = (articles: MarkdownArticle[], e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (articles.length === 0) return;

    const folderArticleIds = articles.map((a) => a.id);
    const allDone = folderArticleIds.every((id) => completedIds.includes(id));

    let current = getCompletedTopics();
    if (allDone) {
      current = current.filter((id) => !folderArticleIds.includes(id));
    } else {
      const newIds = folderArticleIds.filter((id) => !current.includes(id));
      current = [...current, ...newIds];
    }
    localStorage.setItem('knowledge_pulse_completed', JSON.stringify(current));
    window.dispatchEvent(new Event('knowledge_pulse_storage_update'));
    setCompletedIds(current);
  };

  const isCurrentTopic = (id: string) => location.pathname === `/topic/${id}`;

  return (
    <aside
      className={`fixed lg:sticky top-16 left-0 z-30 w-72 h-[calc(100vh-4rem)] glass-panel border-r border-slate-800/80 transition-transform duration-300 ease-in-out flex flex-col ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* Sidebar Filter Input */}
      <div className="p-3 border-b border-slate-800/80 bg-slate-900/60">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
          <input
            type="text"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="Filter topics..."
            className="w-full pl-9 pr-3 py-1.5 bg-slate-950/80 text-xs text-slate-200 placeholder-slate-500 rounded-lg border border-slate-800 focus:outline-none focus:border-indigo-500/50"
          />
        </div>
      </div>

      {/* Tree Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {categories.map((cat) => {
          const allCatArticles = [
            ...cat.articles,
            ...cat.subcategories.flatMap((s) => s.articles),
          ];

          const isCatCompleted =
            allCatArticles.length > 0 &&
            allCatArticles.every((art) => completedIds.includes(art.id));

          // Determine active category state
          const isCatActive = (() => {
            if (location.pathname.startsWith('/category/')) {
              const parts = location.pathname.split('/category/')[1].split('/');
              const target = decodeURIComponent(parts[0] || '');
              return (
                cat.name.toLowerCase() === target.toLowerCase() ||
                cat.rawFolderName.toLowerCase() === target.toLowerCase() ||
                cleanSlug(cat.name) === cleanSlug(target) ||
                cleanSlug(cat.rawFolderName) === cleanSlug(target)
              );
            } else if (location.pathname.startsWith('/topic/')) {
              const topicId = location.pathname.split('/topic/')[1];
              const article = getArticleById(topicId);
              return article?.category === cat.name;
            }
            return false;
          })();

          const isExpanded = expandedCategories[cat.name] || isCatActive || filterText.length > 0;
          const folderIcon = getFolderIconName(cat.rawFolderName || cat.name);

          // Filter articles by filterText
          const filteredArticles = cat.articles.filter((art) =>
            art.fileNameClean.toLowerCase().includes(filterText.toLowerCase()) ||
            art.title.toLowerCase().includes(filterText.toLowerCase())
          );

          const filteredSubcats = cat.subcategories.map((sub) => ({
            ...sub,
            articles: sub.articles.filter((art) =>
              art.fileNameClean.toLowerCase().includes(filterText.toLowerCase()) ||
              art.title.toLowerCase().includes(filterText.toLowerCase())
            ),
          })).filter((sub) => sub.articles.length > 0);

          const hasMatches = filteredArticles.length > 0 || filteredSubcats.length > 0;

          if (filterText && !hasMatches) return null;

          return (
            <div key={cat.name} className="rounded-xl overflow-hidden bg-slate-950/40 border border-slate-800/40 mb-1">
              {/* Folder Header Row */}
              <div
                className={`w-full flex items-center justify-between p-2.5 transition-colors text-left group rounded-t-xl ${
                  isCatActive
                    ? 'bg-indigo-600/20 border-l-4 border-indigo-500 text-indigo-100 font-semibold'
                    : 'hover:bg-slate-800/60 text-slate-200'
                }`}
              >
                <button
                  onClick={() => handleFolderClick(cat.name)}
                  className="flex items-center gap-2 font-medium text-xs sm:text-sm truncate flex-1 hover:text-indigo-300 transition-colors"
                >
                  <div className={`p-1 rounded-md border shrink-0 transition-colors ${
                    isCatActive
                      ? 'bg-indigo-600 border-indigo-400 text-white'
                      : 'bg-slate-900 border-slate-700/60 text-indigo-400 group-hover:border-indigo-500/50'
                  }`}>
                    <IconResolver name={folderIcon} size={15} />
                  </div>
                  <span className="truncate">{cat.rawFolderName}</span>
                </button>

                <div className="flex items-center gap-1 shrink-0 ml-1">
                  {/* Mark as Completed Checkmark Button for Folder */}
                  <button
                    onClick={(e) => handleToggleFolderCompleted(allCatArticles, e)}
                    className="p-1 rounded-md hover:bg-slate-800/80 transition-colors"
                    title={isCatCompleted ? 'Mark folder as uncompleted' : 'Mark folder as completed'}
                  >
                    <CheckCircle2
                      className={`w-4 h-4 transition-all ${
                        isCatCompleted
                          ? 'text-emerald-400 fill-emerald-500/20'
                          : 'text-slate-600 hover:text-slate-300'
                      }`}
                    />
                  </button>

                  {/* Toggle expand/collapse button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCategory(cat.name);
                    }}
                    className="p-1 text-slate-400 hover:text-slate-200 rounded-md hover:bg-slate-800/80 transition-colors"
                    title="Toggle expand/collapse"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-4 h-4 shrink-0" />
                    ) : (
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    )}
                  </button>
                </div>
              </div>

              {/* Collapsible Folder Items */}
              <AnimatePresence initial={false}>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden bg-slate-950/80 border-t border-slate-800/60 pl-3 pr-1 py-1 space-y-0.5"
                  >
                    {/* Direct .md files - # Doc Number, Bookmark Icon, Mark Completed Checkmark */}
                    {filteredArticles.map((article) => {
                      const isActive = isCurrentTopic(article.id);
                      const isFileCompleted = completedIds.includes(article.id);
                      const isFileBookmarked = bookmarkedIds.includes(article.id);

                      return (
                        <div
                          key={article.id}
                          className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all group/item ${
                            isActive
                              ? 'bg-indigo-600/40 text-white font-bold border border-indigo-400/60 shadow-lg shadow-indigo-500/20'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                          }`}
                        >
                          <Link
                            to={`/topic/${article.id}`}
                            onClick={onCloseMobile}
                            className="truncate flex-1 pr-1.5 hover:underline flex items-center gap-1.5"
                          >
                            <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">
                              #{article.orderNumber}
                            </span>
                            <span className="truncate">{article.fileNameClean}</span>
                          </Link>

                          {/* Action Buttons: Bookmark + Completion Checkmark */}
                          <div className="flex items-center gap-1 shrink-0 ml-1">
                            <button
                              onClick={(e) => handleToggleBookmark(article.id, e)}
                              className="p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0"
                              title={isFileBookmarked ? 'Remove bookmark' : 'Bookmark topic'}
                            >
                              <Bookmark
                                className={`w-3.5 h-3.5 transition-all ${
                                  isFileBookmarked
                                    ? 'text-purple-400 fill-purple-400/20'
                                    : 'text-slate-600 hover:text-purple-300'
                                }`}
                              />
                            </button>

                            <button
                              onClick={(e) => handleToggleFileCompleted(article.id, e)}
                              className="p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0"
                              title={isFileCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
                            >
                              <CheckCircle2
                                className={`w-3.5 h-3.5 transition-all ${
                                  isFileCompleted
                                    ? 'text-emerald-400 fill-emerald-500/20'
                                    : 'text-slate-600 hover:text-slate-300'
                                }`}
                              />
                            </button>
                          </div>
                        </div>
                      );
                    })}

                    {/* Subfolders (e.g. AWS, Azure, GCP, VMware under Cloud) */}
                    {filteredSubcats.map((subcat) => {
                      const subKey = `${cat.name}-${subcat.name}`;
                      const isSubCompleted =
                        subcat.articles.length > 0 &&
                        subcat.articles.every((art) => completedIds.includes(art.id));

                      const isSubActive = (() => {
                        if (location.pathname.startsWith('/category/')) {
                          const parts = location.pathname.split('/category/')[1].split('/');
                          const targetSub = parts[1] ? decodeURIComponent(parts[1]) : undefined;
                          if (targetSub) {
                            return (
                              subcat.name.toLowerCase() === targetSub.toLowerCase() ||
                              cleanSlug(subcat.name) === cleanSlug(targetSub)
                            );
                          }
                        } else if (location.pathname.startsWith('/topic/')) {
                          const topicId = location.pathname.split('/topic/')[1];
                          const article = getArticleById(topicId);
                          return article?.category === cat.name && article?.subcategory === subcat.name;
                        }
                        return false;
                      })();

                      const isSubExpanded = Boolean(expandedSubcategories[subKey]) || isSubActive || filterText.length > 0;
                      const subFolderIcon = getFolderIconName(subcat.name);

                      return (
                        <div key={subcat.name} className="mt-1 pl-1 border-l border-slate-800/80 space-y-0.5">
                          {/* Subfolder Header Row */}
                          <div
                            className={`w-full flex items-center justify-between px-2 py-1 text-xs font-medium rounded-md transition-colors text-left ${
                              isSubActive
                                ? 'bg-cyan-950/80 text-cyan-200 font-semibold border-l-2 border-cyan-400'
                                : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                            }`}
                          >
                            <button
                              onClick={() => handleSubfolderClick(cat.name, subcat.name)}
                              className="flex items-center gap-1.5 truncate flex-1 hover:text-cyan-300 transition-colors"
                            >
                              <IconResolver name={subFolderIcon} size={13} className={isSubActive ? 'text-cyan-300' : 'text-cyan-400 shrink-0'} />
                              <span className="truncate">{subcat.name}</span>
                            </button>

                            <div className="flex items-center gap-1 shrink-0 ml-1">
                              {/* Mark as Completed Checkmark Button for Subfolder */}
                              <button
                                onClick={(e) => handleToggleFolderCompleted(subcat.articles, e)}
                                className="p-0.5 rounded hover:bg-slate-800/80 transition-colors"
                                title={isSubCompleted ? 'Mark subfolder as uncompleted' : 'Mark subfolder as completed'}
                              >
                                <CheckCircle2
                                  className={`w-3.5 h-3.5 transition-all ${
                                    isSubCompleted
                                      ? 'text-emerald-400 fill-emerald-500/20'
                                      : 'text-slate-600 hover:text-slate-300'
                                  }`}
                                />
                              </button>

                              {/* Toggle expand/collapse button */}
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleSubcategory(cat.name, subcat.name);
                                }}
                                className="p-0.5 text-slate-500 hover:text-slate-300 rounded"
                                title="Toggle expand/collapse"
                              >
                                {isSubExpanded ? (
                                  <ChevronDown className="w-3.5 h-3.5 shrink-0" />
                                ) : (
                                  <ChevronRight className="w-3.5 h-3.5 shrink-0" />
                                )}
                              </button>
                            </div>
                          </div>

                          {/* Collapsible Subfolder Items */}
                          <AnimatePresence initial={false}>
                            {isSubExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.15 }}
                                className="overflow-hidden space-y-0.5 pl-2"
                              >
                                {subcat.articles.map((article) => {
                                  const isActive = isCurrentTopic(article.id);
                                  const isFileCompleted = completedIds.includes(article.id);
                                  const isFileBookmarked = bookmarkedIds.includes(article.id);

                                  return (
                                    <div
                                      key={article.id}
                                      className={`flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all group/subitem ${
                                        isActive
                                          ? 'bg-indigo-600/40 text-white font-bold border border-indigo-400/60 shadow-lg shadow-indigo-500/20'
                                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                                      }`}
                                    >
                                      <Link
                                        to={`/topic/${article.id}`}
                                        onClick={onCloseMobile}
                                        className="truncate flex-1 pr-1.5 hover:underline flex items-center gap-1.5"
                                      >
                                        <span className="font-mono text-[10px] text-slate-500 font-semibold shrink-0">
                                          #{article.orderNumber}
                                        </span>
                                        <span className="truncate">{article.fileNameClean}</span>
                                      </Link>

                                      {/* Action Buttons: Bookmark + Completion Checkmark */}
                                      <div className="flex items-center gap-1 shrink-0 ml-1">
                                        <button
                                          onClick={(e) => handleToggleBookmark(article.id, e)}
                                          className="p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0"
                                          title={isFileBookmarked ? 'Remove bookmark' : 'Bookmark topic'}
                                        >
                                          <Bookmark
                                            className={`w-3.5 h-3.5 transition-all ${
                                              isFileBookmarked
                                                ? 'text-purple-400 fill-purple-400/20'
                                                : 'text-slate-600 hover:text-purple-300'
                                            }`}
                                          />
                                        </button>

                                        <button
                                          onClick={(e) => handleToggleFileCompleted(article.id, e)}
                                          className="p-0.5 rounded hover:bg-slate-700/50 transition-colors shrink-0"
                                          title={isFileCompleted ? 'Mark as uncompleted' : 'Mark as completed'}
                                        >
                                          <CheckCircle2
                                            className={`w-3.5 h-3.5 transition-all ${
                                              isFileCompleted
                                                ? 'text-emerald-400 fill-emerald-500/20'
                                                : 'text-slate-600 hover:text-slate-300'
                                            }`}
                                          />
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </aside>
  );
};
