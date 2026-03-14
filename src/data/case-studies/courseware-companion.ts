/**
 * Courseware Companion case study — content.
 * Images should be exported from Figma and placed in public/images/case-studies/courseware-companion/
 */
export const coursewareCompanionCaseStudy = {
  hero: {
    title: "Courseware Companion",
    subtitle: "Pearson · Mondly · 2026",
    team: "Designer, PM, Learning Methodology",
    company: "Mondly by Pearson",
    year: "2026",
  },
  tags: [
    "Discovery",
    "Research infrastructure",
    "Market strategy",
    "Teacher Dashboard",
    "B2B2C",
  ],
  tldr:
    "Led the end-to-end design strategy to reposition Pearson's Mondly from a consumer app into an institutional product — building the research infrastructure, validating the market opportunity, and designing the teacher experience that makes adoption possible.",
  keyTakeaway:
    "In institutional EdTech, the teacher is the product's distribution channel. Designing for students without designing for teachers is designing for failure.",
  reflection: {
    eyebrow: "Reflection",
    heading: "What I learned",
    points: [
      "Don't fight the market leader on their terms. Duolingo wins consumer. The smarter move was identifying where Pearson's existing assets — courseware, teacher relationships, institutional trust — could dominate a space nobody had claimed yet.",
      "In institutional EdTech, the teacher is the product's distribution channel. Designing for students without designing for teachers is designing for failure.",
      "Motivation isn't something you design into a product. It's something you understand before you design anything. Students using this app didn't choose to. That's not a problem to solve; it's a constraint to design around honestly.",
      "A research framework is a design artifact. The hypothesis structure, the tiered validation approach, the shared documentation system — these shaped what got built as much as any screen did. Small team, big mandate: every output had to count.",
    ],
  },
  problem: {
    heading: "Overview",
    body: "Pearson had Mondly — a consumer language learning app competing directly against Duolingo in a market Duolingo already owned. The decision to pivot to institutional came from leadership. Everything else — the how, the validation strategy, the feature prioritisation, the research infrastructure, the product direction — came from a three-person task force: myself as lead designer, our PM, and a learning methodology specialist. We were given the mandate and the autonomy to figure it out.",
    quotes: [] as string[],
  },
  previousExperience: {
    heading: "The challenge",
    body: "Consumer language learning is a war Pearson can't win. Duolingo has the brand, the data, and the habit. But institutional adoption — schools, universities, language programmes — is wide open. No strong competitor owns it. And Pearson already has what it takes to win there: established courseware, teacher relationships, and institutional trust. The challenge was redesigning the entire product logic to serve that market — and doing it with a small team, high autonomy, and no pre-existing framework to inherit. Every decision needed to be built from scratch and made defensible through evidence.",
    caption:
      "Consumer apps are built for intrinsically motivated adults who chose to learn. Institutional apps serve students who are there because their teacher told them to. That's not a minor distinction — it inverts almost every assumption about what drives retention, what success looks like, and who the real customer is. The teacher becomes the adoption bottleneck — and the product's actual distribution channel.",
  },
  research: {
    heading: "How we got there",
    body: "With a three-person task force and no inherited process, we designed a tiered approach: first a shared foundation for decisions, then hypothesis-driven validation with teachers and sales, then synthesis and prioritisation, and finally the Teacher Dashboard.",
    steps: [
      {
        step: "Step 1",
        title: "Discovery framework & single source of truth",
        body: "One of the first things I designed wasn't a screen — it was a documentation system. The team had no shared place for assumptions, insights, or decisions. I built a living framework that gave every stakeholder — product, sales, engineering, methodology — a single foundation. Not a research repository, but a decision-making infrastructure: every assumption traceable to evidence, every piece of evidence connected to a design or product decision.",
      },
      {
        step: "Step 2",
        title: "Hypothesis framework & multi-market teacher research",
        body: "Together with our PM and methodology specialist, we designed a tiered hypothesis framework to prioritise what needed validating before committing to build. Tier 1: questions that, if wrong, would kill the product. I then led 23 teacher interviews across Europe, LATAM, Asia, the US, and Turkey — structuring not just what we asked, but what evidence would make us proceed versus pivot. Feature prioritisation came directly out of this work. This wasn't research for research's sake — it was how three people with a big mandate made defensible decisions fast.",
      },
      {
        step: "Step 3",
        title: "Research synthesis & strategic direction",
        body: "100% of teachers rated courseware alignment as critical — the core product bet confirmed. 96% validated dashboard visibility as non-negotiable for adoption. Sales interviews across 6 markets added market-specific constraints: lab hour tracking for the US, tablet support for LATAM, QR onboarding for the Netherlands. Every constraint sharpened the direction. The institutional pivot wasn't a hypothesis anymore — it was validated. From there, the task force made the feature prioritisation calls: what was MVP, what was post-launch, what was a dead end.",
      },
      {
        step: "Step 4",
        title: "Teacher Dashboard design",
        body: "With the research foundation in place, I designed the Teacher Dashboard from the ground up. One guiding principle throughout: actionability over data completeness. The dashboard isn't an analytics suite — it's a weekly check-in tool. Class-level overview first, student drill-down available, vocabulary mastery indicators designed to answer one question: who needs my attention before next class? Every design decision traces back to a specific validated teacher need.",
      },
    ],
  },
  solution: {
    eyebrow: "The solution",
    heading: "Teacher Dashboard",
    intro: [
      "The research validated that teachers needed visibility into student progress and courseware alignment to adopt the product. The dashboard had to answer one question: who needs my attention before next class?",
      "I designed it around a single principle: actionability over data completeness.",
    ],
    decisions: [
      {
        label: "Actionability over data completeness",
        body: "The dashboard isn't an analytics suite — it's a weekly check-in tool. Class-level overview first, student drill-down available when needed. Vocabulary mastery indicators and progress views are designed to tell teachers exactly who needs attention before the next class. Every design decision traces back to a specific validated teacher need from the 23 interviews.",
      },
    ],
    flowSteps: [] as { title: string; description: string }[],
  },
  impact: {
    heading: "Impact & outcomes",
    body: [
      "23 teachers interviewed across 5 markets. 100% validated courseware alignment as essential. 96% confirmed dashboard visibility as critical to adoption. 6 sales markets engaged, with strong institutional signal.",
      "The task force's work didn't just validate the product — it de-risked it. Before a single line of code was written, sales, product, and engineering had directional clarity they could act on with confidence. The teacher dashboard became a key talking point in institutional sales conversations across Asia, LATAM, EMEA, and the US.",
      "The discovery framework became the shared decision-making foundation the whole team works from. Pilot launching June 2026 — first live institutional validation of the full product.",
    ],
    metrics: [
      { value: "23", label: "Teachers interviewed across 5 markets" },
      { value: "100%", label: "Validated courseware alignment as essential" },
      { value: "96%", label: "Confirmed dashboard visibility as critical to adoption" },
      { value: "6", label: "Sales markets engaged" },
    ],
  },
  images: {
    heroProduct: "/images/case-studies/courseware-companion/hero-product.png",
    previousExperience: "/images/case-studies/courseware-companion/previous-experience.png",
    solutionExploration: "/images/case-studies/courseware-companion/solution-exploration.png",
    flowSteps: "/images/case-studies/courseware-companion/flow-steps.png",
    mockups: "/images/case-studies/courseware-companion/mockups.png",
  },
} as const;
