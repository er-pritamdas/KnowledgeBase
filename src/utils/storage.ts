const COMPLETED_KEY = 'knowledge_pulse_completed';
const BOOKMARKS_KEY = 'knowledge_pulse_bookmarks';
const NOTES_KEY = 'knowledge_pulse_notes';
const RECENT_KEY = 'knowledge_pulse_recent';
const THEME_KEY = 'knowledge_pulse_theme';

export function getCompletedTopics(): string[] {
  try {
    const raw = localStorage.getItem(COMPLETED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleTopicCompleted(id: string): string[] {
  const current = getCompletedTopics();
  const index = current.indexOf(id);
  let updated: string[];
  if (index > -1) {
    updated = current.filter((item) => item !== id);
  } else {
    updated = [...current, id];
  }
  localStorage.setItem(COMPLETED_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('knowledge_pulse_storage_update'));
  return updated;
}

export function getBookmarkedTopics(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleTopicBookmark(id: string): string[] {
  const current = getBookmarkedTopics();
  const index = current.indexOf(id);
  let updated: string[];
  if (index > -1) {
    updated = current.filter((item) => item !== id);
  } else {
    updated = [...current, id];
  }
  localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(updated));
  window.dispatchEvent(new Event('knowledge_pulse_storage_update'));
  return updated;
}

export function getNotes(): Record<string, string> {
  try {
    const raw = localStorage.getItem(NOTES_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveNote(articleId: string, noteText: string): Record<string, string> {
  const current = getNotes();
  if (!noteText.trim()) {
    delete current[articleId];
  } else {
    current[articleId] = noteText;
  }
  localStorage.setItem(NOTES_KEY, JSON.stringify(current));
  return current;
}

export function getRecentArticles(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function addRecentArticle(id: string): string[] {
  const current = getRecentArticles();
  const filtered = current.filter((item) => item !== id);
  const updated = [id, ...filtered].slice(0, 10);
  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
  return updated;
}

export function getSavedTheme(): 'dark' | 'light' {
  const raw = localStorage.getItem(THEME_KEY);
  if (raw === 'light' || raw === 'dark') return raw;
  return 'dark'; // Default dark mode for modern dev theme
}

export function setSavedTheme(theme: 'dark' | 'light'): void {
  localStorage.setItem(THEME_KEY, theme);
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}
