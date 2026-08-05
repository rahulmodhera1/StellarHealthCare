import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import ServiceDetail from "@/components/ServiceDetail";
import { services } from "@/lib/constants";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Hospital & long-term care staffing, private home care, pediatric & complex care, and palliative & respite care across the Greater Toronto Area.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Four ways we bring the right care to the right place."
        description="From filling a single overnight shift to becoming a family's long-term home care partner, every Stellar placement starts with the same vetting standard."
      />

      <section className="py-20 lg:py-28">
        <div className="container-page space-y-20 lg:space-y-24">
          {services.map((service, index) => (
            <ServiceDetail key={service.slug} service={service} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
