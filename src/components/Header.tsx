"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/content";

const navLinks = [
  { label: "About me", href: "#about" },
  { label: "About", href: "#about-bio" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = ["about", "about-bio", "projects", "skills", "contact"] as const;

const gradientStyle = {
  background: "linear-gradient(90deg, #f7bb97 0%, #dd5e89 63.942%, #d60692 100%)",
};

const SCROLL_THRESHOLD = 60;
const EASE = "cubic-bezier(0.4, 0, 0.2, 1)";
const DURATION = "600ms";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

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
          if (sectionIds.includes(id)) setActiveSection(id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4">
      <div className="flex w-full justify-center">
        <div
          className="flex min-h-10 items-center justify-center gap-8 rounded-full"
          style={{
            width: scrolled ? "auto" : "100%",
            maxWidth: "56rem",
            padding: scrolled ? "8px 16px" : "0 24px",
            backgroundColor: scrolled ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0)",
            backdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)",
            boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.06)" : "0 4px 24px rgba(0,0,0,0)",
            transition: `all ${DURATION} ${EASE}`,
          }}
        >
          <Link
            href="/"
            className="font-semibold tracking-tight text-stone-900"
            style={{
              fontSize: scrolled ? "14px" : "16px",
              transition: `all ${DURATION} ${EASE}`,
            }}
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-2 md:flex" aria-label="Main">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2.5 text-[15px] font-semibold hover:bg-stone-100 hover:text-stone-900"
                  style={{
                    background: isActive && scrolled
                      ? "linear-gradient(90deg, #f7bb97 0%, #dd5e89 63.942%, #d60692 100%)"
                      : "transparent",
                    color: isActive && scrolled ? "#fff" : "#57534e",
                    boxShadow: isActive && scrolled ? "0 4px 6px -1px rgba(0,0,0,0.1)" : "none",
                    transition: `background ${DURATION} ${EASE}, box-shadow ${DURATION} ${EASE}, color 150ms ${EASE}`,
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
            className="flex h-10 w-10 items-center justify-center rounded-lg text-stone-600 transition-colors hover:bg-stone-100 md:hidden"
            aria-label="Toggle navigation"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
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
        <nav className="absolute left-4 right-4 top-full mt-2 rounded-2xl border border-stone-200 bg-white/95 px-6 pb-5 pt-4 shadow-lg backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-[15px] font-medium text-stone-600 transition-colors hover:text-stone-900"
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
