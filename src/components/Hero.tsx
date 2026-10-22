import Link from "next/link";
import { siteConfig } from "@/data/content";

export function Hero() {
  return (
    <section className="hero-shell" aria-label="Introduction">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>I turn complex problems into <span>clear products.</span></h1>
          <p className="hero-intro">I’m Bea. I connect research, product strategy and craft to help teams find the right problem, align around a direction, and ship work that matters.</p>
          <div className="hero-actions">
            <Link href="#work" className="button-light">Explore my work</Link>
            <a className="text-link" href={`mailto:${siteConfig.email}`}>Let’s talk</a>
          </div>
          <div className="hero-stats" aria-label="Experience highlights">
            {siteConfig.hero.stats.map((stat) => <div className="hero-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>
      </div>
      <div className="hero-bottom"><a href="#work">Scroll to explore <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
