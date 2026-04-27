import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { routing } from '@/i18n/routing';

export type BlogLocale = (typeof routing.locales)[number];

export type BlogFrontmatter = {
  slug: string;
  title: string;
  description: string;
  locale: BlogLocale;
  publishDate: string;
  author?: string;
  category?: string;
  keywords?: string[];
  relatedServices?: string[];
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  readingMinutes: number;
};

export type BlogPostSummary = BlogFrontmatter & {
  readingMinutes: number;
};

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

function localeDir(locale: string): string {
  return path.join(BLOG_DIR, locale);
}

function estimateReadingMinutes(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

function readPost(locale: string, fileName: string): BlogPost | null {
  const fullPath = path.join(localeDir(locale), fileName);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data as Partial<BlogFrontmatter>;
  if (!fm.slug || !fm.title || !fm.description || !fm.publishDate) return null;
  const safeLocale: BlogLocale = (routing.locales as readonly string[]).includes(locale)
    ? (locale as BlogLocale)
    : routing.defaultLocale;
  return {
    slug: fm.slug,
    title: fm.title,
    description: fm.description,
    locale: (fm.locale ?? safeLocale) as BlogLocale,
    publishDate: fm.publishDate,
    author: fm.author,
    category: fm.category,
    keywords: fm.keywords ?? [],
    relatedServices: fm.relatedServices ?? [],
    content: parsed.content.trimStart(),
    readingMinutes: estimateReadingMinutes(parsed.content)
  };
}

export function listPostSlugs(locale: string): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(locale: string): BlogPostSummary[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readPost(locale, f))
    .filter((p): p is BlogPost => p !== null)
    .map(({ content: _content, ...rest }) => rest);
  return posts.sort((a, b) => (a.publishDate < b.publishDate ? 1 : -1));
}

export function getPost(locale: string, slug: string): BlogPost | null {
  return readPost(locale, `${slug}.md`);
}

export function getRelatedPosts(
  locale: string,
  currentSlug: string,
  limit = 2
): BlogPostSummary[] {
  return getAllPosts(locale)
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
}

export function getAvailableLocalesForSlug(slug: string): BlogLocale[] {
  return (routing.locales as readonly BlogLocale[]).filter((l) => {
    const fullPath = path.join(localeDir(l), `${slug}.md`);
    return fs.existsSync(fullPath);
  });
}
