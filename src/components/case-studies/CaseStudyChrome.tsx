import Link from "next/link";
import type { ReactNode } from "react";
import type { Project } from "@/data/content";

/** Shared framing for every case study page: the back link, the label row and the link onward. */

export function CaseStudyBack({ className = "" }: { className?: string }) {
  return (
    <Link href="/#work" className={`case-back ui-button ui-button--tertiary ${className}`.trim()} aria-label="Back to selected work">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
        <path d="M10.5 3.5 6 8l4.5 4.5M6.25 8h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Back
    </Link>
  );
}

/** Case type and status pills, then company and year — the same labels the homepage list shows. */
export function CaseStudyLabel({ project, date }: { project: Project; date?: string }) {
  const meta = [project.company, date ?? project.period ?? project.year].filter(Boolean).join(" · ");
  return (
    <div className="case-label">
      <span className="project-kind">{project.caseType}</span>
      {project.status === "in-progress" && <span className="project-status">In progress</span>}
      {meta && <span className="case-label-meta">{meta}</span>}
    </div>
  );
}

export function CaseStudyNext({ project }: { project: Project | null }) {
  if (!project) return null;
  return (
    <footer className="case-next dot-grid-backdrop">
      <span className="case-next-eyebrow">Next</span>
      <h2 className="ui-heading ui-heading--section">{project.title}</h2>
      <Link href={`/work/${project.slug}`} className="ui-button ui-button--tertiary project-view-link" aria-label={`View ${project.title}`}>
        View <span aria-hidden="true">↗</span>
      </Link>
    </footer>
  );
}

const CORNERS = ["tl", "tr", "bl", "br"] as const;

/**
 * The homepage's drafting details around a visual: corner registration marks, the lavender ring
 * and the soft accent circle used on the hero portrait and principles.
 */
export function DraftingFrame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`drafting-frame ${className}`.trim()}>
      <span className="drafting-accent" aria-hidden="true" />
      <span className="drafting-ring" aria-hidden="true" />
      {CORNERS.map((corner) => <span key={corner} className={`drafting-mark drafting-mark--${corner}`} aria-hidden="true" />)}
      {children}
    </div>
  );
}
