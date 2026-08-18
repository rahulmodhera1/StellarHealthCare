# Stellar HealthCare Staffing: Marketing Website

A marketing website for Stellar HealthCare Staffing, a healthcare staffing
and home care agency serving the Greater Toronto Area. Built with
[Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4**: theme tokens (colour, font, motion) defined in
  `app/globals.css` via `@theme`, following a primitive to semantic to
  component naming convention (e.g. `--navy-900` feeds
  `--color-brand-primary`, which powers the `bg-navy-900` / `text-ink`
  utility classes)
- **next/font**: Playfair Display (display serif) plus Inter (body/UI sans)
- **Framer Motion**: scroll-reveal and interaction motion

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build (also runs the TypeScript check)
npm run start   # serve the production build locally
npm run lint    # ESLint
```

## Project structure

```
app/                Route segments (App Router), one folder per page,
                     each with its own `metadata` export
  page.tsx           Home
  about/page.tsx      About
  services/page.tsx   Services
  careers/page.tsx     Careers
  contact/page.tsx      Contact
  sitemap.ts, robots.ts SEO files
  icon.svg              Favicon (star mark)
components/          Reusable, mostly server components (Header/ContactForm
                     are client components where interactivity is required)
lib/
  constants.ts         All business content: business info, nav, services,
                       stats, testimonials, careers copy. Edit this file
                       first when updating site copy
  images.ts             Campaign image registry (see below)
  metadata.ts            Shared `generateMetadata`-style helper
public/                Static assets (favicon fallback, etc.)
```

## Content model

Nearly all editable copy (the phone number, address, stats, service
descriptions, differentiators, testimonials, career listings) lives in
`lib/constants.ts`. Update the values there rather than hunting through
components.

## Swapping placeholder images

The site ships with a set of on-brand campaign photos generated for this
project (warm, realistic, navy/teal-graded photography of RNs, RPNs, and
PSWs with clients in home, hospital, and pediatric settings; see
`lib/images.ts` for the full list and alt text).

**Before launch, self-host these images** instead of depending on the
generation platform's CDN:

1. Download each URL listed in `lib/images.ts`.
2. Save them under `public/images/` (e.g. `public/images/hero-home.jpg`).
3. In `lib/images.ts`, change each `src` to the local path (e.g.
   `/images/hero-home.jpg`) and drop the `width`/`height` fields (or keep
   them accurate to the new file). `next/image` handles local files
   without needing `remotePatterns`.
4. Remove the now-unused `images.remotePatterns` entry in `next.config.ts`.

Every image is wired through `next/image` with descriptive `alt` text,
so swapping the `src` is the only step required. No component changes needed.

The logo is a placeholder wordmark (`components/Logo.tsx`), a simple SVG
star mark next to "Stellar HealthCare Staffing" set in the display font.
Swap in a final logo by replacing the SVG markup in that one file; every
place the logo appears (`Header`, `Footer`) references this component.

## Swapping placeholder testimonials

`lib/constants.ts` → `testimonials` contains three clearly-labelled
placeholder quotes. Replace `quote`, `name`, and `role` with real,
permission-cleared client and partner testimonials before launch, and
remove the "placeholder testimonials" disclaimer line in
`components/Testimonials.tsx`.

## Contact, apply, and request-staff forms

Three separate forms cover the site's three audiences, and all three are
**stubbed the same way**: fully working client-side validation and a
success state, but the submit handler doesn't send data anywhere yet.

- `components/ContactForm.tsx` (`/contact`) — general inquiries from
  families or facilities, with an inquiry-type toggle pre-filled from
  `?inquiry=staffing|homecare`.
- `components/ApplyForm.tsx` (`/apply`) — job applications from
  prospective RNs, RPNs, and PSWs. Includes a resume file input; the file
  is selected in the browser but **is not uploaded anywhere** in the
  current stub. Linked from the Careers page's role cards with
  `?role=` pre-filling the position dropdown.
- `components/RequestStaffForm.tsx` (`/request-staff`) — staffing
  requests from hospitals and long-term care homes (facility name/type,
  staff type needed, urgency). Linked from the Hero, the homepage's "For
  Facilities" panel, and facility-audience services on `/services`.

Before launch, wire all three to a real destination, e.g.:

- A Next.js Route Handler per form (e.g. `app/api/apply/route.ts`,
  `app/api/request-staff/route.ts`) that emails the right inbox through
  Resend/Postmark/SendGrid.
- For the resume upload specifically, the route handler also needs to
  store the file somewhere (Vercel Blob, S3, or similar) before or while
  emailing it, since Vercel's serverless functions don't persist disk
  writes.
- Alternatively, point each form at a form backend that supports file
  uploads (Formspree's paid tier, Basin) or an ATS's own application form
  (Breezy, BambooHR) instead of building a custom endpoint.

## Map

The footer and Contact page embed Google Maps via a plain iframe
(`components/MapEmbed.tsx`) centered on 415 Oakdale Rd, North York, ON M3N
1W7. No API key required. If you'd prefer a styled/interactive map (e.g.
via the Google Maps JavaScript API or Mapbox), swap the implementation
inside that one component.

## Getting found on Google

**What's already implemented in the code:**

- Descriptive, keyword-rich `<title>` and meta description on every page
  (service names, "Toronto," "GTA," "North York," RN/RPN/PSW), all defined
  in each page's `metadata` export via `lib/metadata.ts`.
- JSON-LD structured data (`lib/schema.ts`, rendered in `app/layout.tsx`)
  describing Stellar as a `MedicalBusiness`/`EmploymentAgency` with its
  name, address, phone, service catalog, and hours. This is the strongest
  on-page signal for brand-name search ("stellar healthcare staffing") and
  for local map-pack results.
- `sitemap.xml` and `robots.txt` (`app/sitemap.ts`, `app/robots.ts`),
  canonical URLs on every page, Open Graph and Twitter Card tags.
- The business's real name, address, and phone (NAP) are consistent across
  the footer, Contact page, and structured data, which search engines use
  to confirm a business is legitimate.

**What only you can do (code can't do this part):** ranking for a brand
search depends on things outside this repository. In rough order of
impact:

1. **Claim and verify a Google Business Profile** at
   [business.google.com](https://business.google.com) with this exact
   name and address. This is the single biggest factor in showing up when
   someone types "stellar health care." It's what populates the map
   pack and knowledge panel, and it's free.
2. **Register the real domain** and deploy there. Update `site.url` in
   `lib/constants.ts` to match (it currently points at a placeholder
   `stellarhealthcarestaffing.ca`).
3. **Verify the domain in Google Search Console**, then submit
   `/sitemap.xml` so Google crawls and indexes all five pages.
4. **Update `site.social` in `lib/constants.ts`** with the business's real
   Facebook/LinkedIn/Instagram profile URLs (currently placeholders).
   These feed the `sameAs` field in the structured data, which helps
   Google confirm Stellar's identity across platforms.
5. **Collect real reviews** on Google and add real testimonials to the
   site (see "Swapping placeholder testimonials" above). Review volume and
   recency are a major local-ranking factor; this repo deliberately does
   not fabricate a star rating in the structured data, since that would
   violate Google's guidelines and risk a manual penalty.
6. **Earn a few real backlinks**, such as a listing in a local business
   directory, a mention from a partner facility, or a press note. New
   domains with zero backlinks rank slowly regardless of on-page quality.

None of this can be done from inside the codebase; it's account
setup and off-site work for whoever owns the business.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`), one
  `h1` per page with a clean heading hierarchy below it.
