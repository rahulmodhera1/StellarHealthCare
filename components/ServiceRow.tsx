import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";
import ScrollReveal from "./ScrollReveal";
import type { Service } from "@/lib/constants";

const audienceLabel: Record<Service["audience"], string> = {
  facilities: "For Facilities",
  families: "For Families",
  both: "For Facilities & Families",
};

export default function ServiceRow({
  service,
  reverse = false,
}: {
  service: Service;
  reverse?: boolean;
}) {
  return (
    <ScrollReveal
      id={service.slug}
      className="scroll-mt-28 grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
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
      </div>

      <div className={clsx(reverse && "lg:order-1")}>
        <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-teal-700">
          {audienceLabel[service.audience]}
        </span>
        <h3 className="mt-4 font-display text-2xl font-semibold text-navy-900 sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-grey-500">
          {service.summary}
        </p>
        <ul className="mt-6 space-y-3">
          {service.points.slice(0, 3).map((point) => (
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
          href={`/services#${service.slug}`}
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-teal-600 transition-colors hover:text-teal-700"
        >
          Learn more about {service.shortTitle}
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
    </ScrollReveal>
  );
}
