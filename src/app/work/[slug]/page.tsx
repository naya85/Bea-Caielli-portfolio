import { notFound } from "next/navigation";
import { orderedProjects, publishedProjects, type Project } from "@/data/content";
import type { Story } from "@/data/case-studies/story";
import { StoryCaseStudy } from "@/components/case-studies/StoryCaseStudy";
import { howIUseAiArticle } from "@/data/case-studies/how-i-use-ai";
import { languagePlusStory } from "@/data/case-studies/language-plus";
import { postponeRenewalStory } from "@/data/case-studies/postpone-renewal";
import { gamificationStory } from "@/data/case-studies/gamification";
import { listenRepeatStory } from "@/data/case-studies/listen-repeat";

const LANGUAGE_PLUS_SLUG = "from-mondly-to-language-plus";

/** Case studies told with the shared story layout, by slug. */
const STORIES: Record<string, Story> = {
  [LANGUAGE_PLUS_SLUG]: languagePlusStory,
  "how-i-use-ai-at-work": howIUseAiArticle,
  "postpone-renewal-date": postponeRenewalStory,
  gamification: gamificationStory,
  "listen-repeat": listenRepeatStory,
};

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

  const story = STORIES[slug];
  if (!story) notFound();
  return <StoryCaseStudy project={project} nextProject={nextProject} story={story} />;
}
