/** "Listen and repeat" (Mondly by Pearson) case study — content. */
import type { Story } from "@/data/case-studies/story";

const img = (name: string) => `/images/case-studies/listen-repeat/${name}`;

export const listenRepeatStory: Story = {
  hero: { src: img("hero-product.png"), alt: "Three Mondly mobile screens for guided practice and pronunciation" },
  intro: [
    "I turned Mondly from a “test first” lesson into a “teach first” experience. By bringing guided vocabulary and speaking practice into the lesson flow, beginners could learn key words and pronunciation before being asked to perform. The experiment improved lesson completion, premium conversion, and retention.",
  ],
  metrics: [
    { value: "+6.9%", label: "Category completion rate" },
    { value: "+12.8%", label: "Conversion to premium in the first week" },
    { value: "+5.3%", label: "Retention" },
  ],
  takeaway: "Even simple scaffolding tools can help learners practise fundamentals and build the confidence for more advanced conversations.",
  blocks: [
    { type: "h2", text: "The problem" },
    { type: "p", text: "We were hearing repeated feedback from beginner learners who were unhappy with the Mondly learning experience. They felt confused when lessons started with quizzes before introducing the words; they expected an explanation and a more structured approach." },
    {
      type: "quotes",
      items: [
        "You go straight to sentences and words with pictures. How was I supposed to know that beforehand?",
        "The first lessons are already too demanding. Too bad.",
        "It doesn't teach you the language. It just shows it to you.",
      ],
    },
    { type: "h3", text: "Previous experience" },
    { type: "p", text: "Lessons opened with interactive quizzes and relied on pattern recognition and repetition to introduce vocabulary. Speaking practice existed as a separate feature, disconnected from the lesson. Beginners were left guessing instead of being taught." },
    { type: "figure", image: { src: img("previous-experience-screens.png"), alt: "Mondly’s original lesson, quiz and separate speaking practice screens" }, caption: "The lesson started with a quiz, and speaking practice lived in a separate feature." },

    { type: "h2", text: "Research and analysis" },
    {
      type: "cards",
      items: [
        { title: "Competitor analysis & user interviews", text: "I looked at how the major players in language learning approached vocabulary introduction. In parallel, I ran user interviews to verify the anecdotal evidence we already had and better understand the mental models and expectations of beginner learners." },
        { title: "Data analysis", text: "I partnered with the Data team to dig into behaviour on the app. The finding was telling: learners already using the Handsfree feature were retaining better and completing more lessons than those who weren't." },
      ],
    },
    { type: "p", text: "The picture was clear: beginners needed to be taught before being tested. And we already had something worth building on." },

    { type: "h2", text: "The solution" },
    { type: "h3", text: "Limiting the scope" },
    { type: "p", text: "On paper, the ideal solution was an AI tutor with progressive vocabulary, spaced repetition and pronunciation feedback. But that was months of work, and learners would keep dropping off every day in the meantime." },
    { type: "question", label: "So I reframed the question", text: "How can we use and repurpose what we already have to deliver immediate value, without committing to a massive build?" },
    { type: "p", text: "That pointed to a different path: evolve what we already had, instead of pitching a new build." },
    { type: "figure", image: { src: img("solution-exploration.png"), alt: "Product concept boards and layout explorations for guided learning and speaking practice" }, caption: "Concepts and layout explorations, before we settled on two decisions.", wide: true },
    { type: "p", text: "After benchmarking competitors and exploring concepts with the Methodology team, I defined the approach around two clear decisions:" },
    {
      type: "ol",
      items: [
        "**Repurpose the existing speaking feature.** Instead of building from scratch, I enhanced the existing Handsfree speaking practice and integrated it into the lesson flow. Murf AI provided a natural, human-sounding voice while keeping the experience scalable across languages. I kept it optional for learners who preferred to jump straight to quizzes.",
        "**Keep validation simple and focused.** Rather than build a complex pronunciation assessment without a reliable third-party algorithm, I kept the MVP focused on recording and playback comparison. This was simpler to validate through A/B testing and still delivered the core teaching value.",
      ],
    },
    { type: "figure", image: { src: img("flow-steps.png"), alt: "The learning flow: choose a mode, listen and repeat, then practise with a quiz" }, caption: "The new lesson flow: choose a mode, listen and repeat, then practise.", wide: true },
    { type: "figure", image: { src: img("user-flow.png"), alt: "Full user flow map showing guided practice and quiz paths through a Mondly lesson" }, caption: "The full user flow, including the classic quiz path for learners who skip guided practice.", wide: true },
    { type: "h3", text: "Mockups and prototypes" },
    {
      type: "video",
      src: "/videos/listen-repeat-walkthrough.mp4",
      label: "Screen recording of the Listen and repeat prototype",
      caption: "A click-through of the prototype.",
      text: "The redesigned flow introduces vocabulary first, lets learners hear and repeat each word, and then moves into practice. It stays optional, so learners can still go directly to quizzes.",
    },
    {
      type: "compare",
      before: {
        image: { src: img("previous-experience-screens.png"), alt: "Mondly’s original lesson, quiz and separate speaking practice screens" },
        note: "The lesson started with a quiz, and speaking practice lived in a separate feature.",
      },
      after: {
        image: { src: img("key-moments.png"), alt: "The new flow: choosing guided practice, repeating a word aloud, then comparing recordings" },
        note: "Learners choose guided practice, hear and repeat each word, then compare their recording with the example.",
      },
    },

    { type: "h2", text: "Impact and results" },
    { type: "p", text: "The experiment was successful and scaled. It increased the number of lessons learners completed and improved premium conversion." },
    { type: "p", text: "**76% of users chose guided practice** over going straight to quizzes. Keeping the choice open also respected the 24% who preferred the faster route." },

    { type: "h2", text: "What I learned" },
    {
      type: "ul",
      items: [
        "**Giving learners the choice of how to learn isn't a nice-to-have.** The 76% who chose guided practice told us something clear, but so did the 24% who skipped it. Respecting both made the solution better.",
        "**A lean approach isn't a compromise.** Shipping something small and well-scoped let us address the problem immediately, validate what mattered, and build the evidence base for the bigger, more sophisticated features that come next.",
      ],
    },
  ],
};
