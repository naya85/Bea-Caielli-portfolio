"use client";

import { type ReactNode, useRef, useEffect, useState } from "react";

const REVEAL_OPTIONS: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px 100px 0px",
  threshold: 0.1,
};

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setVisible(true);
      },
      REVEAL_OPTIONS
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  stagger?: boolean;
}

export function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  return <div className={className}>{children}</div>;
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function RevealItem({ children, className = "", delay = 0 }: RevealItemProps) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{
        transitionDelay: delay > 0 ? `${delay}s` : undefined,
      }}
    >
      {children}
    </div>
  );
}

export function LineExpand({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  const { ref, isVisible } = useReveal();

  return (
    <div
      ref={ref}
      className={`line-expand origin-left ${isVisible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children ?? <div className="h-px w-full bg-[var(--color-border)]" />}
    </div>
  );
}
