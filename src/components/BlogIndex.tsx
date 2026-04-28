import { Link } from '@/i18n/navigation';
import Image from 'next/image';
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

function CategoryThumbnail({ category, coverImage }: { category?: string; coverImage?: string }) {
  if (coverImage) {
    return (
      <div className="relative aspect-[16/7] overflow-hidden rounded-xl">
        <Image
          src={coverImage}
          alt=""
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 800px"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
      </div>
    );
  }

  const cat = category?.toLowerCase() ?? '';
  const isImmigration = cat.includes('иммигр') || cat.includes('immigr');
  const isBusiness = cat.includes('бизн') || cat.includes('busin');

  return (
    <div className="relative aspect-[16/7] overflow-hidden rounded-xl border hairline bg-ink-900/70">
      {/* Subtle grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/20 blur-3xl transition-opacity duration-500 opacity-60 group-hover:opacity-100"
      />
      {/* Category icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        {isImmigration ? (
          <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16 text-gold-400/30 transition-colors duration-500 group-hover:text-gold-400/50" aria-hidden>
            <circle cx="40" cy="30" r="14" stroke="currentColor" strokeWidth="1.5" />
            <path d="M16 68c0-13.255 10.745-24 24-24s24 10.745 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M54 40l8-8m0 0l-8-8m8 8H46" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ) : isBusiness ? (
          <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16 text-gold-400/30 transition-colors duration-500 group-hover:text-gold-400/50" aria-hidden>
            <rect x="12" y="28" width="56" height="40" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 28V20a12 12 0 0 1 24 0v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M12 44h56" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="40" cy="44" r="4" fill="currentColor" opacity="0.4" />
          </svg>
        ) : (
          <svg viewBox="0 0 80 80" fill="none" className="h-16 w-16 text-gold-400/30 transition-colors duration-500 group-hover:text-gold-400/50" aria-hidden>
            <rect x="18" y="12" width="44" height="56" rx="3" stroke="currentColor" strokeWidth="1.5" />
            <path d="M28 28h24M28 38h24M28 48h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )}
      </div>
      {category && (
        <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.28em] text-gold-400/70">
          {category}
        </div>
      )}
    </div>
  );
}

export function BlogIndex({ posts, labels }: Props) {
  return (
    <div className="relative">
      <section className="hero-gradient relative isolate overflow-hidden pt-32 pb-12 sm:pt-40 sm:pb-16 lg:pt-48 lg:pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: 'url(/hero/blog.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.25
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
                    className="group flex flex-col gap-4 rounded-2xl border hairline bg-ink-900/40 p-6 transition-colors hover:bg-ink-900/70 sm:p-8"
                  >
                    <CategoryThumbnail category={post.category} coverImage={post.coverImage} />

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
