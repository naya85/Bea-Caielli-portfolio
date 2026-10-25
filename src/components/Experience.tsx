import { experiences } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-stone-200 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <div>
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-600">
          Experience
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Where I&rsquo;ve been
        </h2>

        <div className="relative mt-12 border-l-2 border-stone-200 pl-8">
          {experiences.map((exp) => (
            <div
              key={`${exp.company}-${exp.period}`}
              className="relative mb-10 last:mb-0"
            >
              <span
                className="absolute left-[-21px] top-1.5 h-3 w-3 rounded-full border-2 border-stone-200 bg-white"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                <h3 className="text-[15px] font-bold text-stone-900">
                  {exp.role}
                </h3>
                <span className="text-[15px] text-stone-600">
                  {exp.company}
                </span>
              </div>
              <p className="mt-1 text-[13px] text-stone-600">
                {exp.period} · {exp.location}
              </p>
              <p className="mt-2 text-[13px] font-medium uppercase tracking-wider text-stone-600">
                {exp.domain}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-600">
                {exp.summary}
              </p>
              <ul className="mt-3 space-y-1.5 pl-4 text-[15px] leading-relaxed text-stone-600 list-disc">
                {exp.highlights.slice(0, 4).map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
