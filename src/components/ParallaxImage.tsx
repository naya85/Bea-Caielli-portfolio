"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";
import Image from "next/image";

/** Max vertical drift in px; small enough to stay clear of neighbouring rows. */
const MAX_DRIFT = 40;

/**
 * Drifts an element gently around its own position as the page scrolls, centred when its box is
 * mid-viewport. Measures the (unmoving) parent box so the drift doesn't feed back on itself.
 */
function useParallax(ref: RefObject<HTMLElement | SVGElement | null>) {
  useEffect(() => {
    const el = ref.current;
    const box = el?.parentElement;
    if (!el || !box) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // On phones the image sits directly above the next case study's text, so any drift overlaps it.
    const smallScreen = window.matchMedia("(max-width: 760px)");
    let frame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduceMotion.matches || smallScreen.matches) {
          el.style.translate = "0 0";
          return;
        }

        const bounds = box.getBoundingClientRect();
        const fromCentre = bounds.top + bounds.height / 2 - window.innerHeight / 2;
        const offset = Math.max(-MAX_DRIFT, Math.min(MAX_DRIFT, fromCentre * 0.1));
        el.style.translate = `0 ${offset}px`;
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    reduceMotion.addEventListener("change", updatePosition);
    smallScreen.addEventListener("change", updatePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      reduceMotion.removeEventListener("change", updatePosition);
      smallScreen.removeEventListener("change", updatePosition);
    };
  }, [ref]);
}

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
};

export function ParallaxImage({ src, alt, sizes }: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);
  useParallax(imageRef);
  return <Image ref={imageRef} src={src} alt={alt} fill unoptimized sizes={sizes} />;
}

/** Same drift for media that isn't an image file, such as coded illustrations. */
export function ParallaxLayer({ children }: { children: ReactNode }) {
  const layerRef = useRef<HTMLDivElement>(null);
  useParallax(layerRef);
  return <div ref={layerRef} className="parallax-layer">{children}</div>;
}
