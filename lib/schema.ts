import { services, site } from "./constants";
import { campaignImages } from "./images";

/**
 * Organization/LocalBusiness structured data (schema.org JSON-LD). This is
 * the strongest on-page signal for brand-name search ("stellar healthcare
 * staffing") and for local map-pack results; it does not by itself
 * guarantee ranking, which also depends on indexing, backlinks, and a
 * verified Google Business Profile (see README → "Getting found on Google").
 */
export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "EmploymentAgency"],
    name: site.name,
    alternateName: "Stellar Health Care Staffing",
    description: site.description,
    url: site.url,
    logo: `${site.url}/icon.svg`,
    image: campaignImages.heroHome.src,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: "CA",
    },
    areaServed: [
      { "@type": "City", name: "Toronto" },
      { "@type": "City", name: "North York" },
      { "@type": "AdministrativeArea", name: "Greater Toronto Area" },
    ],
    sameAs: Object.values(site.social),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "17:30",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Healthcare Staffing and Home Care Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.summary,
          areaServed: "Greater Toronto Area",
        },
      })),
    },
  };
}
