import { siteConfig } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 border-t border-stone-200 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <div className="mx-auto max-w-xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-400">
            Contact
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-stone-600 sm:text-lg">
            {siteConfig.contactTagline}
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-stone-900 bg-stone-900 px-8 py-3.5 text-[14px] font-medium tracking-wide text-white transition-all duration-200 hover:bg-stone-800 hover:shadow-md"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="1" y="3" width="14" height="10" rx="2" />
              <path d="M1 5l7 4 7-4" />
            </svg>
            {siteConfig.email}
          </a>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {Object.entries(siteConfig.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] font-medium capitalize text-stone-500 transition-colors hover:text-stone-900"
              >
                {name}
            </a>
          ))}
          </div>
          <p className="mt-16 text-[13px] text-stone-400">
            {siteConfig.footerLine}
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
