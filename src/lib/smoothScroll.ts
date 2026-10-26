/** Gap kept between the fixed navigation pill and the heading a section scrolls to. */
const HEADING_GAP = 36;

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2);

let cancelActive: (() => void) | null = null;

/** Scroll position the last nav jump headed for; FadeAtTop keeps headings near it fully in focus. */
let navLandingY: number | null = null;
export const getNavLandingY = () => navLandingY;

/** Where a section should stop: its first heading sits just below the fixed navigation pill. */
function targetTop(section: HTMLElement): number {
  const anchor = section.querySelector<HTMLElement>("h1, h2") ?? section;
  const navBottom = document.querySelector(".nav-pill")?.getBoundingClientRect().bottom ?? 0;
  const top = anchor.getBoundingClientRect().top + window.scrollY - navBottom - HEADING_GAP;
  return Math.max(0, Math.min(top, document.documentElement.scrollHeight - window.innerHeight));
}

/**
 * Glides to a section with an ease-in-out curve whose duration grows with the distance.
 * Any wheel, touch or key input hands control straight back to the visitor.
 */
export function scrollToSection(id: string, { instant = false } = {}): boolean {
  const section = document.getElementById(id);
  if (!section) return false;

  cancelActive?.();
  const start = window.scrollY;
  const end = targetTop(section);
  navLandingY = end;
  const distance = end - start;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (instant || reduceMotion || Math.abs(distance) < 2) {
    window.scrollTo({ top: end, behavior: "instant" });
    return true;
  }

  const duration = Math.min(1100, 420 + Math.abs(distance) * 0.18);
  let frame = 0;
  let startTime: number | null = null;

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("wheel", stop);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("keydown", stop);
    cancelActive = null;
  };

  const step = (now: number) => {
    startTime ??= now;
    const t = Math.min(1, (now - startTime) / duration);
    window.scrollTo({ top: start + distance * easeInOutCubic(t), behavior: "instant" });
    if (t < 1) frame = requestAnimationFrame(step);
    else stop();
  };

  window.addEventListener("wheel", stop, { passive: true });
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("keydown", stop);
  cancelActive = stop;
  frame = requestAnimationFrame(step);
  return true;
}
