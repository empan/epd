"use client";

import { useEffect, useRef, useState } from "react";

// A bold, graphic pointer that matches "The Desk": a chunky hard-outlined
// arrow with an offset ink shadow that swells and turns yellow over
// anything clickable.
const INTERACTIVE =
  'a, button, input, textarea, select, summary, [role="button"], [data-cursor]';

export default function CustomCursor() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (fine.matches && !reduced.matches) setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-custom-cursor");

    const arrow = arrowRef.current!;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf = 0;
    let queued = false;
    let visible = false;

    const render = () => {
      queued = false;
      arrow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    const schedule = () => {
      if (!queued) {
        queued = true;
        raf = requestAnimationFrame(render);
      }
    };

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      schedule();
      if (!visible) {
        visible = true;
        arrow.classList.add("is-visible");
      }
    };
    const onOver = (e: MouseEvent) => {
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      arrow.classList.toggle("is-hover", Boolean(hit));
    };
    const onDown = () => arrow.classList.add("is-down");
    const onUp = () => arrow.classList.remove("is-down");
    const onLeave = () => {
      visible = false;
      arrow.classList.remove("is-visible");
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    // Outer node only translates (set via JS). Inner node owns scale/rotate
    // so the two transforms never multiply into each other.
    <div ref={arrowRef} className="cursor-arrow" aria-hidden>
      <span className="cursor-arrow-shape">
        <svg viewBox="0 0 24 24" width="30" height="30">
          <path
            d="M4 2.5 L4 19.5 L8.8 15 L11.8 21.6 L15.1 20.1 L12.1 13.7 L18.8 13.7 Z"
            fill="var(--fill)"
            stroke="var(--color-ink)"
            strokeWidth="2.4"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
