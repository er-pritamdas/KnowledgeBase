import { MarkdownArticle, CategoryGroup, TOCItem, SearchResult } from '../types/knowledge';

// Raw import of all markdown files inside learning directory
const rawMarkdownFiles = import.meta.glob([
  '/learning/**/*.md',
  './learning/**/*.md',
  '../learning/**/*.md'
], {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Category metadata and icons mapping
export const CATEGORY_METADATA: Record<string, { icon: string; description: string; color: string }> = {
  'DevOps': {
    icon: 'Server',
    description: 'Infrastructure automation, containers, CI/CD, Kubernetes, and orchestration.',
    color: 'from-blue-500 to-cyan-500',
  },
  'DevSecOps': {
    icon: 'ShieldCheck',
    description: 'Integrating security into DevOps pipelines, SAST, SCA, container security.',
    color: 'from-emerald-500 to-teal-500',
  },
  'Testing': {
    icon: 'CheckCircle2',
    description: 'Unit testing, integration testing, API validation, and automation suites.',
    color: 'from-indigo-500 to-purple-500',
  },
  'Networking': {
    icon: 'Network',
    description: 'TCP/IP, routing, DNS, switching protocols, and HTTP/HTTPS network stack.',
    color: 'from-sky-500 to-blue-600',
  },
  'AI': {
    icon: 'Cpu',
    description: 'Large Language Models, RAG, LangChain, LangGraph, AI Agents & MCP.',
    color: 'from-purple-500 to-pink-500',
  },
  'Frontend': {
    icon: 'Layout',
    description: 'HTML5, CSS3, JavaScript, TypeScript, React framework, and Vite build tool.',
    color: 'from-amber-500 to-orange-500',
  },
  'Backend': {
    icon: 'Terminal',
    description: 'Node.js, Express, Flask, REST APIs, and authentication mechanisms.',
    color: 'from-emerald-500 to-green-600',
  },
  'Database': {
    icon: 'Database',
    description: 'Relational & NoSQL systems: SQL, PostgreSQL, MSSQL, MongoDB.',
    color: 'from-cyan-500 to-blue-500',
  },
  'Cloud': {
    icon: 'Cloud',
    description: 'Multi-cloud architectures across AWS, Azure, GCP, and VMware virtualization.',
    color: 'from-violet-500 to-purple-600',
  },
  'System Design': {
    icon: 'Layers',
    description: 'Scalability, Load Balancing, Caching, Databases, Message Queues & Microservices.',
    color: 'from-rose-500 to-red-500',
  },
  'Security': {
    icon: 'Lock',
    description: 'Cryptography, Network Security, IAM, Secrets, and Vulnerability Management.',
    color: 'from-red-500 to-orange-500',
  },
  'Languages': {
    icon: 'Code2',
    description: 'Core programming languages: Python, JavaScript, TypeScript, Bash, C, C++.',
    color: 'from-yellow-500 to-amber-600',
  },
  'Personal Projects': {
    icon: 'FolderKanban',
    description: 'Hands-on projects: Progress Pulse, RMS, PMS, AI Automation.',
    color: 'from-teal-500 to-emerald-600',
  },
};

function cleanSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function parseHeadings(content: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const lines = content.split('\n');

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ')) {
      const text = trimmed.replace(/^##\s+/, '').trim();
      const id = cleanSlug(text);
      headings.push({ id, text, level: 2 });
    } else if (trimmed.startsWith('### ')) {
      const text = trimmed.replace(/^###\s+/, '').trim();
      const id = cleanSlug(text);
      headings.push({ id, text, level: 3 });
    }
  }

  return headings;
}

function generateSnippet(content: string): string {
  // Strip code blocks and headings for clean snippet
  const clean = content
    .replace(/```[\s\S]*?```/g, '')
    .replace(/#+\s+.*?\n/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\n+/g, ' ')
    .trim();

  return clean.slice(0, 180) + (clean.length > 180 ? '...' : '');
}

function parseArticleFromPath(filePath: string, rawContent: string): MarkdownArticle {
  // filePath format: ".../learning/01. DevOps/05. Kubernetes.md" or ".../learning/09. Cloud/AWS/02. EC2.md"
  const normalizedPath = filePath.replace(/\\/g, '/');
  const parts = normalizedPath.split('/learning/')[1] || normalizedPath.split('learning/')[1] || normalizedPath;
  const segments = parts.split('/').filter(Boolean);

  let categoryRaw = segments[0] || 'Uncategorized';
  let categoryOrder = '99';
  let categoryName = categoryRaw;

  // Match e.g. "01. DevOps"
  const categoryMatch = categoryRaw.match(/^(\d+)\.\s*(.+)$/);
  if (categoryMatch) {
    categoryOrder = categoryMatch[1];
    categoryName = categoryMatch[2];
  }

  let subcategory: string | undefined = undefined;
  let filename = segments[segments.length - 1] || 'article.md';

  if (segments.length > 2) {
    subcategory = segments[1];
  }

  // Extract clean filename without .md extension and without leading numbers (e.g. "00. Overview.md" -> "Overview")
  const cleanFilenameWithoutExt = filename.replace(/\.md$/i, '');
  const fileNameClean = cleanFilenameWithoutExt.replace(/^\d+[\.\s\-]+/, '').trim() || cleanFilenameWithoutExt;

  let orderNumber = '00';
  let title = fileNameClean;

  const fileMatch = cleanFilenameWithoutExt.match(/^(\d+)\.\s*(.+)$/);
  if (fileMatch) {
    orderNumber = fileMatch[1];
    title = fileMatch[2];
  }

  // Extract first H1 from markdown if available for full article title
  const h1Match = rawContent.match(/^#\s+(.+)$/m);
  if (h1Match && h1Match[1].trim()) {
    title = h1Match[1].trim();
  }

  // Build unique ID
  const subcatPart = subcategory ? `${cleanSlug(subcategory)}-` : '';
  const id = `${cleanSlug(categoryName)}-${subcatPart}${orderNumber}-${cleanSlug(fileNameClean)}`;

  const headings = parseHeadings(rawContent);
  const words = rawContent.trim().split(/\s+/).length;
  const readTimeMinutes = Math.max(1, Math.ceil(words / 150));
  const snippet = generateSnippet(rawContent);

  return {
    id,
    title,
    category: categoryName,
    categoryOrder,
    rawFolderName: categoryRaw,
    fileNameClean,
    subcategory,
    orderNumber,
    filePath: `learning/${parts}`,
    rawContent,
    headings,
    readTimeMinutes,
    wordCount: words,
    snippet,
  };
}

// Load and cache all parsed articles
let cachedArticles: MarkdownArticle[] | null = null;
let cachedCategories: CategoryGroup[] | null = null;

export function getAllArticles(): MarkdownArticle[] {
  if (cachedArticles) return cachedArticles;

  const articles: MarkdownArticle[] = [];

  for (const [filePath, content] of Object.entries(rawMarkdownFiles)) {
    if (filePath.endsWith('.md')) {
      const article = parseArticleFromPath(filePath, content as string);
      articles.push(article);
    }
  }

  // Sort articles by category order, subcategory, and file order number
  articles.sort((a, b) => {
    if (a.categoryOrder !== b.categoryOrder) {
      return parseInt(a.categoryOrder, 10) - parseInt(b.categoryOrder, 10);
    }
    if (a.subcategory || b.subcategory) {
      if (a.subcategory && b.subcategory && a.subcategory !== b.subcategory) {
        return a.subcategory.localeCompare(b.subcategory);
      }
      if (a.subcategory && !b.subcategory) return 1;
      if (!a.subcategory && b.subcategory) return -1;
    }
    return parseInt(a.orderNumber, 10) - parseInt(b.orderNumber, 10);
  });

  cachedArticles = articles;
  return articles;
}

export function getCategoriesGrouped(): CategoryGroup[] {
  if (cachedCategories) return cachedCategories;

  const articles = getAllArticles();
  const categoryMap = new Map<string, CategoryGroup>();

  for (const article of articles) {
    if (!categoryMap.has(article.category)) {
      const meta = CATEGORY_METADATA[article.category] || {
        icon: 'BookOpen',
        description: `Comprehensive guide and documentation for ${article.category}.`,
        color: 'from-slate-500 to-gray-600',
      };

      categoryMap.set(article.category, {
        name: article.category,
        rawFolderName: article.rawFolderName,
        order: article.categoryOrder,
        iconName: meta.icon,
        description: meta.description,
        articles: [],
        subcategories: [],
      });
    }

    const catGroup = categoryMap.get(article.category)!;

    if (article.subcategory) {
      let subGroup = catGroup.subcategories.find((s) => s.name === article.subcategory);
      if (!subGroup) {
        subGroup = { name: article.subcategory, articles: [] };
        catGroup.subcategories.push(subGroup);
      }
      subGroup.articles.push(article);
    } else {
      catGroup.articles.push(article);
    }
  }

  const categories = Array.from(categoryMap.values()).sort(
    (a, b) => parseInt(a.order, 10) - parseInt(b.order, 10)
  );

  cachedCategories = categories;
  return categories;
}

export function getArticleById(id: string): MarkdownArticle | undefined {
  const articles = getAllArticles();
  return articles.find((art) => art.id === id);
}

export function searchArticles(query: string): SearchResult[] {
  if (!query.trim()) return [];

  const q = query.toLowerCase().trim();
  const articles = getAllArticles();
  const results: SearchResult[] = [];

  for (const article of articles) {
    let score = 0;
    const matchedHeadings: string[] = [];

    // Title match
    if (article.title.toLowerCase().includes(q)) {
      score += 10;
    }

    // Category match
    if (article.category.toLowerCase().includes(q)) {
      score += 5;
    }

    // Subcategory match
    if (article.subcategory && article.subcategory.toLowerCase().includes(q)) {
      score += 5;
    }

    // Headings match
    for (const heading of article.headings) {
      if (heading.text.toLowerCase().includes(q)) {
        score += 3;
        matchedHeadings.push(heading.text);
      }
    }

    // Content match
    const contentLower = article.rawContent.toLowerCase();
    const contentMatches = (contentLower.match(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (contentMatches > 0) {
      score += Math.min(contentMatches, 10);
    }

    if (score > 0) {
      // Find snippet around query match
      let snippetMatch: string | undefined;
      const matchIdx = contentLower.indexOf(q);
      if (matchIdx !== -1) {
        const start = Math.max(0, matchIdx - 40);
        const end = Math.min(contentLower.length, matchIdx + q.length + 60);
        snippetMatch = article.rawContent.slice(start, end).replace(/\n+/g, ' ');
      }

      results.push({
        article,
        matchedHeadings,
        snippetMatch,
        score,
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

export function getAdjacentArticles(currentId: string): { prev?: MarkdownArticle; next?: MarkdownArticle } {
  const articles = getAllArticles();
  const index = articles.findIndex((art) => art.id === currentId);
  if (index === -1) return {};

  return {
    prev: index > 0 ? articles[index - 1] : undefined,
    next: index < articles.length - 1 ? articles[index + 1] : undefined,
  };
}
