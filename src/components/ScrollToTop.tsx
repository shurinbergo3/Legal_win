'use client';

import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { cn } from '@/lib/cn';

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('Common');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setVisible(window.scrollY > 600);
        raf = 0;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  function handleClick() {
    if (typeof window === 'undefined') return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={t('scrollTop')}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        'glass-strong fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border hairline-gold text-gold-400 shadow-elite transition-all duration-300 ease-out hover:border-gold-500/70 hover:text-gold-300 hover:scale-[1.06] active:scale-[0.94] sm:bottom-8 sm:left-8 sm:h-12 sm:w-12',
        visible
          ? 'translate-y-0 opacity-100 pointer-events-auto'
          : 'translate-y-3 opacity-0 pointer-events-none'
      )}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={1.8} aria-hidden />
    </button>
  );
}
