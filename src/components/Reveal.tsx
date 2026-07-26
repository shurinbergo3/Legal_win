'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
  once?: boolean;
  [key: `data-${string}`]: string | undefined;
};

export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  margin = '-80px',
  once = true,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      // Defensive path for a browser without IO: reveal immediately. Toggled on
      // the node rather than through state — Reveal wraps dozens of elements per
      // page and a state flip on mount would re-render all of them.
      el.classList.add('reveal-in');
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            if (once) io.disconnect();
          } else if (!once) {
            setShown(false);
          }
        }
      },
      { rootMargin: margin }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [margin, once]);

  const style = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <Tag
      ref={ref}
      style={style}
      className={`reveal ${shown ? 'reveal-in' : ''} ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
