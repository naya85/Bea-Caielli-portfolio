"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { unlockPortfolio } from "@/app/actions";
import { siteConfig } from "@/data/content";

type Phase = "closed" | "opening" | "open" | "closing" | "welcome" | "unlocked" | "through";

const CLOSE_MS = 600;
const WELCOME_MS = 650;
const UNLOCKED_MS = 1000;
const THROUGH_MS = 750;

/** Links that lead into the locked part of the site: in-page sections, case studies and the blog. */
const isLockedHref = (href: string) => /^(\/?#|\/work\/|\/blog)/.test(href);

const wait = (ms: number) => new Promise((resolve) => window.setTimeout(resolve, ms));

function waitForElement(id: string, timeoutMs = 2000): Promise<HTMLElement | null> {
  const start = performance.now();
  return new Promise((resolve) => {
    const check = () => {
      const el = document.getElementById(id);
      if (el || performance.now() - start > timeoutMs) resolve(el);
      else requestAnimationFrame(check);
    };
    check();
  });
}

/**
 * Keeps the hero public. Clicking into the rest of the site zooms the hero towards the click and
 * opens a full-screen password screen; the right password zooms through to where the visitor was heading.
 * Stays mounted after unlocking so the exit animation can finish while the new sections stream in.
 */
export function PasswordGate({ locked }: { locked: boolean }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [phase, setPhase] = useState<Phase>("closed");
  const [error, setError] = useState(false);
  const [pending, setPending] = useState(false);
  const target = useRef<string>("#work");
  const inputRef = useRef<HTMLInputElement>(null);

  const open = useCallback((x: number, y: number, href: string) => {
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero-shell")?.getBoundingClientRect();
    root.style.setProperty("--gate-x", `${x}px`);
    root.style.setProperty("--gate-y", `${y}px`);
    root.style.setProperty("--gate-hero-x", `${x - (hero?.left ?? 0)}px`);
    root.style.setProperty("--gate-hero-y", `${y - (hero?.top ?? 0)}px`);
    target.current = href;
    setError(false);
    setPhase("opening");
    requestAnimationFrame(() => requestAnimationFrame(() => setPhase("open")));
  }, []);

  const close = useCallback(() => {
    setPhase("closing");
    window.setTimeout(() => setPhase("closed"), CLOSE_MS);
  }, []);

  // Intercept clicks before Next's Link handler so locked links open the gate instead of navigating.
  useEffect(() => {
    if (!locked) return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      const href = link?.getAttribute("href");
      if (!link || !href || !isLockedHref(href)) return;
      e.preventDefault();
      e.stopPropagation();
      const rect = link.getBoundingClientRect();
      const fromKeyboard = e.detail === 0;
      open(fromKeyboard ? rect.left + rect.width / 2 : e.clientX, fromKeyboard ? rect.top + rect.height / 2 : e.clientY, href.replace(/^\//, ""));
    };
    window.addEventListener("click", onClick, true);
    return () => window.removeEventListener("click", onClick, true);
  }, [locked, open]);

  // Visitors redirected from a locked page (see middleware) get the gate straight away.
  useEffect(() => {
    const next = searchParams.get("next");
    if (!locked || !next || !isLockedHref(next)) return;
    open(window.innerWidth / 2, window.innerHeight / 2, next);
  }, [locked, searchParams, open]);

  useEffect(() => {
    const root = document.documentElement;
    if (phase === "closed") delete root.dataset.gate;
    else root.dataset.gate = phase;
    if (phase === "open") inputRef.current?.focus({ preventScroll: true });
    if (phase !== "open") return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, close]);

  useEffect(() => () => void delete document.documentElement.dataset.gate, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = new FormData(e.currentTarget).get("password");
    if (typeof password !== "string" || !password || pending) return;
    setPending(true);
    const { ok } = await unlockPortfolio(password);
    setPending(false);
    if (!ok) {
      setError(true);
      inputRef.current?.select();
      return;
    }
    const href = target.current;
    if (href.startsWith("#")) {
      // Celebrate briefly, zoom back out to the hero, then glide down to the section that was clicked.
      setPhase("welcome");
      const [section] = await Promise.all([waitForElement(href.slice(1)), wait(WELCOME_MS)]);
      setPhase("unlocked");
      await wait(UNLOCKED_MS);
      setPhase("closed");
      window.history.replaceState(null, "", `/${href}`);
      requestAnimationFrame(() => section?.scrollIntoView({ behavior: "smooth", block: "start" }));
    } else {
      setPhase("through");
      window.setTimeout(() => router.push(href), THROUGH_MS / 2);
    }
  }

  if (phase === "closed") return null;
  const welcomed = phase === "welcome" || phase === "unlocked";

  return (
    <div className="gate" data-phase={phase} role="dialog" aria-modal="true" aria-labelledby="gate-title">
      <button type="button" className="gate-close" onClick={close} aria-label="Back to the homepage">
        <span aria-hidden="true">×</span>
      </button>
      <div className="gate-panel">
        <h2 id="gate-title" className="ui-heading ui-heading--section">{welcomed ? "Welcome in." : "Come on in."}</h2>
        <p className="gate-intro">
          My case studies are password protected. Enter the password to explore my work, or{" "}
          <a href={`mailto:${siteConfig.email}?subject=Portfolio%20password`}>drop me a line</a> and I’ll send it over.
        </p>
        <form className="gate-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="gate-password" className="sr-only">Password</label>
          <input
            ref={inputRef}
            id="gate-password"
            name="password"
            type="password"
            autoComplete="current-password"
            placeholder="Password"
            aria-invalid={error}
            aria-describedby={error ? "gate-error" : undefined}
            onChange={() => error && setError(false)}
            required
          />
          <button type="submit" className="ui-button ui-button--large gate-submit" disabled={pending || welcomed}>
            {welcomed ? <span aria-label="Unlocked">✓</span> : pending ? "Checking…" : "Enter"}
          </button>
        </form>
        <p id="gate-error" className="gate-error" role="alert">
          {error ? "That’s not quite it. Try again, or ask me for the password." : ""}
        </p>
      </div>
    </div>
  );
}
