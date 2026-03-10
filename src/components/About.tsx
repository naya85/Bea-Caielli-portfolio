import { ScrollReveal } from "@/components/ScrollReveal";

export function About() {
  const yearsOfExperience =
    new Date().getFullYear() - 2014;

  return (
    <section id="about-bio" className="scroll-mt-20 border-t border-stone-200 bg-stone-50 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6" stagger>
        <p className="reveal reveal-child text-[13px] font-medium uppercase tracking-[0.2em] text-stone-400">
          About
        </p>
        <h2 className="reveal reveal-child reveal-delay-1 mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          {yearsOfExperience} years of product design and still believes good design can change things.
        </h2>
        <div className="reveal reveal-child reveal-delay-2 mt-12">
          <div className="max-w-2xl space-y-6 text-[15px] leading-relaxed text-stone-600">
              <p>
                I have been designing digital products across
                EdTech, Fintech, SaaS and Healthcare - I like to work for
                products that actually impact people&rsquo;s lives.
              </p>
              <p>
                I&rsquo;ve lived in Berlin and Barcelona for many years, and
                I&rsquo;m back home in Milan now. I travel when I can, love live
                music, sci-fi, bouldering (this last one with more enthusiasm
                than my body can take) and I have an unhealthy obsession with &rsquo;80s
                everything: the films, the music, the graphic design, the synths.
              </p>
              <p>
                I share my home with my partner and Gatsby, a ragdoll cat who is
                genuinely the softest thing I own.
              </p>
              <p>
                I am passionate about mentoring young designers (whether at work or on
                ADPList), I co-founded Reviewlab (a SaaS tool for indie makers)
                and thanks to AI, I&rsquo;m getting shamelessly excited at
                building digital things all on my own.
              </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
