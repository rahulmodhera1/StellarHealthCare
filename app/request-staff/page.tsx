import RequestStaffForm from "@/components/RequestStaffForm";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { StarBadge } from "@/components/StarMotif";
import { site } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Request Staff",
  description:
    "Hospitals and long-term care homes across Toronto and the GTA can request RN, RPN, and PSW coverage from Stellar HealthCare Staffing here.",
  path: "/request-staff",
});

const nextSteps = [
  "A staffing coordinator reviews your request right away",
  "We match candidates against your unit's specific clinical needs",
  "You get a call to confirm coverage, usually within hours",
  "Your dedicated coordinator stays your point of contact going forward",
];

export default function RequestStaffPage() {
  return (
    <>
      <PageHero
        title="Request staff for your facility."
        description="Hospitals, long-term care homes, and retirement residences can tell us what they need here. Most requests are matched within hours, not days."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal className="rounded-3xl border border-border-subtle p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Staffing request
            </h2>
            <p className="mt-2 text-sm text-grey-500">
              The more detail you can give us, the faster we can match the
              right professional to your unit.
            </p>
            <div className="mt-8">
              <RequestStaffForm />
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
                  Need coverage right now?
                </h2>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-grey-500">
                Our care coordination line runs 24/7 for urgent shift gaps.
                Call{" "}
                <a href={site.phoneHref} className="font-semibold text-teal-600 hover:text-teal-700">
                  {site.phone}
                </a>{" "}
                and we&apos;ll start working on it immediately.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
