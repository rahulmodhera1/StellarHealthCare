import type { Testimonial } from "@/lib/constants";

export default function TestimonialCard({ quote, name, role }: Testimonial) {
  return (
    <figure className="flex h-full flex-col rounded-3xl border border-border-subtle bg-white p-8">
      <svg width="28" height="22" viewBox="0 0 28 22" fill="none" aria-hidden="true" className="text-teal-500">
        <path
          d="M11.6 0 8.4 9.2H12.4V22H0V10.4L4.8 0H11.6ZM27.2 0 24 9.2H28V22H15.6V10.4L20.4 0H27.2Z"
          fill="currentColor"
          fillOpacity="0.18"
        />
      </svg>
      <blockquote className="mt-4 flex-1 text-[0.975rem] leading-relaxed text-grey-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6 border-t border-border-subtle pt-5">
        <p className="font-semibold text-navy-900">{name}</p>
        <p className="mt-0.5 text-sm text-grey-500">{role}</p>
      </figcaption>
    </figure>
  );
}
