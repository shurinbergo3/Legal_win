import { ChevronLeft } from 'lucide-react';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { Link } from '@/i18n/navigation';
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
  return (
    <div className="relative">
      {/* Hero */}
      <section className="hero-gradient relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
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

        <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-300 transition-colors hover:text-gold-400"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            {labels.back}
          </Link>

          <div>
            {post.category && (
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
                <span className="inline-block h-px w-10 bg-gold-500/60" />
                {post.category}
              </div>
            )}
            <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-ink-50 sm:text-5xl lg:text-[3.5rem]">
              {post.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-200 lg:text-lg">
              {post.description}
            </p>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
              {labels.publishedOn} {formatDate(post.publishDate, post.locale)}
              <span className="mx-3 text-ink-700">·</span>
              {post.readingMinutes} {labels.readingTime}
              {post.author && (
                <>
                  <span className="mx-3 text-ink-700">·</span>
                  {post.author}
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="mx-auto max-w-4xl px-6 lg:px-10 -mt-4 mb-4 sm:-mt-6 sm:mb-6">
          <div className="relative aspect-[16/7] overflow-hidden rounded-2xl">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 896px"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
          </div>
        </div>
      )}

      {/* Body */}
      <section className="relative pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <article className="blog-prose flex flex-col gap-6 text-base leading-relaxed text-ink-200">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeSlug]}
              components={{
                h1: () => null,
                h2: ({ children, id }) => (
                  <h2
                    id={id}
                    className="scroll-mt-28 font-display mt-10 text-2xl font-semibold leading-tight text-ink-50 sm:text-3xl"
                  >
                    {children}
                  </h2>
                ),
                h3: ({ children, id }) => (
                  <h3
                    id={id}
                    className="scroll-mt-28 font-display mt-8 text-xl font-semibold text-ink-50 sm:text-2xl"
                  >
                    {children}
                  </h3>
                ),
                h4: ({ children, id }) => (
                  <h4
                    id={id}
                    className="scroll-mt-28 mt-6 text-lg font-semibold text-ink-100"
                  >
                    {children}
                  </h4>
                ),
                p: ({ children }) => (
                  <p className="text-base leading-relaxed text-ink-200">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="font-semibold text-ink-50">{children}</strong>
                ),
                em: ({ children }) => <em className="italic text-ink-100">{children}</em>,
                ul: ({ children }) => (
                  <ul
                    className="flex flex-col gap-2 pl-5"
                    style={{ listStyleType: '"— "' }}
                  >
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="ml-5 list-decimal space-y-2 marker:text-gold-400">
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
                hr: () => <hr className="my-10 border-0 border-t hairline" />,
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-gold-500/60 pl-5 italic text-ink-100">
                    {children}
                  </blockquote>
                ),
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

          {related.length > 0 && (
            <aside className="mt-16 border-t hairline pt-10">
              <p className="mb-6 font-mono text-[11px] uppercase tracking-[0.25em] text-ink-400">
                {labels.related}
              </p>
              <ul className="grid gap-5 sm:grid-cols-2">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link
                      href={`/blog/${r.slug}`}
                      className="group flex h-full flex-col gap-2 rounded-2xl border hairline bg-ink-900/40 p-5 transition-colors hover:bg-ink-900/70"
                    >
                      {r.category && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-gold-400">
                          {r.category}
                        </span>
                      )}
                      <span className="font-display text-lg font-semibold leading-snug text-ink-50 transition-colors group-hover:text-gold-300">
                        {r.title}
                      </span>
                      <span className="text-sm leading-relaxed text-ink-300">
                        {r.description}
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
