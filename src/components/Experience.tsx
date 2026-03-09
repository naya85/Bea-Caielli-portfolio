import { experiences } from "@/data/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
          Experience
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Where I&rsquo;ve been
        </h2>

        <div className="relative mt-16">
          <div className="absolute left-0 top-0 hidden h-full w-px bg-stone-200 md:block" />

          <div className="space-y-12">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="md:pl-10">
                <div className="absolute -left-1.5 hidden h-3 w-3 rounded-full border-2 border-violet-400 bg-stone-50 md:block" />
                <div className="relative">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-lg font-semibold text-stone-900">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-medium text-violet-600">
                      {exp.company}
                    </span>
                  </div>
                  <div className="mt-1 flex flex-wrap gap-x-4 text-sm text-stone-400">
                    <span>{exp.period}</span>
                    <span>{exp.location}</span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-stone-400">
                    {exp.domain}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">
                    {exp.summary}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-stone-500"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-violet-300" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
