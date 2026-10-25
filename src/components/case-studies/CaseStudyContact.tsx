import { siteConfig } from "@/data/content";

/** Closing call to action shown under every case study, so a reader never hits a dead end. */
export function CaseStudyContact() {
  return (
    <section className="case-study-contact" aria-labelledby="case-study-contact-heading">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <div className="case-study-contact-inner">
          <h2 id="case-study-contact-heading" className="ui-heading ui-heading--subsection">
            Working on something similar? Let&rsquo;s talk.
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="ui-button ui-button--primary cta-motion"
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
      </div>
    </section>
  );
}
