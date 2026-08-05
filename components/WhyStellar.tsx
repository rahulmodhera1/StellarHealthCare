import ScrollReveal from "./ScrollReveal";
import { StarBadge } from "./StarMotif";
import { credentialingSteps, differentiators } from "@/lib/constants";

export default function WhyStellar() {
  return (
    <section className="bg-surface-muted py-20 lg:py-28">
      <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
            Why Stellar
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Care you can trust, from a team that vets its own.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-grey-500">
            Every RN, RPN, and PSW on the Stellar roster goes through the
            same rigorous credentialing process before they ever meet a
            client or step onto a unit — because trust isn&apos;t something
            we ask facilities and families to take on faith.
          </p>

          <ol className="mt-8 space-y-4">
            {credentialingSteps.map((step, index) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-navy-900 text-xs font-semibold text-white">
                  {index + 1}
                </span>
                <span className="pt-1 text-sm text-grey-700">{step}</span>
              </li>
            ))}
          </ol>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <div className="rounded-3xl bg-white p-8 shadow-[0_20px_60px_-24px_rgba(11,42,74,0.18)] sm:p-10">
            <h3 className="font-display text-xl font-semibold text-navy-900">
              What sets us apart
            </h3>
            <ul className="mt-6 space-y-6">
              {differentiators.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <StarBadge className="mt-1 h-5 w-5 shrink-0 text-teal-600" />
                  <div>
                    <p className="font-semibold text-navy-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-grey-500">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
