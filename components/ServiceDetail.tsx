import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import ScrollReveal from "./ScrollReveal";
import type { Service } from "@/lib/constants";

const audienceLabel: Record<Service["audience"], string> = {
  facilities: "For Facilities",
  families: "For Families",
  both: "For Facilities and Families",
};

const inquiryFor: Record<Service["audience"], "staffing" | "homecare"> = {
  facilities: "staffing",
  families: "homecare",
  both: "staffing",
};

export default function ServiceDetail({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <ScrollReveal
      id={service.slug}
      className="scroll-mt-28 grid grid-cols-1 items-center gap-10 border-b border-border-subtle pb-20 last:border-b-0 lg:grid-cols-2 lg:gap-16"
    >
      <div
        className={clsx(
          "relative aspect-[4/3] overflow-hidden rounded-3xl",
          reverse && "lg:order-2",
        )}
      >
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          loading="lazy"
        />
        <span className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-navy-900 backdrop-blur-sm">
          {audienceLabel[service.audience]}
        </span>
      </div>

      <div className={clsx(reverse && "lg:order-1")}>
        <h2 className="font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
          {service.title}
        </h2>
        <p className="mt-4 max-w-md text-base leading-relaxed text-grey-500">
          {service.description}
        </p>
        <ul className="mt-6 space-y-3">
          {service.points.map((point) => (
            <li key={point} className="flex items-start gap-3 text-sm text-grey-700">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                aria-hidden="true"
                className="mt-0.5 shrink-0 text-teal-600"
              >
                <circle cx="9" cy="9" r="9" fill="currentColor" fillOpacity="0.12" />
                <path
                  d="M5.5 9.3 7.8 11.5 12.5 6.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {point}
            </li>
          ))}
        </ul>
        <Link
          href={`/contact?inquiry=${inquiryFor[service.audience]}`}
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-500"
        >
          Ask about {service.shortTitle}
        </Link>
      </div>
    </ScrollReveal>
  );
}
