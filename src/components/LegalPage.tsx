'use client';

import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import { Link } from '@/i18n/navigation';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export type LegalSection = {
  /** Anchor id (a-z 0-9 dash). */
  id: string;
  title: string;
  /** Markdown-ish blocks: paragraph (string) or unordered list (string[]). */
  blocks: Array<string | { list: string[] } | { dl: { term: string; def: string }[] }>;
};

export function LegalPage({
  eyebrow,
  title,
  updatedLabel,
  updatedAt,
  intro,
  sections,
  backLabel
}: {
  eyebrow: string;
  title: string;
  updatedLabel: string;
  updatedAt: string;
  intro?: string;
  sections: LegalSection[];
  backLabel: string;
}) {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="hero-gradient relative isolate overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-20 lg:pt-48 lg:pb-24">
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
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.22em] text-ink-300 transition-colors hover:text-gold-400"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.6} aria-hidden />
            {backLabel}
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-gold-400">
              <span className="inline-block h-px w-10 bg-gold-500/60" />
              {eyebrow}
            </div>
            <h1 className="font-display mt-5 text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.025em] text-ink-50 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
              {updatedLabel}: {updatedAt}
            </p>
            {intro && (
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-ink-200 lg:text-lg">
                {intro}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Body — TOC + content */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-x-0 gap-y-10 lg:gap-x-12">
            {/* Sticky TOC on desktop */}
            <aside className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-ink-500">
                  /
                </p>
                <nav aria-label="Sections" className="flex flex-col gap-2.5 border-l border-ink-800 pl-5">
                  {sections.map((s, i) => (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className="group flex items-baseline gap-3 text-sm text-ink-300 transition-colors hover:text-gold-400"
                    >
                      <span className="font-mono text-[10px] text-ink-500 group-hover:text-gold-500">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="leading-snug">{s.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="col-span-12 lg:col-span-8">
              <div className="flex flex-col gap-12">
                {sections.map((s, i) => (
                  <article
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-28 border-t hairline pt-8 first:border-t-0 first:pt-0"
                  >
                    <div className="mb-5 flex items-baseline gap-3">
                      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-gold-400">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h2 className="font-display text-2xl font-semibold leading-tight text-ink-50 sm:text-3xl">
                        {s.title}
                      </h2>
                    </div>

                    <div className="flex flex-col gap-4 text-base leading-relaxed text-ink-200">
                      {s.blocks.map((b, idx) => {
                        if (typeof b === 'string') {
                          return <p key={idx}>{b}</p>;
                        }
                        if ('list' in b) {
                          return (
                            <ul
                              key={idx}
                              className="flex flex-col gap-2 pl-5"
                              style={{ listStyleType: '"— "' }}
                            >
                              {b.list.map((item) => (
                                <li key={item} className="text-ink-200">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <dl
                            key={idx}
                            className="flex flex-col gap-3 rounded-2xl border hairline bg-ink-900/40 p-5 text-sm"
                          >
                            {b.dl.map((row) => (
                              <div key={row.term} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                                <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-400 sm:w-40 sm:flex-shrink-0">
                                  {row.term}
                                </dt>
                                <dd className="text-ink-200">{row.def}</dd>
                              </div>
                            ))}
                          </dl>
                        );
                      })}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
