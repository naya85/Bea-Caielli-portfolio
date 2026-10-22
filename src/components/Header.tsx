"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [{ label: "Case studies", href: "#work" }, { label: "Design principles", href: "#principles" }, { label: "About", href: "#about" }, { label: "Contact", href: "#contact" }];

export function Header() {
  const pathname = usePathname();
  const onCaseStudy = pathname?.startsWith("/work/");
  return <header className="site-header"><nav className="nav-pill" aria-label="Main navigation"><Link href="/" className="brand-mark"><span className="brand-icon" aria-hidden="true">b.</span><span>Bea Caielli</span></Link><div className="nav-links">{links.map((link) => <a href={onCaseStudy ? `/${link.href}` : link.href} key={link.href}>{link.label}</a>)}</div><a className="nav-cta cta-motion" href="mailto:beatrice.caielli@gmail.com">Let’s talk</a></nav></header>;
}
