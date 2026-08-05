import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import { site } from "@/lib/constants";
import { campaignImages } from "@/lib/images";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 text-white lg:py-28">
      <Image
        src={campaignImages.ctaBand.src}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-30"
        loading="lazy"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/90 to-teal-700/80"
      />
      <ScrollReveal className="container-page relative flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-3 max-w-md text-white/75">
            Talk to our care team today. Whether it&apos;s a facility staffing
            request or a home care consultation, we&apos;re ready when you are.
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3.5 2.5h2.2l1 3-1.6 1.1a8 8 0 0 0 3.8 3.8l1.1-1.6 3 1v2.2c0 .8-.7 1.5-1.5 1.4C6.8 13 3 9.2 2.1 4.5c-.1-.8.6-1.5 1.4-1.5Z"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-150 hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
