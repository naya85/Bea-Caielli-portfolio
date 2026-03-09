import { experiences, languages } from "@/data/content";

export function About() {
  const yearsOfExperience =
    new Date().getFullYear() - 2014;

  return (
    <section id="about" className="scroll-mt-20 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-violet-600">
              About
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
              Designing with intention,
              <br />
              measuring with rigor.
            </h2>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-stone-600">
              <p>
                I&rsquo;m a Senior Product Designer with {yearsOfExperience}+
                years of experience crafting digital products across EdTech,
                Fintech, SaaS, AI, and Healthcare. My approach combines deep
                user research with data-informed decision-making to create
                experiences that drive measurable business outcomes.
              </p>
              <p>
                I thrive in complex problem spaces — from conceptualizing
                adaptive learning systems to building design systems that scale.
                I&rsquo;m passionate about accessibility, mentoring, and
                bridging the gap between user needs and business goals.
              </p>
              <p>
                Beyond my full-time role, I co-founded{" "}
                <strong className="text-stone-800">Reviewlab</strong>, a SaaS
                platform for indie makers, and I mentor aspiring designers on
                ADPList. I also have a unique background in fashion design, which
                gives me a distinctive perspective on aesthetics, materials, and
                the creative process.
              </p>
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Quick facts
              </h3>
              <dl className="space-y-3">
                <div className="flex justify-between">
                  <dt className="text-sm text-stone-500">Experience</dt>
                  <dd className="text-sm font-medium text-stone-800">
                    {yearsOfExperience}+ years
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-stone-500">Companies</dt>
                  <dd className="text-sm font-medium text-stone-800">
                    {experiences.length}+
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-stone-500">Location</dt>
                  <dd className="text-sm font-medium text-stone-800">
                    Milan, IT
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-stone-500">Focus</dt>
                  <dd className="text-sm font-medium text-stone-800">
                    EdTech & SaaS
                  </dd>
                </div>
              </dl>
            </div>

            <div className="rounded-2xl border border-stone-200 bg-white p-6">
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-stone-400">
                Languages
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div key={lang.language} className="flex justify-between">
                    <span className="text-sm text-stone-500">
                      {lang.language}
                    </span>
                    <span className="text-sm font-medium text-stone-800">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
