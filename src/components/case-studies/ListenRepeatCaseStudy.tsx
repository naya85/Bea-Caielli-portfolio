"use client";

import Link from "next/link";
import { useRef, useEffect } from "react";
import { listenRepeatCaseStudy } from "@/data/case-studies/listen-repeat";
import { type Project } from "@/data/content";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

const c = listenRepeatCaseStudy;
const MIN_OPACITY = 0.35;

function lerp(t: number, a: number, b: number) {
  return a + (b - a) * t;
}

const SECTION_H2_CLASS = "text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl";
const BODY_CLASS = "text-[17px] leading-loose text-[#1A1A1A]";
const EYEBROW_CLASS = "text-[12px] font-medium uppercase tracking-[0.2em]";
/** Case study stats: 36/48/60px, font-weight 700 */
const STAT_NUMBER_CLASS = "text-4xl font-bold leading-none tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl";

function ImagePlaceholder({ label, aspect = "16/9" }: { label: string; aspect?: string }) {
  return (
    <div
      className="mt-8 flex items-center justify-center rounded-2xl border border-dashed py-16"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "color-mix(in srgb, #E8E5E0 40%, #F5F4F0)",
        aspectRatio: aspect,
      }}
    >
      <span className={`text-[13px] font-medium tracking-wide`} style={{ color: "var(--color-muted)" }}>
        {label}
      </span>
    </div>
  );
}

interface ListenRepeatCaseStudyProps {
  project: Project;
  nextProject: Project | null;
}

