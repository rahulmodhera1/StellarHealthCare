import { campaignImages } from "./images";

export const site = {
  name: "Stellar HealthCare Staffing",
  shortName: "Stellar HealthCare",
  url: "https://www.stellarhealthcarestaffing.ca",
  description:
    "Stellar HealthCare Staffing connects hospitals, long-term care homes, and families across the Greater Toronto Area with vetted RNs, RPNs, and PSWs, plus direct in-home care for adults, seniors, and pediatric clients.",
  phone: "(416) 555-0142",
  phoneHref: "tel:+14165550142",
  email: "info@stellarhealthcarestaffing.ca",
  careersEmail: "careers@stellarhealthcarestaffing.ca",
  address: {
    street: "415 Oakdale Rd",
    city: "North York",
    region: "ON",
    postalCode: "M3N 1W7",
    country: "Canada",
    full: "415 Oakdale Rd, North York, ON M3N 1W7",
  },
  hours: "Office: Mon–Fri, 8:30am–5:30pm · Care coordination available 24/7",
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  points: string[];
  image: (typeof campaignImages)[keyof typeof campaignImages];
  audience: "facilities" | "families" | "both";
};

export const services: Service[] = [
  {
    slug: "hospital-facility-staffing",
    title: "Hospital & Long-Term Care Staffing",
    shortTitle: "Hospital & LTC Staffing",
    summary:
      "Credentialed RNs and RPNs deployed to hospitals, long-term care homes, and retirement residences — on short notice, without compromising on quality.",
    description:
      "We supplement your unit or facility with fully licensed, background-checked RNs and RPNs who are ready to integrate into your existing care teams. From single-shift coverage to long-term contracts, our staffing coordinators match clinical skill sets to your unit's specific needs, so your standard of care never dips.",
    points: [
      "Per-diem, contract, and permanent placement options",
      "Rapid response for last-minute shift gaps",
      "Nurses vetted for unit-specific clinical competencies",
      "Dedicated staffing coordinator for every facility account",
    ],
    image: campaignImages.serviceHospital,
    audience: "facilities",
  },
  {
    slug: "private-home-care",
    title: "Private Home Care",
    shortTitle: "Private Home Care",
    summary:
      "Compassionate PSWs and nurses providing companionship, personal care, and clinical support in the comfort of home.",
    description:
      "For families who want a loved one to stay independent at home, we match a caregiver to your household — not just a task list. Support ranges from a few hours of companionship and light housekeeping to full personal care and medication support, scheduled around your family's routine.",
    points: [
      "Personalized care plans built around your family's routine",
      "Consistent, familiar caregivers — not a rotating roster",
      "Support with bathing, mobility, meals, and medication reminders",
      "Flexible scheduling, from a few hours a week to live-in care",
    ],
    image: campaignImages.serviceHomeCare,
    audience: "families",
  },
  {
    slug: "pediatric-complex-care",
    title: "Pediatric & Complex Care",
    shortTitle: "Pediatric & Complex Care",
    summary:
      "Specially trained nurses supporting children and adults with complex medical needs, ventilator care, and developmental support.",
    description:
      "Complex and pediatric care asks for more than clinical competence — it asks for patience and a genuine connection with the child and family. Our pediatric and complex-care nurses hold specialized training in ventilator management, tracheostomy care, feeding tubes, and developmental support, and we take extra care matching personality as well as skill.",
    points: [
      "Nurses trained in ventilator, trach, and G-tube care",
      "Experience with developmental and behavioural support needs",
      "Consistent caregiver matching for children who thrive on routine",
      "Close coordination with your child's care team and specialists",
    ],
    image: campaignImages.servicePediatric,
    audience: "both",
  },
  {
    slug: "palliative-respite-care",
    title: "Palliative & Respite Care",
    shortTitle: "Palliative & Respite Care",
    summary:
      "Dignified end-of-life support for patients and families, and short-term respite so primary caregivers can rest.",
    description:
      "Palliative care is about comfort, dignity, and presence. Our nurses and PSWs provide symptom management, emotional support, and hands-on care in the home or facility, working alongside your palliative care team. We also offer respite bookings — from a single afternoon to several days — so family caregivers can rest without worry.",
    points: [
      "Comfort-focused care coordinated with your palliative team",
      "Emotional support for patients and family members alike",
      "Respite bookings from a few hours to multi-day coverage",
      "Overnight and weekend availability",
    ],
    image: campaignImages.servicePalliative,
    audience: "families",
  },
];

