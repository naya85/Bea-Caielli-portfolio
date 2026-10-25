"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { scrollToSection } from "@/lib/smoothScroll";

/** Section links on the homepage ("#about", "/#work") glide to their heading instead of jumping. */
export function SmoothAnchorScroll() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== "/") return;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const href = (e.target as Element | null)?.closest?.("a")?.getAttribute("href");
      const id = href?.match(/^\/?#(.+)$/)?.[1];
      if (!id || !scrollToSection(id)) return;
      e.preventDefault();
      window.history.pushState(null, "", `#${id}`);
    };

    // Arriving from another page (e.g. "Back to selected work"): settle on the same spot a click would.
    const arrivingAt = window.location.hash.slice(1);
    const settle = arrivingAt ? window.setTimeout(() => scrollToSection(arrivingAt, { instant: true }), 60) : 0;

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      window.clearTimeout(settle);
    };
  }, [pathname]);

  return null;
}
