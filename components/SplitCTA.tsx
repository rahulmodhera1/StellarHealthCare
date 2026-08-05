import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const panels = [
  {
    key: "facilities",
    tag: "For Facilities",
    title: "Fill shifts with confidence, not compromise.",
    body: "From single-shift coverage to long-term contracts, our staffing coordinators respond fast and match nurses to your unit's specific clinical needs.",
    cta: { label: "Request Staffing", href: "/contact?inquiry=staffing" },
    tone: "navy" as const,
  },
  {
    key: "families",
    tag: "For Families",
    title: "Bring dependable, familiar care home.",
    body: "We match a consistent caregiver to your household's routine, not a rotating roster of strangers, for companionship, personal care, and peace of mind.",
    cta: { label: "Get Home Care", href: "/contact?inquiry=homecare" },
    tone: "teal" as const,
  },
];

export default function SplitCTA() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      {panels.map((panel) => (
        <ScrollReveal
          key={panel.key}
          className={
            panel.tone === "navy"
              ? "relative px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24 bg-navy-900"
              : "relative px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24 bg-teal-600"
          }
        >
          <span
            className={
              panel.tone === "navy"
                ? "absolute right-6 top-6 rounded-full border border-white/25 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white/80 sm:right-10 sm:top-10"
                : "absolute right-6 top-6 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-white sm:right-10 sm:top-10"
            }
          >
            {panel.tag}
          </span>
          <div className="mx-auto max-w-md">
            <h3 className="font-display text-2xl font-semibold sm:text-3xl">
              {panel.title}
            </h3>
            <p className="mt-5 text-base leading-relaxed text-white/95">
              {panel.body}
            </p>
            <Link
              href={panel.cta.href}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-opacity duration-150 hover:opacity-90"
            >
              {panel.cta.label}
            </Link>
          </div>
        </ScrollReveal>
      ))}
    </section>
  );
}
