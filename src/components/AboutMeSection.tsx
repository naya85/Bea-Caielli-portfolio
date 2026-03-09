import { corePrinciples, topSkillsSlides } from "@/data/content";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";

export function AboutMeSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 rounded-t-[80px] bg-stone-50 px-6 pb-28 pt-20 sm:rounded-t-[100px] sm:pt-28"
    >
      <div className="mx-auto max-w-5xl">
        {/* My top 3 skills */}
        <ScrollReveal className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            My top 3 skills
          </h2>
          <div className="mt-10">
            <SkillsCarousel variant="light" />
          </div>
        </ScrollReveal>

        {/* My core principles */}
        <ScrollReveal className="mt-24 sm:mt-32">
          <h2 className="text-center text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            My core principles
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corePrinciples.map((text, i) => (
              <div
                key={i}
                className="rounded-2xl border border-stone-100 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <p className="text-4xl font-bold tracking-tight text-stone-900">
                  {i + 1}.
                </p>
                <p className="mt-4 text-[15px] font-medium leading-relaxed text-stone-700">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
