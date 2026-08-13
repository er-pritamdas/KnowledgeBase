import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Search,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Bookmark,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { getCategoriesGrouped, getAllArticles } from '../utils/markdownLoader';
import { IconResolver } from '../components/Common/IconResolver';
import { getCompletedTopics, getRecentArticles } from '../utils/storage';

interface HomeProps {
  onOpenSearch: () => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenSearch }) => {
  const navigate = useNavigate();
  const categories = getCategoriesGrouped();
  const allArticles = getAllArticles();
  const completed = getCompletedTopics();
  const recentIds = getRecentArticles();

  const totalArticles = allArticles.length;
  const totalReadTime = allArticles.reduce((acc, curr) => acc + curr.readTimeMinutes, 0);
  const completedPct = Math.round((completed.length / totalArticles) * 100) || 0;

  const recentArticles = recentIds
    .map((id) => allArticles.find((a) => a.id === id))
    .filter(Boolean);

  const featuredTopics = [
    '01-devops-05-kubernetes',
    '06-frontend-05-react',
    '05-ai-01-llm',
    '10-system-design-06-microservices',
    '07-backend-04-rest-apis',
    '08-database-03-postgresql',
  ].map((id) => allArticles.find((a) => a.id === id)).filter(Boolean);

  return (
    <div className="space-y-10 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl glass-panel border border-slate-800 p-8 sm:p-12 text-center bg-gradient-to-b from-indigo-950/40 via-slate-900/60 to-slate-950">
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/80 border border-indigo-700/50 text-indigo-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Interactive Learning Vault & Developer Knowledge Base</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Master Technical Skills & <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              System Architecture
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal">
            Explore 88 parsed markdown guides across DevOps, Cloud, AI, Security, System Design, Frontend, Backend, Databases, and Languages.
          </p>

          {/* Quick Search Action Bar */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={onOpenSearch}
              className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 text-white font-semibold rounded-2xl shadow-xl shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Search className="w-4 h-4" />
              <span>Search All 88 Guides</span>
              <kbd className="hidden sm:inline-block ml-2 px-2 py-0.5 text-xs text-indigo-200 bg-indigo-950/80 border border-indigo-800 rounded font-mono">
                Ctrl K
              </kbd>
            </button>

            <Link
              to="/graph"
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 font-semibold rounded-2xl border border-slate-700/80 flex items-center justify-center gap-2 transition-colors"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Explore Mind Map</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-950/80 border border-indigo-800/60 flex items-center justify-center text-indigo-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{totalArticles}</div>
            <div className="text-xs text-slate-400 font-medium">Total Docs</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{categories.length}</div>
            <div className="text-xs text-slate-400 font-medium">Learning Domains</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">{completedPct}%</div>
            <div className="text-xs text-slate-400 font-medium">Read Completion</div>
          </div>
        </div>

        <div className="glass-panel p-5 rounded-2xl border border-slate-800 flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-extrabold text-white">~{Math.ceil(totalReadTime / 60)} hrs</div>
            <div className="text-xs text-slate-400 font-medium">Total Content Time</div>
          </div>
        </div>
      </section>

      {/* Recent Articles Section (if any) */}
      {recentArticles.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-indigo-400" />
              <span>Jump Back In</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {recentArticles.slice(0, 3).map((art) => art && (
              <Link
                key={art.id}
                to={`/topic/${art.id}`}
                className="glass-panel glass-panel-hover p-4 rounded-2xl border border-slate-800 flex flex-col justify-between group"
              >
                <div>
                  <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-indigo-950 text-indigo-300 rounded-full border border-indigo-800">
                    {art.category}
                  </span>
                  <h3 className="text-base font-bold text-slate-100 mt-2 group-hover:text-indigo-300 transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{art.snippet}</p>
                </div>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-800/60">
                  <span>{art.readTimeMinutes} min read</span>
                  <ArrowRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Featured Key Topics Section */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>Essential Core Topics</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {featuredTopics.map((art) => art && (
            <Link
              key={art.id}
              to={`/topic/${art.id}`}
              className="p-4 rounded-2xl glass-panel glass-panel-hover border border-slate-800 text-center flex flex-col items-center justify-between group"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 mb-2 group-hover:scale-110 transition-transform">
                <BookOpen className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-slate-200 group-hover:text-indigo-300 transition-colors line-clamp-1">
                {art.title}
              </span>
              <span className="text-[10px] text-slate-500 mt-1 uppercase font-semibold">
                {art.category}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Main Categories Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-white tracking-tight">
              Explore All 13 Learning Domains
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Select a domain to view detailed notes, architecture guides, and technical concepts.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, idx) => {
            const catArticles = [
              ...cat.articles,
              ...cat.subcategories.flatMap((s) => s.articles),
            ];

            const completedInCat = catArticles.filter((art) => completed.includes(art.id)).length;
            const progressPct = Math.round((completedInCat / catArticles.length) * 100) || 0;

            return (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.03 }}
              >
                <Link
                  to={`/category/${cat.name.toLowerCase()}`}
                  className="glass-panel glass-panel-hover p-6 rounded-2xl border border-slate-800 flex flex-col justify-between h-full group block relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-inner">
                        <IconResolver name={cat.iconName} size={24} />
                      </div>
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-900 text-slate-300 border border-slate-800">
                        {catArticles.length} Docs
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors flex items-center gap-2">
                        <span>{cat.name}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-indigo-400" />
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>
                    </div>

                    {cat.subcategories.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {cat.subcategories.map((sub) => (
                          <span
                            key={sub.name}
                            className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-slate-950 text-cyan-400 border border-slate-800"
                          >
                            {sub.name}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/80 space-y-2">
                    <div className="flex items-center justify-between text-xs font-medium text-slate-400">
                      <span>Progress</span>
                      <span className="text-slate-200">{completedInCat}/{catArticles.length} ({progressPct}%)</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full transition-all duration-300"
                        style={{ width: `${progressPct}%` }}
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
