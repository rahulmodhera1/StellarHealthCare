import { Suspense } from "react";
import ContactForm from "@/components/ContactForm";
import MapEmbed from "@/components/MapEmbed";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import { site } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Reach Stellar HealthCare Staffing at 415 Oakdale Rd, North York, ON, or send a message about facility staffing or home care for your family.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about the care you need."
        description="Whether you're staffing a unit or bringing care home for a family member, tell us what's going on and our team will follow up within one business day."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <ScrollReveal className="rounded-3xl border border-border-subtle p-8 sm:p-10">
            <h2 className="font-display text-2xl font-semibold text-navy-900">
              Send us a message
            </h2>
            <p className="mt-2 text-sm text-grey-500">
              Fields marked required help us route your request to the right
              coordinator faster.
            </p>
            <div className="mt-8">
              <Suspense fallback={null}>
                <ContactForm />
              </Suspense>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                Visit or call us
              </h2>
              <address className="mt-4 space-y-3 text-sm not-italic text-grey-700">
                <p>{site.address.full}</p>
                <p>
                  <a href={site.phoneHref} className="font-semibold text-teal-600 hover:text-teal-700">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${site.email}`} className="font-semibold text-teal-600 hover:text-teal-700">
                    {site.email}
                  </a>
                </p>
                <p className="text-grey-500">{site.hours}</p>
              </address>
            </div>

            <div className="h-72 overflow-hidden rounded-3xl border border-border-subtle sm:h-80">
              <MapEmbed />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
