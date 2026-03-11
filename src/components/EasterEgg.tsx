"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function EasterEgg() {
  const [active, setActive] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [canExit, setCanExit] = useState(false);
  const [titleVisible, setTitleVisible] = useState(false);
  const [subVisible, setSubVisible] = useState(false);
  const [exitVisible, setExitVisible] = useState(false);
  const [closerVisible, setCloserVisible] = useState(false);
  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const activeRef = useRef(false);
  const canExitRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  activeRef.current = active;
  canExitRef.current = canExit;

  const showSynth = useCallback(() => {
    if (activeRef.current) return;
    setActive(true);
    setCanExit(false);
    setTitleVisible(false);
    setSubVisible(false);
    setExitVisible(false);
    setCloserVisible(false);
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    timeoutsRef.current.push(setTimeout(() => setTitleVisible(true), 400));
    timeoutsRef.current.push(setTimeout(() => setSubVisible(true), 900));
    timeoutsRef.current.push(setTimeout(() => {
      setExitVisible(true);
      setCanExit(true);
    }, 1800));
    timeoutsRef.current.push(setTimeout(() => setCloserVisible(true), 2400));
  }, []);

  /* Open overlay when prompt in About is clicked */
  useEffect(() => {
    const onOpen = () => showSynth();
    window.addEventListener("easter-egg-open", onOpen);
    return () => window.removeEventListener("easter-egg-open", onOpen);
  }, [showSynth]);

  const hideSynth = useCallback(() => {
    if (!activeRef.current || !canExitRef.current) return;
    setCanExit(false);
    setFadeOut(true);
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];

    const id = setTimeout(() => {
      setActive(false);
      setFadeOut(false);
      setTitleVisible(false);
      setSubVisible(false);
      setExitVisible(false);
      setCloserVisible(false);
      window.dispatchEvent(new CustomEvent("easter-egg-exit"));
    }, 950);
    timeoutsRef.current.push(id);
  }, []);

  /* Key/touch: only close overlay when it's open and can exit */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (activeRef.current && canExitRef.current) {
        hideSynth();
        e.preventDefault();
        e.stopPropagation();
      }
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [hideSynth]);

  useEffect(() => {
    const onTouch = () => {
      if (activeRef.current && canExitRef.current) hideSynth();
    };
    document.addEventListener("touchstart", onTouch, true);
    return () => document.removeEventListener("touchstart", onTouch, true);
  }, [hideSynth]);

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  /* When overlay opens, focus it so keydown is received */
  useEffect(() => {
    if (active && overlayRef.current) {
      overlayRef.current.focus();
    }
  }, [active]);

  return (
    <div className="easter-egg-layer">
      {/* 80S EASTER EGG — overlay; prompt lives in About section */}
      <div
        ref={overlayRef}
        className={`synth-screen ${active ? "synth-screen-active" : ""} ${fadeOut ? "synth-screen-fade-out" : ""}`}
        style={active && !fadeOut ? { opacity: 1, pointerEvents: "auto" } : undefined}
        id="synthScreen"
        role="dialog"
        aria-modal="true"
        aria-label="80s easter egg"
        tabIndex={-1}
        onKeyDown={(e) => {
          if (canExitRef.current) {
            hideSynth();
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <img
          className="synth-gif"
          src="/80S_Voice_GIF.png"
          alt=""
          draggable={false}
        />
        <div
          className="synth-overlay"
          onClick={hideSynth}
          onKeyDown={(e) => e.key === "Enter" && hideSynth()}
          role="button"
          tabIndex={0}
          aria-label="Close overlay"
        >
          <h1 className={`synth-title ${titleVisible ? "synth-visible" : ""}`}>
            CONGRATULATIONS. YOU&apos;VE BEEN 80&apos;IFIED
          </h1>
          <p className={`synth-sub ${subVisible ? "synth-visible" : ""}`}>
            WELCOME TO THE GOOD DECADE
          </p>

          <p className={`synth-closer ${closerVisible ? "synth-visible" : ""}`}>
            Here&apos;s your soundtrack for today.
          </p>

          <div
            className="synth-spotify"
            onClick={(e) => e.stopPropagation()}
            aria-label="YouTube video"
          >
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/siwpn14IE7E?si=by2SlUBAAkFyykyT"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <p className={`synth-exit ${exitVisible ? "synth-visible" : ""}`}>
            ▮ PRESS ANY KEY TO RETURN TO THE FUTURE
          </p>
        </div>
      </div>
    </div>
  );
}
