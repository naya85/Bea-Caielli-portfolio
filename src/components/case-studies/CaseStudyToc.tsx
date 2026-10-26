"use client";

import { useEffect, useState } from "react";
import { scrollToSection } from "@/lib/smoothScroll";

export type TocItem = { id: string; label: string };

/**
 * Minimal "on this page" list fixed beside a case study on wide screens. It fades in once the
 * title has scrolled away, highlights the section being read and glides to a section on click.
 */
export function CaseStudyToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (headings.length === 0) return;

    // The active section is the last heading that has passed the upper third of the viewport.
    const update = () => {
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const heading of headings) {
        if (heading.getBoundingClientRect().top <= line) current = heading.id;
      }
      setActive(current ?? headings[0].id);
      setVisible(window.scrollY > window.innerHeight * 0.5);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [items]);

  if (items.length < 2) return null;

  return (
    <nav className={`case-toc${visible ? " is-visible" : ""}`} aria-label="On this page">
      <ol>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={(e) => {
                if (scrollToSection(item.id)) {
                  e.preventDefault();
                  window.history.replaceState(null, "", `#${item.id}`);
                }
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
