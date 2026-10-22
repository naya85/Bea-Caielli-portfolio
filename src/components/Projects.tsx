import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/content";

export function Projects() {
  return (
    <section id="work" className="work-section">
      <div className="section-wrap">
        <div className="section-heading-row">
          <div><h2>Case studies</h2></div>
        </div>
        <div className="project-grid">
          {projects.slice(0, 5).map((project, index) => (
            <Link href={`/work/${project.slug}`} className={`project-card project-card-${index + 1}`} key={project.slug}>
              <div className="project-image">
                {project.image ? <Image src={project.image} alt={project.imageAlt ?? ""} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="image-placeholder" aria-hidden="true"><span>{project.company}</span></div>}
                <span className="project-open" aria-hidden="true">↗</span>
              </div>
              <div className="project-meta"><span>{project.company}</span><span>{project.year}</span></div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-type"><span>{project.caseType}</span></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
