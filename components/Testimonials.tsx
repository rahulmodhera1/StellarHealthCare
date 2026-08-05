import ScrollReveal from "./ScrollReveal";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-page">
        <ScrollReveal className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-600">
            What clients and partners say
          </span>
          <h2 className="mt-4 font-display text-3xl font-semibold text-navy-900 sm:text-4xl">
            Trusted across the GTA&apos;s hospitals, care homes, and homes.
          </h2>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.08}>
              <TestimonialCard {...testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-grey-500">
          Placeholder testimonials shown for demonstration — replace with
          verified client and partner quotes before launch.
        </p>
      </div>
    </section>
  );
}
