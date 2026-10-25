"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

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
    let frame = 0;

    const updatePosition = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduceMotion.matches) {
          image.style.translate = "0 0";
          return;
        }

        const bounds = image.getBoundingClientRect();
        const offset = Math.max(-60, Math.min(150, bounds.top * 0.24 + 14));
        image.style.translate = `0 ${offset}px`;
      });
    };

    updatePosition();
    window.addEventListener("scroll", updatePosition, { passive: true });
    window.addEventListener("resize", updatePosition);
    reduceMotion.addEventListener("change", updatePosition);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updatePosition);
      window.removeEventListener("resize", updatePosition);
      reduceMotion.removeEventListener("change", updatePosition);
    };
  }, []);

  return <Image ref={imageRef} src={src} alt={alt} fill unoptimized sizes={sizes} />;
}
