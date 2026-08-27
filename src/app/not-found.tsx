import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 text-center">
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted">That page doesn&apos;t exist.</p>
      <Link href="/" className="text-accent hover:underline">
        Back home →
      </Link>
    </div>
  );
}
