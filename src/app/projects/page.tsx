import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function Projects() {
  const sorted = [...projects].sort((a, b) => b.year - a.year);

  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted">
          A selection of things I&apos;ve built. Edit{" "}
          <code className="text-sm">src/data/projects.ts</code> to add your own.
        </p>
      </section>
      <div className="grid gap-4">
        {sorted.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
