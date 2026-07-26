'use client';

import { useEffect, useRef, useState } from 'react';

// Same easing as the previous framer-motion implementation
// ([0.16, 1, 0.3, 1] cubic-bezier).
function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export function CountUp({
  to,
  duration = 1.6,
  className
}: {
  to: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === 'undefined') {
      // Defensive path for a browser without IO: show the final number instead
      // of animating. Written straight to the DOM — flipping state here would
      // re-render every counter on mount for no visual gain.
      el.textContent = String(to);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStarted(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: '-80px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  useEffect(() => {
    if (!started) return;
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      el.textContent = String(to);
      return;
    }

    const startTs = performance.now();
    const durMs = duration * 1000;
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min(1, (now - startTs) / durMs);
      const v = Math.round(easeOutExpo(p) * to);
      el.textContent = String(v);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, duration]);

  return (
    <span ref={ref} className={className}>
      0
    </span>
  );
}
