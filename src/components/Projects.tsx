"use client";

import Link from "next/link";
import { projects } from "@/data/content";
import { FadeAtTop } from "@/components/FadeAtTop";
import { ScrollFadeSection } from "@/components/ScrollFadeSection";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";

function ExternalLinkIcon() {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors group-hover:border-[#1A1A1A] group-hover:bg-[#1A1A1A]"
      style={{ borderColor: "var(--color-border)" }}
      aria-hidden
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="text-[#1A1A1A] transition-colors group-hover:text-white"
      >
        <path
          d="M4 10L10 4M10 4H5.5M10 4V8.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function Projects() {
  return (
    <ScrollFadeSection id="work" className="scroll-mt-24 bg-[#F5F4F0] py-[120px]">
      <ScrollReveal className="mx-auto max-w-[1200px] px-6" stagger>
        <RevealItem>
          <FadeAtTop>
            <p
              className="text-[12px] font-medium uppercase tracking-[0.2em]"
              style={{ color: "var(--color-muted)" }}
            >
              SELECTED WORK
            </p>
          </FadeAtTop>
        </RevealItem>
        <RevealItem delay={0.1}>
          <FadeAtTop>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-[#1A1A1A] md:text-5xl lg:text-6xl">
              Case studies
            </h2>
          </FadeAtTop>
        </RevealItem>
        <ul className="mt-12 list-none border-0 border-t-0 p-0" style={{ borderColor: "var(--color-border)" }}>
          {projects.map((project, index) => (
            <li key={project.slug}>
              <RevealItem delay={index * 0.05}>
                <FadeAtTop>
                  <Link
                    href={`/work/${project.slug}`}
                    className="group flex w-full flex-col gap-2 py-8 sm:flex-row sm:items-start sm:justify-between sm:gap-6 border-0 border-t-0 border-l-0 border-r-0"
                    style={{
                      borderBottom:
                        index < projects.length - 1 ? "1px solid var(--color-border)" : undefined,
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <p
                        className="text-[12px] font-medium uppercase tracking-[0.2em]"
                        style={{ color: "var(--color-muted)" }}
                      >
                        {project.year}
                      </p>
                      <h3 className="mt-1 text-2xl font-bold leading-snug text-[#1A1A1A] md:text-3xl lg:text-4xl">
                        {project.title}
                      </h3>
                      <p className="mt-3 max-w-[60ch] text-[17px] leading-relaxed" style={{ color: "var(--color-muted)" }}>
                        {project.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2">
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
                    <div className="mt-4 flex shrink-0 sm:mt-0 sm:pt-1">
                      <ExternalLinkIcon />
                    </div>
                  </Link>
                </FadeAtTop>
              </RevealItem>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </ScrollFadeSection>
  );
}
