"use client";

import { siteConfig } from "@/data/content";
import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

function ExternalLinkIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        d="M4 10L10 4M10 4H5.5M10 4V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Contact() {
  return (
    <ScrollFadeSection
      id="contact"
      className="scroll-mt-24 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger={false}>
        <RevealItem>
          <FadeAtTop>
            <div className="mx-auto max-w-[680px] text-center lg:mx-[120px] lg:max-w-none">
              <p
                className="text-[12px] font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--color-muted)" }}
              >
                GET IN TOUCH
              </p>
              <h2
                id="contact-heading"
                className="mt-2 text-5xl font-bold leading-[1.08] tracking-[-0.02em] text-[#1A1A1A] md:text-6xl lg:text-8xl"
              >
                Let&rsquo;s create
                <br />
                something great.
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-150 hover:bg-[#333] focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#F5F4F0]"
                  aria-label={`Email ${siteConfig.name}: ${siteConfig.email}`}
                >
                  {siteConfig.email}
                  <ExternalLinkIcon className="size-4 shrink-0" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border px-8 py-4 text-[15px] font-semibold text-[#1A1A1A] transition-colors duration-150 hover:bg-[#1A1A1A]/5 focus:outline-none focus:ring-2 focus:ring-[#1A1A1A] focus:ring-offset-2 focus:ring-offset-[#F5F4F0]"
                  style={{ borderColor: "var(--color-border)" }}
                  aria-label="Beatrice Caielli on LinkedIn"
                >
                  LinkedIn
                  <ExternalLinkIcon className="size-4 shrink-0" />
                </a>
              </div>
            </div>
          </FadeAtTop>
        </RevealItem>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
