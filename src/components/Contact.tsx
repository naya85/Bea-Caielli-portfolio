import { siteConfig } from "@/data/content";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
            Contact
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            Let&rsquo;s work together
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stone-500">
            Whether you have a project in mind, want to discuss design
            challenges, or simply want to connect — I&rsquo;d love to hear from
            you.
          </p>

          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-stone-900 px-8 py-3.5 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg"
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

          <div className="mt-12 flex justify-center gap-6">
            {Object.entries(siteConfig.socials).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-200 bg-white text-stone-500 transition-all hover:border-violet-300 hover:text-violet-600 hover:shadow-sm"
                aria-label={name}
              >
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const className = "h-4 w-4";
  switch (name) {
    case "dribbble":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.245.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" />
        </svg>
      );
    case "behance":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.63.165-1.27.25-1.95.25H0V4.51h6.938v-.007zM6.545 10.16c.6 0 1.09-.155 1.47-.465.38-.31.57-.75.57-1.33 0-.335-.06-.617-.18-.85a1.32 1.32 0 00-.49-.57 2.21 2.21 0 00-.73-.327 3.79 3.79 0 00-.92-.103H3.26v3.652h3.285v-.007zm.26 5.67c.352 0 .68-.03.99-.105.31-.07.58-.19.81-.35.23-.16.41-.38.54-.65.13-.27.19-.61.19-1.01 0-.75-.22-1.3-.66-1.64-.44-.34-1.01-.51-1.73-.51H3.26v4.265h3.544v.001zm9.97-9.21h5.89v1.473h-5.89V6.62zm2.78 11.14c.68 0 1.22-.2 1.6-.59.384-.39.614-.89.68-1.49h2.39c-.09.65-.27 1.24-.53 1.76-.26.51-.59.95-.99 1.31-.39.36-.85.64-1.37.83-.52.19-1.09.29-1.7.29-.76 0-1.43-.13-2.01-.39a4.08 4.08 0 01-1.46-1.07c-.39-.45-.69-1-.89-1.65-.2-.64-.3-1.35-.3-2.12v-.28c0-.77.1-1.47.3-2.12.2-.64.5-1.2.89-1.65a4.2 4.2 0 011.46-1.07c.58-.26 1.25-.39 2.01-.39.84 0 1.56.16 2.16.48.6.32 1.09.75 1.48 1.28.39.54.66 1.15.83 1.85.16.7.22 1.43.16 2.18h-7.15c0 .37.04.73.13 1.07.09.35.23.65.43.92.2.27.46.48.78.64.32.15.72.23 1.18.23zm1.46-6.38c-.33-.3-.77-.45-1.32-.45-.37 0-.69.07-.94.2-.25.14-.46.32-.61.53-.16.22-.27.45-.35.7-.07.25-.12.48-.14.69h4.38c-.12-.7-.39-1.37-1.02-1.67z" />
        </svg>
      );
    case "medium":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      );
  }
}
