"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  /** Root margin for when to trigger */
  rootMargin?: string;
  /** If true, add "revealed" so children with "reveal reveal-child reveal-delay-*" stagger in */
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -60px 0px",
  stagger = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setRevealed(true);
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={
        stagger
          ? `${className} ${revealed ? "revealed" : ""}`
          : `${className} ${revealed ? "reveal" : "opacity-0"}`
      }
    >
      {children}
    </div>
  );
}
