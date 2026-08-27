"use client";

import { useEffect, useRef, useState } from "react";

const CELL = 34; // grid cell size in px
const REVEAL = 150; // radius of the reveal circle around the cursor

const GRID_LINE = "rgba(5,72,70,0.5)";
const GRID_IMAGE = `linear-gradient(${GRID_LINE} 1px, transparent 1px), linear-gradient(90deg, ${GRID_LINE} 1px, transparent 1px)`;
const REVEAL_MASK = `radial-gradient(${REVEAL}px circle at var(--gx) var(--gy), #000 0%, rgba(0,0,0,0.4) 55%, transparent 78%)`;

/**
 * Interactive header backdrop. A faint teal grid is revealed in a soft
 * circle that springs toward the cursor while the pointer is over the
 * header, then fades out. Decorative — disabled under
 * `prefers-reduced-motion`.
 */
export default function HeaderGlow({
  children,
}: {
  children: React.ReactNode;
}) {
  const gridRef = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);

  const pos = useRef<{ x: number; y: number } | null>(null);
  const vel = useRef({ x: 0, y: 0 });
  const target = useRef<{ x: number; y: number } | null>(null);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced.current) return;

    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const el = gridRef.current;
      if (!el || !target.current) return;
      if (!pos.current) pos.current = { ...target.current };

      const k = 0.05;
      const damping = 0.8;
      vel.current.x =
        (vel.current.x + (target.current.x - pos.current.x) * k) * damping;
      vel.current.y =
        (vel.current.y + (target.current.y - pos.current.y) * k) * damping;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      el.style.setProperty("--gx", `${pos.current.x}px`);
      el.style.setProperty("--gy", `${pos.current.y}px`);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    setOpacity(1);
  };

  const onMouseLeave = () => setOpacity(0);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={gridRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage: GRID_IMAGE,
          backgroundSize: `${CELL}px ${CELL}px`,
          maskImage: REVEAL_MASK,
          WebkitMaskImage: REVEAL_MASK,
          transition: "opacity 320ms ease",
          opacity,
        }}
      />
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
