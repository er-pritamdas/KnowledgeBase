import React, { useEffect, useState } from 'react';
import { List, ChevronRight } from 'lucide-react';
import { TOCItem } from '../../types/knowledge';

interface TableOfContentsProps {
  headings: TOCItem[];
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = headings.map((h) => document.getElementById(h.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (let i = headingElements.length - 1; i >= 0; i--) {
        const el = headingElements[i]!;
        if (el.offsetTop <= scrollPosition) {
          setActiveId(headings[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [headings]);

  if (headings.length === 0) return null;

  const scrollToHeading = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top, behavior: 'smooth' });
      setActiveId(id);
    }
  };

  return (
    <div className="glass-panel rounded-2xl p-4 border border-slate-800/80 sticky top-24">
      <div className="flex items-center gap-2 pb-3 mb-3 border-b border-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-400">
        <List className="w-4 h-4 text-indigo-400" />
        <span>On This Page</span>
      </div>

      <nav className="space-y-1 text-xs">
        {headings.map((item) => {
          const isActive = activeId === item.id;
          return (
            <button
              key={item.id}
              onClick={() => scrollToHeading(item.id)}
              className={`w-full text-left flex items-center gap-1.5 py-1.5 px-2 rounded-lg transition-all ${
                item.level === 3 ? 'pl-5' : ''
              } ${
                isActive
                  ? 'bg-indigo-600/20 text-indigo-300 font-medium border-l-2 border-indigo-500'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              {item.level === 2 && <ChevronRight className={`w-3.5 h-3.5 ${isActive ? 'text-indigo-400' : 'text-slate-600'}`} />}
              <span className="truncate">{item.text}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};
