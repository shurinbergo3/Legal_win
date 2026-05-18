'use client';

import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * Floating "back to top" pill. Appears after the user scrolls past
 * ~600px and smoothly returns them to the top of the page.
 *
 * Sits on the LEFT to avoid colliding with the Chatbot widget on the
 * right. Hidden on screens narrower than `sm` so the chatbot has full
 * thumb-reach on phones.
 */
export function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();
  const t = useTranslations('Common');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function handleClick() {
    if (typeof window === 'undefined') return;
    window.scrollTo({
      top: 0,
      behavior: reduce ? 'auto' : 'smooth'
    });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          type="button"
          onClick={handleClick}
          aria-label={t('scrollTop')}
          initial={{ opacity: 0, y: 12, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.9 }}
          transition={{ duration: 0.3, ease }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="glass-strong fixed bottom-5 left-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border hairline-gold text-gold-400 shadow-elite transition-colors hover:border-gold-500/70 hover:text-gold-300 sm:bottom-8 sm:left-8 sm:h-12 sm:w-12"
        >
          <ArrowUp className="h-5 w-5" strokeWidth={1.8} aria-hidden />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
