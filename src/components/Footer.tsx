import { siteConfig } from "@/data/content";

export function Footer() {
  return (
    <footer className="border-t border-[#1A1A1A]/08 bg-[#F5F4F0]">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-6 px-6 py-12 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex gap-8">
          <a
            href={siteConfig.socials.dribbble}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5 transition-colors hover:text-[#1A1A1A]"
          >
            Dribbble
          </a>
          <a
            href={siteConfig.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5 transition-colors hover:text-[#1A1A1A]"
          >
            Behance
          </a>
          <a
            href={siteConfig.socials.medium}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5 transition-colors hover:text-[#1A1A1A]"
          >
            Medium
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5 transition-colors hover:text-[#1A1A1A]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
