import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        padding: 24,
        textAlign: "center",
        color: "var(--color-ink)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: 40, fontWeight: 800, letterSpacing: "-0.03em" }}>
        Page not found
      </h1>
      <p style={{ margin: 0, color: "#57534a" }}>That page doesn&apos;t exist.</p>
      <Link
        href="/"
        style={{
          background: "var(--color-ink)",
          color: "var(--color-cream)",
          fontWeight: 600,
          padding: "12px 18px",
          borderRadius: 8,
        }}
      >
        Back to the desk →
      </Link>
    </div>
  );
}
