import { cn } from '@/lib/cn';

/**
 * Generic "anonymous reviewer" avatar in the same spirit as Google reviews
 * when the author has no profile photo: a flat circle background with a
 * simple person silhouette in the centre.
 *
 * Uses brand-tinted neutrals instead of literal Google blue/grey so it sits
 * naturally on the dark navy theme.
 */
export function UserAvatar({
  className,
  size = 44,
  ariaLabel
}: {
  className?: string;
  size?: number;
  ariaLabel?: string;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel ?? 'User avatar'}
      className={cn('shrink-0', className)}
    >
      {/* Background circle — muted ink, matches the dark theme */}
      <circle cx="20" cy="20" r="20" fill="var(--color-ink-700)" />

      {/* Inner ring for a subtle bezel effect */}
      <circle
        cx="20"
        cy="20"
        r="19.25"
        fill="none"
        stroke="var(--color-ink-600)"
        strokeWidth="0.75"
      />

      {/* Head */}
      <circle cx="20" cy="15.5" r="5.5" fill="var(--color-ink-300)" />

      {/* Shoulders / torso — soft trapezoid like Google's anonymous icon */}
      <path
        d="M 8.5 32.5 C 9.5 25.5 13.5 22.5 20 22.5 C 26.5 22.5 30.5 25.5 31.5 32.5 L 31.5 40 L 8.5 40 Z"
        fill="var(--color-ink-300)"
      />
    </svg>
  );
}
