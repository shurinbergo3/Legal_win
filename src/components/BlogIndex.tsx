import { Link } from '@/i18n/navigation';
import type { BlogPostSummary } from '@/lib/blog';

type Props = {
  posts: BlogPostSummary[];
  labels: {
    eyebrow: string;
    title: string;
    intro: string;
    readingTime: string;
    empty: string;
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

export function BlogIndex({ posts, labels }: Props) {
  return (
    <div className="relative">
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

      <section className="relative pb-20 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          {posts.length === 0 ? (
            <p className="text-center text-ink-400">{labels.empty}</p>
          ) : (
            <ul className="flex flex-col gap-5">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-3 rounded-2xl border hairline bg-ink-900/40 p-6 transition-colors hover:bg-ink-900/70 sm:p-8"
                  >
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
                    <h2 className="font-display text-2xl font-semibold leading-tight text-ink-50 transition-colors group-hover:text-gold-300 sm:text-3xl">
                      {post.title}
                    </h2>
                    <p className="text-base leading-relaxed text-ink-300">
                      {post.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
