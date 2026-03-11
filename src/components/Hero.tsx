"use client";

import { siteConfig } from "@/data/content";

const hero = siteConfig.hero!;

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16"
      aria-label="Introduction"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="max-w-[680px]">
          {/* Line 1 */}
          <p
            className="hero-reveal text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug text-[#1A1A1A]"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.line1}
          </p>
          {/* Line 2 */}
          <h1
            className="hero-reveal mt-4 text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug text-[#1A1A1A]"
            style={{ animationDelay: "0.25s" }}
          >
            {hero.line2}
          </h1>
          {/* Line 3 */}
          <p
            className="hero-reveal mt-6 text-[clamp(1.25rem,2.5vw,2rem)] font-normal leading-snug text-[#1A1A1A]"
            style={{ animationDelay: "0.4s" }}
          >
            {hero.line3}
          </p>
          {/* Line 4: 800 ExtraBold, 80–100px */}
          <h2
            className="hero-reveal mt-4 text-[clamp(2.5rem,8vw,6.25rem)] font-extrabold leading-[1.08] tracking-[-0.02em] text-[#1A1A1A]"
            style={{ animationDelay: "0.55s" }}
          >
            {hero.line4}
          </h2>
        </div>

        {/* Stats — 8px grid */}
        <div
          className="mt-16 grid grid-cols-2 gap-8 sm:flex sm:flex-wrap sm:gap-12 md:gap-16"
          role="list"
          aria-label="Experience highlights"
        >
          {hero.stats.map((stat) => (
            <div key={stat.label} role="listitem" className="flex flex-col">
              <span className="text-[32px] font-extrabold leading-none tracking-tight text-[#1A1A1A] sm:text-[40px]">
                {stat.value}
              </span>
              <span className="mt-2 text-[13px] font-medium tracking-wide text-[#1A1A1A]/70">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Video placeholder — rounded container */}
        <div
          className="mt-16 flex justify-start"
          aria-label="Video placeholder: short intro video"
        >
          <div className="aspect-square w-[280px] max-w-[40vw] overflow-hidden rounded-[24px] bg-[#1A1A1A]/8 sm:w-[320px]">
            <div className="flex h-full w-full items-center justify-center text-[13px] font-medium tracking-wide text-[#1A1A1A]/5">
              Video coming soon
            </div>
          </div>
        </div>
      </div>

      <p className="absolute bottom-8 left-0 right-0 text-center text-[13px] font-medium tracking-wide text-[#1A1A1A]/5">
        {siteConfig.location}
      </p>
    </section>
  );
}
