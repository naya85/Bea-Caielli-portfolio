import { notFound } from "next/navigation";
import { orderedProjects, publishedProjects, type Project } from "@/data/content";
import { ListenRepeatCaseStudy } from "@/components/case-studies/ListenRepeatCaseStudy";
import { LanguagePlusCaseStudy } from "@/components/case-studies/LanguagePlusCaseStudy";
import { GenericCaseStudy } from "@/components/case-studies/GenericCaseStudy";
import { CaseStudyContact } from "@/components/case-studies/CaseStudyContact";

const LISTEN_REPEAT_SLUG = "listen-repeat";
const LANGUAGE_PLUS_SLUG = "from-mondly-to-language-plus";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return publishedProjects.map((p) => ({ slug: p.slug }));
}

/** Follows the homepage order and wraps around, so every case study links onward. */
function getNextProject(currentSlug: string): Project | null {
  const i = orderedProjects.findIndex((p) => p.slug === currentSlug);
  if (i === -1 || orderedProjects.length < 2) return null;
  return orderedProjects[(i + 1) % orderedProjects.length] ?? null;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = publishedProjects.find((p) => p.slug === slug)
    ?? (slug === LANGUAGE_PLUS_SLUG ? publishedProjects.find((p) => p.title === "From Mondly to Language+") : undefined);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  let caseStudy;
  if (slug === LISTEN_REPEAT_SLUG) {
    caseStudy = <ListenRepeatCaseStudy project={project} nextProject={nextProject} />;
  } else if (slug === LANGUAGE_PLUS_SLUG) {
    caseStudy = <LanguagePlusCaseStudy project={project} nextProject={nextProject} />;
  } else {
    caseStudy = <GenericCaseStudy project={project} nextProject={nextProject} />;
  }

  return (
    <>
      {caseStudy}
      <CaseStudyContact />
    </>
  );
}
