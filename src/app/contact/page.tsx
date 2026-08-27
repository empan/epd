import type { Metadata } from "next";
import { site, socials } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold tracking-tight">Contact</h1>
      <p className="text-muted">
        The best way to reach me is by email. I&apos;m open to interesting
        projects and conversations.
      </p>
      <a
        href={`mailto:${site.email}`}
        className="inline-block rounded-lg border border-black/15 px-4 py-2 text-sm transition-colors hover:border-black/40 dark:border-white/15 dark:hover:border-white/40"
      >
        {site.email}
      </a>
      <div className="flex gap-4 text-sm text-muted">
        {socials
          .filter((s) => s.label !== "Email")
          .map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-fg"
            >
              {s.label}
            </a>
          ))}
      </div>
    </div>
  );
}
