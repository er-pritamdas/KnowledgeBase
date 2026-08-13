export interface MarkdownArticle {
  id: string; // e.g. "01-devops/05-kubernetes"
  title: string;
  category: string; // e.g. "DevOps"
  categoryOrder: string; // e.g. "01"
  rawFolderName: string; // e.g. "01. DevOps"
  fileNameClean: string; // e.g. "Kubernetes" or "Overview"
  subcategory?: string; // e.g. "AWS"
  orderNumber: string; // e.g. "05"
  filePath: string; // e.g. "learning/01. DevOps/05. Kubernetes.md"
  rawContent: string;
  headings: TOCItem[];
  readTimeMinutes: number;
  wordCount: number;
  snippet: string;
}

export interface TOCItem {
  id: string;
  text: string;
  level: number; // 2 for h2, 3 for h3
}

export interface SubCategoryGroup {
  name: string;
  articles: MarkdownArticle[];
}

export interface CategoryGroup {
  name: string;
  rawFolderName: string; // e.g. "01. DevOps"
  order: string;
  iconName: string;
  description: string;
  articles: MarkdownArticle[];
  subcategories: SubCategoryGroup[];
}

export interface SearchResult {
  article: MarkdownArticle;
  matchedHeadings: string[];
  snippetMatch?: string;
  score: number;
}

export interface UserNote {
  articleId: string;
  noteText: string;
  updatedAt: string;
}

export interface Flashcard {
  id: string;
  articleId: string;
  articleTitle: string;
  category: string;
  question: string;
  answer: string;
  concepts: string[];
}
