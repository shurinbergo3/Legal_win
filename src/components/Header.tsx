'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { LocaleSwitcher } from './LocaleSwitcher';
import { LogoBadge } from './Logo';
import { cn } from '@/lib/cn';

const sections = ['services', 'cases', 'process', 'faq', 'contact'] as const;

export function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const isHome = pathname === '/';
  const { scrollY } = useScroll();
  const [shrunk, setShrunk] = useState(false);

  useMotionValueEvent(scrollY, 'change', (y) => setShrunk(y > 24));

  function handleLogoClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <motion.header
      initial={false}
      animate={{
        paddingTop: shrunk ? 6 : 12,
        paddingBottom: shrunk ? 6 : 12
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
          onClick={handleLogoClick}
          className="group inline-block text-gold-400 transition-colors duration-300 hover:text-gold-300"
          aria-label="LegalWin"
        >
          {/* Full badge — same as footer, just smaller. LW + LEGAL · WIN visible at this size. */}
          <LogoBadge
            size={72}
            className="block transition-transform duration-300 group-hover:scale-[1.04] sm:hidden"
          />
          <LogoBadge
            size={92}
            className="hidden transition-transform duration-300 group-hover:scale-[1.04] sm:block lg:hidden"
          />
          <LogoBadge
            size={108}
            className="hidden transition-transform duration-300 group-hover:scale-[1.04] lg:block"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm text-ink-300 lg:flex">
          {sections.map((s) => (
            <Link
              key={s}
              href={`/#${s}`}
              className="relative transition-colors duration-200 hover:text-ink-50"
            >
              {t(s)}
            </Link>
          ))}
          <Link
            href="/blog"
            className="relative transition-colors duration-200 hover:text-ink-50"
          >
            {t('blog')}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LocaleSwitcher className="hidden sm:inline-flex" />
          <Link
            href="/#contact"
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
          </Link>
        </div>
      </div>
    </motion.header>
  );
}
