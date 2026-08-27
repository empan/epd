import { about, marqueeItems, nav, site } from "@/data/site";
import { projects } from "@/data/projects";
import TypingTagline from "./TypingTagline";

const mono = "var(--font-plex-mono), monospace";
const PAD_X = "clamp(20px, 5vw, 80px)";

const marqueeText = `${marqueeItems.join(" ✦ ")} ✦ `.repeat(2);

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <main
        style={{
          width: "100%",
          background: "#d2e9f4",
          overflow: "hidden",
          color: "var(--color-ink)",
        }}
      >
        <div className="header-noise">
          {/* Header bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 12,
              flexWrap: "wrap",
              padding: `20px ${PAD_X}`,
              color: "#054846",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.02em",
            }}
          >
            <span>{site.headerLabel}</span>
            <nav style={{ display: "flex", gap: 8 }}>
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="desk-navlink"
                  style={{ padding: "7px 14px", borderRadius: 100 }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hero */}
          <div style={{ padding: `34px ${PAD_X} 46px` }}>
            <TypingTagline
              style={{
                margin: 0,
                fontSize: "clamp(2.25rem, 6vw, 68px)",
                lineHeight: 0.98,
                fontWeight: 800,
                letterSpacing: "-0.035em",
                maxWidth: 700,
                textWrap: "pretty",
                color: "#054846",
              }}
            />
          </div>
        </div>

        {/* Marquee */}
        <div style={{ padding: "14px 0", background: "var(--color-yellow)", overflow: "hidden" }}>
          <div
            className="desk-marquee"
            style={{
              display: "flex",
              width: "max-content",
              fontSize: 15,
              fontWeight: 600,
              letterSpacing: "0.02em",
              color: "#23301c",
              whiteSpace: "nowrap",
            }}
          >
            <span style={{ paddingRight: 40 }}>{marqueeText}</span>
            <span style={{ paddingRight: 40 }} aria-hidden>
              {marqueeText}
            </span>
          </div>
        </div>

        {/* Cream block: work + about */}
        <div style={{ background: "var(--color-cream)" }}>
          <section id="work" style={{ padding: `44px ${PAD_X} 20px` }}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 8,
                flexWrap: "wrap",
                marginBottom: 26,
              }}
            >
              <h2 style={{ margin: 0, fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Recent work
              </h2>
 
            </div>

            <div className="desk-work-grid">
              {projects.map((p) => (
                <a
                  key={p.title}
                  href={p.href ?? "#work"}
                  className="desk-card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    background: "#ffffff",
                    border: "2.5px solid var(--color-ink)",
                    borderRadius: 10,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: 168,
                      backgroundColor: p.tint,
                      backgroundImage:
                        "repeating-linear-gradient(135deg, rgba(15,26,23,0.10) 0 7px, rgba(0,0,0,0) 7px 15px)",
                      display: "flex",
                      alignItems: "flex-end",
                      padding: 12,
                      borderBottom: "2.5px solid var(--color-ink)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: mono,
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        background: "var(--color-ink)",
                        color: "var(--color-cream)",
                        padding: "4px 7px",
                        borderRadius: 3,
                      }}
                    >
                      {p.slot}
                    </span>
                  </div>
                  <div
                    style={{
                      padding: "16px 18px 20px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 7,
                    }}
                  >
                    <div style={{ fontSize: 21, fontWeight: 700, letterSpacing: "-0.015em" }}>
                      {p.title}
                    </div>
                    <div
                      style={{
                        fontSize: 14.5,
                        lineHeight: 1.5,
                        color: "#4d4a43",
                        textWrap: "pretty",
                      }}
                    >
                      {p.blurb}
                    </div>
                    <div
                      style={{
                        fontFamily: mono,
                        fontSize: 10.5,
                        color: "#857c6d",
                        letterSpacing: "0.08em",
                        marginTop: 3,
                      }}
                    >
                      {p.meta}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <section
            id="about"
            className="desk-about-grid"
            style={{ padding: `40px ${PAD_X} 46px` }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <h2 style={{ margin: 0, fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>
                {about.heading}
              </h2>
              <p
                style={{
                  margin: 0,
                  fontSize: 16.5,
                  lineHeight: 1.6,
                  color: "#3d3a34",
                  maxWidth: 420,
                  textWrap: "pretty",
                }}
              >
                {about.body}
              </p>
            </div>

            <div id="contact" style={{ display: "flex", flexDirection: "column", gap: 9 }}>
              <a
                href={`mailto:${site.email}`}
                className="desk-btn desk-btn-solid"
                style={{
                  background: "var(--color-ink)",
                  color: "var(--color-cream)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "13px 18px",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Email me</span>
                <span aria-hidden>→</span>
              </a>
              <a
                href={site.resume}
                className="desk-btn desk-btn-yellow"
                style={{
                  border: "2px solid var(--color-ink)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "13px 18px",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Résumé</span>
                <span aria-hidden>↓</span>
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="desk-btn desk-btn-orange"
                style={{
                  border: "2px solid var(--color-ink)",
                  fontSize: 15,
                  fontWeight: 600,
                  padding: "13px 18px",
                  borderRadius: 8,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>LinkedIn</span>
                <span aria-hidden>↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
