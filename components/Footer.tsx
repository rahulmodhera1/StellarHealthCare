import Link from "next/link";
import Logo from "./Logo";
import MapEmbed from "./MapEmbed";
import { navLinks, services, site } from "@/lib/constants";

const socialIcons = {
  facebook: (
    <path d="M14 8.5h-2c-.28 0-.5.22-.5.5v2h2.5l-.33 2.5H11.5V21h-3v-7.5H7v-2.5h1.5V9c0-1.93 1.57-3.5 3.5-3.5h2v3Z" />
  ),
  linkedin: (
    <path d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88ZM5.5 10.25h2.88V19H5.5v-8.75Zm5.13 0h2.76v1.2h.04c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.44 1.91 3.44 4.4V19h-2.88v-4.03c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13V19h-2.87v-8.75Z" />
  ),
  instagram: (
    <path d="M12 8.3a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4Zm0 6.1a2.4 2.4 0 1 1 0-4.8 2.4 2.4 0 0 1 0 4.8Zm4.7-6.25a.86.86 0 1 1-1.73 0 .86.86 0 0 1 1.73 0ZM19.9 8c-.08-1.28-.37-2.4-1.3-3.33-.92-.93-2.05-1.22-3.32-1.3-1.31-.08-5.24-.08-6.55 0-1.28.08-2.4.37-3.33 1.3C4.47 5.6 4.18 6.72 4.1 8c-.08 1.31-.08 5.24 0 6.55.08 1.28.37 2.4 1.3 3.33.93.93 2.05 1.22 3.33 1.3 1.31.08 5.24.08 6.55 0 1.27-.08 2.4-.37 3.32-1.3.93-.93 1.22-2.05 1.3-3.33.08-1.31.08-5.23 0-6.55Zm-1.66 7.96a2.66 2.66 0 0 1-1.5 1.5c-1.04.41-3.5.32-4.74.32s-3.71.09-4.74-.32a2.66 2.66 0 0 1-1.5-1.5c-.41-1.03-.32-3.5-.32-4.74s-.09-3.71.32-4.74a2.66 2.66 0 0 1 1.5-1.5c1.03-.41 3.5-.32 4.74-.32s3.71-.09 4.74.32a2.66 2.66 0 0 1 1.5 1.5c.41 1.04.32 3.5.32 4.74s.09 3.71-.32 4.74Z" />
  ),
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white/80">
      <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div className="lg:col-span-1">
          <Logo variant="white" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/65">
            Connecting GTA hospitals, long-term care homes, and families with
            vetted RNs, RPNs, and PSWs — plus compassionate in-home care for
            every stage of life.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {Object.entries(site.social).map(([platform, href]) => (
              <a
                key={platform}
                href={href}
                aria-label={`Stellar HealthCare Staffing on ${platform}`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors duration-150 hover:border-teal-400 hover:text-teal-400"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  {socialIcons[platform as keyof typeof socialIcons]}
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/careers" className="hover:text-white">
                Join Our Roster
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services#${service.slug}`} className="hover:text-white">
                  {service.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-400">
            Contact
          </h2>
          <address className="mt-5 space-y-3 text-sm not-italic">
            <p>{site.address.full}</p>
            <p>
              <a href={site.phoneHref} className="hover:text-white">
                {site.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </p>
            <p className="text-white/50">{site.hours}</p>
          </address>
          <div className="mt-5 h-36 overflow-hidden rounded-xl border border-white/10">
            <MapEmbed />
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} Stellar HealthCare Staffing. All rights reserved.
          </p>
          <p>Licensed healthcare staffing agency serving the Greater Toronto Area.</p>
        </div>
      </div>
    </footer>
  );
}
