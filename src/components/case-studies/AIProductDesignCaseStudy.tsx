import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/content";

export function AIProductDesignCaseStudy({ project, nextProject }: { project: Project; nextProject: Project | null }) {
  return (
    <article className="case-study-page min-h-screen pb-24 pt-28">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <Link href="/#work" className="ui-button ui-button--tertiary">← Back to case studies</Link>
        <header className="max-w-[900px] pb-6 pt-12">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7353B8]">Pearson · Product design · 2026</p>
          <h1 className="ui-heading ui-heading--page mt-5">{project.title}</h1>
          <p className="mt-6 max-w-[760px] text-base leading-relaxed text-[#171719]">{project.description}</p>
          <div className="mt-9 grid gap-6 border-y border-black/10 py-6 sm:grid-cols-2">
            <div><p className="text-xs uppercase tracking-widest text-[#171719]">My role</p><p className="mt-2">Senior Product Designer</p></div>
            <div><p className="text-xs uppercase tracking-widest text-[#171719]">Tools</p><p className="mt-2">Cursor, React, TypeScript, Tailwind, Firebase</p></div>
          </div>
        </header>

        <figure className="my-10 overflow-hidden rounded-[22px] border border-black/10 bg-[#e8e5e0]">
          <Image src="/images/case-studies/language-plus/5-dashboard.jpg" alt="Pearson Language+ teacher dashboard prototype" width={1448} height={1200} className="h-auto w-full" priority />
          <figcaption className="px-5 py-3 text-[#171719]">A working prototype made the teacher experience concrete enough to test and build on.</figcaption>
        </figure>

        <section className="my-20 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7353B8]">The opportunity</p><h2 className="ui-heading ui-heading--subsection mt-3">Make the teacher experience real enough to learn from.</h2></div>
          <div className="space-y-5 text-base leading-relaxed text-[#171719]">
            <p>Teachers needed a clear way to see who was practising and which learners might need support. The design goal was to help them find those learners in fewer than five steps.</p>
            <p>Static screens could show the direction, but a working prototype could make the interactions tangible for teacher testing, engineering collaboration, and leadership conversations.</p>
          </div>
        </section>

        <section className="my-20 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7353B8]">How I used AI</p><h2 className="ui-heading ui-heading--subsection mt-3">Prototype, test, then refine the product decisions.</h2></div>
          <div className="space-y-5 text-base leading-relaxed text-[#171719]">
            <p>I used Cursor as an AI-assisted coding partner to build a functional dashboard prototype with React, TypeScript, Tailwind and Firebase, using Pearson’s Nemo design system. AI helped shorten the distance between a design idea and something the team could interact with.</p>
            <p>I also used language models to accelerate transcript synthesis and structure research findings. The tools helped with making and organizing; I stayed accountable for framing the problem, interpreting what teachers said, deciding what to change, and shaping the experience.</p>
            <p>The prototype was not a throwaway mock. I worked with engineering to move the experience into production and contributed roughly 192 of 390 commits.</p>
          </div>
        </section>

        <section className="my-20 rounded-[28px] bg-[#171918] p-8 text-white md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-[#c7b5f0]">Teacher evidence</p>
          <h2 className="ui-heading ui-heading--subsection ui-heading--inverse mt-3 max-w-[720px]">Testing kept the AI-assisted build grounded in real needs.</h2>
          <p className="mt-5 max-w-[760px] text-base leading-relaxed text-white/70">Teachers in four countries tested the dashboard. Every teacher used the struggling-student panel. Three of seven found “average score” confusing, so we changed the signal to active students. Four of seven struggled to add students, which led us to redesign around a class code.</p>
        </section>

        <section className="my-20 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[.18em] text-[#7353B8]">Outcome</p><h2 className="ui-heading ui-heading--subsection mt-3">From a faster prototype to a shipped teacher tool.</h2></div>
          <div className="space-y-5 text-base leading-relaxed text-[#171719]">
            <p>The dashboard shipped in June 2026. A realistic prototype supported teacher testing before release and helped align product, engineering and senior stakeholders around a concrete experience.</p>
            <p>For me, the value of AI was not generating screens faster on its own. It was making a testable product easier to create, so evidence and design judgment could shape the work earlier.</p>
          </div>
        </section>

        {nextProject && <footer className="border-t border-black/10 pt-10"><p className="text-xs uppercase tracking-widest text-[#171719]">Next case study</p><Link href={`/work/${nextProject.slug}`} className="ui-button ui-button--tertiary mt-3">{nextProject.title} ↗</Link></footer>}
      </div>
    </article>
  );
}
