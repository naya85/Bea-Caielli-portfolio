"use client";

import { useRef, useEffect } from "react";
import { siteConfig } from "@/data/content";

const hero = siteConfig.hero!;

const MIN_OPACITY = 0.35; /* never fully hide when scrolling out */
const SCROLL_RANGE = 1; /* progress 0→1 over this multiple of section height; larger = gentler shrink */

function lerp(t: number, a: number, b: number) {
  return a + (b - a) * t;
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const progress =
        rect.top >= 0 ? 0 : Math.min(1, -rect.top / (sectionHeight * SCROLL_RANGE));
      const t = progress <= 0.25 ? 0 : (progress - 0.25) / 0.75;
      const opacity = lerp(t, 1, MIN_OPACITY);
      const scale = lerp(t, 1, 0.95);
      content.style.opacity = String(opacity);
      content.style.transform = `scale(${scale})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
      aria-label="Introduction"
    >
      <div
        ref={contentRef}
        className="hero-content mx-auto w-full max-w-[1200px]"
        style={{ transition: "opacity 0.25s ease-out, transform 0.4s ease-out" }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between md:gap-12">
          <div className="max-w-[680px]">
            <p
              className="hero-fade-up text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug text-[#1A1A1A]"
              style={{ ["--delay" as string]: "0.15s" }}
            >
              {hero.line1}
            </p>
            <h1
              className="hero-fade-up mt-1 text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug text-[#1A1A1A]"
              style={{ ["--delay" as string]: "0.25s" }}
            >
              {hero.line2}
            </h1>
            <h2
              className="hero-fade-up mt-6 text-[clamp(3rem,8vw,6.25rem)] font-bold leading-[1.08] tracking-[-0.02em] text-[#1A1A1A]"
              style={{ ["--delay" as string]: "0.4s" }}
            >
              {hero.line3}
            </h2>
          </div>

          <div
            className="hero-fade-up flex shrink-0 justify-start md:justify-end"
            aria-label="Video placeholder: short intro video"
            style={{ ["--delay" as string]: "0.4s" }}
          >
            <div className="aspect-square w-[280px] max-w-[40vw] overflow-hidden rounded-[24px] bg-[#1A1A1A]/8 sm:w-[320px]">
              <div className="flex h-full w-full items-center justify-center text-[13px] font-medium tracking-wide text-[#1A1A1A]/5">
                Video coming soon
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-16 grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12 md:gap-16"
          role="list"
          aria-label="Experience highlights"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} role="listitem" className="flex flex-col">
              <span className="text-3xl font-extrabold leading-none tracking-tight text-[#1A1A1A] md:text-4xl lg:text-5xl">
                {stat.value}
              </span>
              <span className="mt-2 text-[13px] font-normal tracking-wide text-[#1A1A1A]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
