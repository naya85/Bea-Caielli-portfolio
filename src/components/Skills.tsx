import { skillCategories } from "@/data/content";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
          Skills
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          What I bring to the table
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.name}
              className="rounded-2xl border border-stone-200 bg-white p-6"
            >
              <h3 className="mb-5 text-sm font-semibold uppercase tracking-widest text-stone-400">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-sm text-stone-700 transition-colors hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
