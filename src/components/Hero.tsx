"use client";

import { siteConfig } from "@/data/content";

const hero = siteConfig.hero!;

export function Hero() {
  return (
    <section className="group relative flex min-h-[88vh] items-center pt-24 pb-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        {/* Default state: Hello!, I'm Bea, Senior Product Designer, stats, CTAs */}
        <div className="flex flex-col items-center transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none">
          <span className="animate-fade-in-up inline-flex items-center rounded-[38px] border border-stone-200 bg-transparent px-6 py-3">
            <span className="text-xl font-semibold tracking-tight text-stone-700 sm:text-2xl">
              {hero.greeting}
            </span>
          </span>
          <h1 className="animate-fade-in-up animate-delay-100 mt-14 text-5xl font-bold leading-[1.08] tracking-[-0.02em] text-stone-900 sm:text-6xl lg:text-[80px]">
            {hero.nameLine}
            <br />
            {hero.role}
          </h1>
          {/* Stats */}
          <div className="animate-fade-in-up animate-delay-150 mt-16 grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-20">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center border-b border-stone-200 pb-4"
              >
                <span className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium text-stone-500 sm:text-base">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
          <div className="animate-fade-in-up animate-delay-300 mt-16 flex flex-wrap justify-center gap-3">
            <a
              href="#projects"
              className="group/btn inline-flex items-center gap-2 border border-stone-900 bg-stone-900 px-6 py-2.5 text-[13px] font-semibold tracking-wide text-white transition-all duration-200 hover:bg-stone-800 hover:shadow-md"
            >
              View work
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-200 group-hover/btn:translate-x-0.5"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center border border-stone-300 bg-transparent px-6 py-2.5 text-[13px] font-semibold tracking-wide text-stone-600 transition-all duration-200 hover:border-stone-400 hover:bg-stone-50 hover:text-stone-900"
            >
              Get in touch
            </a>
          </div>
          <p className="animate-fade-in-up animate-delay-400 mt-12 text-[13px] text-stone-400">
            {siteConfig.location}
          </p>
        </div>

        {/* Hover state: I am a curious mind + passions */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl lg:text-5xl">
            {hero.hoverHeadline}
          </h2>
          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-stone-600 sm:text-lg">
            {hero.hoverSubline}
          </p>
        </div>
      </div>
    </section>
  );
}
