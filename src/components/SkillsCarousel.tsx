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

      <div className="flex items-center justify-center gap-2">
        {topSkillsSlides.map((_, i) => {
          const isActive = i === index;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className="group relative flex h-6 items-center justify-center focus:outline-none"
              aria-label={`Go to slide ${i + 1}`}
            >
              <span
                className="block h-[5px] rounded-full"
                style={{
                  width: isActive ? "32px" : "12px",
                  background: isActive
                    ? "linear-gradient(90deg, #f7bb97 0%, #dd5e89 63.942%, #d60692 100%)"
                    : isDark
                      ? "#57534e"
                      : "#d6d3d1",
                  opacity: isActive ? 1 : 0.6,
                  transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
