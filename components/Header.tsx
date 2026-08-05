"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile menu when navigation changes the route. Adjusted
  // during render (React's recommended pattern for resetting state in
  // response to a prop/derived-value change) rather than in an effect,
  // which would cause an extra render-commit cycle.
  const [priorPathname, setPriorPathname] = useState(pathname);
  if (pathname !== priorPathname) {
    setPriorPathname(pathname);
    setMenuOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        solid
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_var(--color-border-subtle)]"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-20 items-center justify-between">
        <Link href="/" className="shrink-0" aria-label={`${site.name} home`}>
          <Logo variant={solid ? "navy" : "white"} />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-9 lg:flex"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={clsx(
                  "border-b-2 pb-0.5 text-sm font-medium tracking-wide transition-colors duration-150",
                  solid
                    ? active
                      ? "border-teal-600 text-teal-600"
                      : "border-transparent text-navy-900/80 hover:text-teal-600"
                    : active
                      ? "border-white text-white"
                      : "border-transparent text-white/85 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className={clsx(
              "text-sm font-semibold tracking-wide transition-colors duration-150",
              solid ? "text-navy-900" : "text-white",
            )}
          >
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors duration-150 hover:bg-teal-500"
          >
            Request Care
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={clsx(
            "flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            solid ? "text-navy-900" : "text-white",
          )}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M4 4 18 18M18 4 4 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 6h17M2.5 11h17M2.5 16h17"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={clsx(
          "grid overflow-hidden bg-white transition-[grid-template-rows] duration-300 ease-out lg:hidden",
          menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <nav
            aria-label="Mobile"
            className="container-page flex flex-col gap-1 pb-6 pt-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-lg px-3 py-3 text-base font-medium",
                  pathname === link.href
                    ? "bg-teal-50 text-teal-700"
                    : "text-navy-900 hover:bg-grey-50",
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-border-subtle pt-4">
              <a
                href={site.phoneHref}
                className="text-base font-semibold text-navy-900"
              >
                {site.phone}
              </a>
              <Link
                href="/contact"
                className="rounded-full bg-teal-600 px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Request Care
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
