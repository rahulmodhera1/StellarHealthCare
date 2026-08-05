import CTASection from "@/components/CTASection";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import SplitCTA from "@/components/SplitCTA";
import StatBar from "@/components/StatBar";
import Testimonials from "@/components/Testimonials";
import WhyStellar from "@/components/WhyStellar";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Stellar HealthCare Staffing | Toronto Healthcare Staffing and Home Care",
  description:
    "Vetted RNs, RPNs, and PSWs for hospital and long-term care staffing, plus compassionate in-home care for families across Toronto, North York, and the Greater Toronto Area. Licensed, insured, and available 24/7.",
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
