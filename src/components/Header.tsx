'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { cn } from '@/lib/cn';

const sections = ['services', 'cases', 'team', 'faq', 'contact'] as const;

export function Header() {
  const t = useTranslations('Nav');
  const { scrollY } = useScroll();
  const [shrunk, setShrunk] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setShrunk(y > 24));

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: shrunk ? 10 : 22,
        paddingBottom: shrunk ? 10 : 22
      }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,border-color] duration-300',
        shrunk
          ? 'glass-strong border-b hairline'
          : 'bg-transparent border-b border-transparent'
      )}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-8 px-6 lg:px-10">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 text-ink-50"
          aria-label="LegalWin"
        >
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-gold-400 to-gold-600 text-ink-950">
            <span className="font-display text-[20px] font-bold leading-none">L</span>
          </span>
          <span className="font-display text-[22px] font-semibold tracking-tight">
            LegalWin
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-300 lg:flex">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className="relative transition-colors duration-200 hover:text-ink-50"
            >
              {t(s)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gold-400 px-4 py-2 text-sm font-medium text-ink-950 shadow-soft transition-all duration-200 hover:bg-gold-300 hover:shadow-elite"
          >
            {t('consultation')}
            <svg
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden
            >
              <path
                d="M3 8h10m-4-4 4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
