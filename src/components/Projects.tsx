import Link from "next/link";
import { orderedProjects } from "@/data/content";
import { ParallaxImage } from "@/components/ParallaxImage";
import { AiWorkflowDiagram } from "@/components/AiWorkflowDiagram";

export function Projects() {
  return (
    <section id="work" className="work-section">
      <div className="section-wrap">
        <div className="section-heading-row">
          <h2 className="ui-heading ui-heading--section">Selected work</h2>
        </div>
        <div className="project-list">
          {orderedProjects.map((project, index) => (
            <Link
              href={`/work/${project.slug}`}
              className={`project-row project-row-${project.slug}${index % 2 === 1 ? " project-row-reversed" : ""}`}
              key={project.slug}
            >
              <div className="project-image">
                {project.illustration === "ai-workflow" ? (
                  <AiWorkflowDiagram label={project.imageAlt ?? project.title} />
                ) : project.image ? (
                  <ParallaxImage
                    src={project.image}
                    alt={project.imageAlt ?? `${project.title} project preview`}
                    sizes="(max-width: 760px) 100vw, 58vw"
                  />
                ) : (
                  <div className="image-placeholder" aria-hidden="true"><span>{project.company}</span></div>
                )}
              </div>
              <div className="project-details">
                <h3 className="ui-heading ui-heading--card">{project.title}</h3>
                <div className="project-meta">
                  {project.company && <span className="project-company">{project.company}</span>}
                  <span className="project-year">{project.year}</span>
                  <span className="project-kind">{project.caseType}</span>
                  {project.status === "in-progress" && <span className="project-status">In progress</span>}
                </div>
                <p>{project.description}</p>
                <span className="ui-button ui-button--tertiary project-view-link">{project.caseType === "article" ? "Read article" : "View case study"} <span aria-hidden="true">↗</span></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
