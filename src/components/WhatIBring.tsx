import { skillCategories, topSkillsSlides } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

const allSkills = [
  ...topSkillsSlides.map((s) => ({ name: s.title, skills: [s.description] })),
  ...skillCategories,
];

export function WhatIBring() {
  return (
    <section id="skills" className="scroll-mt-20 border-t border-stone-200 bg-white py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-600">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          What I bring
        </h2>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {allSkills.map((category) => (
            <div key={category.name}>
              <h3 className="text-[12px] font-medium uppercase tracking-widest text-stone-600">
                {category.name}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                {category.skills.join(", ")}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
