import React, { useState, useEffect } from 'react';
import { StickyNote, Save, Check } from 'lucide-react';
import { getNotes, saveNote } from '../../utils/storage';

interface NotesSectionProps {
  articleId: string;
}

export const NotesSection: React.FC<NotesSectionProps> = ({ articleId }) => {
  const [noteText, setNoteText] = useState('');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const notes = getNotes();
    setNoteText(notes[articleId] || '');
  }, [articleId]);

  const handleSave = () => {
    saveNote(articleId, noteText);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="mt-12 glass-panel rounded-2xl p-5 border border-slate-800">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
          <StickyNote className="w-4 h-4 text-amber-400" />
          <span>My Personal Notes & Snippets</span>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md transition-all"
        >
          {saved ? (
            <>
              <Check className="w-3.5 h-3.5" />
              <span>Saved!</span>
            </>
          ) : (
            <>
              <Save className="w-3.5 h-3.5" />
              <span>Save Note</span>
            </>
          )}
        </button>
      </div>

      <textarea
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Type key takeaways, commands, or personal reminders for this topic..."
        className="w-full h-28 bg-slate-950/80 border border-slate-800 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500/50 resize-none font-mono"
      />
    </div>
  );
};
