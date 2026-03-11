"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const SECTION_IDS = ["work", "about", "articles", "contact"] as const;
const SCROLL_THRESHOLD = 60;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = "600ms";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = e.target.id;
          if (SECTION_IDS.includes(id)) setActiveSection(id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 w-full px-4">
      <div className="mx-auto flex w-full max-w-[1200px] justify-center">
        <div
          className="flex min-h-10 w-full items-center justify-between rounded-full transition-all"
          style={{
            width: scrolled ? "auto" : "100%",
            padding: scrolled ? "8px" : "0 24px",
            backgroundColor: scrolled ? "rgba(245, 244, 240, 0.65)" : "transparent",
            backdropFilter: scrolled ? "saturate(180%) blur(24px)" : "none",
            WebkitBackdropFilter: scrolled ? "saturate(180%) blur(24px)" : "none",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "none",
            transition: `width ${DURATION} ${EASE}, padding ${DURATION} ${EASE}, background-color ${DURATION} ${EASE}, backdrop-filter ${DURATION} ${EASE}, box-shadow ${DURATION} ${EASE}`,
          }}
        >
          <Link
            href="/"
            className="inline-block overflow-hidden font-semibold tracking-tight text-[#1A1A1A] whitespace-nowrap transition-all"
            style={{
              fontSize: scrolled ? "14px" : "16px",
              maxWidth: scrolled ? 0 : 200,
              opacity: scrolled ? 0 : 1,
              pointerEvents: scrolled ? "none" : "auto",
              transition: scrolled
                ? `max-width 200ms ${EASE}, opacity 200ms ${EASE}, font-size ${DURATION} ${EASE}`
                : `max-width ${DURATION} ${EASE}, opacity ${DURATION} ${EASE}, font-size ${DURATION} ${EASE}`,
            }}
          >
            {siteConfig.name}
          </Link>

          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id && scrolled;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2.5 text-[14px] font-medium transition-all duration-150 hover:text-[#1A1A1A]"
                  style={{
                    color: isActive ? "var(--color-accent)" : "rgba(26, 26, 26, 0.8)",
                    backgroundColor: isActive ? "rgba(26, 156, 168, 0.12)" : "transparent",
                    transition: `background-color ${DURATION} ${EASE}, color 150ms ${EASE}`,
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#1A1A1A]/80 transition-colors hover:bg-[#1A1A1A]/5 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              aria-hidden
            >
              {mobileOpen ? (
                <>
                  <line x1="4" y1="4" x2="16" y2="16" />
                  <line x1="16" y1="4" x2="4" y2="16" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="17" y2="6" />
                  <line x1="3" y1="10" x2="17" y2="10" />
                  <line x1="3" y1="14" x2="17" y2="14" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-[#1A1A1A]/10 bg-[#F5F4F0]/98 px-6 py-4 shadow-lg backdrop-blur-md md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/5"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
