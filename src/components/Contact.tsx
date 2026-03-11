import { siteConfig } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="contact-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[680px] text-center">
          <h2
            id="contact-heading"
            className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]"
          >
            Get in touch
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-[#1A1A1A]/80">
            {siteConfig.contactTagline}
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-block text-[17px] font-semibold text-[#1A9CA8] underline decoration-[#1A9CA8]/40 underline-offset-4 transition-colors duration-150 hover:text-[#147880] hover:decoration-[#1A9CA8] focus:outline-none focus:ring-2 focus:ring-[#1A9CA8] focus:ring-offset-2 focus:ring-offset-[#F5F4F0]"
            aria-label={`Email ${siteConfig.name}: ${siteConfig.email}`}
          >
            {siteConfig.email}
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
