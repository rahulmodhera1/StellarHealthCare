import { clsx } from "clsx";

/**
 * Sparse decorative constellation mark — the brand's "Stellar" motif.
 * Used a handful of times per page (hero, dividers), never as a repeating pattern.
 */
export function ConstellationMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 140"
      fill="none"
      aria-hidden="true"
      className={clsx("pointer-events-none", className)}
    >
      <g stroke="currentColor" strokeWidth="1" strokeOpacity="0.35">
        <line x1="18" y1="100" x2="70" y2="40" />
        <line x1="70" y1="40" x2="130" y2="58" />
        <line x1="130" y1="58" x2="190" y2="18" />
        <line x1="130" y1="58" x2="150" y2="110" />
      </g>
      <g fill="currentColor">
        <circle cx="18" cy="100" r="2.5" />
        <circle cx="70" cy="40" r="3.5" />
        <circle cx="130" cy="58" r="2.5" />
        <circle cx="190" cy="18" r="4" />
        <circle cx="150" cy="110" r="2.5" />
      </g>
    </svg>
  );
}

export function StarBadge({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={clsx("shrink-0", className)}
    >
      <path d="M12 1.5 14.6 9.1 22.5 10.5 16.3 15.8 18 23.5 12 19.3 6 23.5 7.7 15.8 1.5 10.5 9.4 9.1 12 1.5Z" />
    </svg>
  );
}
