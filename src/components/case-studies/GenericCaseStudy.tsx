"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import type { Project } from "@/data/content";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

const MIN_OPACITY = 0.35;

function lerp(t: number, a: number, b: number) {
  return a + (b - a) * t;
}

interface GenericCaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

export function GenericCaseStudy({ project, nextProject }: GenericCaseStudyProps) {
  const heroSectionRef = useRef<HTMLElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = heroSectionRef.current;
    const content = heroContentRef.current;
    if (!section || !content) return;
    const onScroll = () => {
      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const progress =
        rect.top >= 0 ? 0 : Math.min(1, -rect.top / (sectionHeight * 1));
      const t = progress <= 0.25 ? 0 : (progress - 0.25) / 0.75;
      content.style.opacity = String(lerp(t, 1, MIN_OPACITY));
      content.style.transform = `scale(${lerp(t, 1, 0.95)})`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const story = project.slug === "postpone-renewal-date" ? {
    context: "When learners needed a little more time, pausing or cancelling a subscription could interrupt classes and put paid lesson hours at risk. Flexibility was showing up as lost learning and avoidable churn.",
    insight: "“I don’t want to stop learning. I just can’t predict exactly when I’ll have time again, and I don’t want to lose the hours I paid for.”",
    approach: ["Make the renewal date flexible by up to 20 days, once per cycle.", "Keep remaining lesson hours available during the postponed period.", "Offer the option in the cancellation flow when it fits the learner’s reason."],
    impact: [{value:"+2.1%",label:"hours confirmed"},{value:"+5.6%",label:"gross margin"},{value:"+4.4%",label:"new learner activation"}],
    image: "/images/portfolio/postpone-renewal.png",
    imageAlt: "Mobile subscription screen showing the new renewal date selection"
  } : project.slug === "gamification" ? {
    context: "Game mechanics are often added as decoration. I’ve seen them work when they make a real user goal visible: a reason to return to a language lesson, or a fair exchange that helps a new feedback community get started.",
    insight: "Gamification is the delivery mechanism for the solution. Start with the behaviour that helps people make progress, then make that progress tangible.",
    approach: ["Mondly: daily streaks supported consistent practice; streak protection gave learners a little room to miss a day.", "B2B learning: leaderboards made shared progress visible across teams and classrooms.", "Reviewlab: earn credits by giving useful feedback, then spend them to request feedback on your own work."],
    impact: [{value:"+73%",label:"long-term retention for learners with 7+ day streaks"},{value:"+32%",label:"weekly active users after B2B leaderboards"},{value:"+67%",label:"new Reviewlab users giving feedback in week one"}],
    image: "/images/portfolio/case-cover.png",
    imageAlt: "Gamification concept screens from Mondly and Reviewlab"
  } : null;

  return (
    <article className="min-h-screen bg-[#F5F4F0] pt-24 pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="text-[12px] font-medium uppercase tracking-[0.2em]"
            style={{ color: "var(--color-muted)" }}
          >
            Case Study / {project.title}
          </p>
          <Link
            href="/"
            className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#1A9CA8] transition-colors hover:text-[#147880]"
          >
            Back to homepage
          </Link>
        </div>
        <header ref={heroSectionRef}>
          <div
            ref={heroContentRef}
            className="hero-content"
            style={{ transition: "opacity 0.25s ease-out, transform 0.4s ease-out" }}
          >
            <h1
              className="hero-fade-up text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl"
              style={{ ["--delay" as string]: "0.15s" }}
            >
              {project.title}
            </h1>
            <p
              className="hero-fade-up mt-6 max-w-[680px] text-[17px] leading-relaxed"
              style={{ color: "var(--color-muted)", ["--delay" as string]: "0.25s" }}
            >
              {project.description}
            </p>
            <div
              className="hero-fade-up mt-10 border-t pt-10"
              style={{ borderColor: "var(--color-border)", ["--delay" as string]: "0.35s" }}
            >
              <p
                className="text-[12px] font-medium uppercase tracking-[0.2em]"
                style={{ color: "var(--color-muted)" }}
              >
                Case type
              </p>
              <p className="case-type-label mt-2">{project.caseType}</p>
            </div>
          </div>
        </header>
        {story && (
          <div className="case-story">
            <div className="case-art"><img src={story.image} alt={story.imageAlt} /></div>
            <section className="case-copy-block"><p className="eyebrow">The challenge</p><h2>Start with what people need.</h2><p>{story.context}</p></section>
            <section className="case-quote"><span>What research made clear</span><blockquote>{story.insight}</blockquote></section>
            <section className="case-copy-block"><p className="eyebrow">The approach</p><h2>Design the system around progress.</h2><ul>{story.approach.map((point) => <li key={point}>{point}</li>)}</ul></section>
            <section className="case-results"><p className="eyebrow">Measured impact</p><div>{story.impact.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div><p className="case-note">Results are from the experiments and launches described in the original case study.</p></section>
          </div>
        )}
        {!story && project.image && <div className="case-art case-art-single"><img src={project.image} alt={project.imageAlt ?? ""} /></div>}
        {nextProject && (
          <ScrollReveal className="mt-24">
            <RevealItem>
              <footer className="border-t pt-16" style={{ borderColor: "var(--color-border)" }}>
                <p
                  className="text-[12px] font-medium uppercase tracking-[0.2em]"
                  style={{ color: "var(--color-muted)" }}
                >
                  Next project
                </p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
                  {nextProject.title}
                </h2>
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-[17px] font-semibold text-[#1A9CA8] transition-colors hover:text-[#147880]"
                >
                  View project
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                    <path d="M4 10L10 4M10 4H5.5M10 4V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </footer>
            </RevealItem>
          </ScrollReveal>
        )}
      </div>
    </article>
  );
}
