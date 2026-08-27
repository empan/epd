export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  href?: string;
  repo?: string;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "placeholder-one",
    title: "Project One",
    summary:
      "A short description of what this project is, the problem it solves, and your role in building it.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    href: "https://example.com",
    repo: "https://github.com/empan/project-one",
    year: 2026,
  },
  {
    slug: "placeholder-two",
    title: "Project Two",
    summary:
      "Another placeholder project. Replace with real work — screenshots, links, and outcomes go a long way.",
    tags: ["React", "Node.js"],
    repo: "https://github.com/empan/project-two",
    year: 2025,
  },
  {
    slug: "placeholder-three",
    title: "Project Three",
    summary:
      "Describe the impact: performance gains, users served, or what you learned.",
    tags: ["Python", "Data"],
    year: 2025,
  },
];
