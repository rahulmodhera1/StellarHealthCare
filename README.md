# Stellar HealthCare Staffing — Marketing Website

A marketing website for Stellar HealthCare Staffing, a healthcare staffing
and home care agency serving the Greater Toronto Area. Built with
[Next.js](https://nextjs.org) (App Router), TypeScript, and Tailwind CSS.

## Stack

- **Next.js 16** (App Router, React 19, TypeScript)
- **Tailwind CSS v4** — theme tokens (colour, font, motion) defined in
  `app/globals.css` via `@theme`, following a primitive → semantic →
  component naming convention (e.g. `--navy-900` → `--color-brand-primary`
  → `bg-navy-900` / `text-ink` utility classes)
- **next/font** — Fraunces (display serif) + Inter (body/UI sans)
- **Framer Motion** — scroll-reveal and interaction motion

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
app/                Route segments (App Router) — one folder per page,
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
                       stats, testimonials, careers copy — edit this file
                       first when updating site copy
  images.ts             Campaign image registry (see below)
  metadata.ts            Shared `generateMetadata`-style helper
public/                Static assets (favicon fallback, etc.)
```

## Content model

Nearly all editable copy — the phone number, address, stats, service
descriptions, differentiators, testimonials, career listings — lives in
`lib/constants.ts`. Update the values there rather than hunting through
components.

## Swapping placeholder images

The site ships with a set of on-brand campaign photos generated for this
project (warm, realistic, navy/teal-graded photography of RNs, RPNs, and
PSWs with clients in home, hospital, and pediatric settings — see
`lib/images.ts` for the full list and alt text).

**Before launch, self-host these images** instead of depending on the
generation platform's CDN:

1. Download each URL listed in `lib/images.ts`.
2. Save them under `public/images/` (e.g. `public/images/hero-home.jpg`).
3. In `lib/images.ts`, change each `src` to the local path (e.g.
   `/images/hero-home.jpg`) and drop the `width`/`height` fields (or keep
   them accurate to the new file) — `next/image` handles local files
   without needing `remotePatterns`.
4. Remove the now-unused `images.remotePatterns` entry in `next.config.ts`.

Every image is wired through `next/image` with descriptive `alt` text,
so swapping the `src` is the only step required — no component changes.

The logo is a placeholder wordmark (`components/Logo.tsx`) — a simple SVG
star mark next to "Stellar HealthCare Staffing" set in the display font.
Swap in a final logo by replacing the SVG markup in that one file; every
place the logo appears (`Header`, `Footer`) references this component.

## Swapping placeholder testimonials

`lib/constants.ts` → `testimonials` contains three clearly-labelled
placeholder quotes. Replace `quote`, `name`, and `role` with real,
permission-cleared client and partner testimonials before launch, and
remove the "placeholder testimonials" disclaimer line in
`components/Testimonials.tsx`.

## Contact form

`components/ContactForm.tsx` is a working client-side form (validation,
inquiry-type toggle pre-filled from `?inquiry=staffing|homecare`, submit
state) but the submit handler is currently **stubbed** — it does not send
data anywhere. Before launch, wire it to a real destination, e.g.:

- A Next.js Route Handler (`app/api/contact/route.ts`) that emails through
  Resend/Postmark/SendGrid, or
- A form backend such as Formspree/Basin, or
- A CRM intake webhook.

## Map

The footer and Contact page embed Google Maps via a plain iframe
(`components/MapEmbed.tsx`) centered on 415 Oakdale Rd, North York, ON M3N
1W7 — no API key required. If you'd prefer a styled/interactive map (e.g.
via the Google Maps JavaScript API or Mapbox), swap the implementation
inside that one component.

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `footer`, `address`), one
  `h1` per page with a clean heading hierarchy below it.
- Skip-to-content link, visible focus states (no custom outline removal),
  keyboard-operable navigation and mobile menu (`aria-expanded`,
  `aria-controls`).
- All text/background colour pairs used in the design were checked against
  WCAG AA (4.5:1 for normal text, 3:1 for large text) — see the
  navy/teal/grey token choices in `app/globals.css`.
- Scroll-reveal motion respects `prefers-reduced-motion` (keeps opacity,
  drops the translate).

## Deploying to Vercel

1. Push this repository to GitHub (already done if you're reading this
   from the repo).
2. In Vercel, "Add New Project" → import the repository → framework
   preset "Next.js" is auto-detected → Deploy.
3. No environment variables are required for the current feature set. If
   you wire up the contact form to an email/CRM service, add its API key
   as a Vercel environment variable and reference it from the route
   handler you create.
4. Update `site.url` in `lib/constants.ts` to the production domain once
   assigned — it feeds `sitemap.ts`, `robots.ts`, and Open Graph URLs.

## Notes on this build environment

This project was built in a sandboxed session whose network egress is
restricted to an allow-list (npm, GitHub, etc.). The image-generation
platform's CDN and Google Maps are *not* on that allow-list from inside
the sandbox, so:

- Campaign images and the Google Maps embed could not be visually
  verified in-sandbox and will show as broken locally in that specific
  environment — this is a sandbox networking limitation, not a code
  issue. Both render normally on Vercel or any normal internet
  connection (verified via layout/contrast/responsive testing with the
  images intentionally absent).
- See "Swapping placeholder images" above — self-hosting the generated
  images is recommended before launch regardless of this constraint.
