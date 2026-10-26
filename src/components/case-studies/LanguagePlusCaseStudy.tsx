import Image from "next/image";
import { CaseStudyBack, CaseStudyLabel, CaseStudyNext } from "@/components/case-studies/CaseStudyChrome";
import type { Project } from "@/data/content";

const base = "/images/case-studies/language-plus";

const RESULTS = [
  ["+36%", "sales in regions and coursebooks where launched"],
  ["6 countries", "app store availability in August 2026"],
  ["2×", "core journey completion in the first two pilot weeks"],
  ["3 decisions", "changed directly by teacher evidence"],
];

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-[22px]">
      <Image src={`${base}/${src}`} alt={alt} width={1600} height={900} className="h-auto w-full" />
      <figcaption className="px-5 py-3 text-sm text-black/60">{caption}</figcaption>
    </figure>
  );
}

function Section({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="my-20 grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
      <div><span className="case-eyebrow">{eyebrow}</span><h2 className="ui-heading ui-heading--subsection mt-3">{title}</h2></div>
      <div className="space-y-5 text-[20px] leading-relaxed text-black/70">{children}</div>
    </section>
  );
}

export function LanguagePlusCaseStudy({ project, nextProject }: { project: Project; nextProject: Project | null }) {
  return (
    <article className="case-study-page min-h-screen pb-24 pt-28">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <CaseStudyBack />
        <header className="max-w-[900px] pb-6 pt-12">
          <h1 className="ui-heading ui-heading--page">From Mondly to Language+</h1>
          <p className="case-emphasis mt-6 max-w-[760px] text-black/65">Turning a consumer app into a product for schools: a one-year journey from evidence-led vision to a live English practice product.</p>
          <CaseStudyLabel project={project} />
          <div className="mt-9 grid gap-6 sm:grid-cols-3">
            <div><span className="case-eyebrow">My role</span><p className="mt-2">Senior Product Designer · strategy, research, UX</p></div>
            <div><span className="case-eyebrow">Team</span><p className="mt-2">Product, learning design, engineering, sales</p></div>
            <div><span className="case-eyebrow">Scope</span><p className="mt-2">Vision, student practice, teacher tools, pilot</p></div>
          </div>
          <div className="case-results-glance" aria-label="Results at a glance">
            {RESULTS.map(([value, label]) => <div key={value}><strong>{value}</strong><span>{label}</span></div>)}
          </div>
        </header>

        <Figure src="1-vision.jpg" alt="Early Language+ product vision and concept screens" caption="The first concept made the shift tangible: practice connected to the coursebooks teachers already use." />

        <Section eyebrow="The opportunity" title="A strong consumer app needed a school-shaped reason to exist.">
          <p>Mondly had reached more than 100 million downloads across 41+ languages. But as a standalone app, it sat outside the coursebooks and lesson plans schools relied on. That made it difficult to bring into the classroom and difficult to sell to schools.</p>
          <p>In a three-person task force with a product manager and learning design expert, I helped turn a product leader’s idea into a focused vision in two months: improve learning outcomes by bringing repetition practice into Pearson courseware.</p>
        </Section>

        <Section eyebrow="Research" title="We grounded the vision in teachers’ everyday constraints.">
          <p>I helped shape the research plan and ran 12 of 13 interviews with 23 teachers across seven countries. The recurring need was clear: students forget between lessons, and practice has to follow the coursebook if teachers are going to recommend it.</p>
          <div className="grid gap-3 py-3 sm:grid-cols-3">
            <div><strong className="block text-3xl">23 / 23</strong><span className="mt-2 block text-[16px]">said students forget between lessons</span></div>
            <div><strong className="block text-3xl">15 / 23</strong><span className="mt-2 block text-[16px]">rated coursebook alignment 10/10</span></div>
            <div><strong className="block text-3xl">22 / 23</strong><span className="mt-2 block text-[16px]">said teacher visibility was critical</span></div>
          </div>
          <p>Those findings shaped the Memory Challenge, unit-based practice, a teacher dashboard and a quick setup path. They also helped us make deliberate scope calls: light gamification for learners 16+, and no AI at launch while teacher trust was split.</p>
        </Section>
        <Figure src="3-research.jpg" alt="Teacher research synthesis and evidence" caption="Teacher evidence connected learning needs to concrete product choices." />

        <Section eyebrow="From vision to MVP" title="Make the whole learning service work, not just the app screen.">
          <p>I facilitated service blueprinting and cross-functional alignment around a north star: a learner completing at least three coursebook practice sessions per week. It kept the team focused on learning behaviour and teacher value, alongside business outcomes.</p>
          <p>For the student experience, we rebuilt onboarding around school sign-in or guest access, confirming the coursebook, and getting into practice quickly. Memory Challenge introduced guided spaced repetition; teachers needed a way to understand who was practising and who might need support.</p>
        </Section>
        <Figure src="4a-service-blueprint.jpg" alt="Service blueprint connecting the learner and teacher experience" caption="Service blueprinting aligned the student journey, teacher needs and operational requirements." />
        <Figure src="4-mvp.jpg" alt="Language+ MVP student learning experience" caption="The MVP brought coursebook-aligned practice and Memory Challenge into one student experience." />

        <Section eyebrow="Teacher experience" title="A dashboard built around the next useful action.">
          <p>The dashboard goal was simple: help teachers spot learners who need attention in fewer than five steps. I built a working prototype on Pearson’s Nemo design system and partnered with engineering to carry it into the product; I contributed roughly 192 of 390 commits.</p>
          <p>Teacher testing in four countries changed the details. Every teacher used the struggling-student panel. Three of seven found “average score” confusing, so we changed the measure to active students. Four of seven struggled with adding students, so we redesigned the flow around a class code.</p>
        </Section>
        <Figure src="5-dashboard.jpg" alt="Pearson Language+ teacher dashboard design and prototype" caption="Teacher feedback shaped the dashboard’s signals and class setup flow." />

        <Section eyebrow="Classroom pilot" title="Measure learning progress with context.">
          <p>In an Indonesian pilot across two schools and around 835 students, we paired survey waves and teacher check-ins with 17 measures. In the first two weeks, 24% of pilot students completed the core journey, compared with 12% in the initial benchmark.</p>
          <p>I resisted presenting a 98% figure as a UX win because pilot setup itself drove much of that result. Teacher activity also dropped during exam season, from 33 weekly active teachers to four. Those signals informed a browser-version hypothesis and the calendar readiness needed for the Poland pilot.</p>
        </Section>
        <Figure src="6-pilot.jpg" alt="Pilot measurement and classroom learning findings" caption="Pilot data was read alongside school context, teacher check-ins and seasonal effects." />

        <Section eyebrow="Scaling the experience" title="Design for the next set of books, not just the first launch.">
          <p>For Onboarding V2, I worked on a more scalable path for five books: one profile screen, book-cover selection, language fallback and moving class join out of onboarding. In concept testing, all eight participants described the flow as fast and simple; five found their book on the first try, while only three used English fallback when their language was missing.</p>
          <p>That last finding exposed a real gap, so I’m redesigning the fallback. We used the word “book” throughout because it matched teachers’ language better than “course” or “edition.”</p>
        </Section>
        <Figure src="7-onboarding.jpg" alt="Language+ onboarding version two concepts" caption="Testing helped identify where the scalable onboarding flow still needed clearer language and fallback." />

        <section className="my-20">
          <span className="case-eyebrow">What moved</span>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {RESULTS.map(([value, label]) => <div key={value}><strong className="text-3xl md:text-4xl">{value}</strong><span className="mt-3 block text-[16px] leading-relaxed text-black/60">{label}</span></div>)}
          </div>
          <p className="mt-9 max-w-[760px] text-sm leading-relaxed text-black/55">Language+ 1.0 was ready at the end of June 2026 and launched in Turkey, Switzerland, the Netherlands, Belgium, Luxembourg and Ukraine in August. The reported sales lift applies to the regions and coursebooks where it launched.</p>
        </section>

        <blockquote className="case-quote case-emphasis my-20 max-w-[850px] text-[#1a1a1a]">A vision needs evidence before it needs polish. Postponing the first leadership pitch felt like a setback. It turned out to be the reason the vision held up.</blockquote>

        <CaseStudyNext project={nextProject} />
      </div>
    </article>
  );
}
