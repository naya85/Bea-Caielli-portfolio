export const siteConfig = {
  name: "Beatrice Caielli",
  title: "Senior Product Designer",
  tagline:
    "Staff-level product designer. Discovery to shipped product, design systems, and executive alignment. AI-augmented design and production-grade prototypes.",
  email: "beatrice.caielli@gmail.com",
  location: "Milan, Italy",
  hero: {
    line1: "Hello, I'm Bea.",
    line2: "I make the right things happen.",
    line3: "Let's build the next one together.",
    stats: [
      { value: "12", label: "Years of experience" },
      { value: "9", label: "Industries worked in" },
      { value: "100+", label: "Features shipped" },
      { value: "16", label: "Designers mentored" },
    ],
  },
  contactTagline: "Let's connect.",
  footerLine:
    "Crafted with care ♥, spiced with creativity ✨, and served with a cup of black coffee ☕",
  socials: {
    dribbble: "https://dribbble.com/beatrice-caielli",
    behance: "https://behance.net/beatrice-caielli",
    medium: "https://medium.com/@beatrice.caielli",
    adplist: "https://adplist.org/mentors/beatrice-caielli",
    linkedin: "https://www.linkedin.com/in/beatrice-caielli/",
  },
  /** Spotify track ID for easter-egg overlay (from open.spotify.com/track/THIS_PART) */
  spotifyTrackId: "5TewgNx79xxmaPz1yjdrgj",
};

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  domain: string;
  summary: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Senior Product Designer",
    company: "Mondly by Pearson",
    location: "Milan, Italy",
    period: "Jan 2024 — Present",
    domain: "Digital Education · Language Learning · B2B & B2C",
    summary:
      "Operating at staff/lead level, driving end-to-end product strategy and design leadership for the Pearson Language+ app ecosystem. Shaping product vision, aligning stakeholders, and advancing AI-augmented design capabilities.",
    highlights: [
      "Co-authored the 2025 and 2026 product strategy; conceptualised adaptive learning experiences for institutional and corporate learners",
      "Pioneered a Cursor-based AI prototyping workflow — sole designer of production-deployed Teacher Dashboard (React, TypeScript, Tailwind, Firebase) for Pearson Language+",
      "Used AI-built prototypes for hyper-realistic usability testing; findings secured executive alignment up to C-suite",
      "Leveraged AI to accelerate research synthesis (LLMs for transcripts, insights, structured findings)",
      "Spearheaded company-wide accessibility initiatives and authored WCAG-compliant Accessibility Guidelines",
      "Developed comprehensive UX Writing Guidelines; conducted user research, usability testing, and A/B testing",
    ],
  },
  {
    role: "Co-Founder & Lead Product Designer",
    company: "Reviewlab",
    location: "Barcelona, Spain",
    period: "May 2024 — Present",
    domain: "SaaS · Indie Makers & Solopreneurs",
    summary:
      "Co-founded a feedback platform connecting indie makers with industry experts. Led strategic direction and UX/UI design. Launched on ProductHunt.",
    highlights: [
      "Led discovery research and validated product-market fit through user research and competitive analysis",
      "Designed and launched platform MVP from concept to production",
      "Participated in startup incubation program at American University of Armenia",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Preply",
    location: "Barcelona, Spain",
    period: "Oct 2021 — Dec 2023",
    domain: "Digital Education · Language Learning · B2C & B2B",
    summary:
      "Drove design across 2 cross-functional teams. Contributed to North Star product concepts and mentored junior designers. Leveraged A/B testing and user research for iterative optimization.",
    highlights: [
      "Defined quarterly OKR-based initiatives with Product Managers, aligning design with business objectives",
      "Collaborated with UX researchers, writers, and data analysts to inform design decisions",
      "Mentored junior designers through critiques, coaching, and career planning",
      "Contributed to design system standardization and design operations improvement",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Lingoda GmbH",
    location: "Berlin, Germany",
    period: "Dec 2020 — Oct 2021",
    domain: "Digital Education · Language Learning · B2C, B2B & B2G",
    summary:
      "Led design initiatives across 2 cross-functional teams focused on Growth and Retention. Maintained and documented the company design system.",
    highlights: [
      "Identified pain points using insights from UX research, customer support, and business intelligence",
      "Maintained, expanded, and documented design system as Design System owner",
      "Partnered with UX research team on optimal methodologies and user testing",
    ],
  },
  {
    role: "Senior Product Designer",
    company: "Billie GmbH",
    location: "Berlin, Germany",
    period: "May 2020 — Dec 2020",
    domain: "Fintech · Financial Services · B2B",
    summary:
      "Primary designer for one of two main products. Ideated innovative features for invoice management, conceptualized long-term strategy with MLP iterations.",
    highlights: [
      "Conceptualized product vision and roadmap with Product Manager and Product Owner",
      "Established design QA processes to ensure quality implementation",
      "Optimized, documented, and maintained the design system",
    ],
  },
  {
    role: "Senior UX/UI Designer",
    company: "Deposit Solutions GmbH",
    location: "Berlin, Germany",
    period: "Mar 2019 — May 2020",
    domain: "Fintech · Financial Services · B2C",
    summary:
      "Led complete design process for new Spanish website. Created atomic design system with WCAG AA accessibility focus for white-label solution.",
    highlights: [
      "Conducted comprehensive research including focus groups, market analysis, and competitive analysis",
      "Created atomic design system with strong WCAG AA compliance focus",
      "Collaborated on launching Savebetter banking app for US market",
      "Redesigned internal portal improving operational efficiency and satisfaction",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "AGS S.p.A.",
    location: "Pero, Italy",
    period: "Nov 2017 — Feb 2019",
    domain: "Artificial Intelligence · Industrial IoT",
    summary:
      "Worked in InnoLab AI Department on industrial IoT pharma, IoT, and management web applications following agile methodology.",
    highlights: [
      "Conducted user research through focus groups, shadowing, questionnaires, and interviews",
      "Designed responsive web interfaces, industrial HMIs, web apps, and hybrid mobile apps",
      "Wrote semantic, reusable HTML5 and CSS3 (Sass) following accessibility standards",
    ],
  },
  {
    role: "UX/UI Designer Consultant",
    company: "Lutech S.p.A.",
    location: "Cologno Monzese, Italy",
    period: "May 2017 — Nov 2017",
    domain: "Healthcare · Medical Software · B2B",
    summary:
      "Contributed to design and development of Angular2-based web application for laboratory tube management through contextual inquiry research.",
    highlights: [
      "Conducted contextual inquiry shadow research at laboratory facilities",
      "Designed intuitive interface improving operator task completion rates",
      "Established foundational design system for consistency and scalability",
    ],
  },
  {
    role: "UX/UI Designer",
    company: "Opsi S.r.l.",
    location: "Nova Milanese, Italy",
    period: "Apr 2015 — May 2017",
    domain: "Software Development · Digital Agency",
    summary:
      "Designed marketing websites, landing pages, and intranet apps for enterprise clients including Nestlé, Pellegrini, and SOL.",
    highlights: [
      "Designed conversion-optimized marketing websites and landing pages",
      "Developed data-driven solutions for improving conversion rates and brand identities",
      "Provided production-ready HTML5 and CSS3 with responsive design",
    ],
  },
];

export interface Project {
  slug: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
  caseType: "feature" | "strategy" | "article";
  /** Year shown as eyebrow (e.g. "2024") */
  year: string;
  image?: string;
  imageAlt?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    slug: "listen-repeat",
    title: "Listen and Repeat",
    caseType: "feature",
    company: "Mondly by Pearson",
    year: "2024",
    description:
      "A clearer path from first words to confident practice. I turned Mondly’s disconnected speaking feature into a guided lesson moment, without rebuilding the whole product.",
    image: "/images/portfolio/listen-repeat.png",
    imageAlt: "Two Mondly learning screens showing guided language practice",
    tags: [
      "EdTech",
      "Mobile",
      "User Research",
      "A/B Testing",
      "Product Strategy",
      "Scoping",
    ],
  },
  {
    slug: "postpone-renewal-date",
    title: "More room to keep learning",
    caseType: "feature",
    company: "Preply",
    year: "2022",
    description:
      "A flexible renewal date gave learners time to use the lessons they had already paid for—and helped turn cancellation intent into continued learning.",
    image: "/images/portfolio/postpone-renewal.png",
    imageAlt: "Preply subscription renewal date controls on mobile",
    tags: ["Retention", "Subscriptions", "Research", "Experimentation"],
  },
  {
    slug: "gamification",
    title: "Why gamification works (when done right)",
    caseType: "article",
    company: "Mondly by Pearson · Reviewlab",
    year: "2025",
    description:
      "A practical reflection on designing mechanics around real user progress—from language-learning streaks to a fair feedback economy for indie makers.",
    image: "/images/portfolio/case-cover.png",
    imageAlt: "Product screens from the gamification case study",
    tags: ["Product Strategy", "Behaviour Design", "EdTech", "SaaS"],
  },
  {
    slug: "from-mondly-to-language-plus",
    title: "From Mondly to Language+",
    caseType: "strategy",
    company: "Pearson · Language+",
    year: "2026",
    description:
      "Turning a 100M+ download consumer app into coursebook-connected English practice for schools—from evidence-led vision to a live product and classroom pilot.",
    image: "/images/case-studies/language-plus/5-dashboard.jpg",
    imageAlt: "Teacher dashboard concept for Pearson Language+",
    tags: [
      "Product Strategy",
      "Teacher Research",
      "Learning Design",
      "Prototyping",
    ],
  },
  {
    slug: "ai-assisted-product-design",
    title: "Designing with AI: from prototype to product",
    caseType: "article",
    company: "Pearson · Language+",
    year: "2026",
    description:
      "How I used AI-assisted coding and research synthesis to build, test and ship a realistic teacher dashboard—while keeping product judgment and user evidence at the center.",
    image: "/images/case-studies/language-plus/5-dashboard.jpg",
    imageAlt: "Pearson Language+ teacher dashboard prototype",
    tags: [
      "Product Strategy",
      "AI Prototyping",
      "React · TypeScript",
      "B2B",
      "Accessibility",
    ],
  },
  {
    slug: "reviewlab-platform",
    title: "Reviewlab Platform",
    caseType: "feature",
    company: "Reviewlab",
    year: "2024",
    description:
      "Co-founded and designed a SaaS platform connecting indie makers with industry experts for actionable feedback. Launched on ProductHunt.",
    tags: [
      "Co-Founder",
      "MVP Design",
      "User Research",
      "SaaS",
      "Product Strategy",
    ],
  },
  {
    slug: "tutor-marketplace-optimization",
    title: "Tutor Marketplace Optimization",
    caseType: "feature",
    company: "Preply",
    year: "2023",
    description:
      "Drove design across cross-functional teams to optimize the tutor-student matching experience, leveraging experimentation and continuous A/B testing.",
    tags: [
      "Experimentation",
      "A/B Testing",
      "Data-Informed Design",
      "B2C",
      "Mentoring",
    ],
  },
  {
    slug: "growth-retention-design",
    title: "Growth & Retention Design",
    caseType: "strategy",
    company: "Lingoda GmbH",
    year: "2021",
    description:
      "Led design initiatives to improve e-learning platform usability. Owned the design system ensuring consistency and efficiency across all teams.",
    tags: [
      "Design Systems",
      "Growth",
      "Retention",
      "User Research",
      "B2C",
    ],
  },
  {
    slug: "invoice-management-innovation",
    title: "Invoice Management Innovation",
    caseType: "feature",
    company: "Billie GmbH",
    year: "2020",
    description:
      "Primary designer for invoice uploading, scanning, and management features. Conceptualized long-term strategy broken into minimum lovable product iterations.",
    tags: ["Fintech", "B2B", "MLP Strategy", "Design QA", "Design Systems"],
  },
  {
    slug: "savebetter-banking-white-label",
    title: "Savebetter Banking App & White-Label System",
    caseType: "strategy",
    company: "Deposit Solutions GmbH",
    year: "2020",
    description:
      "Created an atomic design system with WCAG AA compliance for a white-label B2B and B2C financial platform. Launched banking app for the US market.",
    tags: [
      "Fintech",
      "Atomic Design",
      "Accessibility",
      "White-Label",
      "B2C",
    ],
  },
];

/** My core principles (6 cards in 2x3 grid) */
export const corePrinciples = [
  {
    title: "Understanding before solving",
    description:
      "The quality of the solution depends entirely on how well we understand and frame the problem. The better the question, the better the answer.",
  },
  {
    title: "Solid products are built in small steps",
    description:
      "Solid and long-lasting changes are not made overnight but through compounding improvements and iterations.",
  },
  {
    title: "Good design comes from connecting the dots",
    description:
      "I build bridges across teams to gather all the pieces, and when something's missing, I keep things reversible until the picture gets clearer.",
  },
  {
    title: "Honest conversations make better products",
    description:
      "I actively create the space for honest conversations. That's how alignment is built and where the best compromise between user needs and business goals gets found.",
  },
  {
    title: "Design the room before the screen",
    description:
      "The best work happens inside well-designed systems. I drive processes and frameworks to enable the design team to operate at the best conditions.",
  },
  {
    title: "Craft is in the detail",
    description:
      "I always look for the layer beyond good enough — it's the small details that turn good designs into great ones.",
  },
];

/** Carousel slides for "My top 3 skills" (from Figma) */
export const topSkillsSlides = [
  {
    title: "User-centered strategic thinking",
    description:
      "I focus on understanding user needs and translating quantitative and qualitative insights into opportunities that drive product strategy and business growth",
  },
  {
    title: "Cross-functional collaboration",
    description:
      "I facilitate effective collaboration across teams and stakeholders, creating alignment around shared goals through clear communication and structured processes",
  },
  {
    title: "Vision development",
    description:
      "I collaborate with leadership to shape medium/long-term product vision, contributing to defining the MVP and the strategy to scale it over the quarters",
  },
];

export const skillCategories = [
  {
    name: "Design & Strategy",
    skills: [
      "Product Design",
      "UX Research",
      "Interaction Design",
      "Design Systems",
      "Information Architecture",
      "UX Writing",
      "Accessibility (WCAG)",
      "Design Thinking",
    ],
  },
  {
    name: "Research & Validation",
    skills: [
      "User Interviews",
      "Usability Testing",
      "A/B Testing",
      "Competitive Analysis",
      "Journey Mapping",
      "Persona Development",
      "Contextual Inquiry",
      "Survey Design",
    ],
  },
  {
    name: "Tools",
    skills: [
      "Figma (Variables, Dev Mode, Auto Layout)",
      "FigJam",
      "Miro",
      "UserTesting.com",
      "Maze",
      "Lookback",
      "Confluence",
      "Jira",
      "Notion",
    ],
  },
  {
    name: "Technical & AI",
    skills: [
      "React",
      "HTML5 & CSS3",
      "Sass",
      "Git",
      "Cursor",
      "Claude",
      "ChatGPT",
      "Midjourney",
    ],
  },
];

export interface Education {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade?: string;
}

export const education: Education[] = [
  {
    degree: "Bachelor of Arts in Fashion & Textile Design",
    institution: "N.A.B.A. (Nuova Accademia di Belle Arti)",
    location: "Milan, Italy",
    year: "2008",
    grade: "110/110",
  },
  {
    degree: "Web Design and Graphic Advertising Professional Courses",
    institution: "New People Team & Sinervis Schools",
    location: "Milan, Italy",
    year: "2014",
  },
  {
    degree: "High School Diploma — Classical Studies",
    institution: "Liceo Galilei",
    location: "Legnano, Italy",
    year: "2004",
  },
];

export const certifications = [
  {
    name: "User Research — Methods and Best Practices",
    issuer: "Interaction Design Foundation",
    year: "2018",
  },
  {
    name: "Dynamic User Experience: AJAX Design and Usability",
    issuer: "Interaction Design Foundation",
    year: "2017",
  },
  {
    name: "Gestalt Psychology and Web Design",
    issuer: "Interaction Design Foundation",
    year: "2017",
  },
  {
    name: "Human-Computer Interaction (HCI)",
    issuer: "Interaction Design Foundation",
    year: "2017",
  },
];

export const prizes = [
  {
    name: "1st Prize — Frontend HTML (Middle/Senior)",
    event: "@IT Challenges 2018",
    location: "Krakow, Poland",
    year: "2018",
  },
];

export const languages = [
  { language: "Italian", level: "Native" },
  { language: "English", level: "Advanced" },
  { language: "Spanish", level: "Intermediate" },
  { language: "German", level: "Basic" },
];

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building Accessibility Guidelines for a Global EdTech Product",
    excerpt:
      "How I spearheaded company-wide accessibility initiatives and authored WCAG-compliant guidelines as a reference for the entire organization.",
    date: "2025-06-15",
    slug: "accessibility-guidelines-edtech",
    tags: ["Accessibility", "WCAG", "EdTech"],
  },
  {
    title: "From Designer to Co-Founder: Lessons from Launching Reviewlab",
    excerpt:
      "Reflections on co-founding a SaaS platform, validating product-market fit, and launching on ProductHunt as a designer-turned-entrepreneur.",
    date: "2025-03-20",
    slug: "designer-to-cofounder",
    tags: ["Entrepreneurship", "Product Design", "SaaS"],
  },
  {
    title: "The Power of Design Systems in Scaling Product Teams",
    excerpt:
      "Lessons learned from owning and scaling design systems across multiple companies, from Lingoda to Deposit Solutions.",
    date: "2024-11-10",
    slug: "design-systems-scaling",
    tags: ["Design Systems", "Product Teams", "Scale"],
  },
];
