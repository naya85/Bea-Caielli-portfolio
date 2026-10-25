"use client";

import { useEffect, useRef } from "react";

/**
 * A muted, looping click-through recording framed like a phone screen.
 * It only loads and plays while on screen; with reduced motion it stays paused and shows controls.
 */
export function PhoneVideo({ src, label, caption }: { src: string; label: string; caption?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      video.controls = true;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.35 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="phone-video">
      <video ref={ref} src={src} aria-label={label} muted loop playsInline preload="metadata" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
