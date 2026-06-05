'use client';

import { useMemo, useState, useDeferredValue } from 'react';
import Image from 'next/image';
import { Search, X, ArrowUpRight } from 'lucide-react';
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
    clearSearch: string;
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

const FALLBACK_COVER = '/services/blog.webp';

// Every scenic service cover that ships with a blur placeholder, used as the
// reshuffle pool when a post's thematic image would repeat back-to-back.
const COVER_POOL = [
  '/services/gdansk-aerial.webp',
  '/services/warszawa-spire.webp',
  '/services/warszawa-pkin-noc.webp',
  '/services/warszawa-defilad-noc.webp',
  '/services/warszawa-swiatynia.webp',
  '/services/warszawa-tramwaj.webp',
  '/services/karta-pobytu.webp',
  '/services/karta-stalego-pobytu.webp',
  '/services/wymiana-prawa-jazdy.webp',
  '/services/kod-95.webp',
  '/services/pesel.webp',
  '/services/apostille.webp',
  '/services/apelacje.webp',
  '/services/tlumaczenia-przysiegle.webp',
  '/services/pomoc-w-zatrudnieniu.webp',
  '/services/zapis-dzieci-do-szkoly.webp',
  '/services/zaswiadczenia-zus-us.webp',
  '/services/odbior-z-lotniska.webp',
  '/services/wyszukiwanie-mieszkania.webp',
  '/services/obywatelstwo.webp'
];

// Stable string hash (FNV-1a) so cover swaps are deterministic and SSR-safe —
// no Math.random, so server and client render the same image.
function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i += 1) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/**
 * Assigns a cover to each post in order, keeping its thematic image unless that
 * would duplicate one of the previous two cards. On a collision it picks a
 * deterministic alternative from the pool so the grid never shows the same
 * photo two (or three) tiles in a row.
 */
function assignCovers(
  posts: BlogPostSummary[],
  seedCover: string | null
): string[] {
  const out: string[] = [];
  let prev1 = seedCover;
  let prev2: string | null = null;
  for (const post of posts) {
    let cover = post.coverImage ?? FALLBACK_COVER;
    if (cover === prev1 || cover === prev2) {
      const start = hashString(post.slug) % COVER_POOL.length;
      for (let k = 0; k < COVER_POOL.length; k += 1) {
        const cand = COVER_POOL[(start + k) % COVER_POOL.length];
        if (cand !== prev1 && cand !== prev2) {
          cover = cand;
          break;
        }
      }
    }
    out.push(cover);
    prev2 = prev1;
    prev1 = cover;
  }
  return out;
}

/**
 * Cover image + legibility gradients shared by featured and regular cards.
 * The photo stays visible toward the top and fades into ink where text sits,
 * so each article reads as a distinct image rather than a uniform dark box.
 */
