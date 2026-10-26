import { Fragment, type ReactNode } from "react";
import type { Project } from "@/data/content";
import type { Story, StoryBlock } from "@/data/case-studies/story";
import { RevealItem, ScrollReveal } from "@/components/ScrollReveal";
import { AiWorkflowDiagram } from "@/components/AiWorkflowDiagram";
import { PhoneVideo } from "@/components/PhoneVideo";
import { CaseStudyBack, CaseStudyLabel, CaseStudyNext, DraftingFrame } from "@/components/case-studies/CaseStudyChrome";
import { ParallaxLayer } from "@/components/ParallaxImage";
import { FadeAtTop } from "@/components/FadeAtTop";
import { CaseStudyToc } from "@/components/case-studies/CaseStudyToc";
import { sectionId } from "@/lib/sectionId";

interface StoryCaseStudyProps {
  project: Project;
  nextProject: Project | null;
  story: Story;
}

/** Renders the `code` and **bold** markers used in story copy. */
function inline(text: string): ReactNode {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("`")) return <code key={i}>{part.slice(1, -1)}</code>;
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function Metrics({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="case-results-frame">
      <div className="case-results-glance">
        {items.map((item) => <div key={item.label}><strong>{item.value}</strong><span>{item.label}</span></div>)}
      </div>
    </div>
  );
}

function Block({ block }: { block: StoryBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 id={sectionId(block.text)} className="ui-heading ui-heading--subsection">{block.text}</h2>;
    case "h3":
      return <h3 className="ui-heading ui-heading--small">{block.text}</h3>;
    case "p":
      return <p>{inline(block.text)}</p>;
    case "ul":
    case "ol": {
      const List = block.type;
      return <List>{block.items.map((item) => <li key={item}>{inline(item)}</li>)}</List>;
    }
    case "table":
      return (
        <div className="article-table">
          <table>
            <thead><tr>{block.head.map((cell) => <th key={cell} scope="col">{cell}</th>)}</tr></thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row[0]}>{row.map((cell, i) => (i === 0 ? <th key={i} scope="row">{cell}</th> : <td key={i}>{inline(cell)}</td>))}</tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "quote":
      return <blockquote className="story-quote case-quote">{block.text}</blockquote>;
    case "quotes":
      return (
        <div className="story-quotes">
          {block.items.map((text) => <blockquote key={text} className="story-quote case-quote">{text}</blockquote>)}
        </div>
      );
    case "question":
      return (
        <div className="story-question">
          <span className="story-card-eyebrow">{block.label}</span>
          <p className="case-emphasis">{block.text}</p>
        </div>
      );
    case "cards":
      return (
        <div className="story-cards">
          {block.items.map((card) => (
            <section key={card.title} className="story-card">
              {card.eyebrow && <span className="story-card-eyebrow">{card.eyebrow}</span>}
              <h3 className="ui-heading ui-heading--small">{card.title}</h3>
              <p>{inline(card.text)}</p>
            </section>
          ))}
        </div>
      );
    case "stories":
      return (
        <ul className="story-user-stories">
          {block.items.map((item) => (
            <li key={item.want}>
              <strong>As</strong> {item.as}, <strong>I want</strong> {item.want}, <strong>so that</strong> {item.so}.
            </li>
          ))}
        </ul>
      );
    case "phones":
      return (
        <figure className="story-phones dot-grid-backdrop" data-count={block.images.length}>
          <div>
            {block.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
          </div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "figure":
      return (
        <figure className={`story-figure${block.wide ? " story-figure--wide dot-grid-backdrop" : ""}`}>
          <img src={block.image.src} alt={block.image.alt} loading="lazy" />
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      );
    case "metrics":
      return <Metrics items={block.items} />;
    case "video":
      if (!block.text) return <PhoneVideo src={block.src} label={block.label} caption={block.caption} />;
      return (
        <div className="story-video-split">
          <PhoneVideo src={block.src} label={block.label} caption={block.caption} />
          <p>{inline(block.text)}</p>
        </div>
      );
    case "compare":
      return (
        <div className="story-compare">
          {([["Before", block.before], ["After", block.after]] as const).map(([label, side]) => (
            <figure key={label}>
              <span className="story-card-eyebrow">{label}</span>
              <img src={side.image.src} alt={side.image.alt} loading="lazy" />
              <figcaption>{inline(side.note)}</figcaption>
            </figure>
          ))}
        </div>
      );
  }
}

/** Long-form case study or article: framing, optional hero, headline results, then the story blocks. */
export function StoryCaseStudy({ project, nextProject, story }: StoryCaseStudyProps) {
  return (
    <article className="case-study-page article-page min-h-screen pt-24 pb-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12">
          <CaseStudyBack />
        </div>
        {story.hero && (
          <div className="story-hero dot-grid-backdrop">
            <DraftingFrame className="story-hero-frame">
              <ParallaxLayer>
                <img src={story.hero.src} alt={story.hero.alt} fetchPriority="high" />
              </ParallaxLayer>
            </DraftingFrame>
          </div>
        )}
        <header className="article-header">
          <FadeAtTop>
          <h1 className="hero-fade-up ui-heading ui-heading--page" style={{ ["--delay" as string]: "0.15s" }}>
            {project.title}
          </h1>
          {story.intro.map((paragraph) => (
            <p key={paragraph} className="article-lede case-emphasis hero-fade-up" style={{ ["--delay" as string]: "0.25s" }}>{paragraph}</p>
          ))}
          <CaseStudyLabel project={project} date={story.date} />
          </FadeAtTop>
          {story.metrics && <Metrics items={story.metrics} />}
          {story.takeaway && (
            <aside className="story-takeaway">
              <h3 className="ui-heading ui-heading--small">Key takeaway</h3>
              <p>{story.takeaway}</p>
            </aside>
          )}
        </header>
        {project.illustration === "ai-workflow" && (
          <div className="article-visual dot-grid-backdrop">
            <DraftingFrame>
              <ParallaxLayer>
                <AiWorkflowDiagram label={project.imageAlt ?? project.title} />
              </ParallaxLayer>
            </DraftingFrame>
          </div>
        )}
        <CaseStudyToc items={story.blocks.flatMap((block) => (block.type === "h2" ? [{ id: sectionId(block.text), label: block.text }] : []))} />
        <ScrollReveal className="article-body">
          {story.blocks.map((block, i) => (
            <RevealItem key={i}>
              <Block block={block} />
            </RevealItem>
          ))}
        </ScrollReveal>
        <ScrollReveal>
          <RevealItem>
            <CaseStudyNext project={nextProject} />
          </RevealItem>
        </ScrollReveal>
      </div>
    </article>
  );
}
