/**
 * Listen & Repeat case study — content.
 * Images should be exported from Figma and placed in public/images/case-studies/listen-repeat/
 */
export const listenRepeatCaseStudy = {
  hero: {
    title: "Listen & repeat",
    subtitle: "Mondly by Pearson · 2024",
    team: "Learner Experience",
    company: "Mondly by Pearson",
    year: "2024",
  },
  tldr:
    'I turned Mondly from a “test first” lesson into a “teach first” experience. By bringing guided vocabulary and speaking practice into the lesson flow, beginners could learn key words and pronunciation before being asked to perform. The experiment improved lesson completion, premium conversion, and retention.',
  keyTakeaway:
    "Even simple scaffolding tools can help learners practise fundamentals and build the confidence for more advanced conversations.",
  reflection: {
    eyebrow: "Reflection",
    heading: "Key takeaways",
    points: [
      "Giving learners the choice of how to learn isn't a nice-to-have. The 76% who chose guided practice told us something clear — but so did the 24% who skipped it. Respecting both made the solution better.",
      "A lean approach isn't a compromise. Shipping something small and well-scoped let us address the problem immediately, validate what mattered, and build the evidence base for the bigger, more sophisticated features that come next.",
    ],
  },
  problem: {
    heading: "The problem",
    body: "We were hearing repeated feedback from beginner learners who were unhappy with the Mondly learning experience. They felt confused when lessons started with quizzes before introducing the words; they expected an explanation and a more structured approach.",
    quotes: [
      "You go straight to sentences and words with pictures. How was I supposed to know that beforehand?",
      "The first lessons are already too demanding. Too bad.",
      "It doesn't teach you the language. It just shows it to you.",
    ],
  },
  previousExperience: {
    heading: "The previous experience",
    body: "Lessons opened with interactive quizzes and relied on pattern recognition and repetition to introduce vocabulary. Speaking practice existed as a separate feature, disconnected from the lesson. Beginners were left guessing instead of being taught.",
    caption: "The lesson, vocabulary and speaking practice lived in separate parts of the app.",
  },
  research: {
    heading: "Research & analysis",
    body: "I started by looking at how other major players in the language learning space approached vocabulary introduction. In parallel, I ran user interviews to verify the anecdotal evidence we already had and better understand our users' mental models and expectations.\n\nI then partnered with the Data team to dig into behaviour on the app. The finding was telling: learners who were already using the Handsfree feature were retaining better and completing more lessons than those who weren't.\n\nThe picture was clear: beginners needed to be taught before being tested. And we already had something worth building on.",
    steps: [
      {
        step: "Step 1",
        title: "Previous experience audit",
        body: "Mondly's original approach was learn-by-doing: lessons opened directly with quizzes. A speaking practice feature existed but lived outside the lesson, felt disconnected, and most users never found it. For beginners, the result was confusion — they felt expected to guess, not learn.",
      },
      {
        step: "Step 2",
        title: "Competitor analysis & user interviews",
        body: "I looked at how the major players in language learning approached vocabulary introduction. In parallel, I ran user interviews to verify the anecdotal evidence we already had and better understand the mental models and expectations of beginner learners.",
      },
      {
        step: "Step 3",
        title: "Data analysis",
        body: "I partnered with the Data team to dig into behaviour on the app. The finding was telling: learners already using the Handsfree feature were retaining better and completing more lessons than those who weren't. We already had something worth building on.",
      },
      {
        step: "Step 4",
        title: "Scoping & solution design",
        body: "The ideal solution was an AI tutor with spaced repetition and pronunciation feedback — but that was months of work, and in the meantime learners would still be dropping off every day. I reframed the question: what can we do right now, with what we already have, that delivers real value without a massive build?",
      },
    ],
    limitingScope: {
      heading: "Limiting the scope",
      body: "The ideal solution? An AI tutor, progressive vocabulary, spaced repetition, pronunciation feedback. But that was months of work, and in the meantime learners would still be dropping off every day.",
    },
    keyQuestion: {
      label: "So I reframed the question:",
      question:
        "how can we use and repurpose what we already have to deliver immediate value without committing to a massive build?",
    },
  },
  solution: {
    eyebrow: "The solution",
    heading: "Repurpose, don't rebuild.",
    intro: [
      "The problem was known. What wasn't obvious was how to fix it without a big commitment. I saw a different path: evolve what we already had rather than pitch a new build.",
      "After benchmarking competitors and exploring concepts with the Methodology team, I defined the approach around two clear decisions.",
    ],
    decisions: [
      {
        label: "DECISION 1",
        body: "Instead of building from scratch, I enhanced the existing Handsfree speaking practice and integrated it into the lesson flow. Murf AI provided a natural, human-sounding voice while keeping the experience scalable across languages. I kept it optional for learners who preferred to jump straight to quizzes.",
      },
      {
        label: "DECISION 2",
        body: "Rather than build a complex pronunciation assessment without a reliable third-party algorithm, I kept the MVP focused on recording and playback comparison. This was simpler to validate through A/B testing and still delivered the core teaching value.",
      },
    ],
    flowSteps: [
      {
        title: "Mode selection",
        description: "Choose whether to learn first or to take quizzes immediately",
      },
      {
        title: "Listen & repeat",
        description: "Learn the vocabulary and practice the pronunciation",
      },
      {
        title: "Quiz practice",
        description: "Apply what you learned",
      },
    ],
  },
  impact: {
    heading: "Impact & results",
    body: [
      "The experiment was successful and scaled. It increased the number of lessons learners completed and improved premium conversion.",
      "The results below show the impact across category completion, premium conversion in the first week, and retention.",
    ],
    metrics: [
      { value: "+6.9%", label: "Category completion rate" },
      { value: "+12.8%", label: "Conversion to premium in the first week" },
      { value: "+5.3%", label: "Retention" },
    ],
  },
  images: {
    heroProduct: "/images/case-studies/listen-repeat/hero-product.png",
    previousExperience: "/images/case-studies/listen-repeat/previous-experience.png",
    solutionExploration: "/images/case-studies/listen-repeat/solution-exploration.png",
    flowSteps: "/images/case-studies/listen-repeat/flow-steps.png",
    userFlow: "/images/case-studies/listen-repeat/user-flow.png",
    mockups: "/images/case-studies/listen-repeat/mockups.png",
  },
} as const;
