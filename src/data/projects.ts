export type Project = {
  title: string;
  blurb: string;
  meta: string;
  slot: string;
  tint: string;
  href?: string;
};

export const projects: Project[] = [
  {
    title: "Design team programs",
    blurb: "Two years, one replatform, four decisions that mattered.",
    meta: "LEDGERLINE · 2024–26",
    slot: "HERO SHOT",
    tint: "#c9e3d8",
  },
  {
    title: "Redesigning core features",
    blurb: "A design system six people actually reach for.",
    meta: "LEDGERLINE · 2023",
    slot: "COMPONENT GRID",
    tint: "#ffe3a8",
  },
  {
    title: "Disputes, untangled",
    blurb: "Fintech's least fun flow, made merely unpleasant.",
    meta: "LEDGERLINE · 2022",
    slot: "FLOW DIAGRAM",
    tint: "#ffc9b5",
  },
  {
    title: "Critique spreadsheet",
    blurb: "Every crit I've run since 2021, and what changed after.",
    meta: "SIDE THING",
    slot: "SCREENSHOT",
    tint: "#d9d5ea",
  },
];
