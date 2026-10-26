/** "Redesign the subscription model" (Postpone renewal date at Preply) case study — content. */
import type { Story } from "@/data/case-studies/story";

const img = (name: string) => `/images/case-studies/postpone-renewal/${name}.png`;

export const postponeRenewalStory: Story = {
  hero: { src: "/images/portfolio/postpone-renewal-cutout.png", alt: "Preply screens for choosing a new renewal date and its confirmation" },
  intro: [
    "I designed a way for Preply learners to push their billing date back by up to 20 days when they needed it. It looked like a small flexibility feature. It turned out to be a retention booster.",
  ],
  metrics: [
    { value: "+2.1%", label: "hours confirmed" },
    { value: "+5.6%", label: "gross margin" },
    { value: "+4.4%", label: "hours bought by new learners" },
  ],
  takeaway: "Sometimes people don't want to cancel. They want more control over their commitments, and a bit of room when life happens.",
  blocks: [
    { type: "h2", text: "The problem" },
    { type: "p", text: "Our data showed a growing trend of cancellations, and it was starting to hurt growth." },
    { type: "h3", text: "Previous experience" },
    { type: "p", text: "Preply runs on a monthly subscription: learners buy a set number of lesson hours and book them with their tutor." },
    {
      type: "ul",
      items: [
        "Learners pay monthly for a set number of lesson hours.",
        "Subscriptions renew automatically every 28 days.",
        "Any hours left over are written off at renewal.",
        "Learners can pause or cancel at any time.",
      ],
    },
    { type: "p", text: "When learners couldn't keep their usual schedule, because of travel, work or life, they had two options. Neither matched what they actually needed:" },
    {
      type: "ul",
      items: [
        "**Pause the subscription.** Learners keep access to the platform, but their scheduled lessons are cancelled, the hours go back to their balance, and they can't book new lessons. Billing stops until they resume.",
        "**Cancel the subscription.** Learners keep access to the platform, and because of a flaw in the logic their hours never expire, even after the last billing cycle. So they could take their leftover lessons whenever they wanted.",
      ],
    },
    { type: "h3", text: "The challenge" },
    { type: "p", text: "I needed a feature that would fix four things at once:" },
    {
      type: "ol",
      items: [
        "**High cancellation rates**, driven by limited flexibility.",
        "**Frequent lesson cancellations** from paused subscriptions: more than 20,000 lessons every month.",
        "**Unused hours piling up**: 55% of paused subscriptions had scheduled lessons that got cancelled.",
        "**Negative sentiment** about losing unused hours.",
      ],
    },

    { type: "h2", text: "Research and analysis" },
    { type: "p", text: "To understand why, we did two things at once: we sent a short survey to everyone who cancelled, and I ran user interviews. In the interviews, I kept hearing the same frustration:" },
    { type: "quote", text: "I don't want to stop learning. I just can't predict exactly when I'll have time again, and I don't want to lose the hours I paid for." },
    { type: "p", text: "Most people weren't cancelling because they'd lost interest in learning. They were cancelling because we gave them no room to be flexible." },
    { type: "p", text: "The reactivation data said it most clearly. People who cancelled were more active afterwards than people who paused: they switched tutor, resubscribed, or used up the hours they had left. After 90 days they generated **40% more confirmed hours** and **20% more gross margin** than people who paused. And **22% of those who cancelled reactivated the same subscription at least once**." },

    { type: "h2", text: "The solution" },
    { type: "p", text: "Once we'd analysed the research and defined the jobs to be done, my team and I brainstormed ways to stop people cancelling while still giving them the flexibility they needed. These are the user stories we designed for:" },
    {
      type: "stories",
      items: [
        { as: "a student who hasn't taken all of this month's lessons", want: "some extra time to take them", so: "I don't lose them" },
        { as: "a student", want: "to clearly understand the rules for postponing my billing date and what happens in the meantime", so: "I can choose the right package and know when to use it" },
        { as: "a student", want: "to postpone my billing date whenever I need to", so: "I feel in control of my subscription and trust Preply more" },
        { as: "a student", want: "to use my remaining hours even when the cycle is over", so: "I don't waste my money and I have peace of mind when life happens" },
        { as: "a student", want: "to restart my billing cycle straight away and get more hours when I've used mine", so: "I can keep learning without a break" },
      ],
    },
    { type: "p", text: "In the end we tackled the problem on two fronts:" },
    {
      type: "ol",
      items: [
        "**Remove pause and fix cancellation.** We changed the logic so unused hours expire at the end of the billing cycle. People who'd been cancelling as a workaround now had a better option, which brought cancellations down.",
        "**Introduce Postpone renewal date.** Learners can push their billing date back by up to 20 days, once per cycle, and use the hours they've already paid for in the meantime. We also offered it in the cancellation flow, depending on the reason people gave for cancelling.",
      ],
    },
    { type: "h3", text: "Design and testing" },
    { type: "p", text: "I explored different versions of the feature in wireframes and mockups, using the components and interaction patterns from Preply's design system. I wanted it to feel obvious and to make the benefit clear, so I kept the rules short and plain, and designed a pop-up to tell learners about the change." },
    { type: "p", text: "As usual, I shared the designs in a critique with other designers and UX writers, and walked the developers in my team through them to check feasibility and get a rough estimate." },
    { type: "figure", image: { src: img("design-board"), alt: "Design exploration of the postpone flow: announcement pop-up, subscription settings, new date selection and confirmation" }, caption: "Exploring the flow, from the announcement pop-up to choosing a new date and confirming it.", wide: true },
    { type: "p", text: "Once the designs were ready, I ran usability tests to check the feature felt valuable and the interface was easy to use. The feedback was very positive: people understood the benefit straight away and found the interaction simple." },
    {
      type: "ul",
      items: [
        "**7 out of 8** postponed their billing date with no problems. The eighth missed the instruction to pick the 28th, so the prototype didn't let them finish.",
        "**6 out of 8** could explain how the feature works.",
        "**5 out of 8** understood they could keep taking lessons in the meantime.",
        "**4 out of 8** thought the new date would only apply to the following month.",
      ],
    },
    { type: "h3", text: "Mockups and prototypes" },
    { type: "p", text: "After testing, I polished the designs, wrote the specs and Jira tickets, and handed everything over to the developers." },
    { type: "video", src: "/videos/postpone-renewal-walkthrough.mp4", label: "Screen recording of the Postpone renewal date prototype", caption: "A click-through of the prototype." },
    {
      type: "phones",
      images: [
        { src: img("popup"), alt: "Pop-up announcing that learners can now change their renewal date" },
        { src: img("settings"), alt: "Subscription settings explaining how changing the renewal date works" },
        { src: img("menu"), alt: "Subscription actions menu with the new Change renewal date option" },
        { src: img("date-default"), alt: "Choose a new renewal date screen before a date is picked" },
        { src: img("date-selected"), alt: "Choose a new renewal date screen with the 28th selected" },
        { src: img("confirmation"), alt: "Confirmation that the renewal date has changed" },
      ],
      caption: "The final flow on mobile: the announcement, the settings, choosing a new date and the confirmation.",
    },

    { type: "h2", text: "Impact and results" },
    { type: "p", text: "The experiment was a big success and was rolled out to everyone. It improved retention and the number of lessons taken. On top of that, expiring unused hours after cancellation increased gross margin by **34%**." },
    { type: "p", text: "Engagement went up across the board:" },
    {
      type: "ul",
      items: [
        "**+2.1% hours confirmed**, from 10,107 to 10,319 hours.",
        "**+1.6% hours bought**: learners committed to more.",
        "**+1.1% hours scheduled**: learners planned ahead more.",
      ],
    },
    { type: "p", text: "And business results beat expectations:" },
    {
      type: "ul",
      items: [
        "**+5.6% gross margin**, from 41.3% to 43.6%.",
        "**+2% GMV**, showing overall growth.",
        "**+1.9% conversion** to paid subscriptions.",
        "**+4.4% hours bought by new learners**: a stronger start on the platform.",
      ],
    },

    { type: "h2", text: "What I learned" },
    {
      type: "ul",
      items: [
        "**Cancellation isn't always churn.** The reactivation data showed that many people who cancelled came back. Understanding why they left changed the question from \"how do we stop cancellations?\" to \"how do we give people room?\"",
        "**Close the loophole and offer something better at the same time.** Fixing the cancellation workaround on its own would have felt like a penalty. Pairing it with a real alternative made the change land as a benefit: gross margin went up 34% while retention improved.",
        "**A little flexibility goes a long way.** A 20-day delay, once per cycle, was simple to build and simple to explain, and it lifted confirmed hours, gross margin and hours bought by new learners.",
        "**Test the rules, not just the flow.** Half the participants (4 out of 8) thought the new date only applied to the following month. The rules need to be as clear as the interaction.",
      ],
    },
  ],
};
