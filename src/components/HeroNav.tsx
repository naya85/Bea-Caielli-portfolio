"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Articles", href: "#articles" },
  { label: "Contact", href: "#contact" },
];

const gradientStyle = {
  background: "linear-gradient(90deg, #f7bb97 0%, #dd5e89 63.942%, #d60692 100%)",
};

export function HeroNav() {
  const [active, setActive] = useState<string>("work");

  useEffect(() => {
    const sections = ["work", "about", "articles", "contact"] as const;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          const id = e.target.id;
          if ((sections as readonly string[]).includes(id)) setActive(id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border bg-white/95 px-2 py-2 shadow-lg backdrop-blur-sm"
      style={{ borderColor: "var(--color-border)" }}
      aria-label="Main"
    >
      {links.map(({ label, href }) => {
        const id = href.slice(1);
        const isActive = active === id;
        return (
          <a
            key={href}
            href={href}
            className={`rounded-full px-6 py-3 text-[15px] font-semibold transition-all duration-200 ${
              isActive
                ? "text-white shadow-md"
                : "text-stone-600 hover:bg-stone-100 hover:text-stone-900"
            }`}
            style={isActive ? gradientStyle : undefined}
          >
            {label}
          </a>
        );
      })}
    </nav>
  );
}
