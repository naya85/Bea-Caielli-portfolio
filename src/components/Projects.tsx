import { projects } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6" stagger>
        <p className="reveal reveal-child text-[13px] font-medium uppercase tracking-[0.2em] text-stone-400">
          Work
        </p>
        <h2 className="reveal reveal-child reveal-delay-1 mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl lg:text-4xl">
          Recent projects
        </h2>
        <p className="reveal reveal-child reveal-delay-1 mt-3 max-w-xl text-[15px] leading-relaxed text-stone-500">
          Product design across EdTech, Fintech, and SaaS.
        </p>

        <div className="reveal reveal-child reveal-delay-2 mt-14 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[20px] border border-stone-100 bg-white p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              <p className="text-[13px] font-medium text-stone-400">
                {project.company}
              </p>
              <h3 className="mt-1 text-lg font-bold text-stone-900 transition-colors group-hover:text-stone-700">
                {project.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-stone-500">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[12px] text-stone-400"
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
