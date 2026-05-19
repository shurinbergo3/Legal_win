'use client';

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react';

type RevealProps = {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
  margin?: string;
  once?: boolean;
};

export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  delay = 0,
  margin = '-80px',
  once = true
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
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
    >
      {children}
    </Tag>
  );
}
