"use client";

import { useEffect } from "react";

export default function PointerField() {
  useEffect(() => {
    const root = document.documentElement;

    const handleMove = (event) => {
      root.style.setProperty("--pointer-x", `${event.clientX}px`);
      root.style.setProperty("--pointer-y", `${event.clientY}px`);
      root.style.setProperty("--pointer-active", "1");
    };

    const handleLeave = () => {
      root.style.setProperty("--pointer-active", "0");
    };

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerleave", handleLeave);

    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerleave", handleLeave);
    };
  }, []);

  return null;
}
