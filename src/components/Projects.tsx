import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
          Selected Work
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Projects I&rsquo;m proud of
        </h2>
        <p className="mt-4 max-w-2xl text-base text-stone-500">
          A selection of product design work across EdTech, Fintech, and SaaS —
          from strategic discovery to shipped features.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-2xl border border-stone-200 bg-stone-50 p-6 transition-all hover:border-stone-300 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100 text-lg font-bold text-violet-600">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-lg font-semibold text-stone-900">
                {project.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-violet-600">
                {project.company}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-stone-500">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-stone-200/60 px-3 py-1 text-xs font-medium text-stone-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
