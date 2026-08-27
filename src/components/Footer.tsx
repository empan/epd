import { socials } from "@/data/site";

export default function Footer() {
  const year = 2026;
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Emily Pan</p>
        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
