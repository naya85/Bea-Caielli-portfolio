"use client";

import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";
import { corePrinciples } from "@/data/content";

export function DesignPrinciples() {
  return (
    <ScrollFadeSection
      id="principles"
      className="scroll-mt-24 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="principles-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <RevealItem>
          <FadeAtTop>
            <h2
              id="principles-heading"
              className="text-center text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]"
            >
              Design principles
            </h2>
          </FadeAtTop>
        </RevealItem>
        <RevealItem delay={0.1}>
          <FadeAtTop>
          <div
            className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-3 [&>*:first-child]:border-b-0 [&>*:nth-child(2)]:border-b-0 [&>*:nth-child(3)]:lg:border-b-0 [&>*:nth-child(n+5)]:sm:border-b-0 [&>*:nth-child(n+4)]:lg:border-b-0"
            style={{ backgroundColor: "var(--color-border)" }}
          >
            {corePrinciples.map((principle, i) => (
              <article
                key={principle.title}
                className={`flex min-h-[320px] flex-col border-b bg-[#F5F4F0] p-8 ${i >= 4 ? "sm:border-b-0" : ""} ${i >= 3 ? "lg:border-b-0" : ""} ${i === 1 || i === 4 ? "lg:border-l lg:border-r" : ""}`}
                style={{ borderColor: "var(--color-border)" }}
              >
                <span className="text-xs tabular-nums tracking-wide" style={{ color: "var(--color-muted)" }} aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-bold leading-tight tracking-tight text-[#1A1A1A]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
          </FadeAtTop>
        </RevealItem>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