function CoverLayer({
  cover,
  blurData,
  sizes,
  featured = false
}: {
  cover: string;
  blurData?: string;
  sizes: string;
  featured?: boolean;
}) {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-ink-950"
      >
        <Image
          src={cover}
          alt=""
          fill
          sizes={sizes}
          placeholder={blurData ? 'blur' : 'empty'}
          blurDataURL={blurData}
          className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
        />
      </div>
      {/* Flat ink wash so every photo reads as a darkened backdrop, not a bright tile. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 bg-ink-950/70"
      />
      {featured ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(112deg, rgba(5,9,26,1) 0%, rgba(5,9,26,0.9) 46%, rgba(5,9,26,0.65) 100%)'
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(5,9,26,0.45) 0%, rgba(5,9,26,0.7) 55%, rgba(5,9,26,1) 100%)'
            }}
          />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,9,26,0.72) 0%, rgba(5,9,26,0.85) 40%, rgba(5,9,26,1) 72%, rgba(5,9,26,1) 100%)'
          }}
        />
      )}
    </>
  );
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

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
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
        <div className="mx-auto max-w-6xl px-6 py-6 lg:px-10">
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
                  aria-label={labels.clearSearch}
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
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {filtered.length === 0 ? (
            <p className="py-16 text-center text-ink-400">
              {posts.length === 0 ? labels.empty : labels.noResults}
            </p>
          ) : (
            (() => {
              // Lead the unfiltered list with a wide featured article, then a
              // 3-up grid. While searching/filtering, drop the hero and show a
              // plain grid so results stay scannable.
              const showFeatured =
                activeCategory === null &&
                deferredQuery.trim() === '' &&
                filtered.length > 4;
              const featured = showFeatured ? filtered[0] : null;
              const gridPosts = showFeatured ? filtered.slice(1) : filtered;
              const featuredCover =
                featured?.coverImage ?? (featured ? FALLBACK_COVER : null);
              const gridCovers = assignCovers(gridPosts, featuredCover);

              return (
                <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {featured &&
                    (() => {
                      const cover = featured.coverImage ?? FALLBACK_COVER;
                      return (
                        <li
                          key={featured.slug}
                          className="sm:col-span-2 lg:col-span-3"
                        >
                          <Link
                            href={`/blog/${featured.slug}`}
                            className="group relative flex min-h-[340px] flex-col justify-end overflow-hidden rounded-3xl border hairline bg-ink-950 transition-all duration-300 hover:border-gold-500/40 hover:shadow-elite lg:min-h-[440px]"
                          >
                            <CoverLayer
                              cover={cover}
                              blurData={serviceBlur[cover]}
                              sizes="100vw"
                              featured
                            />
                            <div className="relative z-10 flex max-w-2xl flex-col gap-4 p-7 sm:p-9 lg:p-12">
                              <div className="flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-ink-300">
                                {featured.category && (
                                  <span className="rounded-full border border-gold-500/40 bg-gold-500/10 px-3 py-1 text-gold-200">
                                    {featured.category}
                                  </span>
                                )}
                                <span>
                                  {formatDate(featured.publishDate, featured.locale)}
                                </span>
                                <span aria-hidden>·</span>
                                <span>
                                  {featured.readingMinutes} {labels.readingTime}
                                </span>
                              </div>
                              <h2 className="font-display text-2xl font-semibold leading-[1.1] tracking-[-0.02em] text-ink-50 transition-colors group-hover:text-gold-200 sm:text-3xl lg:text-[2.6rem]">
                                {featured.title}
                              </h2>
                              <p className="line-clamp-2 max-w-xl text-sm leading-relaxed text-ink-200 sm:text-base">
                                {featured.description}
                              </p>
                              <span
                                aria-hidden
                                className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 bg-ink-950/40 text-gold-300 transition-all duration-300 group-hover:border-gold-500/60 group-hover:bg-gold-500/10"
                              >
                                <ArrowUpRight
                                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                  strokeWidth={1.8}
                                />
                              </span>
                            </div>
                          </Link>
                        </li>
                      );
                    })()}

                  {gridPosts.map((post, i) => {
                    const cover = gridCovers[i];
                    return (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border hairline bg-ink-950 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-elite"
                        >
                          <CoverLayer
                            cover={cover}
                            blurData={serviceBlur[cover]}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                          <div className="relative z-10 flex flex-col gap-3 p-6">
                            <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-300">
                              {post.category && (
                                <span className="rounded-full border border-gold-500/30 bg-gold-500/10 px-2.5 py-0.5 text-gold-200">
                                  {post.category}
                                </span>
                              )}
                              <span>
                                {post.readingMinutes} {labels.readingTime}
                              </span>
                            </div>
                            <h2 className="font-display text-lg font-semibold leading-snug text-ink-50 transition-colors group-hover:text-gold-200 sm:text-xl">
                              {post.title}
                            </h2>
                            <p className="line-clamp-2 text-[13px] leading-relaxed text-ink-300">
                              {post.description}
                            </p>
                            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                              {formatDate(post.publishDate, post.locale)}
                            </span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              );
            })()
          )}
        </div>
      </section>
    </div>
  );
}
