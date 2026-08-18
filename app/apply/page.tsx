import { Suspense } from "react";
import ApplyForm from "@/components/ApplyForm";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { StarBadge } from "@/components/StarMotif";
import { site } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Apply Now",
  description:
    "Apply to join Stellar HealthCare Staffing's roster of RNs, RPNs, and PSWs across Toronto and the GTA. Submit your resume and preferred position online.",
  path: "/apply",
});

const nextSteps = [
  "Our recruiting team reviews your application within 2 business days",
  "A short phone or video call to talk through your experience and availability",
  "Reference and licence verification",
  "You're matched to your first placement, with ongoing support from a dedicated coordinator",
];

export default function ApplyPage() {
  return (
    <>
      <PageHero
        title="Apply to join the Stellar roster."
        description="Tell us about yourself and upload your resume. Our recruiting team reads every application and typically responds within two business days."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal className="rounded-3xl border border-border-subtle p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Application
            </h2>
            <p className="mt-2 text-sm text-grey-500">
              Fields marked required help us route your application to the
              right recruiter faster.
            </p>
            <div className="mt-8">
              <Suspense fallback={null}>
                <ApplyForm />
              </Suspense>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-8">
            <div className="rounded-3xl bg-surface-muted p-8">
              <h2 className="font-display text-xl font-semibold text-navy-900">
                What happens next
              </h2>
              <ul className="mt-6 space-y-5">
                {nextSteps.map((step, index) => (
                  <li key={step} className="flex items-start gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                      {index + 1}
                    </span>
                    <span className="pt-1 text-sm leading-relaxed text-grey-700">
                      {step}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border-subtle p-8">
              <div className="flex items-center gap-3">
                <StarBadge className="h-5 w-5 text-teal-600" />
                <h2 className="font-display text-lg font-semibold text-navy-900">
                  Prefer to reach out directly?
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-grey-500">
                Email your resume to{" "}
                <a
                  href={`mailto:${site.careersEmail}`}
                  className="font-semibold text-teal-600 hover:text-teal-700"
                >
                  {site.careersEmail}
                </a>{" "}
                or call {""}
                <a href={site.phoneHref} className="font-semibold text-teal-600 hover:text-teal-700">
                  {site.phone}
                </a>{" "}
                to speak with our recruiting team.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
