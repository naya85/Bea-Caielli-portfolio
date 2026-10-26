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

  // After one full round, the typing settles back on "Bea" and stops.
  const [lapped, setLapped] = useState(false);
  const done = reducedMotion || (lapped && roleIndex === 0 && text === ROLES[0]);

  useEffect(() => {
    if (done) return;

    const role = ROLES[roleIndex];
    const complete = text === role;
    const empty = text.length === 0;
    const delay = complete && !deleting ? 1350 : deleting ? 42 : 82;

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
  }, [deleting, done, pauseTick, roleIndex, text]);

  return <span className={`hero-role-text${done ? " hero-role-text--done" : ""}`}>{text}</span>;
}
