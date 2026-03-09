import { education, certifications, prizes } from "@/data/content";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
          Education
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          Learning never stops
        </h2>

        <div className="mt-16 grid gap-12 lg:grid-cols-3">
          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
              Degrees
            </h3>
            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.degree}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-stone-900">
                    {edu.degree}
                  </p>
                  <p className="mt-1 text-sm text-violet-600">
                    {edu.institution}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-stone-400">
                    <span>{edu.location}</span>
                    <span>{edu.year}</span>
                    {edu.grade && (
                      <span className="rounded-full bg-violet-100 px-2 py-0.5 font-medium text-violet-700">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-stone-900">
                    {cert.name}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-stone-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xs font-semibold uppercase tracking-widest text-stone-400">
              Awards
            </h3>
            <div className="space-y-4">
              {prizes.map((prize) => (
                <div
                  key={prize.name}
                  className="rounded-2xl border border-stone-200 bg-white p-5"
                >
                  <p className="text-sm font-semibold text-stone-900">
                    {prize.name}
                  </p>
                  <div className="mt-2 flex items-center gap-3 text-xs text-stone-400">
                    <span>{prize.event}</span>
                    <span>{prize.location}</span>
                    <span>{prize.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
