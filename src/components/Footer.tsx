import { siteConfig } from "@/data/content";

const LINKS = [
  { label: "Dribbble", href: siteConfig.socials.dribbble },
  { label: "Behance", href: siteConfig.socials.behance },
  { label: "Medium", href: siteConfig.socials.medium },
];

export function Footer() {
  return (
    <footer>
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-4 px-6 py-14 text-center">
        <nav aria-label="Elsewhere" className="flex flex-wrap justify-center gap-8">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold tracking-wide text-[#7353B8] transition-colors hover:text-[#5C3E9B]"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
