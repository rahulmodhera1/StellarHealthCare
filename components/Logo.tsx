import { clsx } from "clsx";

type LogoProps = {
  variant?: "navy" | "white";
  showWordmark?: boolean;
  className?: string;
};

/**
 * Wordmark placeholder: five-point star + pulse-line mark, paired with the
 * "Stellar HealthCare Staffing" wordmark in the display serif. Built as a
 * standalone component so the mark can be swapped for a final logo later.
 */
export default function Logo({
  variant = "navy",
  showWordmark = true,
  className,
}: LogoProps) {
  const ink = variant === "navy" ? "#0b2a4a" : "#ffffff";
  const accent = variant === "navy" ? "#0e7c86" : "#3fa8a0";

  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="17" cy="17" r="16.5" stroke={accent} strokeOpacity="0.25" />
        <path
          d="M17 6.5 19.1 13.9 26.5 15 19.9 18.9 21.4 26.3 17 21.6 12.6 26.3 14.1 18.9 7.5 15 14.9 13.9 17 6.5Z"
          fill={accent}
        />
        <path
          d="M4.5 17H10.5L12.5 12.5L15.5 21.5L17.5 17H29.5"
          stroke={ink}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.55"
        />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span
            className="font-display text-[1.05rem] font-semibold tracking-tight"
            style={{ color: ink }}
          >
            Stellar HealthCare
          </span>
          <span
            className="mt-0.5 text-[0.65rem] font-medium uppercase tracking-[0.22em]"
            style={{ color: accent }}
          >
            Staffing
          </span>
        </span>
      )}
    </span>
  );
}
