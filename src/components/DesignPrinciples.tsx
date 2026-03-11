import { corePrinciples } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function DesignPrinciples() {
  return (
    <section
      id="principles"
      className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]"
      aria-labelledby="principles-heading"
    >
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <h2
          id="principles-heading"
          className="reveal reveal-child text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]"
        >
          Design principles
        </h2>
        <div className="reveal reveal-child reveal-delay-1 mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {corePrinciples.map((principle, i) => (
            <article
              key={principle.title}
              className="flex flex-col border-b border-[#1A1A1A]/08 pb-8 last:border-b-0 lg:pb-0 lg:border-b-0"
            >
              <span
                className="text-[13px] font-medium tabular-nums tracking-wide text-[#1A1A1A]/5"
                aria-hidden
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 text-[24px] font-semibold leading-tight tracking-tight text-[#1A1A1A]">
                {principle.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-[#1A1A1A]/80">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
