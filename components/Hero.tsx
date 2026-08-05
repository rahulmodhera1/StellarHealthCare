import Image from "next/image";
import Link from "next/link";
import { ConstellationMark } from "./StarMotif";
import { campaignImages } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_45%]">
        <div className="relative z-10 flex flex-col justify-center gap-7 px-6 pb-16 pt-32 sm:px-10 sm:pt-36 lg:px-14 lg:pb-24 lg:pt-40 xl:pl-20">
          <ConstellationMark className="absolute -left-4 top-16 h-28 w-40 text-white/20 lg:-left-2 lg:top-10" />

          <span className="h-px w-12 bg-gold-400" aria-hidden="true" />

          <h1 className="max-w-xl text-[2.6rem] font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            Exceptional care,{" "}
            <span className="text-gold-400">whenever and wherever</span> it&apos;s needed.
          </h1>

          <p className="max-w-md text-lg leading-relaxed text-white/75">
            Stellar HealthCare Staffing places vetted RNs, RPNs, and PSWs
            with hospitals and long-term care homes, and brings compassionate
            in-home care directly to families across the Greater Toronto
            Area.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact?inquiry=staffing"
              className="rounded-full bg-teal-600 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg transition-colors duration-150 hover:bg-teal-500"
            >
              Request Staffing
            </Link>
            <Link
              href="/contact?inquiry=homecare"
              className="rounded-full border border-white/30 px-7 py-3.5 text-center text-sm font-semibold text-white transition-colors duration-150 hover:border-white hover:bg-white/10"
            >
              Get Home Care
            </Link>
          </div>

          <p className="text-sm text-white/50">
            Licensed, insured and bonded. Care coordination available 24/7.
          </p>
        </div>

        <div className="relative h-[340px] sm:h-[440px] lg:h-auto">
          <Image
            src={campaignImages.heroHome.src}
            alt={campaignImages.heroHome.alt}
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-navy-900 to-transparent lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-navy-900/70 to-transparent lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
