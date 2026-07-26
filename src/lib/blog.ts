import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { routing } from '@/i18n/routing';
import { getCoverForSlug } from './blog-images';
import { getBlogFaq, type BlogFaqItem, type BlogFaqLocale } from './blog-faq';

export type BlogLocale = (typeof routing.locales)[number];

export type BlogFrontmatter = {
  slug: string;
  title: string;
  description: string;
  locale: BlogLocale;
  publishDate: string;
  author?: string;
  category?: string;
  coverImage?: string;
  keywords?: string[];
  relatedServices?: string[];
};

export type BlogPost = BlogFrontmatter & {
  content: string;
  readingMinutes: number;
  faq: BlogFaqItem[];
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

/**
 * Scheduled publishing: a post with a future `publishDate` stays hidden until
 * its date. The check runs at build time, so a daily rebuild (see the cron in
 * .github/workflows/deploy.yml) reveals queued posts one day at a time. Set
 * BLOG_SHOW_SCHEDULED=1 to preview future-dated posts locally.
 */
function isPublished(publishDate: string): boolean {
  if (process.env.BLOG_SHOW_SCHEDULED === '1') return true;
  const ts = Date.parse(publishDate);
  if (Number.isNaN(ts)) return true;
  return ts <= Date.now();
}

function readPost(locale: string, fileName: string): BlogPost | null {
  const fullPath = path.join(localeDir(locale), fileName);
  if (!fs.existsSync(fullPath)) return null;
  const raw = fs.readFileSync(fullPath, 'utf8');
  const parsed = matter(raw);
  const fm = parsed.data as Partial<BlogFrontmatter>;
  if (!fm.slug || !fm.title || !fm.description || !fm.publishDate) return null;
  if (!isPublished(fm.publishDate)) return null;
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
    coverImage: fm.coverImage ?? getCoverForSlug(fm.slug),
    keywords: fm.keywords ?? [],
    relatedServices: fm.relatedServices ?? [],
    content: parsed.content.trimStart(),
    readingMinutes: estimateReadingMinutes(parsed.content),
    faq: getBlogFaq(fm.slug, safeLocale as BlogFaqLocale)
  };
}

export function listPostSlugs(locale: string): string[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  // Only slugs whose post is already published — keeps future-dated posts out
  // of generateStaticParams so they 404 until their publishDate.
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readPost(locale, f))
    .filter((p): p is BlogPost => p !== null)
    .map((p) => p.slug);
}

export function getAllPosts(locale: string): BlogPostSummary[] {
  const dir = localeDir(locale);
  if (!fs.existsSync(dir)) return [];
  const posts = fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => readPost(locale, f))
    .filter((p): p is BlogPost => p !== null)
    .map(({ content: _content, faq: _faq, ...rest }) => rest);
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

/**
 * Extract a service slug from a `relatedServices` reference. References are
 * stored as locale-prefixed paths (e.g. `/ru/uslugi/karta-pobytu`) but a bare
 * slug is tolerated too — we only care about the final path segment.
 */
export function serviceSlugFromRef(ref: string): string {
  const segments = ref.trim().replace(/\/+$/, '').split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
}

/**
 * Reverse-lookup: posts that declare this service in their `relatedServices`
 * frontmatter, newest first. The blog frontmatter is the single source of
 * truth — no manual per-service article mapping needed.
 */
export function getPostsForService(
  locale: string,
  serviceSlug: string,
  limit = 3
): BlogPostSummary[] {
  return getAllPosts(locale)
    .filter((p) =>
      (p.relatedServices ?? []).some((ref) => serviceSlugFromRef(ref) === serviceSlug)
    )
    .slice(0, limit);
}

// Goes through readPost rather than a bare fs.existsSync so a file that is
// still behind its publishDate doesn't get advertised — the route 404s until
// the scheduled date, and hreflang/the locale switcher must agree with that.
export function getAvailableLocalesForSlug(slug: string): BlogLocale[] {
  return (routing.locales as readonly BlogLocale[]).filter(
    (l) => readPost(l, `${slug}.md`) !== null
  );
}
