import Link from "next/link";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { StarBadge } from "@/components/StarMotif";
import { careerBenefits, careersOpenRoles, site } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Careers for RNs, RPNs, and PSWs in the GTA",
  description:
    "Join Stellar HealthCare Staffing's roster of RNs, RPNs, and PSWs across Toronto and the GTA. Flexible scheduling, transparent pay, and a staffing coordinator who knows you by name.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Join a roster that treats you like a professional."
        description="We're always looking for licensed, compassionate RNs, RPNs, and PSWs to join our team for hospital and facility placements, or direct home care across the GTA."
      >
        <Link
          href="/apply"
          className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-teal-500"
        >
          Apply Now
        </Link>
      </PageHero>

      <section className="py-20 lg:py-24">
        <div className="container-page">
          <ScrollReveal className="max-w-xl">
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              We&apos;re hiring across the roster, every month.
            </h2>
          </ScrollReveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {careersOpenRoles.map((role, index) => (
              <ScrollReveal
                key={role.title}
                delay={index * 0.08}
                className="flex h-full flex-col rounded-3xl border border-border-subtle p-8"
              >
                <h3 className="font-display text-xl font-semibold text-navy-900">
                  {role.title}
                </h3>
                <p className="mt-2 inline-flex w-fit rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-700">
                  {role.type}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-grey-500">
                  {role.blurb}
                </p>
                <Link
                  href={`/apply?role=${encodeURIComponent(role.title)}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  Apply for this role
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
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
              Built for caregivers who want more than a shift list.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-grey-500">
              We know retention starts with respect. That&apos;s why every
              caregiver on our roster gets a real staffing coordinator,
              transparent pay, and a say in the schedule that works for
              them.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_-24px_rgba(11,42,74,0.18)] sm:p-10">
            <ul className="space-y-5">
              {careerBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-4">
                  <StarBadge className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" />
                  <span className="text-sm leading-relaxed text-grey-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-navy-900 py-20 text-white lg:py-24">
        <ScrollReveal className="container-page flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Ready to bring your license to a team that has your back?
            </h2>
            <p className="mt-3 max-w-md text-white/75">
              Send us your resume and preferred availability. Our team
              reviews every application personally.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link
              href="/apply"
              className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-150 hover:bg-white"
            >
              Apply Now
            </Link>
            <a
              href={`mailto:${site.careersEmail}`}
              className="text-sm font-semibold text-white underline decoration-gold-400 decoration-2 underline-offset-4"
            >
              Or email {site.careersEmail}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
