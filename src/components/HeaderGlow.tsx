"use client";

import { useEffect, useRef, useState } from "react";

const GLOW_GRADIENT =
  "radial-gradient(circle, rgba(255,215,107,0.32) 0%, rgba(255,143,107,0.16) 42%, rgba(255,143,107,0) 70%)";

/**
 * Interactive header backdrop, ported from the Claude Design `DCLogic`
 * component. A blurred blob layer springs toward the cursor while the pointer
 * is over the header, then fades out. Decorative — disabled under
 * `prefers-reduced-motion`.
 */
export default function HeaderGlow({
  children,
}: {
  children: React.ReactNode;
}) {
  const glowRef = useRef<HTMLDivElement>(null);
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
      const el = glowRef.current;
      if (!el || !target.current) return;
      if (!pos.current) pos.current = { ...target.current };

      const k = 0.022;
      const damping = 0.86;
      vel.current.x =
        (vel.current.x + (target.current.x - pos.current.x) * k) * damping;
      vel.current.y =
        (vel.current.y + (target.current.y - pos.current.y) * k) * damping;
      pos.current.x += vel.current.x;
      pos.current.y += vel.current.y;

      el.style.transform = `translate3d(${pos.current.x - 190}px, ${
        pos.current.y - 190
      }px, 0)`;
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    target.current = { x: e.clientX - r.left, y: e.clientY - r.top };
    setOpacity(0.6);
  };

  const onMouseLeave = () => setOpacity(0);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        ref={glowRef}
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 380,
          height: 380,
          pointerEvents: "none",
          willChange: "transform",
          transition: "opacity 380ms ease",
          opacity,
        }}
      >
        <div
          className="desk-blob"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "62% 38% 44% 56% / 52% 46% 54% 48%",
            animation: "blobwob 14s ease-in-out infinite",
            filter: "blur(14px)",
            backgroundImage: GLOW_GRADIENT,
          }}
        />
        <div
          className="desk-blob"
          style={{
            position: "absolute",
            inset: "6%",
            borderRadius: "44% 56% 60% 40% / 58% 42% 58% 42%",
            animation: "blobwob2 9s ease-in-out infinite",
            filter: "blur(18px)",
            opacity: 0.75,
            backgroundImage: GLOW_GRADIENT,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            mixBlendMode: "overlay",
            opacity: 0.55,
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22220%22 height=%22220%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22220%22 height=%22220%22 filter=%22url(%23n)%22/%3E%3C/svg%3E')",
            backgroundSize: "220px 220px",
            maskImage:
              "radial-gradient(circle, #000 0%, rgba(0,0,0,0.55) 40%, transparent 66%)",
            WebkitMaskImage:
              "radial-gradient(circle, #000 0%, rgba(0,0,0,0.55) 40%, transparent 66%)",
          }}
        />
      </div>
      <div style={{ position: "relative" }}>{children}</div>
    </div>
  );
}
