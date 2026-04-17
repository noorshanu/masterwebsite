"use client";

import { useEffect, useState } from "react";

const CURSOR_SIZE = 56;

/**
 * Hummingbird GIF follows the pointer (mouse only — touch keeps the default cursor).
 */
export default function CustomCursor() {
  const [active, setActive] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [onPage, setOnPage] = useState(true);

  useEffect(() => {
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mqFine.matches || mqReduce.matches) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");
    setActive(true);

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setPos({ x: e.clientX, y: e.clientY });
      });
    };

    const onLeave = () => setOnPage(false);
    const onEnter = () => setOnPage(true);

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
    };
  }, []);

  if (!active) return null;

  return (
    <img
      src="/hummingbird.gif"
      alt=""
      width={CURSOR_SIZE}
      height={CURSOR_SIZE}
      decoding="async"
      draggable={false}
      className="pointer-events-none fixed z-[9999] select-none object-contain"
      style={{
        width: CURSOR_SIZE,
        height: CURSOR_SIZE,
        left: pos.x,
        top: pos.y,
        transform: "translate(-15%, -15%)",
        opacity: onPage ? 1 : 0,
        transition: "opacity 0.15s ease-out",
      }}
    />
  );
}
