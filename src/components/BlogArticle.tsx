import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Link } from '@/i18n/navigation';
import { serviceBlur } from '@/lib/image-blur';
import type { BlogPost, BlogPostSummary } from '@/lib/blog';

type Props = {
  post: BlogPost;
  related: BlogPostSummary[];
  labels: {
    back: string;
    publishedOn: string;
    readingTime: string;
    related: string;
  };
};

const ROMAN_MONTHS = [
  'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'
];

function toRomanNumeral(n: number): string {
  const table: [number, string][] = [
    [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
    [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
    [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I'],
  ];
  let value = n;
  let out = '';
  for (const [v, s] of table) {
    while (value >= v) { out += s; value -= v; }
  }
  return out;
}

function folioDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return {
    day: d.getUTCDate().toString().padStart(2, '0'),
    month: ROMAN_MONTHS[d.getUTCMonth()],
    year: toRomanNumeral(d.getUTCFullYear()),
    yearNumeric: d.getUTCFullYear(),
  };
}

function dayOfYear(iso: string): number {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return 0;
  const start = Date.UTC(d.getUTCFullYear(), 0, 0);
  return Math.floor((d.getTime() - start) / 86_400_000);
}

function issueNumber(iso: string): string {
  return dayOfYear(iso).toString().padStart(3, '0');
}

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

export function BlogArticle({ post, related, labels }: Props) {
  const stamp = folioDate(post.publishDate);
  const issue = issueNumber(post.publishDate);

  return (
    <div className="relative">
      {/* === Hero — editorial codex === */}
      <section className="hero-gradient relative isolate overflow-hidden pt-28 pb-14 sm:pt-36 sm:pb-20 lg:pt-44 lg:pb-24">
        {/* Photo background — solid ink-950 underneath so the area never goes
            blank; the dark overlay above already covers ~85% of the photo. */}
        {post.coverImage && (
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-ink-950">
            <Image
              src={post.coverImage}
              alt=""
              fill
              priority
              fetchPriority="high"
              placeholder={serviceBlur[post.coverImage] ? 'blur' : 'empty'}
              blurDataURL={serviceBlur[post.coverImage]}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        )}
        {/* Dark overlay over photo */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,9,26,0.88) 0%, rgba(5,9,26,0.72) 40%, rgba(5,9,26,0.92) 100%)'
          }}
        />
        {/* Atmospheric layers */}
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
          className="pointer-events-none absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-gold-500/15 blur-[160px] blob-1"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-accent/[0.06] blur-[140px] blob-2"
        />

        <div className="relative mx-auto max-w-5xl px-6 lg:px-10">
          {/* Back to all */}
          <Link
            href="/blog"
            className="hero-in hero-in-d1 mb-10 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.24em] text-ink-300 transition-colors hover:text-gold-400"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            {labels.back}
          </Link>

          {/* Folio rail — issue / category strip */}
          <div className="hero-in hero-in-d2 folio-rail mb-12">
            <span>
              {post.category ? (
                <>
                  <span className="gold">·</span> {post.category}
                </>
              ) : (
                'Folio'
              )}
            </span>
            <span className="rule" aria-hidden />
            <span>
              № {issue}
              {stamp && (
                <>
                  <span className="mx-2 text-ink-700">·</span>
                  <span className="gold">{stamp.year}</span>
                </>
              )}
            </span>
          </div>

          {/* Title block — asymmetric grid: prose left, date stamp right */}
          <div className="relative grid items-start gap-y-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-x-14">
            <div className="relative">
              <h1 className="hero-in hero-in-d3 font-display text-balance text-[2.5rem] font-semibold leading-[1.02] tracking-[-0.025em] text-ink-50 sm:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.25rem]">
                {post.title}
              </h1>
              <p className="hero-in hero-in-d4 mt-7 max-w-2xl text-balance text-base leading-relaxed text-ink-200 sm:text-lg lg:mt-8 lg:text-xl">
                {post.description}
              </p>
            </div>

            {/* Vertical Roman date stamp — desktop only, sits to the right of the title */}
            {stamp && (
              <div className="hero-in hero-in-d3 hidden lg:block">
                <div className="folio-stamp pt-2">
                  <span className="edge" aria-hidden />
                  <span className="day">{stamp.day}</span>
                  <span className="month">{stamp.month}</span>
                  <span className="year">{stamp.year}</span>
                </div>
              </div>
            )}
          </div>

          {/* Ornamental divider */}
          <div className="hero-in hero-in-d5 ornament-divider" aria-hidden>
            <span className="glyph">✦</span>
          </div>

          {/* Byline band */}
          <div className="hero-in hero-in-d6 byline-band">
            {post.author && (
              <>
                <span>
                  <strong>{post.author}</strong>
                </span>
                <span className="sep" aria-hidden>—</span>
              </>
            )}
            <span>{labels.publishedOn} {formatDate(post.publishDate, post.locale)}</span>
            <span className="sep" aria-hidden>—</span>
            <span className="reading-seal">
              {post.readingMinutes} {labels.readingTime}
            </span>
          </div>
        </div>
      </section>

      {/* === Body === */}
      <section className="relative pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <article className="blog-prose flex flex-col gap-6 text-base leading-relaxed text-ink-200 lg:text-[17px]">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                h1: () => null,
                h2: ({ children, id }) => (
                  <h2
                    id={id}
                    className="scroll-mt-28 font-display mt-12 text-2xl font-semibold leading-tight text-ink-50 sm:text-[1.875rem]"
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children, id }) => (
                  <h3
                    id={id}
                    className="scroll-mt-28 font-display mt-9 text-xl font-semibold text-ink-50 sm:text-2xl"
                  >
                    {children}
                  </h3>
                ),
                h4: ({ children, id }) => (
                  <h4
                    id={id}
                    className="scroll-mt-28 mt-7 font-mono text-[12px] uppercase tracking-[0.18em] text-gold-300"
                  >
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-base leading-relaxed text-ink-200 lg:text-[17px] lg:leading-[1.78]">
                    {children}
                  </p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-ink-50">{children}</strong>
                ),
                em: ({ children }) => <em className="italic text-ink-100">{children}</em>,
                ul: ({ children }) => (
                  <ul
                    className="flex flex-col gap-2 pl-5 marker:text-gold-400"
                    style={{ listStyleType: '"— "' }}
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="ml-5 list-decimal space-y-2 marker:text-gold-400 marker:font-mono marker:text-[0.85em]">
                    {children}
                  </ol>
                ),
                li: ({ children }) => <li className="text-ink-200">{children}</li>,
                a: ({ href, children }) => {
                  const isExternal =
                    typeof href === 'string' && /^https?:\/\//.test(href);
                  if (isExternal) {
                    return (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gold-400 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-300 hover:decoration-gold-400"
                      >
                        {children}
                      </a>
                    );
                  }
                  return (
                    <a
                      href={href}
                      className="text-gold-400 underline decoration-gold-500/40 underline-offset-4 transition-colors hover:text-gold-300 hover:decoration-gold-400"
                    >
                      {children}
                    </a>
                  );
                },
                hr: () => <hr className="editorial" />,
                blockquote: ({ children }) => <blockquote>{children}</blockquote>,
                code: ({ children }) => (
                  <code className="rounded bg-ink-900/70 px-1.5 py-0.5 font-mono text-[0.92em] text-gold-200">
                    {children}
                  </code>
                ),
                table: ({ children }) => (
                  <div className="my-2 overflow-x-auto rounded-2xl border hairline bg-ink-900/40">
                    <table className="w-full text-left text-sm">{children}</table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="border-b hairline">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-gold-400">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-t hairline px-4 py-3 align-top text-ink-200 first:border-t-0">
                    {children}
                  </td>
                ),
                tr: ({ children }) => <tr>{children}</tr>
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* End-of-article ornament */}
          <div className="ornament-divider mt-16" aria-hidden>
            <span className="glyph">✦ ✦ ✦</span>
          </div>

          {related.length > 0 && (
            <aside className="mt-12">
              <div className="mb-8 flex items-baseline gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-gold-300">
                  {labels.related}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-gold-500/40 to-transparent" aria-hidden />
              </div>
              <ul className="grid gap-5 sm:grid-cols-2">
                {related.map((r, i) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border hairline bg-ink-900/40 p-6 transition-all duration-300 hover:border-gold-500/40 hover:bg-ink-900/70 hover:shadow-elite"
                    >
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-8 -top-8 font-display text-[6rem] font-semibold leading-none text-gold-500/[0.06] transition-colors duration-300 group-hover:text-gold-500/[0.14]"
                      >
                        {(i + 1).toString().padStart(2, '0')}
                      </span>
                      {r.category && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-gold-400">
                          {r.category}
                        </span>
                      )}
                      <span className="font-display text-lg font-semibold leading-snug text-ink-50 transition-colors group-hover:text-gold-300 sm:text-xl">
                        {r.title}
                      </span>
                      <span className="text-sm leading-relaxed text-ink-300">
                        {r.description}
                      </span>
                      <span className="mt-1 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 transition-colors group-hover:text-gold-300">
                        <span className="h-px w-6 bg-current transition-all duration-300 group-hover:w-10" aria-hidden />
                        {r.readingMinutes} {labels.readingTime}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </section>
    </div>
  );
}
