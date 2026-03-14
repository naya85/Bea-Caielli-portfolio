"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/content";

const NAV_LINKS = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Articles", href: "#articles", id: "articles" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

/** Section IDs in document order (page: Hero, Work, About, Articles, Contact) */
const SECTION_IDS_IN_ORDER = ["work", "about", "articles", "contact"] as const;
type SectionId = (typeof SECTION_IDS_IN_ORDER)[number];
const SCROLL_THRESHOLD = 60;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = "600ms";

function getActiveSection(): SectionId {
  if (typeof window === "undefined") return SECTION_IDS_IN_ORDER[0];
  const viewportMiddle = window.scrollY + window.innerHeight / 2;
  let active: SectionId = SECTION_IDS_IN_ORDER[0];
  for (const id of SECTION_IDS_IN_ORDER) {
    const el = document.getElementById(id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top + window.scrollY;
    if (top <= viewportMiddle) active = id;
  }
  return active;
}

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>(SECTION_IDS_IN_ORDER[0]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
      setActiveSection(getActiveSection());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /** Hide navbar on case study (child) pages: /work/[slug] */
  const isCaseStudyPage = pathname?.startsWith("/work/") && pathname !== "/work";
  if (isCaseStudyPage) return null;

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false);
  };

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
              const isActive = activeSection === link.id && scrolled;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="rounded-full px-4 py-2.5 text-[16px] font-medium transition-all duration-150 hover:text-[#1A1A1A]"
                  style={{
                    color: isActive ? "var(--color-accent)" : "rgba(26, 26, 26, 0.8)",
                    backgroundColor: isActive ? "rgba(26, 156, 168, 0.12)" : "transparent",
                    transition: `background-color ${DURATION} ${EASE}, color 150ms ${EASE}`,
                  }}
                >
                  {link.label}
                </button>
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
          className="absolute left-4 right-4 top-full mt-2 rounded-2xl border bg-[#F5F4F0]/98 px-6 py-4 shadow-lg backdrop-blur-md md:hidden"
          style={{ borderColor: "var(--color-border)" }}
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="rounded-lg px-3 py-2.5 text-left text-[16px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#1A1A1A]/5"
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
