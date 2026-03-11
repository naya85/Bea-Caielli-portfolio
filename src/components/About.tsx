"use client";

import { useEffect, useRef, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const ABOUT_HEADLINE =
  "12 years of product design and still believes good design can change things.";

export function About() {
  const [glitch, setGlitch] = useState(false);
  const [promptReady, setPromptReady] = useState(false);
  const believesRef = useRef<HTMLElement>(null);

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

  // Split headline so "believes" is the <em>
  const parts = ABOUT_HEADLINE.split("believes");
  const beforeBelieves = parts[0];
  const afterBelieves = parts[1];

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="about-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <h2
          id="about-heading"
          className="reveal reveal-child max-w-[680px] text-[clamp(1.75rem,3vw,2rem)] font-bold leading-snug tracking-tight text-[#1A1A1A]"
        >
          {beforeBelieves}
          <em
            ref={believesRef}
            className={`accent-word inline-block font-normal italic text-[#1A9CA8] ${
              glitch ? "animate-believes-glitch" : "animate-accent-pop"
            }`}
          >
            believes
          </em>
          {afterBelieves}
        </h2>
        <div className="reveal reveal-child reveal-delay-1 mt-12 max-w-[680px] space-y-6 text-[17px] leading-relaxed text-[#1A1A1A]/90">
          <p>
            I have been designing digital products across EdTech, Fintech, SaaS
            and Healthcare — I like to work for products that actually impact
            people&rsquo;s lives.
          </p>
          <p>
            I&rsquo;ve lived in Berlin and Barcelona for many years, and
            I&rsquo;m back home in Milan now. I travel when I can, love live
            music, sci-fi, bouldering (this last one with more enthusiasm than
            my body can take) and I have an unhealthy obsession with &rsquo;80s
            everything: the films, the music, the aesthetics.
          </p>
          <p>
            I share my home with my partner and Gatsby, a ragdoll cat who is
            genuinely the softest thing I own.
          </p>
          <p>
            I am passionate about mentoring young designers (whether at work or
            on ADPList), I co-founded Reviewlab (a SaaS tool for indie makers)
            and thanks to AI, I&rsquo;m getting shamelessly excited at building
            digital things all on my own.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("easter-egg-open"))}
          className="crt-prompt mt-10 block w-full max-w-[680px] text-left"
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
      </ScrollReveal>
    </section>
  );
}
