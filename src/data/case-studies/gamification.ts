/** "Ethical gamification" article — content. */
import type { Story } from "@/data/case-studies/story";

const img = (name: string) => `/images/case-studies/gamification/${name}.png`;

export const gamificationStory: Story = {
  hero: { src: "/images/portfolio/gamification-cutout.png", alt: "Mondly streak charge and Grammar Guru badge screens" },
  intro: [
    "Most people think gamification means slapping points and badges on a product to make it fun. There's much more to it. Real gamification is about understanding behaviour, and designing systems that naturally guide people towards the actions you want them to take.",
    "I've helped build it into two very different products: Mondly, a language learning app, and ReviewLab, my side project, a peer feedback platform for solopreneurs. Here's what I learned about making it actually work.",
  ],
  blocks: [
    { type: "h2", text: "Start with the real problem" },
    { type: "p", text: "Before adding any game mechanics, find the behaviour you're actually trying to change." },
    {
      type: "ul",
      items: [
        "**Language learning apps** struggle with retention: people download them with good intentions and drop off after a few days.",
        "**Feedback platforms** struggle with the cold start: why would anyone spend time helping strangers?",
      ],
    },
    { type: "p", text: "Gamification isn't the solution to these problems. It's the delivery mechanism for the real solutions." },

    { type: "h2", text: "Mondly: making daily practice a habit" },
    { type: "p", text: "Language learning has a brutal retention curve. Most users are gone within a week. At Mondly, we used gamification to flip that." },
    {
      type: "phones",
      images: [
        { src: img("streak-started"), alt: "You started a streak screen with the first day lit up" },
        { src: img("streak-3-days"), alt: "3 Day Milestone screen rewarding a new streak charge" },
        { src: img("streak-charge"), alt: "Keep your streak alive screen explaining the streak charge" },
        { src: img("streak-14-days"), alt: "14 Day Milestone screen" },
        { src: img("streak-calendar"), alt: "10 day streak calendar" },
      ],
      caption: "Streaks, milestones and the streak charge that protects a streak on days off.",
    },
    { type: "h3", text: "Streaks" },
    { type: "p", text: "Daily streaks became one of our main retention drivers. Learners with a streak of 7 days or more had **73% higher long-term retention** than those without. Breaking a streak often felt worse than the effort of a 5-minute lesson." },
    { type: "p", text: "Then we added the streak charge: a free streak freeze every month, so missing one day doesn't break your streak. Day-7 retention went up by another **5%**." },
    {
      type: "phones",
      images: [
        { src: img("badge-grammar-guru"), alt: "Grammar Guru badge, earned by completing ten lessons" },
        { src: img("leaderboard"), alt: "Leaderboard ranking learners against friends, country and world" },
        { src: img("badge-love-guru"), alt: "Love Guru badge, earned by completing three categories about relationships" },
      ],
      caption: "Badges and leaderboards: progress you can see, and a little friendly competition.",
    },
    { type: "h3", text: "Leaderboards and badges" },
    { type: "p", text: "XP and leaderboards added social pressure in a good way, especially in B2B, with companies and schools. People checked their ranking against friends, teammates or classmates, and did extra lessons to climb up. Weekly active users rose **32%** after we added internal leaderboards for B2B." },
    { type: "p", text: "Progress badges worked as both motivation and education. People spent more time in the app per session and completed more categories: the badges helped them learn more. Average category completions went from **2.1 to 3.7 a week**." },

    { type: "h2", text: "ReviewLab: solving the cold start" },
    { type: "p", text: "ReviewLab had a different challenge. How do you get busy indie makers to spend 20 minutes writing thoughtful feedback for strangers? We built gamification around reciprocity and professional opportunity." },
    { type: "h3", text: "Onboarding by doing" },
    { type: "p", text: "This is probably the most underrated thing game mechanics do: they teach people how to use your product, without tutorials or tooltips. On ReviewLab, an onboarding checklist guides new users through setup. Each task earns credits they need to unlock feedback on their own project, so they learn by doing, guided by incentives that feel natural." },
    { type: "p", text: "It isn't gatekeeping for the sake of it. It makes sure people understand the give and take of the platform before they can just take. Since we introduced it, **67% more users** give feedback in their first week." },
    {
      type: "phones",
      images: [{ src: img("reviewlab-dashboard-mobile"), alt: "ReviewLab dashboard with the Get started checklist and credits for each task" }],
    },
    { type: "figure", image: { src: img("reviewlab-visibility"), alt: "ReviewLab onboarding step for setting up a profile button that reviewers can show" }, caption: "Each onboarding step earns credits, and teaches how the platform works along the way." },
    { type: "h3", text: "The credit economy" },
    { type: "p", text: "Users earn credits by giving feedback, and spend them to get feedback. The average user now gives **2.4 reviews for every one they receive**, compared with 0.8 before we had credits." },
    { type: "h3", text: "Helpfulness ratings" },
    { type: "p", text: "Every review is rated by the person who receives it. High ratings unlock profile badges and networking features, and earn more credits. People quickly learned that a generic \"looks good!\" doesn't cut it, and felt more motivated to write better, more detailed reviews. Average review length grew from **89 to 247 words**." },
    { type: "figure", image: { src: img("reviewlab-testimonials"), alt: "ReviewLab user testimonials praising the detailed, gamified feedback" }, caption: "What ReviewLab users said about the feedback they got.", wide: true },

    { type: "h2", text: "Competition that actually helps" },
    { type: "p", text: "Gamification gets a bad name because it's so often done wrong: zero-sum games that hook people on useless actions, waste their time or even their money, and fuel anxiety, FOMO and unhealthy comparison with others." },
    { type: "p", text: "Done right, it has what I call a rising tide effect: it becomes a way for people to grow and become a better version of themselves over time." },

    { type: "h2", text: "What I learned" },
    { type: "p", text: "Good gamification feels invisible. People shouldn't feel manipulated, or like they're playing some corporate game. They should feel they're making progress towards something they actually want." },
    { type: "p", text: "Points, streaks, badges and ratings are just the UI layer. The real system is understanding what motivates people and designing natural paths towards it. Gamification makes that goal visible and rewarding." },
    { type: "p", text: "And when you get it right, user behaviour lines up with business goals. People do more of what they want to do, and you get better metrics. Everyone wins." },
  ],
};
