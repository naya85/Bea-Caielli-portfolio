import Link from "next/link";
import { siteConfig } from "@/data/content";

export function Hero() {
  return (
    <section className="hero-shell" aria-label="Introduction">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-inner">
        <div className="hero-copy">
          <h1>I turn complex problems into <span>clear products.</span></h1>
          <p className="hero-intro">I’m Bea. I connect research, product strategy and craft to help teams find the root problem, align around a direction and prioritization, and ship work that moves the needle.</p>
          <div className="hero-actions">
            <Link href="#work" className="button-light cta-motion">Explore my work</Link>
          </div>
          <div className="hero-stats" aria-label="Experience highlights">
            {siteConfig.hero.stats.map((stat) => <div className="hero-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
