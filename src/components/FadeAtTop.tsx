"use client";

import { useRef, useEffect } from "react";
import type { ReactNode } from "react";

const MIN_OPACITY = 0.35; /* never fully hide when scrolling out */
/** The fade starts once the block's bottom edge is this close to the bottom of the fixed nav pill. */
const NAV_MARGIN = 40;

function lerp(t: number, a: number, b: number) {
  return a + (b - a) * t;
}

interface FadeAtTopProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wrapper that fades and scales content as it scrolls out of view (opacity 1 → 0.35, scale 1 → 0.95).
 * Matches the scroll-out behaviour used in Hero so sections feel consistent.
 */
export function FadeAtTop({ children, className = "" }: FadeAtTopProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      // Only fade once the block's last line slides under the nav pill, so a heading the nav
      // scrolled to (parked just below the pill) stays fully in focus.
      const navBottom = document.querySelector(".nav-pill")?.getBoundingClientRect().bottom ?? 96;
      const fadeStart = navBottom + NAV_MARGIN;
      const t = Math.min(1, Math.max(0, (fadeStart - rect.bottom) / fadeStart));
      const opacity = lerp(t, 1, MIN_OPACITY);
      const scale = lerp(t, 1, 0.95);
      el.style.opacity = String(opacity);
      el.style.transform = `scale(${scale})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ transition: "opacity 0.25s ease-out, transform 0.4s ease-out" }}
    >
      {children}
    </div>
  );
}
