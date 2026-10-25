/** "How I actually use AI at work" article — content. */
import type { Story } from "@/data/case-studies/story";

export const howIUseAiArticle: Story = {
  date: "23 October 2026",
  intro: [
    "As a product designer, I now use AI in every part of the design process, as a teammate I collaborate with on every step. It helps my team and me move faster in ways that really matter, and it supports me every day, especially with the most tedious tasks.",
    "Here's what that looks like, and what we've put in place to make it work.",
  ],
  blocks: [
    { type: "h2", text: "How AI is embedded in the design process" },
    {
      type: "table",
      head: ["Step", "What AI does", "What I still do"],
      rows: [
        ["Understand the problem", "Pulls together what we already know: past research, product decisions, notes from meetings, and what competitors are doing", "Decide which questions are worth asking"],
        ["Research", "Drafts interview guides and research plans, and afterwards helps to document, create executive summaries and decks to share the findings", "Talk to the people and connect the dots"],
        ["Explore ideas", "Helps me stress-test ideas early, by playing back how different types of users are likely to react, based on real research", "Choose the direction"],
        ["Prototype and validate", "Turns designs into realistic, working prototypes that we can validate quickly with real users and share with stakeholders", "Define the UX and UI, define the usability tests"],
        ["Review and test", "Keeps designs aligned with our design system, and reviews copy and accessibility against our guidelines", "Make everything ready for shipping"],
        ["Learn after launch", "Answers questions about usage data in plain language, and sends me a short report every morning from Mixpanel", "Check the numbers make sense, and discuss them in more depth"],
        ["Document", "Turns screenshots, notes and transcripts into shared documentation", "Review and approve every change"],
      ],
    },
    { type: "p", text: "None of these steps is new. What's new is that the slow, repetitive parts of each one have been dramatically sped up, and AI can give a head start on the most tedious ones. That leaves more time for the parts that require the actual design thinking." },

    { type: "h2", text: "How we keep the context" },
    { type: "p", text: "Giving AI context is the easy part now. The hard part is giving it the right context, at the right moment, without loading everything into the context window every time. Every extra file the model reads costs tokens, time and compute, and makes it more likely to miss what matters. So most of our effort goes into keeping our context good, and keeping it lean." },
    { type: "h3", text: "A shared Git repo as the team's memory" },
    { type: "p", text: "Everything our team knows about our products and strategy lives in one shared Git repository: how the product works, what we've decided and why, what we've learned from research. It's all plain Markdown, so any AI tool can read it, and so can any person." },
    { type: "p", text: "Each of us also has a small personal repo, a \"kit\", with our own initiatives and preferences. I open both in one Claude Code workspace, so the agent knows the product, the team and how I like to work before I type anything." },
    { type: "p", text: "Every folder has an `AGENTS.md` file: the rules for that part of the repo. It tells the agent what lives there, what to load first and how to behave. The agent reads the closest one and walks up from there, so it gets the instructions for the task in front of it, not all of them." },
    { type: "h3", text: "Easy to add to" },
    { type: "p", text: "Documentation usually falls behind because updating it takes time nobody has. We made adding to it as easy as a chat. Drop in a meeting transcript, a long thread or a few notes, and an ingest skill works out what's new, flags anything that contradicts what's already in the repo, and drafts the change. A lint skill runs health checks for stale, broken or orphaned files." },
    { type: "p", text: "Every time someone adds something, the whole team benefits. Knowledge stops living in one person's head." },
    { type: "h3", text: "Humans approve everything" },
    { type: "p", text: "The agent never changes the shared repo on its own. Every change goes through a GitHub pull request, and a person reviews and merges it before it reaches anyone else." },
    { type: "h3", text: "Reusable skills" },
    { type: "p", text: "When we find a good way to do something with AI, like turning interview notes into insights or writing copy in our tone of voice, we share it with the broader organisation. Most of the time it becomes a standardised resource, a skill or an agent, that everyone in the organisation can start using in their own workflows and benefit from. A skill is an on-demand set of instructions the agent loads only when the task calls for it, and anyone can run it with a slash command." },
    { type: "p", text: "How we build them matters as much as what's in them:" },
    {
      type: "ul",
      items: [
        "**Router plus references.** A skill isn't one long document. Its `SKILL.md` is a short router that works out which job you're asking for, then loads only the reference files and the parts of the knowledge base that job needs. Asking for one quick answer doesn't pull in the instructions for five other tasks.",
        "**Sub-agents for heavy lifting.** Big searches across the repo run in a sub-agent with its own clean context. It does the reading and hands back just the answer and its sources, so the main conversation stays small.",
        "**One canonical copy, symlinked everywhere.** Each skill lives in one folder, and symlinks expose it to every tool we use, Claude Code and Cursor alike. Fix it once and it's fixed for everyone, with no copies drifting apart.",
        "**Relative symlinks only.** Absolute paths point at one person's machine and break for everyone else after a clone. Relative links work wherever a teammate keeps the repo.",
      ],
    },
    { type: "h3", text: "Connected to the tools we already use" },
    { type: "p", text: "The agent doesn't live in a separate bubble. Through MCP servers it connects to the tools the team already works in, so it can read from them and, with our approval, write back." },
    {
      type: "table",
      head: ["Tool", "What it's for", "How AI helps"],
      rows: [
        ["Mixpanel", "How people actually use the product", "I ask questions about usage in plain language, and scheduled tasks send me regular reports without building every chart by hand"],
        ["Jira", "What we're building, and when", "A skill creates and updates work items following our field conventions, runs checks on the backlog before sprint planning, and exports the roadmap to slides in minutes"],
        ["Confluence", "Where the wider company reads our documentation", "A skill pulls pages into the repo as Markdown and pushes our updates back, so both stay in sync"],
      ],
    },
    { type: "p", text: "This is what keeps everything aligned. The data, the plan and the documentation all trace back to the same repo, so we're not keeping three versions of the truth and hoping they match." },
    { type: "h3", text: "Keeping an eye on the market" },
    { type: "p", text: "The same setup works for what's happening outside the team. Every two weeks, a scheduled task runs our market skill in autonomous mode. It scans the news for competitors and the wider market, writes a digest of what changed, why it matters and what to watch, and commits it to the repo. Nobody has to remember to do it, and nobody has to read twenty websites." },
    { type: "p", text: "The digest also proposes updates to the competitor profiles in the repo, so the agent's picture of the market stays current. It syncs to Confluence for the wider company. Every few weeks, the same skill turns the latest digests into a synthesis doc we use for a team discussion on what it means for our plans." },
    { type: "h3", text: "Keeping stakeholders in the loop" },
    { type: "p", text: "Not everyone needs to work this way to benefit from it. Most stakeholders never open the repo, and they don't have to." },
    {
      type: "ul",
      items: [
        "**Anyone can ask.** A Copilot agent grounded in the repo answers product questions for anyone in the company, without waiting for one of us to reply.",
        "**Updates go where people already look.** Documentation lands in Confluence, plans stay in Jira, and roadmaps come out as slides. Each audience gets the same information in the format they're used to.",
        "**Faster answers to repeat questions.** Legal, marketing and support often ask versions of the same questions. We paste them in, get a draft answer back from what's already documented, and see straight away what's missing.",
        "**Proposals get reviewed early.** Bigger ideas go out as an RFC before we build, so the right people can weigh in while it's still cheap to change course.",
      ],
    },

    { type: "h2", text: "Shipping AI tools the right way" },
    { type: "p", text: "When anyone can build a working tool in a few days, the risk changes. It's no longer \"can we build it?\" but \"should this be running, and is it safe?\" So we follow the same three steps for anything we build that other people will use." },
    {
      type: "ol",
      items: [
        "**Start from the template.** Nobody starts a new tool from an empty repo. We have a shared AI project template that every new tool starts from. It comes with a standard `AGENTS.md` structure for project context, a shared skills folder with setup skills and a skill that reviews the repo's agent setup, and a git-ignored local folder for personal context that should never be committed. Every tool starts with the same conventions and guardrails, works with any AI coding tool, and is easy for the next person to pick up.",
        "**Write an RFC first.** Before a tool goes beyond a prototype, it gets a short request for comments: the problem, what the tool does, how it handles data, and what could go wrong. Engineering reviews it for technical feasibility and risks, and other teams can weigh in. It catches problems while they're still cheap to fix, and it means nobody ships something the rest of the company didn't know about.",
        "**Ship it on our internal platform.** We have one shared internal platform for hosting tools like these. Instead of everyone setting up their own servers and logins, a tool on the platform gets the basics built in: company sign-in, so only colleagues can use it, secure hosting and storage, and a clear owner. Changes on the platform need a person to approve them, never just the AI.",
      ],
    },
    { type: "p", text: "Together, they mean every tool we ship sits on the same tech stack, with the same guardrails, and has been looked at by someone other than the person who built it. Moving fast only works if what we ship is safe and can be maintained." },

    { type: "h2", text: "Three things I built with it" },
    {
      type: "ul",
      items: [
        "**A hackathon prize.** In a week-long company hackathon, our small team built a prototype of a new AI feature for learners. AI helped at every step, from testing which model gave the best feedback to designing the screens. We took second prize.",
        "**A feedback tool for prototypes.** More of us now design by building working prototypes, but feedback on them ended up scattered across screenshots and chat threads. So I built a tool that lets people leave comments pinned directly onto a live prototype, like they would on a design file. The first version took three days. After an RFC and review with engineering, it's now live on our internal platform for teams across the company.",
        "**A report that writes itself.** During a pilot, I wanted to know every day how people were using the product, without building reports by hand. I set up an AI task that checks the data each morning and sends me a short summary, with anything unusual flagged. Its most important rule: if it can't reach the data, it says so. It never makes numbers up.",
      ],
    },
    { type: "p", text: "A year ago, none of these would have been realistic for a designer to build alone." },

    { type: "h2", text: "What we've learned" },
    { type: "p", text: "Some of this we got right first time. Most of it we learned by getting it wrong." },
    {
      type: "ul",
      items: [
        "**Context is a given. Efficiency is the hard part.** Giving AI context is easy. Giving it only what each task needs, so it stays fast, accurate and cheap to run, is the real skill. We also match the model to the job: a lighter one for simple lookups, the most capable one only where the thinking really matters.",
        "**Keep a human at every gate.** AI suggests, a person decides. That goes for shared knowledge, research and anything that leaves the team.",
        "**Not everything should be AI-written.** AI is great at instructions and first drafts. It's not great at explaining why something matters. That part is still on us.",
        "**It doesn't replace real users.** AI helps me spot problems early and arrive at research with sharper questions. It doesn't replace talking to the people we design for.",
        "**Building is fast, shipping isn't.** AI can get you a working prototype in days. Getting it reviewed, secured and live still takes the time it takes, so start those conversations early.",
      ],
    },
    { type: "p", text: "And it's still a work in progress. Things break, information goes out of date, a playbook does something unexpected. We fix it and move on." },
  ],
};
