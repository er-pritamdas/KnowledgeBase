import { Flashcard } from '../types/knowledge';
import { getAllArticles } from './markdownLoader';

export function generateFlashcards(categoryFilter?: string): Flashcard[] {
  const articles = getAllArticles();
  const flashcards: Flashcard[] = [];

  const targetArticles = categoryFilter && categoryFilter !== 'all'
    ? articles.filter((a) => a.category.toLowerCase() === categoryFilter.toLowerCase())
    : articles;

  for (const article of targetArticles) {
    const lines = article.rawContent.split('\n');
    let currentSection = '';
    const concepts: string[] = [];

    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed.startsWith('## ')) {
        currentSection = trimmed.replace(/^##\s+/, '');
      } else if (trimmed.startsWith('- ') && trimmed.length > 3) {
        const item = trimmed.replace(/^-\s+/, '');
        if (item && !item.includes('Add your') && !item.includes('Add useful')) {
          concepts.push(item);
        }
      }
    }

    if (concepts.length > 0) {
      flashcards.push({
        id: `fc-${article.id}-1`,
        articleId: article.id,
        articleTitle: article.title,
        category: article.category,
        question: `What are key concepts or points for "${article.title}" in ${article.category}?`,
        answer: concepts.slice(0, 4).join('\n• '),
        concepts,
      });
    } else {
      flashcards.push({
        id: `fc-${article.id}-def`,
        articleId: article.id,
        articleTitle: article.title,
        category: article.category,
        question: `Define and summarize the core purpose of "${article.title}"`,
        answer: article.snippet || `Overview and learning notes for ${article.title}.`,
        concepts: [article.title, article.category],
      });
    }
  }

  // Shuffle flashcards for variety
  return flashcards.sort(() => Math.random() - 0.5);
}
