"use client";

import { useEffect, useRef, useState } from "react";
import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";
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

  const parts = ABOUT_HEADLINE.split("good design");
  const beforeAccent = parts[0];
  const afterAccent = parts[1];

  const sectionHeadingClass = "mt-2 text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl";

  return (
    <ScrollFadeSection
      id="about"
      className="about-section scroll-mt-24 bg-[#F5F4F0] pt-0 pb-[120px]"
      aria-labelledby="about-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        {/* Design principles block — tinted background */}
        <div
          className="relative left-1/2 right-1/2 w-screen -ml-[50vw] -mr-[50vw] py-[120px]"
          style={{ backgroundColor: "color-mix(in srgb, #E8E5E0 50%, #F5F4F0)" }}
        >
          <div className="mx-auto max-w-[1200px] px-6">
            <RevealItem>
              <FadeAtTop>
                <h2 id="principles-heading" className={sectionHeadingClass} style={{ marginTop: 0 }}>
                  How I work
                </h2>
              </FadeAtTop>
            </RevealItem>
            <div
              className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b-0 [&>*:nth-child(3)]:lg:border-b-0 [&>*:nth-child(n+5)]:sm:border-b-0 [&>*:nth-child(n+4)]:lg:border-b-0"
            >
              {corePrinciples.map((principle, i) => (
                <RevealItem key={principle.title} delay={i * 0.06}>
                  <FadeAtTop>
                    <article
                      className={`flex min-h-[280px] flex-col border-b pt-8 px-8 pb-5 ${i >= 4 ? "sm:border-b-0" : ""} ${i >= 3 ? "lg:border-b-0" : ""} ${i === 1 || i === 4 ? "lg:border-l lg:border-r" : ""}`}
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <h3 className="text-xl font-bold leading-tight tracking-tight text-[#1A1A1A] md:text-2xl">
                        {principle.title}
                      </h3>
                      <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        {principle.description}
                      </p>
                    </article>
                  </FadeAtTop>
                </RevealItem>
              ))}
            </div>
          </div>
        </div>

        {/* Bio block */}
        <RevealItem delay={0.2}>
          <FadeAtTop>
            <div className="mt-24 flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-16">
              <div className="lg:min-w-0 lg:max-w-[45%] lg:shrink-0">
                <h2 id="about-heading" className={sectionHeadingClass} style={{ marginTop: 0 }}>
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
              </div>
              <div className="min-w-0 max-w-[680px] flex-1 space-y-2 text-[17px] leading-relaxed text-[#1A1A1A]/90 lg:max-w-none">
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
            </div>
          </FadeAtTop>
        </RevealItem>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
