import Image from "next/image";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import StatBar from "@/components/StatBar";
import { StarBadge } from "@/components/StarMotif";
import { aboutValues } from "@/lib/constants";
import { campaignImages } from "@/lib/images";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Stellar HealthCare Staffing is a North York-based healthcare staffing and home care agency serving the Greater Toronto Area with vetted RNs, RPNs, and PSWs.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Stellar HealthCare Staffing"
        title="Care that feels personal — because it is."
        description="We started Stellar to close the gap between a facility's need for reliable staff and a family's need for a caregiver they can trust — with the same rigor and warmth on both sides."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
              Our Story
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Built by people who&apos;ve worked both sides of the call.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-grey-500">
              <p>
                Stellar HealthCare Staffing was founded in North York by a
                small team of nurses and staffing coordinators who kept
                seeing the same problem from opposite sides: facilities
                scrambling to fill shifts with agencies that didn&apos;t
                know their units, and families searching for home care
                without knowing who would actually show up.
              </p>
              <p>
                Today, our roster of Registered Nurses, Registered Practical
                Nurses, and Personal Support Workers supports hospitals and
                long-term care homes across the GTA, while our home care
                team brings the same standard of vetting and consistency
                directly into clients&apos; living rooms — for adults,
                seniors, and pediatric clients alike.
              </p>
              <p>
                We&apos;re still headquartered in North York, and we&apos;re
                still small enough that our staffing coordinators know your
                facility or your family by name.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="relative aspect-[3/2] overflow-hidden rounded-3xl">
            <Image
              src={campaignImages.aboutTeam.src}
              alt={campaignImages.aboutTeam.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </ScrollReveal>
        </div>
      </section>

      <StatBar />

      <section className="bg-surface-muted py-20 lg:py-28">
        <div className="container-page">
          <ScrollReveal className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
              Our Approach
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Four principles behind every placement.
            </h2>
          </ScrollReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {aboutValues.map((value, index) => (
              <ScrollReveal
                key={value.title}
                delay={index * 0.06}
                className="rounded-2xl border border-border-subtle bg-white p-8"
              >
                <StarBadge className="h-6 w-6 text-teal-600" />
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-500">
                  {value.description}
                </p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-14 text-center">
            <Link
              href="/careers"
              className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-teal-600 hover:text-teal-600"
            >
              Interested in joining our roster? Explore careers
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
