"use client";

import { siteConfig } from "@/data/content";
import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <ScrollFadeSection
      id="contact"
      className="scroll-mt-24 py-[120px]"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger={false}>
        <RevealItem>
          <FadeAtTop>
            <div className="mx-auto max-w-[680px] text-center lg:mx-[120px] lg:max-w-none">
              <h2
                id="contact-heading"
                className="ui-heading ui-heading--display"
              >
                Let&rsquo;s create
                <br />
                something <span className="contact-shimmer">great</span>
                <br />
                <span className="contact-shimmer">together.</span>
              </h2>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="ui-button ui-button--primary contact-email-cta cta-motion"
                  aria-label={`Email ${siteConfig.name}: ${siteConfig.email}`}
                >
                  {siteConfig.email}
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ui-button ui-button--secondary cta-motion"
                  aria-label="Beatrice Caielli on LinkedIn"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </FadeAtTop>
        </RevealItem>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
