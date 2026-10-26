/**
 * Building blocks for long-form case studies and articles, rendered by StoryCaseStudy.
 * Inline `code` and **bold** markers in any text are rendered as code and strong.
 */
export type Image = { src: string; alt: string };

export type StoryBlock =
  | { type: "h2" | "h3" | "p"; text: string }
  | { type: "ul" | "ol"; items: string[] }
  | { type: "table"; head: string[]; rows: string[][] }
  | { type: "quote"; text: string }
  /** Several short quotes side by side. */
  | { type: "quotes"; items: string[] }
  /** Short labelled options shown side by side, e.g. the two choices users had. */
  | { type: "cards"; items: { eyebrow?: string; title: string; text: string }[] }
  /** "As a … I want to … so that …" user stories. */
  | { type: "stories"; items: { as: string; want: string; so: string }[] }
  /** A row of phone screens on the page background. */
  | { type: "phones"; images: Image[]; caption?: string }
  /** A single image; `wide` lets it break out of the reading column. */
  | { type: "figure"; image: Image; caption?: string; wide?: boolean }
  | { type: "metrics"; items: { value: string; label: string }[] }
  /** A click-through screen recording, framed like a phone. */
  /** With `text`, the recording sits beside the paragraph it illustrates. */
  | { type: "video"; src: string; label: string; caption?: string; text?: string }
  /** Old and new side by side, each with a short note on what to notice. */
  | { type: "compare"; before: { image: Image; note: string }; after: { image: Image; note: string } };

export interface Story {
  /** Shown instead of the year in the label row (articles). */
  date?: string;
  /** Transparent product shot above the title. */
  hero?: Image;
  intro: string[];
  /** Headline results shown up front. */
  metrics?: { value: string; label: string }[];
  takeaway?: string;
  blocks: StoryBlock[];
}
