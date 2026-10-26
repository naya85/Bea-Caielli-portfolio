/** "From Mondly to Language+" (Pearson) case study — content. */
import type { Story } from "@/data/case-studies/story";

const img = (name: string) => `/images/case-studies/language-plus/${name}`;

export const languagePlusStory: Story = {
  intro: [
    "Mondly had more than 100 million downloads, but no place in schools. I helped turn it into Language+: English practice that follows the Pearson coursebooks teachers already use, so students keep learning between lessons.",
    "Every decision, from the MVP to the teacher dashboard and the classroom pilot, came back to what teachers told us they needed. That's what made the vision hold up, and what took Language+ from an idea to a live product in six countries in a year.",
  ],
  metrics: [
    { value: "+36%", label: "sales in regions and coursebooks where launched" },
    { value: "6 countries", label: "app store availability in August 2026" },
    { value: "2×", label: "core journey completion in the first two pilot weeks" },
    { value: "3 decisions", label: "changed directly by teacher evidence" },
  ],
  takeaway: "A vision needs evidence before it needs polish. Postponing the first leadership pitch felt like a setback. It turned out to be the reason the vision held up.",
  blocks: [
    { type: "h2", text: "The opportunity" },
    { type: "p", text: "**A strong consumer app needed a school-shaped reason to exist.** Mondly had reached more than 100 million downloads across 41+ languages. But as a standalone app, it sat outside the coursebooks and lesson plans schools relied on. That made it difficult to bring into the classroom and difficult to sell to schools." },
    { type: "p", text: "In a three-person task force with a product manager and learning design expert, I helped turn a product leader's idea into a focused vision in two months: improve learning outcomes by bringing repetition practice into Pearson courseware." },
    { type: "figure", wide: true, image: { src: img("1-vision.jpg"), alt: "Early Language+ product vision and concept screens" }, caption: "The first concept made the shift tangible: practice connected to the coursebooks teachers already use." },

    { type: "h2", text: "Research" },
    { type: "p", text: "**We grounded the vision in teachers' everyday constraints.** I helped shape the research plan and ran 12 of 13 interviews with 23 teachers across seven countries. The recurring need was clear: students forget between lessons, and practice has to follow the coursebook if teachers are going to recommend it." },
    {
      type: "metrics",
      items: [
        { value: "23 / 23", label: "said students forget between lessons" },
        { value: "15 / 23", label: "rated coursebook alignment 10/10" },
        { value: "22 / 23", label: "said teacher visibility was critical" },
      ],
    },
    { type: "p", text: "Those findings shaped the Memory Challenge, unit-based practice, a teacher dashboard and a quick setup path. They also helped us make deliberate scope calls: light gamification for learners 16+, and no AI at launch while teacher trust was split." },
    { type: "figure", wide: true, image: { src: img("3-research.jpg"), alt: "Teacher research synthesis and evidence" }, caption: "Teacher evidence connected learning needs to concrete product choices." },

    { type: "h2", text: "From vision to MVP" },
    { type: "p", text: "**Make the whole learning service work, not just the app screen.** I facilitated service blueprinting and cross-functional alignment around a north star: a learner completing at least three coursebook practice sessions per week. It kept the team focused on learning behaviour and teacher value, alongside business outcomes." },
    { type: "figure", wide: true, image: { src: img("4a-service-blueprint.jpg"), alt: "Service blueprint connecting the learner and teacher experience" }, caption: "Service blueprinting aligned the student journey, teacher needs and operational requirements." },
    { type: "p", text: "For the student experience, we rebuilt onboarding around school sign-in or guest access, confirming the coursebook, and getting into practice quickly. Memory Challenge introduced guided spaced repetition; teachers needed a way to understand who was practising and who might need support." },
    { type: "figure", wide: true, image: { src: img("4-mvp.jpg"), alt: "Language+ MVP student learning experience" }, caption: "The MVP brought coursebook-aligned practice and Memory Challenge into one student experience." },

    { type: "h2", text: "Teacher experience" },
    { type: "p", text: "**A dashboard built around the next useful action.** The goal was simple: help teachers spot learners who need attention in fewer than five steps. I built a working prototype on Pearson's Nemo design system and partnered with engineering to carry it into the product; I contributed roughly 192 of 390 commits." },
    { type: "p", text: "Teacher testing in four countries changed the details. Every teacher used the struggling-student panel. Three of seven found “average score” confusing, so we changed the measure to active students. Four of seven struggled with adding students, so we redesigned the flow around a class code." },
    { type: "figure", wide: true, image: { src: img("5-dashboard.jpg"), alt: "Pearson Language+ teacher dashboard design and prototype" }, caption: "Teacher feedback shaped the dashboard's signals and class setup flow." },

    { type: "h2", text: "Classroom pilot" },
    { type: "p", text: "**Measure learning progress with context.** In an Indonesian pilot across two schools and around 835 students, we paired survey waves and teacher check-ins with 17 measures. In the first two weeks, 24% of pilot students completed the core journey, compared with 12% in the initial benchmark." },
    { type: "p", text: "I resisted presenting a 98% figure as a UX win because pilot setup itself drove much of that result. Teacher activity also dropped during exam season, from 33 weekly active teachers to four. Those signals informed a browser-version hypothesis and the calendar readiness needed for the Poland pilot." },
    { type: "figure", wide: true, image: { src: img("6-pilot.jpg"), alt: "Pilot measurement and classroom learning findings" }, caption: "Pilot data was read alongside school context, teacher check-ins and seasonal effects." },

    { type: "h2", text: "Scaling the experience" },
    { type: "p", text: "**Design for the next set of books, not just the first launch.** For Onboarding V2, I worked on a more scalable path for five books: one profile screen, book-cover selection, language fallback and moving class join out of onboarding. In concept testing, all eight participants described the flow as fast and simple; five found their book on the first try, while only three used English fallback when their language was missing." },
    { type: "p", text: "That last finding exposed a real gap, so I'm redesigning the fallback. We used the word “book” throughout because it matched teachers' language better than “course” or “edition.”" },
    { type: "figure", wide: true, image: { src: img("7-onboarding.jpg"), alt: "Language+ onboarding version two concepts" }, caption: "Testing helped identify where the scalable onboarding flow still needed clearer language and fallback." },
    { type: "p", text: "Language+ 1.0 was ready at the end of June 2026 and launched in Turkey, Switzerland, the Netherlands, Belgium, Luxembourg and Ukraine in August. The reported sales lift applies to the regions and coursebooks where it launched." },
  ],
};
