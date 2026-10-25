"use client";

import type { ReactNode } from "react";

interface ScrollFadeSectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  style?: React.CSSProperties;
  "aria-labelledby"?: string;
}

/**
 * Section wrapper (no section-level fade). Use FadeAtTop inside for per-element fade when each block reaches the top.
 */
export function ScrollFadeSection({
  children,
  id,
  className = "",
  style,
  "aria-labelledby": ariaLabelledBy,
}: ScrollFadeSectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={style}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
}
