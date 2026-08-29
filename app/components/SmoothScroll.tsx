"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Inertia-smooths wheel/touch scroll and owns in-page anchor navigation, so
 * hash jumps land through the same easing instead of a native instant cut.
 * `respectReducedMotion` (Lenis default) collapses both to 1:1/instant.
 */
export function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({ anchors: true, autoRaf: true });
    return () => lenis.destroy();
  }, []);

  return null;
}
