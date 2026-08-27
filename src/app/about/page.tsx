import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "Python",
  "Tailwind CSS",
  "PostgreSQL",
];

const timeline = [
  {
    period: "2024 — Present",
    title: "Role / Company",
    detail: "What you worked on and the impact you had.",
  },
  {
    period: "2022 — 2024",
    title: "Role / Company",
    detail: "Another placeholder entry. Add education or side projects too.",
  },
];

export default function About() {
  return (
    <div className="space-y-12">
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold tracking-tight">About</h1>
        <p className="text-muted">
          Placeholder bio. Write about your background, what kind of problems you
          like to work on, and what you&apos;re looking for. Keep it to a few
          short paragraphs.
        </p>
        <p className="text-muted">
          A second paragraph with a bit more personality — interests outside of
          work, how you got into the field, or what you&apos;re learning now.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Skills</h2>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-black/10 px-3 py-1 text-sm text-muted dark:border-white/10"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-6">
        <h2 className="text-xl font-semibold tracking-tight">Experience</h2>
        <div className="space-y-6">
          {timeline.map((item) => (
            <div key={item.period} className="grid gap-1 sm:grid-cols-[8rem_1fr]">
              <div className="text-sm text-muted">{item.period}</div>
              <div>
                <div className="font-medium">{item.title}</div>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
