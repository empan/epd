import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-black/10 p-5 transition-colors hover:border-black/25 dark:border-white/10 dark:hover:border-white/25">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-medium">{project.title}</h3>
        <span className="text-sm text-muted">{project.year}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{project.summary}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 px-2 py-0.5 text-xs text-muted dark:border-white/10"
          >
            {tag}
          </span>
        ))}
      </div>
      {(project.href || project.repo) && (
        <div className="mt-4 flex gap-4 text-sm">
          {project.href && (
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Live →
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              Code →
            </a>
          )}
        </div>
      )}
    </article>
  );
}
