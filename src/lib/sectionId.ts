/** Lowercase, hyphenated id for a case study section heading, shared by the headings and the contents list. */
export const sectionId = (text: string) =>
  text.toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
