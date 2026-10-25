"use client";

import { useEffect, useState } from "react";

/** Cycles once through the roles and settles on the last one, so the headline always reads as whole words. */
const ROLES = [
  "a product designer",
  "a curious mind",
  "a traveller",
  "a nerd",
  "a cat mama",
  "a product strategist",
];

const HOLD_MS = 1700;

export function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setRoleIndex(ROLES.length - 1);
      return;
    }
    if (roleIndex >= ROLES.length - 1) return;

    const timer = window.setTimeout(() => setRoleIndex((index) => index + 1), HOLD_MS);
    return () => window.clearTimeout(timer);
  }, [roleIndex]);

  return (
    <span key={roleIndex} className="hero-role-text">
      {ROLES[roleIndex]}
    </span>
  );
}
