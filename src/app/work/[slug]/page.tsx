import { notFound } from "next/navigation";
import { projects, type Project } from "@/data/content";
import { ListenRepeatCaseStudy } from "@/components/case-studies/ListenRepeatCaseStudy";
import { LanguagePlusCaseStudy } from "@/components/case-studies/LanguagePlusCaseStudy";
import { AIProductDesignCaseStudy } from "@/components/case-studies/AIProductDesignCaseStudy";
import { GenericCaseStudy } from "@/components/case-studies/GenericCaseStudy";

const LISTEN_REPEAT_SLUG = "listen-repeat";
const LANGUAGE_PLUS_SLUG = "from-mondly-to-language-plus";
const AI_PRODUCT_DESIGN_SLUG = "ai-assisted-product-design";

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
  const project = projects.find((p) => p.slug === slug)
    ?? (slug === LANGUAGE_PLUS_SLUG ? projects.find((p) => p.title === "From Mondly to Language+") : undefined);
  if (!project) notFound();
  const nextProject = getNextProject(slug);

  if (slug === LISTEN_REPEAT_SLUG) {
    return <ListenRepeatCaseStudy project={project} nextProject={nextProject} />;
  }
  if (slug === LANGUAGE_PLUS_SLUG) {
    return <LanguagePlusCaseStudy project={project} nextProject={nextProject} />;
  }
  if (slug === AI_PRODUCT_DESIGN_SLUG) {
    return <AIProductDesignCaseStudy project={project} nextProject={nextProject} />;
  }

  return <GenericCaseStudy project={project} nextProject={nextProject} />;
}
