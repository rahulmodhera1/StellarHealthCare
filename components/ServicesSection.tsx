import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import ServiceRow from "./ServiceRow";
import { services } from "@/lib/constants";

export default function ServicesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <ScrollReveal className="max-w-xl">
          <h2 className="font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            One roster, four ways to get the right care in place.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-grey-500">
            Whether you&apos;re a unit manager filling tonight&apos;s shift
            or a family bringing care home for the first time, Stellar
            matches the right professional to the moment.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {services.map((service, index) => (
            <ServiceRow key={service.slug} service={service} reverse={index % 2 === 1} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-navy-900/15 px-6 py-3 text-sm font-semibold text-navy-900 transition-colors hover:border-teal-600 hover:text-teal-600"
          >
            View all services in detail
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
        </div>
      </div>
    </section>
  );
}
