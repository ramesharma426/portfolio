"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

function useInView<T extends HTMLElement>(once = true) {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            if (once) io.disconnect();
          } else if (!once) {
            setSeen(false);
          }
        }
      },
      { rootMargin: "-8% 0px -12% 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return { ref, seen };
}

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  variant?: "rise" | "clip";
  className?: string;
};

/** One authored entrance: content is visible by default and lifts into place. */
export function Reveal({ children, as, delay = 0, variant = "rise", className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const { ref, seen } = useInView<HTMLElement>();
  const base = variant === "clip" ? "u-clip" : "u-rise";
  return (
    <Tag
      ref={ref}
      className={`${base}${seen ? " is-in" : ""} ${className}`.trim()}
      style={{ ["--d" as string]: `${delay}ms` }}
    >
      {variant === "clip" ? <span>{children}</span> : children}
    </Tag>
  );
}

export { useInView };
