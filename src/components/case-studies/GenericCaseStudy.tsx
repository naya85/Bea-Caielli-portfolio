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
                Deliverables
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1.5 text-[13px] font-medium tracking-wide"
                    style={{ color: "var(--color-muted)", backgroundColor: "var(--color-muted-bg)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>
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
