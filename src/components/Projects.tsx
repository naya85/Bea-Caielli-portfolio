import { projects } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-[#1A1A1A]/08 bg-[#F5F4F0] py-[120px]">
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <p className="reveal reveal-child text-[13px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A]/6">
          Work
        </p>
        <h2 className="reveal reveal-child reveal-delay-1 mt-2 text-[clamp(2rem,4vw,3rem)] font-bold tracking-tight text-[#1A1A1A]">
          Case studies
        </h2>
        <div className="reveal reveal-child reveal-delay-2 mt-12 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-2xl border border-[#1A1A1A]/08 bg-[#F5F4F0] p-8 transition-all duration-[180ms] ease-out hover:border-[#1A1A1A]/12 hover:shadow-md"
            >
              <p className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/6">
                {project.company}
              </p>
              <h3 className="mt-2 text-[18px] font-bold leading-snug text-[#1A1A1A]">
                {project.title}
              </h3>
              <p className="mt-3 max-w-[40ch] text-[17px] leading-relaxed text-[#1A1A1A]/80">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[13px] font-medium tracking-wide text-[#1A1A1A]/5"
                  >
                    {tag}
                    {project.tags.indexOf(tag) < project.tags.length - 1 ? " · " : ""}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