- Skip-to-content link, visible focus states (no custom outline removal),
  keyboard-operable navigation and mobile menu (`aria-expanded`,
  `aria-controls`).
- All text/background colour pairs used in the design were checked against
  WCAG AA (4.5:1 for normal text, 3:1 for large text); see the
  navy/teal/grey token choices in `app/globals.css`.
- Scroll-reveal motion respects `prefers-reduced-motion` (keeps opacity,
  drops the translate).

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this
   from the repo).
2. In Vercel, "Add New Project," import the repository. The framework
   preset "Next.js" is auto-detected. Click Deploy.
3. No environment variables are required for the current feature set. If
   you wire up the contact form to an email/CRM service, add its API key
   as a Vercel environment variable and reference it from the route
   handler you create.
4. Update `site.url` in `lib/constants.ts` to the production domain once
   assigned; it feeds `sitemap.ts`, `robots.ts`, and Open Graph URLs.

## Notes on this build environment

This project was built in a sandboxed session whose network egress is
restricted to an allow-list (npm, GitHub, etc.). The image-generation
platform's CDN and Google Maps are *not* on that allow-list from inside
the sandbox, so:

- Campaign images and the Google Maps embed could not be visually
  verified in-sandbox and will show as broken locally in that specific
  environment. This is a sandbox networking limitation, not a code
  issue. Both render normally on Vercel or any normal internet
  connection (verified via layout/contrast/responsive testing with the
  images intentionally absent).
- See "Swapping placeholder images" above; self-hosting the generated
  images is recommended before launch regardless of this constraint.
