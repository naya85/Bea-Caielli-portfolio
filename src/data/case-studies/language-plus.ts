/** "From Mondly to Language+" (Pearson) case study — content. Source draft: drafts/language-plus-revised.md */
import type { Story } from "@/data/case-studies/story";

const img = (name: string) => `/images/case-studies/language-plus/${name}`;

export const languagePlusStory: Story = {
  hero: { src: "/images/portfolio/language-plus-dashboard-trimmed.png", alt: "Teacher dashboard concept for Pearson Language+" },
  intro: [
    "Mondly had more than 100 million downloads, but it wasn't built for schools. I led the design of its next chapter, Language+: English practice that follows the Pearson coursebooks teachers already use, so students keep learning between lessons.",
    "In nine months, we went from a few sentences on a slide to a live product in six countries, already showing **+36% sales** in the regions and coursebooks where it launched.",
  ],
  blocks: [
    { type: "h2", text: "The opportunity" },
    { type: "p", text: "Mondly was doing well as a consumer app, loved by its users, but still far behind Duolingo in usage and reach. Winning that race wasn’t realistic." },
    { type: "p", text: "The Pearson acquisition changed the question. Two years in, with the audience shifting from consumers to schools, it was clear that Mondly as it was didn’t fit: its content was disconnected from the Pearson coursebooks and lesson plans teachers relied on. That made it hard to bring into the classroom, and hard to sell to schools." },
    { type: "p", text: "Duolingo had tried to serve both worlds, offering a tool for teachers before later retiring it. To us, that was a clear signal: consumers and schools are very different audiences, and one product rarely works for both. The opportunity was to stop competing for consumers, and build something schools actually needed." },
    { type: "h3", text: "My role" },
    { type: "p", text: "I was part of a three-person task force with a product manager and a learning design expert. Together, we turned a product leader's idea into a vision that went on to shape the 2026 OKRs for every team in our department: transform a consumer app into an institutional product, with content aligned to the coursebooks used in class, spaced repetition, and more structured speaking practice." },
    { type: "p", text: "We had two months to build the full pitch and get sign-off from senior leadership. I owned how we got there: from the research, the concept and the prototype, to the validation at scale." },
    { type: "figure", wide: true, image: { src: img("1-vision.jpg"), alt: "Early Language+ product vision and concept screens" }, caption: "The first concept made the shift tangible: practice connected to the coursebooks teachers already use." },

    { type: "h2", text: "Research" },
    { type: "p", text: "I started by testing the vision with sales teams across regions, the people closest to what schools were asking for. Their response was enthusiastic. Then we recruited teachers already using Pearson courseware and ran discovery research with 23 teachers across 7 countries." },
    { type: "p", text: "The need was clear: students forget between lessons, they're reluctant to do homework, and any extra practice has to follow the coursebook if teachers are going to recommend it." },
    { type: "h3", text: "From insight to concept" },
    { type: "p", text: "Based on what we heard, we shaped a new concept of Mondly with three additions:" },
    {
      type: "ul",
      items: [
        "**Memory Challenge and unit-based practice**, so students practise the vocabulary taught in class in a way that helps them remember it.",
        "**A teacher dashboard and a quick setup path**, because teacher visibility was critical.",
        "**Gamification designed for the classroom**, such as a class leaderboard and customisable avatars.",
      ],
    },
    { type: "p", text: "I built a web-based prototype of the new app with AI, and we presented it to senior leadership. The presentations were a success." },
    { type: "figure", wide: true, image: { src: img("3-research.jpg"), alt: "Teacher research synthesis and evidence" }, caption: "Teacher evidence connected learning needs to concrete product choices." },

    { type: "h2", text: "From vision to MVP" },
    { type: "p", text: "With the vision in place, the work shifted: bringing the rest of the department along, and turning the vision into two real products, an app for students and a dashboard for teachers, with an MVP that could deliver value in a reasonable time." },
    { type: "p", text: "To get everyone aligned, I facilitated service blueprinting across the product and design teams, around one north star: a learner completing at least three practice sessions per week. It kept every team focused on learning behaviour and teacher value, alongside business outcomes." },
    { type: "figure", wide: true, image: { src: img("4a-service-blueprint.jpg"), alt: "Service blueprint connecting the learner and teacher experience" }, caption: "Service blueprinting aligned the student journey, teacher needs and operational requirements." },
    { type: "h3", text: "The student experience" },
    { type: "p", text: "We rebuilt onboarding around Pearson sign-in, lowering friction as much as possible so students could get into practice quickly. Memory Challenge added guided spaced repetition." },
    { type: "figure", wide: true, image: { src: img("4-mvp.jpg"), alt: "Language+ MVP student learning experience" }, caption: "The MVP brought coursebook-aligned practice and Memory Challenge into one student experience." },

    { type: "h2", text: "Teacher experience" },
    { type: "p", text: "Teachers needed to see who was practising and who might need support. The goal: spot the learners who need attention in fewer than five steps." },
    { type: "p", text: "I built a working prototype with AI, then partnered with engineering to make it production-ready, contributing roughly 192 of 390 commits myself." },
    { type: "figure", wide: true, image: { src: img("5-dashboard.jpg"), alt: "Pearson Language+ teacher dashboard design and prototype" }, caption: "Teacher feedback shaped the dashboard's signals and class setup flow." },

    { type: "h2", text: "Pilots" },
    { type: "p", text: "Along the way, each designer validated their own features in smaller testing rounds. Once the products were ready, we needed to validate them at scale." },
    { type: "p", text: "So we planned pilots in several countries, sequenced by when their school year started. The first ran in Indonesia, across two schools and around 835 students, pairing survey waves and teacher check-ins with 17 measures. In the first two weeks, 78% of pilot students completed the core journey, compared with 60% in the initial benchmark." },
    { type: "p", text: "The pilot also surfaced critical issues: some notifications weren't working, and when teachers stopped nudging students, usage dropped." },
    { type: "figure", wide: true, image: { src: img("6-pilot.jpg"), alt: "Pilot measurement and classroom learning findings" }, caption: "Pilot data was read alongside school context, teacher check-ins and seasonal effects." },

    { type: "h2", text: "Scaling the experience" },
    { type: "p", text: "Language+ 1.0 was ready at the end of June 2026 and launched in Turkey, Switzerland, the Netherlands, Belgium, Luxembourg and Ukraine in August. The +36% sales lift applies to the regions and coursebooks where it launched. It's measured against the previous year, comparing sales of the coursebook alone with the bundle that includes the app and other tools, which costs more." },
  ],
};
