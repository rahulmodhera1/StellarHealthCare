import type { ReactNode } from "react";
import { ConstellationMark } from "./StarMotif";

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pb-16 pt-32 text-white sm:pt-36 lg:pb-20 lg:pt-40">
      <ConstellationMark className="pointer-events-none absolute -right-6 top-10 h-32 w-48 text-teal-400 opacity-40 sm:right-4" />
      <div className="container-page relative max-w-2xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-gold-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-gold-400">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-white/75">
          {description}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
