import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-[13px] text-stone-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-8">
          <a
            href={siteConfig.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone-400 transition-colors hover:text-stone-900"
          >
            Dribbble
          </a>
          <a
            href={siteConfig.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone-400 transition-colors hover:text-stone-900"
          >
            Behance
          </a>
          <a
            href={siteConfig.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone-400 transition-colors hover:text-stone-900"
          >
            Medium
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-stone-400 transition-colors hover:text-stone-900"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
