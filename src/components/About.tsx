"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { corePrinciples } from "@/data/content";

const ABOUT_HEADLINE = "I believe good design can change the world.";

export function About() {
  const [glitch, setGlitch] = useState(false);
  const [promptReady, setPromptReady] = useState(false);
  const accentRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setPromptReady(true), 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onEasterEggExit = () => {
      setGlitch(true);
      const t = setTimeout(() => setGlitch(false), 280);
      return () => clearTimeout(t);
    };
    window.addEventListener("easter-egg-exit", onEasterEggExit);
    return () => window.removeEventListener("easter-egg-exit", onEasterEggExit);
  }, []);

  // Split headline so "good design" gets the accent hover effect
  const parts = ABOUT_HEADLINE.split("good design");
  const beforeAccent = parts[0];
  const afterAccent = parts[1];

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="about-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <h2
          id="about-principles-heading"
          className="reveal reveal-child text-center text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]"
        >
          Design principles
        </h2>
        <div className="reveal reveal-child reveal-delay-1 mt-12 grid gap-px bg-stone-200 sm:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b-0 [&>*:nth-child(3)]:lg:border-b-0 [&>*:nth-child(n+5)]:sm:border-b-0 [&>*:nth-child(n+4)]:lg:border-b-0">
          {corePrinciples.map((principle, i) => (
            <article
              key={principle.title}
              className="flex flex-col border-b border-stone-200 bg-[#F5F4F0] p-8"
            >
              <span className="text-xs tabular-nums tracking-wide text-stone-400" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-stone-900">
                {principle.title}
              </h3>
              <p className="mt-3 text-[14px] leading-relaxed text-stone-500">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
        <div className="reveal reveal-child reveal-delay-1 mt-20 max-w-[680px] space-y-2 text-[17px] leading-relaxed text-[#1A1A1A]/90">
          <h2
            id="about-heading"
            className="max-w-[680px] text-[clamp(1.75rem,3vw,2rem)] font-bold leading-snug tracking-tight text-[#1A1A1A]"
          >
            {beforeAccent}
            <em
              ref={accentRef}
              className={`accent-word inline-block font-normal italic text-[#1A9CA8] ${
                glitch ? "animate-believes-glitch" : "animate-accent-pop"
              }`}
            >
              good design
            </em>
            {afterAccent}
          </h2>
          <p>
            I have been designing digital products across EdTech, Fintech, SaaS
            and Healthcare for more than a decade. I like to work for industries
            that bring positive changes to people&rsquo;s lives.
          </p>
          <p>
            I&rsquo;ve lived in Berlin and Barcelona for many years, and
            I&rsquo;m back home in Milan now. I travel when I can, love live
            music, sci-fi, bouldering (this last one with more enthusiasm than
            my body can take) and I have an unhealthy obsession with &rsquo;80s
            everything: the films, the music, the aesthetics.
          </p>
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("easter-egg-open"))}
            className="crt-prompt mt-1 block w-full text-left text-[#1A1A1A]/90"
            aria-label="Open 80s easter egg"
            style={
              !promptReady
                ? { opacity: 0, pointerEvents: "none" }
                : { opacity: 1, pointerEvents: "auto" }
            }
          >
            <span className="crt-prompt-cursor">▮</span>
            &nbsp;CURIOUS ABOUT THE 80S OBSESSION? PRESS ANY KEY
          </button>
          <p>
            I share my apartment downtown with my partner and Gatsby, a ragdoll cat who is
            genuinely the fluffiest loveball around.
          </p>
          <p>
            I am passionate about mentoring young designers (whether at work or
            on ADPList), I co-founded Reviewlab (a SaaS tool for indie makers)
            and thanks to AI, I&rsquo;m getting shamelessly excited at building
            digital things all on my own.
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
