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
    'Shifting Mondly from "test first" to "teach first": a redesign of the core learning experience for Mondly users',
  keyTakeaway:
    "Simple guidance at the right moment builds the confidence learners need to keep going.",
  reflection: {
    eyebrow: "Reflection",
    heading: "Key takeaways",
    points: [
      "Giving learners the choice of how to learn isn't a nice-to-have. The 76% who chose guided practice told us something clear — but so did the 24% who skipped it. Respecting both made the solution better.",
      "A lean approach isn't a compromise. Shipping something small and well-scoped let us address the problem immediately, validate what mattered, and build the evidence base for the bigger, more sophisticated features that come next.",
    ],
  },
  problem: {
    heading: "Overview",
    body: "Beginner learners (Mondly's biggest audience) weren't struggling because the content was too hard. They were struggling because they hadn't been taught yet. The app tested them on words it had never introduced.",
    quotes: [
      "You go straight to sentences and words with pictures. How was I supposed to know that beforehand?",
      "The first lessons are already too demanding. Too bad.",
      "It doesn't teach you the language. It just shows it to you.",
    ],
  },
  previousExperience: {
    heading: "The challenge",
    body: "Mondly's approach was simple: start quizzing, learn through repetition. There was also a speaking practice feature, but it lived outside the lesson, felt disconnected, and most users never used it. For beginners, the result was confusion. They felt like they were expected to guess, not learn.",
    caption:
      "Lessons opened directly with quizzes. Speaking practice existed but was separate, optional, and easy to miss.",
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
        "what can we do right now, with what we already have, that delivers real value without a massive build?",
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
        body: "Instead of building from scratch, I evolved the existing Handsfree speaking feature into a guided teaching step, integrated directly into the lesson flow. I added ElevenLabs for a natural, human-sounding voice. I kept it optional, so learners who preferred jumping straight to quizzes still could.",
      },
      {
        label: "DECISION 2",
        body: "Native speech recognition performed inconsistently across Android and iOS, meaning learners were sometimes marked wrong even when they pronounced correctly, leading to additional frustration. So I simplified: record your voice, listen back, compare. Enough to deliver the core teaching value, and easy to A/B test cleanly.",
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
      "The experiment worked, and was rolled out at scale.",
      "The fact that 76% of users chose the guided practice path over jumping straight to quizzes is a strong indicator of how the need was real and this solution improved without any doubt the experience for our learners.",
    ],
    metrics: [
      { value: "+17%", label: "Lesson completion" },
      { value: "+23.8%", label: "Conversion to premium within 7 days" },
      { value: "+12%", label: "Retention" },
    ],
  },
  images: {
    heroProduct: "/images/case-studies/listen-repeat/hero-product.png",
    previousExperience: "/images/case-studies/listen-repeat/previous-experience.png",
    solutionExploration: "/images/case-studies/listen-repeat/solution-exploration.png",
    flowSteps: "/images/case-studies/listen-repeat/flow-steps.png",
    mockups: "/images/case-studies/listen-repeat/mockups.png",
  },
} as const;
