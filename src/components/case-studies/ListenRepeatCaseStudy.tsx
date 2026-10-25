import { type ReactNode } from "react";
import { listenRepeatCaseStudy as c } from "@/data/case-studies/listen-repeat";
import { type Project } from "@/data/content";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";
import { PhoneVideo } from "@/components/PhoneVideo";
import { CaseStudyBack, CaseStudyLabel, CaseStudyNext } from "@/components/case-studies/CaseStudyChrome";

interface ListenRepeatCaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="lr-eyebrow">{children}</span>;
}

function Figure({ src, alt, caption, className = "" }: { src: string; alt: string; caption?: string; className?: string }) {
  return (
    <figure className={`lr-figure ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function ListenRepeatCaseStudy({ project, nextProject }: ListenRepeatCaseStudyProps) {
  return (
    <article className="case-study-page listen-repeat-page min-h-screen pb-24">
      <section className="lr-hero dot-grid-backdrop" aria-label="Listen and repeat product screens">
        <CaseStudyBack className="lr-back" />
        <img
          className="lr-hero-phones"
          src={c.images.heroProduct}
          alt="Three Mondly mobile screens for guided practice and pronunciation"
          fetchPriority="high"
        />
      </section>

      <div className="lr-container">
        <header className="lr-intro">
          <CaseStudyLabel project={project} />
          <h1 className="ui-heading ui-heading--page">{c.hero.title}</h1>
        </header>

        <ScrollReveal className="lr-story" stagger>
          <RevealItem>
            <section className="lr-tldr" aria-labelledby="lr-tldr-heading">
              <Eyebrow>Case study overview</Eyebrow>
              <h2 id="lr-tldr-heading" className="ui-heading ui-heading--subsection">TL;DR</h2>
              <p className="lr-lede case-emphasis">{c.tldr}</p>
              <aside className="lr-takeaway">
                <span>The key takeaway</span>
                <p className="case-emphasis">{c.keyTakeaway}</p>
              </aside>
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-problem">
              <div className="lr-section-copy">
                <Eyebrow>01</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">{c.problem.heading}</h2>
                <p>{c.problem.body}</p>
              </div>
              <div className="lr-quotes" aria-label="Learner feedback">
                {c.problem.quotes.map((quote, index) => (
                  <blockquote key={quote} className={`lr-quote lr-quote--${index + 1}`}>
                    <span aria-hidden="true">“</span>
                    <p className="case-emphasis">{quote}</p>
                  </blockquote>
                ))}
              </div>
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-previous">
              <div className="lr-section-copy">
                <Eyebrow>02 / The previous experience</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">A lesson that tested before it taught.</h2>
                <p>{c.previousExperience.body}</p>
              </div>
              <Figure
                src={c.images.previousExperience}
                alt="Three screens showing Mondly’s original lesson, speaking practice and vocabulary experience"
                caption={c.previousExperience.caption}
                className="lr-previous-figure"
              />
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-research">
              <div className="lr-section-copy">
                <Eyebrow>03 / Research and analysis</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">The evidence pointed to a smaller first step.</h2>
                <p>{c.research.body}</p>
              </div>
              <div className="lr-research-cards">
                {c.research.steps.slice(1, 3).map((step, index) => (
                  <article className="lr-info-card" key={step.title}>
                    <span className="lr-card-number">0{index + 1}</span>
                    <h3 className="ui-heading ui-heading--card">{step.title}</h3>
                    <p>{step.body}</p>
                  </article>
                ))}
              </div>
              <div className="lr-scope">
                <Eyebrow>Limiting the scope</Eyebrow>
                <p>{c.research.limitingScope.body}</p>
                <strong>{c.research.keyQuestion.question}</strong>
              </div>
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-solution">
              <div className="lr-section-copy">
                <Eyebrow>04 / The solution</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">{c.solution.heading}</h2>
                <p>{c.solution.intro[0]}</p>
                <p>{c.solution.intro[1]}</p>
              </div>
              <Figure
                src={c.images.solutionExploration}
                alt="Product concept boards and layout explorations for guided learning and speaking practice"
                className="lr-wide-figure"
              />
              <p className="lr-transition-copy">After testing the main competitors and exploring different approaches with the Methodology team, we landed on two decisions:</p>
              <div className="lr-decisions">
                {c.solution.decisions.map((decision, index) => (
                  <article className="lr-decision" key={decision.label}>
                    <span className="lr-card-number">0{index + 1}</span>
                    <h3 className="ui-heading ui-heading--card">
                      {index === 0 ? "Repurpose the existing speaking feature" : "Keep validation simple and focused"}
                    </h3>
                    <p>{decision.body}</p>
                  </article>
                ))}
              </div>
              <Figure
                src={c.images.flowSteps}
                alt="The learning flow: choose a mode, listen and repeat, then practise with a quiz"
                className="lr-flow-figure"
              />
              <Figure
                src={c.images.userFlow}
                alt="Full user flow map showing guided practice and quiz paths through a Mondly lesson"
                className="lr-user-flow-figure"
              />
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-prototype">
              <div className="lr-section-copy">
                <Eyebrow>05 / Mockups and prototype</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">A guided lesson, from the first prompt to speaking aloud.</h2>
                <p>The redesigned flow introduces vocabulary first, lets learners hear and repeat each word, and then moves into practice. It stays optional, so learners can still go directly to quizzes.</p>
              </div>
              <PhoneVideo
                src="/videos/listen-repeat-walkthrough.mp4"
                label="Screen recording of the Listen and repeat prototype"
                caption="A click-through of the prototype."
              />
              <Figure
                src={c.images.mockups}
                alt="Nine mobile screens showing the complete guided practice and pronunciation experience"
                className="lr-mockups-figure"
              />
            </section>
          </RevealItem>

          <RevealItem>
            <section className="lr-section lr-impact">
              <div className="lr-section-copy">
                <Eyebrow>06 / Impact and results</Eyebrow>
                <h2 className="ui-heading ui-heading--subsection">{c.impact.heading}</h2>
                <p>{c.impact.body[0]} {c.impact.body[1]}</p>
              </div>
              <div className="lr-metrics">
                {c.impact.metrics.map((metric) => (
                  <article className="lr-metric" key={metric.label}>
                    <strong className="ui-stat">{metric.value}</strong>
                    <span>{metric.label}</span>
                  </article>
                ))}
              </div>
              <p className="lr-results-note">76% of users chose guided practice over going straight to quizzes. Keeping the choice open also respected the 24% who preferred the faster route.</p>
            </section>
          </RevealItem>
        </ScrollReveal>

        <RevealItem>
          <CaseStudyNext project={nextProject} />
        </RevealItem>
      </div>
    </article>
  );
}
