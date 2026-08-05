import type { ReactNode } from "react";
import { ConstellationMark } from "./StarMotif";

export default function PageHero({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-16 pt-32 text-white sm:pt-36 lg:pb-20 lg:pt-40">
      <ConstellationMark className="pointer-events-none absolute -right-6 top-10 h-32 w-48 text-white/20 sm:right-4" />
      <div className="container-page relative">
        <div className="max-w-2xl">
          <span className="mb-5 block h-px w-12 bg-gold-400" aria-hidden="true" />
          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/75">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>
    </section>
  );
}
