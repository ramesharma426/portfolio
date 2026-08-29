export const siteUrl = "https://sharma-ramesh.com.np";

export const identity = {
  first: "Ramesh",
  last: "Sharma",
  role: ["Senior Full-stack", "Developer"] as const,
  goal: "My goal is to write <em>reliable, well-tested code</em> and own features end to end — from API design and performance tuning to the monitoring that catches problems before clients do.",
  intro:
    "Hello. I'm Ramesh, a <em>full-stack developer</em>. Five-plus years shipping Laravel on the back, Vue.js and React on the front, and the integrations that keep enterprise systems talking to each other.",
  aside:
    "Some of my <em>favourite technologies, topics and tools</em> — the ones I reach for without thinking.",
  email: "ramesharma426@gmail.com",
  place: "Hetauda, Nepal",
  tz: "Asia/Kathmandu",
  tzLabel: "UTC+5:45",
};

export type NavItem = { label: string; href: string };

export const nav: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

/** Spine index — wayfinding, position is the information. */
export const stations: NavItem[] = [
  { label: "Top", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export type Social = { label: string; handle: string; href: string; icon: string };

export const socials: Social[] = [
  { label: "Github", handle: "@ramesharma426", href: "https://github.com/ramesharma426", icon: "github" },
  { label: "Linkedin", handle: "in/ramesharma426", href: "https://linkedin.com/in/ramesharma426", icon: "linkedin" },
  { label: "Email", handle: "ramesharma426@gmail.com", href: "mailto:ramesharma426@gmail.com", icon: "mail" },
];

export type Article = {
  id: string;
  title: string;
  blurb: string;
  read: string;
  date: string;
  tags: string[];
  art: "kafka" | "locks" | "gateway" | "render" | "migrate";
};

/**
 * PLACEHOLDER — no articles written yet. Replace these entries with real
 * writing, or remove the Articles section from app/page.tsx if unused.
 */
export const articles: Article[] = [
  {
    id: "placeholder-1",
    title: "[Add an article title]",
    blurb: "[Add a one- or two-sentence summary of what this article covers.]",
    read: "— min",
    date: "—",
    tags: ["Laravel"],
    art: "kafka",
  },
  {
    id: "placeholder-2",
    title: "[Add an article title]",
    blurb: "[Add a one- or two-sentence summary of what this article covers.]",
    read: "— min",
    date: "—",
    tags: ["React"],
    art: "locks",
  },
];

export type StackGroup = {
  title: string;
  items: string[];
  /** grid placement: column span and horizontal offset, deliberately uneven */
  span: string;
};

export const stack: StackGroup[] = [
  {
    title: "Front-end",
    items: ["Vue.js", "Composition API", "Vuex", "Element UI", "React.js", "JavaScript (ES6+)"],
    span: "front",
  },
  {
    title: "Integrations",
    items: ["API Gateways", "REST APIs", "OAuth", "Webhooks", "Postman"],
    span: "styles",
  },
  {
    title: "Back-end",
    items: [
      "PHP 8", "Laravel", "Eloquent", "Queues", "WebSockets", "Echo",
      "Telescope", "Clockwork", "MySQL", "TDD",
    ],
    span: "back",
  },
  {
    title: "AI-Assisted Dev",
    items: ["Claude Code", "Context Engineering", "Agentic Workflows"],
    span: "ai",
  },
  {
    title: "Cloud & DevOps",
    items: ["Docker", "Laradock", "Azure Blob Storage", "Amazon S3", "Linux", "Git", "CI/CD", "Cloudflare"],
    span: "ops",
  },
];

export type Project = {
  name: string;
  kind: string;
  year: string;
  summary: string;
  stack: string[];
  detail: string[];
  repo: string;
};

export const projects: Project[] = [
  {
    name: "DCMC",
    kind: "Document management system",
    year: "2026",
    summary:
      "A Darta-Chalani (inward/outward registry) and document management system built as a Laravel API with a Vue 3 SPA front end.",
    stack: ["Laravel", "Vue 3", "Pinia", "Element Plus", "Laravel Echo"],
    detail: [
      "Laravel Passport issues OAuth tokens so the Vue SPA and any external integrations authenticate against the same API.",
      "Real-time document status updates over Laravel Echo and Pusher, with Excel export and chart-based reporting built in.",
      "Ships as a Dockerized stack — Nginx, MySQL, Redis and Supervisor — configured per-organization via environment files.",
    ],
    repo: "https://github.com/ramesharma426/dcmc-vue",
  },
  {
    name: "POS",
    kind: "Point of sale system",
    year: "2026",
    summary:
      "A point-of-sale system for retail checkout — order entry, thermal receipt printing, and an AdminLTE-based back office.",
    stack: ["Laravel", "Vue", "jQuery", "AdminLTE"],
    detail: [
      "Thermal printer encoder integration drives receipt printing directly from the browser.",
      "Playwright end-to-end tests cover the checkout flow alongside Laravel's own test suite.",
      "Deployed with Docker, matching the containerized workflow used across other projects.",
    ],
    repo: "https://github.com/ramesharma426/pos",
  },
];

export type Role = {
  from: string;
  to: string;
  duration: string;
  company: string;
  title: string;
  stack: string;
};

export const roles: Role[] = [
  {
    from: "2024",
    to: "",
    duration: "2 yrs 4 mos",
    company: "CyberArrow",
    title: "Full Stack Developer",
    stack: "Laravel & React",
  },
  {
    from: "2021",
    to: "2024",
    duration: "2 yrs 11 mos",
    company: "Prabidhee Innovations",
    title: "Full Stack Developer",
    stack: "Laravel & Vue.js",
  },
  {
    from: "2020",
    to: "2020",
    duration: "6 mos",
    company: "Anshu Tech",
    title: "Backend Developer",
    stack: "Node.js & React.js",
  },
];

/** 6 + 35 + 28 = 69 months */
export const experienceTotal = "5 years 9 months";
