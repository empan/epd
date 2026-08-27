import Link from "next/link";
import { nav, site } from "@/data/site";

export default function Header() {
  return (
    <header className="border-b border-black/10 dark:border-white/10">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
        <Link href="/" className="font-semibold tracking-tight">
          {site.name}
        </Link>
        <nav className="flex gap-5 text-sm text-muted">
          {nav
            .filter((item) => item.href !== "/")
            .map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-fg"
              >
                {item.label}
              </Link>
            ))}
        </nav>
      </div>
    </header>
  );
}
