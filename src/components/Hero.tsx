import Link from "next/link";
import { siteConfig } from "@/data/content";
import { RotatingRole } from "@/components/RotatingRole";

export function Hero() {
  return (
    <section className="hero-shell" aria-label="Introduction">
      <div className="hero-inner">
        <div className="hero-copy">
          <h1 className="ui-heading ui-heading--display">
            Hi, I&rsquo;m Bea,
            <span className="hero-role-line" aria-hidden="true"><RotatingRole /></span>
            <span className="sr-only">a product designer and strategist, a curious mind, traveller, nerd, and cat mama.</span>
          </h1>
          <p className="hero-intro">I connect research, data, product strategy and craft to help teams find the root problem, align direction and prioritization, and ship work that moves the needle, turning complex problems into clear solutions.</p>
          <div className="hero-actions">
            <Link href="#work" className="ui-button ui-button--primary ui-button--large cta-motion">Explore my work</Link>
          </div>
          <div className="hero-stats" aria-label="Experience highlights">
            {siteConfig.hero.stats.map((stat) => <div className="hero-stat" key={stat.label}><h3>{stat.value}</h3><span>{stat.label}</span></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
