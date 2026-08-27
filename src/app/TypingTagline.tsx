"use client";

import { useEffect, useState } from "react";

const GREETING = "Hi! I'm Emily.";
const STEM = "I lead design teams";
const PHRASES = ["through ambiguity.", "from zero to one.", "big and small."];

// Sizer uses the longest phrase so the <h1> reserves its full height and the
// page never reflows as the tail types and deletes.
const LONGEST = PHRASES.reduce((a, b) => (b.length > a.length ? b : a));

const TYPE_MS = 55;
const DELETE_MS = 28;
const HOLD_MS = 1700;
const BETWEEN_MS = 380;

export default function TypingTagline({ style }: { style?: React.CSSProperties }) {
  const [tail, setTail] = useState(PHRASES[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phrase = 0;
    let dir: "del" | "type" = "del";
    let i = PHRASES[0].length;
    let t: ReturnType<typeof setTimeout>;

    const tick = () => {
      if (dir === "del") {
        i -= 1;
        setTail(PHRASES[phrase].slice(0, i));
        if (i <= 0) {
          dir = "type";
          phrase = (phrase + 1) % PHRASES.length;
          t = setTimeout(tick, BETWEEN_MS);
          return;
        }
        t = setTimeout(tick, DELETE_MS);
      } else {
        i += 1;
        setTail(PHRASES[phrase].slice(0, i));
        if (i >= PHRASES[phrase].length) {
          dir = "del";
          t = setTimeout(tick, HOLD_MS);
          return;
        }
        t = setTimeout(tick, TYPE_MS);
      }
    };

    t = setTimeout(tick, HOLD_MS);
    return () => clearTimeout(t);
  }, []);

  return (
    <h1
      style={{ position: "relative", ...style }}
      aria-label={`${GREETING} ${STEM} ${PHRASES[0]}`}
    >
      {/* invisible sizer — each line is reserved, so the box height never
          changes as the tail types and deletes. */}
      <span aria-hidden="true" style={{ visibility: "hidden", display: "block" }}>
        <span style={{ display: "block" }}>{GREETING}</span>
        <span style={{ display: "block" }}>{STEM}</span>
        <span style={{ display: "block" }}>{LONGEST}</span>
      </span>
      {/* live text, overlaid on the sizer */}
      <span
        aria-hidden="true"
        style={{ position: "absolute", left: 0, top: 0, right: 0 }}
      >
        <span style={{ display: "block" }}>{GREETING}</span>
        <span style={{ display: "block" }}>{STEM}</span>
        <span
          style={{ display: "block", minHeight: "1em", color: "var(--color-teal)" }}
        >
          {tail}
        </span>
      </span>
    </h1>
  );
}
