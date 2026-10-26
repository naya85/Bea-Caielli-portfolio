"use client";

import { useEffect, useState } from "react";

const ROLES = [
  "Bea",
  "a product strategist",
  "a designer",
  "a curious mind",
  "a traveller",
  "a nerd",
];

/** How long "Bea" stays on screen at the end of each round. */
const CYCLE_PAUSE_MS = 3000;

export function RotatingRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState(ROLES[0]);
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  // Bumped to re-check later while the password gate is animating, so the hero isn't repainted mid-zoom.
  const [pauseTick, setPauseTick] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => {
      setReducedMotion(media.matches);
      if (media.matches) {
        setRoleIndex(0);
        setText(ROLES[0]);
        setDeleting(false);
      }
    };

    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  // After each full round the typing rests on "Bea" for a longer pause before starting over.
  const [lapped, setLapped] = useState(false);

  useEffect(() => {
    if (reducedMotion) return;

    const role = ROLES[roleIndex];
    const complete = text === role;
    const empty = text.length === 0;
    const hold = lapped && roleIndex === 0 ? CYCLE_PAUSE_MS : 1350;
    const delay = complete && !deleting ? hold : deleting ? 42 : 82;

    const timer = window.setTimeout(() => {
      if (document.documentElement.dataset.gate) {
        setPauseTick((tick) => tick + 1);
        return;
      }
      if (!deleting) {
        if (complete) setDeleting(true);
        else setText(role.slice(0, text.length + 1));
      } else if (empty) {
        setDeleting(false);
        if (roleIndex === ROLES.length - 1) setLapped(true);
        setRoleIndex((index) => (index + 1) % ROLES.length);
      } else {
        setText(text.slice(0, -1));
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, lapped, pauseTick, reducedMotion, roleIndex, text]);

  return <span className="hero-role-text">{text}</span>;
}
