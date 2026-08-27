import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="space-y-16">
      <section className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {site.name}
        </h1>
        <p className="text-lg text-muted">
          {site.role}. I build thoughtful, well-crafted web experiences. This is
          a placeholder intro — replace it with a sentence or two about what you
          do and what you care about.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/projects" className="text-accent hover:underline">
            View projects →
          </Link>
          <Link href="/contact" className="text-accent hover:underline">
            Get in touch →
          </Link>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-baseline justify-between">
          <h2 className="text-xl font-semibold tracking-tight">
            Featured work
          </h2>
          <Link href="/projects" className="text-sm text-muted hover:text-fg">
            All projects
          </Link>
        </div>
        <div className="grid gap-4">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