export function ListenRepeatCaseStudy({ project, nextProject }: ListenRepeatCaseStudyProps) {
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

  const hero = c.hero as { title: string; subtitle: string; team?: string; company?: string; year?: string };
  const heroMeta = hero.team || hero.company || hero.year
    ? { team: hero.team, company: hero.company, year: hero.year }
    : null;

  return (
    <article className="min-h-screen bg-[#F5F4F0] pt-24 pb-24">
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* Top bar: Back to homepage (top left) */}
        <div className="mb-12">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 ${EYEBROW_CLASS} text-[#1A9CA8] transition-colors hover:text-[#147880]`}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden className="shrink-0">
              <path d="M9 3L5 7l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to homepage
          </Link>
        </div>

        {/* Hero — fade-up on load, fade (min opacity) when scrolling out */}
        <header ref={heroSectionRef}>
          <div
            ref={heroContentRef}
            className="hero-content"
            style={{ transition: "opacity 0.25s ease-out, transform 0.4s ease-out" }}
          >
            <h1
              className={`hero-fade-up ${SECTION_H2_CLASS}`}
              style={{ ["--delay" as string]: "0.15s" }}
            >
              {c.hero.title}
            </h1>
            <p
              className="hero-fade-up mt-6 text-[19px] leading-loose text-[#1A1A1A]"
              style={{ color: "var(--color-muted)", ["--delay" as string]: "0.25s" }}
            >
              {c.tldr}
            </p>
            {heroMeta && (
              <div
                className="hero-fade-up mt-10 grid gap-8 border-t border-b pt-10 pb-10 sm:grid-cols-2 lg:grid-cols-3"
                style={{ borderColor: "var(--color-border)", ["--delay" as string]: "0.35s" }}
              >
                {heroMeta.team && (
                  <div>
                    <p className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>Team</p>
                    <p className={`mt-1 ${BODY_CLASS}`}>{heroMeta.team}</p>
                  </div>
                )}
                {heroMeta.company && (
                  <div>
                    <p className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>Company</p>
                    <p className={`mt-1 ${BODY_CLASS}`}>{heroMeta.company}</p>
                  </div>
                )}
                {heroMeta.year && (
                  <div>
                    <p className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>Year</p>
                    <p className={`mt-1 ${BODY_CLASS}`}>{heroMeta.year}</p>
                  </div>
                )}
              </div>
            )}
            <div className="hero-fade-up mt-6" style={{ ["--delay" as string]: "0.4s" }}>
              <span className="case-type-label">{project.caseType}</span>
            </div>
            <div
              className="hero-fade-up mt-8 w-full"
              style={{ ["--delay" as string]: "0.45s" }}
            >
              <img
                src={c.images.heroProduct}
                alt="Listen and Repeat — guided practice and pronunciation flow on mobile"
                className="w-full rounded-2xl object-contain"
              />
            </div>
          </div>
        </header>

        <ScrollReveal stagger>
          {/* Problem & Challenges — two columns */}
          <RevealItem>
            <section className="mt-20 grid gap-12 md:grid-cols-2">
              <div>
                <h2 className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>
                  {c.problem.heading.toUpperCase()}
                </h2>
                <p className={`mt-4 ${BODY_CLASS}`}>
                  {c.problem.body}
                </p>
              </div>
              <div>
                <h2 className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>
                  {c.previousExperience.heading.toUpperCase()}
                </h2>
                <p className={`mt-4 ${BODY_CLASS}`}>
                  {c.previousExperience.body}
                </p>
                {c.problem.quotes.length > 0 && (
                  <section className="mt-6 space-y-3" aria-label="User feedback quotes">
                    <div className="space-y-3">
                      {c.problem.quotes.map((quote, qi) => (
                        <blockquote
                          key={`${quote.slice(0, 20)}-${qi}`}
                          className="border-l-4 pl-6 py-2"
                          style={{ borderLeftColor: "#1A1A1A" }}
                        >
                          <p className="text-[14px] leading-relaxed italic" style={{ color: "var(--color-muted)" }}>
                            "{quote}"
                          </p>
                        </blockquote>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </section>
          </RevealItem>

          {/* How we got there — methodology */}
          <RevealItem>
            <div
              className="relative left-1/2 right-1/2 mt-20 w-screen -ml-[50vw] -mr-[50vw] py-16 md:pt-[120px] md:pb-[120px]"
              style={{ backgroundColor: "color-mix(in srgb, #E8E5E0 50%, #F5F4F0)" }}
            >
              <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
                <section className="w-full">
                  <p className="text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
                    Process
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#1A1A1A] md:text-5xl">
                    How we got there
                  </h2>
                  <div className="mt-10" style={{ borderColor: "var(--color-border)" }}>
                    {c.research.steps.map((s, i) => (
                      <RevealItem key={s.step} delay={i * 0.05}>
                        <div
                          className="grid grid-cols-1 items-center gap-x-24 border-b border-t pt-10 pb-10 first:border-t-0 md:grid-cols-[minmax(0,320px)_1fr]"
                          style={{ borderColor: "var(--color-border)" }}
                        >
                          <div className="flex min-w-0 items-baseline gap-24">
                            <span className="shrink-0 text-[16px] font-semibold tabular-nums leading-none" style={{ color: "var(--color-muted)" }}>
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <h3 className="text-[16px] font-bold leading-tight tracking-tight text-[#1A1A1A]">
                              {s.title}
                            </h3>
                          </div>
                          {"body" in s && s.body && (
                            <p className="min-w-0 whitespace-pre-line text-[16px] leading-loose md:mt-0" style={{ color: "var(--color-muted)" }}>
                              {s.body}
                            </p>
                          )}
                        </div>
                      </RevealItem>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </RevealItem>

          {/* The solution */}
          <RevealItem>
            <section className="mt-20 w-full max-w-[1000px]">
              <p className="text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
                {c.solution.eyebrow.toUpperCase()}
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#1A1A1A] md:text-5xl">
                {c.solution.heading}
              </h2>
              <p className={`mt-6 ${BODY_CLASS}`}>
                {c.solution.intro[0]}
              </p>
              <p className={`mt-4 ${BODY_CLASS}`}>
                {c.solution.intro[1]}
              </p>
              <div className="mt-10" style={{ borderColor: "var(--color-border)" }}>
                {c.solution.decisions.map((d, i) => (
                  <RevealItem key={d.label} delay={i * 0.06}>
                    <div
                      className="grid grid-cols-1 items-center gap-x-24 border-b border-t pt-10 pb-10 first:border-t-0 md:grid-cols-[minmax(0,320px)_1fr]"
                      style={{ borderColor: "var(--color-border)" }}
                    >
                      <div className="flex min-w-0 items-baseline gap-24">
                        <span
                          className="shrink-0 text-[11px] font-semibold tabular-nums leading-none"
                          style={{ color: "var(--color-muted)" }}
                          aria-hidden
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-[16px] font-bold leading-tight tracking-tight text-[#1A1A1A]">
                          {d.label.replace(/^DECISION\s+(\d+)$/i, "Decision $1")}
                        </h3>
                      </div>
                      <p
                        className="min-w-0 w-full text-[17px] leading-loose md:mt-0"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {d.body}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </section>
          </RevealItem>

          {/* Project assets placeholder */}
          <RevealItem>
            <section className="mt-20 grid gap-8 sm:grid-cols-2">
              <ImagePlaceholder label="Project asset" />
              <ImagePlaceholder label="Project asset" />
            </section>
          </RevealItem>

          {/* Impact & outcomes */}
          <RevealItem>
            <section className="mt-20">
              <p className="text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
                Results
              </p>
              <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#1A1A1A] md:text-5xl">
                {c.impact.heading}
              </h2>
              <div className="mt-4 w-full space-y-4">
                {Array.isArray(c.impact.body) ? (
                  c.impact.body.map((para, i) => (
                    <p key={i} className={BODY_CLASS}>
                      {para}
                    </p>
                  ))
                ) : (
                  <p className={BODY_CLASS}>{c.impact.body}</p>
                )}
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {c.impact.metrics.map((m, i) => (
                  <RevealItem key={m.label} delay={i * 0.05}>
                    <div>
                      <p className={STAT_NUMBER_CLASS}>
                        {m.value}
                      </p>
                      <p className="mt-2 text-[13px] font-normal tracking-wide" style={{ color: "var(--color-muted)" }}>
                        {m.label}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </div>
            </section>
          </RevealItem>

          {/* Reflection / Key takeaways */}
          <RevealItem>
            <div
              className="relative left-1/2 right-1/2 mt-20 w-screen -ml-[50vw] -mr-[50vw] py-[120px]"
              style={{ backgroundColor: "color-mix(in srgb, #E8E5E0 50%, #F5F4F0)" }}
            >
              <div className="mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
                <section className="w-full">
                  <p className="text-[13px] font-medium uppercase tracking-[0.08em]" style={{ color: "var(--color-muted)" }}>
                    {c.reflection.eyebrow.toUpperCase()}
                  </p>
                  <h2 className="mt-2 text-4xl font-bold tracking-[-0.03em] text-[#1A1A1A] md:text-5xl">
                    {c.reflection.heading}
                  </h2>
                  <div className="mt-10">
                    {c.reflection.points.map((point, i) => (
                      <RevealItem key={i} delay={i * 0.05}>
                        <div
                          className="grid grid-cols-1 items-center gap-x-24 border-b border-t pt-10 pb-10 first:border-t-0 md:grid-cols-[auto_1fr]"
                          style={{ borderColor: "var(--color-border)" }}
                        >
                          <span className="w-fit text-[16px] font-semibold tabular-nums leading-none" style={{ color: "var(--color-muted)" }}>
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="min-w-0 text-[16px] leading-loose md:mt-0" style={{ color: "var(--color-muted)" }}>
                            {point}
                          </p>
                        </div>
                      </RevealItem>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </RevealItem>
        </ScrollReveal>

        {/* Next case study */}
        {nextProject && (
          <RevealItem>
            <footer className="mt-24 pt-16 text-center">
              <p className={EYEBROW_CLASS} style={{ color: "var(--color-muted)" }}>
                Next project
              </p>
              <h2 className="mt-2 text-4xl font-bold leading-snug tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
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
        )}
      </div>
    </article>
  );
}
