import { education, certifications, prizes } from "@/data/content";
import { ScrollReveal } from "@/components/ScrollReveal";

export function Education() {
  return (
    <section id="education" className="scroll-mt-20 border-t border-stone-200 bg-stone-50 py-28">
      <ScrollReveal className="mx-auto max-w-4xl px-6">
        <div>
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-stone-600">
          Education
        </p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight text-stone-900 sm:text-3xl">
          Education & certifications
        </h2>

        <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-widest text-stone-600">
              Degrees
            </h3>
            <div className="mt-4 space-y-6">
              {education.map((edu) => (
                <div key={edu.degree}>
                  <p className="text-[15px] font-medium text-stone-900">
                    {edu.degree}
                  </p>
                  <p className="mt-0.5 text-[14px] text-stone-600">
                    {edu.institution}
                  </p>
                  <p className="mt-1 text-[13px] text-stone-600">
                    {edu.location} · {edu.year}
                    {edu.grade && ` · ${edu.grade}`}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-widest text-stone-600">
              Certifications
            </h3>
            <div className="mt-4 space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name}>
                  <p className="text-[15px] font-medium text-stone-900">
                    {cert.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-stone-600">
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[12px] font-medium uppercase tracking-widest text-stone-600">
              Awards
            </h3>
            <div className="mt-4 space-y-4">
              {prizes.map((prize) => (
                <div key={prize.name}>
                  <p className="text-[15px] font-medium text-stone-900">
                    {prize.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-stone-600">
                    {prize.event} · {prize.location} · {prize.year}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
