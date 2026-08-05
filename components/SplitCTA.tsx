import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

const panels = [
  {
    key: "facilities",
    eyebrow: "For Hospitals & Facilities",
    title: "Fill shifts with confidence, not compromise.",
    body: "From single-shift coverage to long-term contracts, our staffing coordinators respond fast and match nurses to your unit's specific clinical needs.",
    cta: { label: "Request Staffing", href: "/contact?inquiry=staffing" },
    tone: "navy" as const,
  },
  {
    key: "families",
    eyebrow: "For Families",
    title: "Bring dependable, familiar care home.",
    body: "We match a consistent caregiver to your household's routine — not a rotating roster of strangers — for companionship, personal care, and peace of mind.",
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
              ? "bg-navy-900 px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24"
              : "bg-teal-600 px-6 py-16 text-white sm:px-10 lg:px-14 lg:py-24"
          }
        >
          <div className="mx-auto max-w-md">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              {panel.eyebrow}
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold sm:text-3xl">
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
