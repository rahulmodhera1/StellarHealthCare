import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SplitCTA from "@/components/SplitCTA";
import StatBar from "@/components/StatBar";
import Testimonials from "@/components/Testimonials";
import WhyStellar from "@/components/WhyStellar";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Stellar HealthCare Staffing | Hospital Staffing & Home Care in North York, GTA",
  description:
    "Vetted RNs, RPNs, and PSWs for hospitals and long-term care homes, plus compassionate in-home care for families across the Greater Toronto Area. 24/7 availability.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatBar />
      <ServicesSection />
      <WhyStellar />
      <SplitCTA />
      <Testimonials />
      <CTASection />
    </>
  );
}
