import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/content";
import { ListenRepeatCaseStudy } from "@/components/case-studies/ListenRepeatCaseStudy";
import { CoursewareCompanionCaseStudy } from "@/components/case-studies/CoursewareCompanionCaseStudy";
import { GenericCaseStudy } from "@/components/case-studies/GenericCaseStudy";

const LISTEN_REPEAT_SLUG = "listen-repeat";
const COURSEWARE_COMPANION_SLUG = "courseware-companion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function getNextProject(currentSlug: string): Project | null {
  const i = projects.findIndex((p) => p.slug === currentSlug);
  if (i === -1 || i >= projects.length - 1) return null;
  return projects[i + 1] ?? null;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  if (slug === LISTEN_REPEAT_SLUG) {
    return <ListenRepeatCaseStudy project={project} nextProject={nextProject} />;
  }
  if (slug === COURSEWARE_COMPANION_SLUG) {
    return <CoursewareCompanionCaseStudy project={project} nextProject={nextProject} />;
  }

  return <GenericCaseStudy project={project} nextProject={nextProject} />;
}
