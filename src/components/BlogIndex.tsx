'use client';

import { useMemo, useState, useDeferredValue } from 'react';
import Image from 'next/image';
import { Search, X } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { serviceBlur } from '@/lib/image-blur';
import type { BlogPostSummary } from '@/lib/blog';

type Props = {
  posts: BlogPostSummary[];
  labels: {
    eyebrow: string;
    title: string;
    intro: string;
    readingTime: string;
    empty: string;
    searchPlaceholder: string;
    allCategories: string;
    noResults: string;
    counterOne: string;
    counterMany: string;
  };
};

function formatDate(iso: string, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function pluralize(n: number, one: string, many: string): string {
  return n === 1 ? `${n} ${one}` : `${n} ${many}`;
}

export function BlogIndex({ posts, labels }: Props) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const deferredQuery = useDeferredValue(query);

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of posts) {
      if (p.category) set.add(p.category);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [posts]);

  const filtered = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return posts.filter((p) => {
      if (activeCategory && p.category !== activeCategory) return false;
      if (!q) return true;
      const haystack = [
        p.title,
        p.description,
        p.category ?? '',
        ...(p.keywords ?? [])
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [posts, deferredQuery, activeCategory]);

  return (
    <div className="relative">
      <section className="hero-gradient relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-ink-950">
          <Image
            src="/services/zapis-dzieci-do-szkoly.webp"
            alt=""
            fill
            priority
            fetchPriority="high"
            placeholder="blur"
            blurDataURL={serviceBlur['/services/zapis-dzieci-do-szkoly.webp']}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,9,26,0.75) 0%, rgba(5,9,26,0.55) 40%, rgba(5,9,26,0.82) 80%, rgba(5,9,26,0.97) 100%)'
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '96px 96px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)'
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 h-[460px] w-[460px] rounded-full bg-gold-500/15 blur-[140px] blob-1"
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {labels.eyebrow}
          </div>
          <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-ink-50 sm:text-5xl lg:text-6xl">
            {labels.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 lg:text-lg">
            {labels.intro}
          </p>
        </div>
      </section>

      {/* Toolbar - search + category filter */}
      <section className="relative border-b hairline bg-ink-950/40 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-6 lg:px-10">
          <div className="flex flex-col gap-5">
            {/* Search */}
            <div className="relative">
              <Search
                className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400"
                strokeWidth={1.6}
                aria-hidden
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={labels.searchPlaceholder}
                className="w-full rounded-xl border hairline bg-ink-900/40 py-3 pl-11 pr-11 text-sm text-ink-100 placeholder:text-ink-500 focus:border-gold-500/40 focus:outline-none focus:ring-1 focus:ring-gold-500/30"
                aria-label={labels.searchPlaceholder}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-ink-400 transition-colors hover:bg-ink-800/60 hover:text-ink-200"
                >
                  <X className="h-4 w-4" strokeWidth={1.6} />
                </button>
              )}
            </div>

            {/* Categories */}
            {categories.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory(null)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${
                    activeCategory === null
                      ? 'border-gold-500/60 bg-gold-500/10 text-gold-300'
                      : 'border-ink-800 text-ink-400 hover:border-ink-700 hover:text-ink-200'
                  }`}
                >
                  {labels.allCategories}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() =>
                      setActiveCategory((current) => (current === cat ? null : cat))
                    }
                    className={`rounded-full border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] transition-all ${
                      activeCategory === cat
                        ? 'border-gold-500/60 bg-gold-500/10 text-gold-300'
                        : 'border-ink-800 text-ink-400 hover:border-ink-700 hover:text-ink-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Counter */}
            <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-500">
              {pluralize(filtered.length, labels.counterOne, labels.counterMany)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-32 lg:pt-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-ink-400">
              {posts.length === 0 ? labels.empty : labels.noResults}
            </p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-2">
              {filtered.map((post) => {
                const cover = post.coverImage ?? '/services/blog.webp';
                const blurData = serviceBlur[cover];
                return (
                  <li key={post.slug}>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border hairline bg-ink-900/40 transition-all hover:border-gold-500/30 hover:shadow-elite"
                    >
                      {/* Photo background - heavily darkened, editorial feel */}
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 bg-ink-950"
                      >
                        <Image
                          src={cover}
                          alt=""
                          fill
                          sizes="(max-width: 768px) 100vw, 540px"
                          placeholder={blurData ? 'blur' : 'empty'}
                          blurDataURL={blurData}
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10"
                        style={{
                          background:
                            'linear-gradient(180deg, rgba(5,9,26,0.86) 0%, rgba(5,9,26,0.78) 40%, rgba(5,9,26,0.95) 100%)'
                        }}
                      />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
                        style={{
                          backgroundImage:
                            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                          backgroundSize: '64px 64px',
                          maskImage:
                            'radial-gradient(ellipse 70% 60% at 50% 30%, #000 60%, transparent 100%)'
                        }}
                      />

                      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7 lg:p-8">
                        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
                          {post.category && (
                            <span className="text-gold-400">{post.category}</span>
                          )}
                          <span>{formatDate(post.publishDate, post.locale)}</span>
                          <span>·</span>
                          <span>
                            {post.readingMinutes} {labels.readingTime}
                          </span>
                        </div>
                        <h2 className="font-display text-xl font-semibold leading-snug text-ink-50 transition-colors group-hover:text-gold-300 sm:text-2xl">
                          {post.title}
                        </h2>
                        <p className="line-clamp-3 text-sm leading-relaxed text-ink-300">
                          {post.description}
                        </p>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
