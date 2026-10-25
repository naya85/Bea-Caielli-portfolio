"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/** Max vertical drift in px; small enough to stay clear of neighbouring rows. */
const MAX_DRIFT = 28;

type ParallaxImageProps = {
  src: string;
  alt: string;
  sizes: string;
};

export function ParallaxImage({ src, alt, sizes }: ParallaxImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    // On phones the image sits directly above the next case study's text, so any drift overlaps it.
    const smallScreen = window.matchMedia("(max-width: 760px)");
    let frame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduceMotion.matches || smallScreen.matches) {
          image.style.translate = "0 0";
          return;
        }

        // Drift gently around the image's own position, centred when it's mid-viewport.
        const bounds = image.getBoundingClientRect();
        const fromCentre = bounds.top + bounds.height / 2 - window.innerHeight / 2;
        const offset = Math.max(-MAX_DRIFT, Math.min(MAX_DRIFT, fromCentre * 0.08));
        image.style.translate = `0 ${offset}px`;
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
  }, []);

  return <Image ref={imageRef} src={src} alt={alt} fill unoptimized sizes={sizes} />;
}
