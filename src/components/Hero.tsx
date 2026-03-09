import { siteConfig } from "@/data/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-violet-100/50 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-stone-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="animate-fade-in-up mb-4 text-sm font-medium uppercase tracking-widest text-violet-600">
            {siteConfig.title}
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 text-5xl font-bold leading-tight tracking-tight text-stone-900 sm:text-6xl lg:text-7xl">
            Hi, I&rsquo;m{" "}
            <span className="bg-gradient-to-r from-violet-600 to-violet-400 bg-clip-text text-transparent">
              Beatrice
            </span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 mt-6 max-w-xl text-lg leading-relaxed text-stone-500 sm:text-xl">
            {siteConfig.tagline}
          </p>
          <div className="animate-fade-in-up animate-delay-300 mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-white transition-all hover:bg-stone-800 hover:shadow-lg"
            >
              View my work
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
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-stone-300 bg-white px-7 py-3 text-sm font-medium text-stone-700 transition-all hover:border-stone-400 hover:shadow-sm"
            >
              Get in touch
            </a>
          </div>
          <div className="animate-fade-in-up animate-delay-400 mt-12 flex items-center gap-2 text-sm text-stone-400">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Based in {siteConfig.location}
          </div>
        </div>
      </div>
    </section>
  );
}
