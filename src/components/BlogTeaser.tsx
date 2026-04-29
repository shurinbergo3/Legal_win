import { getTranslations } from 'next-intl/server';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { getAllPosts } from '@/lib/blog';

function formatDate(iso: string, locale: string): string {
  try {
    return new Intl.DateTimeFormat(locale === 'ru' ? 'ru-RU' : locale, {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export async function BlogTeaser({ locale }: { locale: string }) {
  const posts = getAllPosts(locale).slice(0, 3);
  if (posts.length === 0) return null;

  const t = await getTranslations({ locale, namespace: 'BlogTeaser' });
  const tBlog = await getTranslations({ locale, namespace: 'Blog' });
  const readingTimeLabel = tBlog('readingTime');

  return (
    <section
      id="journal"
      className="relative isolate overflow-hidden border-t hairline py-20 sm:py-24 lg:py-32"
    >
      {/* Ambient accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-[-10%] h-[460px] w-[640px] rounded-full bg-gold-500/[0.05] blur-[140px]"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-12 grid grid-cols-12 gap-6 lg:mb-16">
          <div className="col-span-12 flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
            <span className="inline-block h-px w-10 bg-gold-500/60" />
            {t('eyebrow')}
          </div>
          <h2 className="font-display section-size col-span-12 text-balance font-semibold text-ink-50 lg:col-span-8">
            {t('title')}
          </h2>
          <div className="col-span-12 flex flex-col items-start gap-4 self-end lg:col-span-4 lg:items-end lg:text-right">
            <p className="max-w-md text-base text-ink-300">{t('subtitle')}</p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold-400 transition-colors hover:text-gold-300"
            >
              <span className="gold-underline">{t('ctaAll')}</span>
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} aria-hidden />
            </Link>
          </div>
        </div>

        <ul className="grid grid-cols-12 gap-5">
          {posts.map((post, i) => (
            <li
              key={post.slug}
              className="col-span-12 sm:col-span-6 lg:col-span-4"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-3xl border hairline bg-ink-950 p-7 edge-glow transition-all duration-500 hover:border-gold-500/40 hover:-translate-y-1 sm:p-8"
              >
                {/* Hover gold glow */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/[0.06] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                />

                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink-400">
                    / 0{i + 1}
                  </span>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border hairline bg-ink-900 transition-all duration-500 group-hover:border-gold-500/60 group-hover:bg-ink-950">
                    <ArrowUpRight
                      className="h-4 w-4 text-ink-300 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400"
                      strokeWidth={1.6}
                      aria-hidden
                    />
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-400">
                  {post.category && (
                    <span className="text-gold-400">{post.category}</span>
                  )}
                  <span>{formatDate(post.publishDate, post.locale)}</span>
                  <span aria-hidden>·</span>
                  <span>
                    {post.readingMinutes} {readingTimeLabel}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold leading-tight text-ink-50 transition-colors group-hover:text-gold-300 sm:text-2xl">
                  {post.title}
                </h3>

                <p className="mt-auto text-sm leading-relaxed text-ink-300">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