export const stats = [
  { value: "12+", label: "Years serving the GTA" },
  { value: "350+", label: "Vetted professionals on roster" },
  { value: "80,000+", label: "Care hours delivered annually" },
  { value: "<2 hrs", label: "Average facility response time" },
] as const;

export const differentiators = [
  {
    title: "24/7 availability",
    description:
      "Our care coordination line is staffed around the clock for urgent facility gaps and family care needs.",
  },
  {
    title: "Rigorous vetting",
    description:
      "Every caregiver clears a criminal background check, reference verification, and a competency assessment before joining our roster.",
  },
  {
    title: "Personalized care matching",
    description:
      "We match on clinical skill, personality, and language — not just the next available name on a list.",
  },
  {
    title: "Bilingual staff",
    description:
      "A roster spanning English, French, and a wide range of community languages across the GTA.",
  },
  {
    title: "Insured & bonded",
    description:
      "Every placement is backed by liability insurance and bonding, so facilities and families are fully protected.",
  },
  {
    title: "Rapid placement",
    description:
      "Most facility shift requests are filled within hours; new home care clients are typically matched within 48 hours.",
  },
] as const;

export const credentialingSteps = [
  "Criminal background and vulnerable sector checks",
  "Verification of nursing licence or PSW certification in good standing",
  "In-person or video competency interview with our clinical lead",
  "Reference checks with two most recent employers or placements",
  "Ongoing continuing-education and skills refreshers",
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// Placeholder testimonials — replace with real client and facility quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Stellar filled two overnight RN shifts for us with less than four hours' notice, and both nurses were fully briefed and ready to go. That kind of reliability is rare.",
    name: "Marianne Costa",
    role: "Director of Care, long-term care facility · Placeholder testimonial",
  },
  {
    quote:
      "The PSW they matched us with for my father has become part of our family. She knows his routine better than we do at this point, and he genuinely looks forward to her visits.",
    name: "David Oyelaran",
    role: "Home care client's son, Etobicoke · Placeholder testimonial",
  },
  {
    quote:
      "As a unit manager, what I value most is that I'm not re-explaining our protocols every time. Stellar's staffing coordinator actually remembers our unit's needs.",
    name: "Priya Nandakumar",
    role: "Unit Manager, GTA hospital · Placeholder testimonial",
  },
] as const;

export const careersOpenRoles = [
  {
    title: "Registered Nurse (RN)",
    type: "Full-time, Part-time & Per-diem",
    blurb:
      "Hospital, long-term care, and community placements across the GTA. Competitive rates, flexible scheduling.",
  },
  {
    title: "Registered Practical Nurse (RPN)",
    type: "Full-time, Part-time & Per-diem",
    blurb:
      "Facility and home care placements available. New graduates welcome with a supported onboarding period.",
  },
  {
    title: "Personal Support Worker (PSW)",
    type: "Full-time, Part-time & Per-diem",
    blurb:
      "In-home and facility roles. Certificate required; complex care and pediatric training an asset.",
  },
] as const;

export const careerBenefits = [
  "Competitive, transparent pay rates with weekly deposits",
  "Flexible scheduling that works around your life",
  "A dedicated staffing coordinator, not a call centre",
  "Ongoing training and continuing-education support",
  "Referral bonuses for bringing great caregivers to our roster",
  "A genuinely supportive, tight-knit team culture",
] as const;

export const aboutValues = [
  {
    title: "Person-first matching",
    description:
      "We match on personality and language, not just a certification — because the right fit is what makes care work long-term.",
  },
  {
    title: "Clinical rigor",
    description:
      "Every caregiver is licence-verified and competency-assessed by our clinical lead before their first placement.",
  },
  {
    title: "Community roots",
    description:
      "Based in North York, our coordinators know the GTA's hospitals, care homes, and neighbourhoods first-hand.",
  },
  {
    title: "Always-on support",
    description:
      "Our care coordination line runs 24/7, so a gap in coverage or a change in circumstances never has to wait until Monday.",
  },
] as const;
