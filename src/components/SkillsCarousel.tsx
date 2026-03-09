"use client";

import { useState, useCallback, useEffect } from "react";
import { topSkillsSlides } from "@/data/content";

interface SkillsCarouselProps {
  variant?: "light" | "dark";
}

export function SkillsCarousel({ variant = "light" }: SkillsCarouselProps) {
  const [index, setIndex] = useState(0);
  const total = topSkillsSlides.length;
  const isDark = variant === "dark";

  const goTo = useCallback(
    (i: number) => setIndex((Math.abs(i) + total) % total),
    [total]
  );

  useEffect(() => {
    const id = setInterval(() => goTo(index + 1), 6000);
    return () => clearInterval(id);
  }, [index, goTo]);

  const titleClass = isDark
    ? "text-2xl font-semibold tracking-tight text-white sm:text-3xl"
    : "text-2xl font-semibold tracking-tight text-stone-900 sm:text-3xl";
  const descClass = isDark
    ? "mt-3 text-base leading-relaxed text-stone-300 sm:text-lg"
    : "mt-3 text-base leading-relaxed text-stone-600 sm:text-lg";

  return (
    <div className="flex flex-col items-center gap-12">
      <div className="relative w-full overflow-hidden min-h-[200px] sm:min-h-[220px]">
        {topSkillsSlides.map((slide, i) => {
          const isActive = i === index;
          const offset = (i - index) * 100;
          return (
            <div
              key={slide.title}
              className="absolute inset-0 flex items-center justify-center transition-all duration-400 ease-out"
              style={{
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                zIndex: isActive ? 1 : 0,
                transform: `translateX(${offset}%)`,
              }}
            >
              <div className="mx-auto max-w-2xl px-4 text-center">
                <h3 className={titleClass}>{slide.title}</h3>
                <p className={descClass}>{slide.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-center gap-1">
        {topSkillsSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            className="rounded-full transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-stone-300 focus:ring-offset-2 focus:ring-offset-stone-900"
            aria-label={`Go to slide ${i + 1}`}
          >
            {i === index ? (
              <span
                className="block h-4 w-[60px] rounded-full"
                style={{
                  background:
                    "linear-gradient(90deg, #f7bb97 0%, #dd5e89 63.942%, #d60692 100%)",
                }}
              />
            ) : (
              <span
                className={`block h-4 w-4 rounded-full ${isDark ? "bg-stone-600" : "bg-stone-200"}`}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
