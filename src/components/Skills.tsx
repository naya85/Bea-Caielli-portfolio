import { skillCategories } from "@/data/content";
import { SkillsCarousel } from "@/components/SkillsCarousel";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-stone-200 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <div>
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-400">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          My top 3 skills
        </h2>
        <div className="mt-10 rounded-3xl bg-stone-900 px-8 py-12 sm:px-12 sm:py-16">
          <SkillsCarousel variant="dark" />
        </div>

        <h2 className="mt-20 text-xl font-bold tracking-tight text-stone-900 sm:text-2xl">
          What I bring
        </h2>
        <div className="mt-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="text-[12px] font-medium uppercase tracking-widest text-stone-400">
                {category.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
