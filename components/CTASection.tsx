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
            Talk to our care team today — for a facility staffing request or
            a home care consultation, we&apos;re ready when you are.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={site.phoneHref}
            className="text-lg font-semibold text-white underline decoration-teal-400 decoration-2 underline-offset-4"
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-teal-500 px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors duration-150 hover:bg-white"
          >
            Contact Us
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}
