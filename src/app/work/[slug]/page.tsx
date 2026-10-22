import { notFound } from "next/navigation";
import { publishedProjects, type Project } from "@/data/content";
import { ListenRepeatCaseStudy } from "@/components/case-studies/ListenRepeatCaseStudy";
import { LanguagePlusCaseStudy } from "@/components/case-studies/LanguagePlusCaseStudy";
import { GenericCaseStudy } from "@/components/case-studies/GenericCaseStudy";

const LISTEN_REPEAT_SLUG = "listen-repeat";
const LANGUAGE_PLUS_SLUG = "from-mondly-to-language-plus";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

function getNextProject(currentSlug: string): Project | null {
  const i = publishedProjects.findIndex((p) => p.slug === currentSlug);
  if (i === -1 || i >= publishedProjects.length - 1) return null;
  return publishedProjects[i + 1] ?? null;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug)
    ?? (slug === LANGUAGE_PLUS_SLUG ? publishedProjects.find((p) => p.title === "From Mondly to Language+") : undefined);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  if (slug === LISTEN_REPEAT_SLUG) {
    return <ListenRepeatCaseStudy project={project} nextProject={nextProject} />;
  }
  if (slug === LANGUAGE_PLUS_SLUG) {
    return <LanguagePlusCaseStudy project={project} nextProject={nextProject} />;
  }
  return <GenericCaseStudy project={project} nextProject={nextProject} />;
}
