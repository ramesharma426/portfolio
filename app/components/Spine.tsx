"use client";

import { useEffect, useState } from "react";
import { stations, identity } from "../data/content";

/**
 * The spine: a fixed left instrument rail. Position in the document is the
 * information, so the ticks are wayfinding rather than decoration. Collapsed it
 * is 78px of hairline; hovered or focused it opens to its labels.
 */
export function Spine() {
  const [active, setActive] = useState(stations[0].href.slice(1));
  const [progress, setProgress] = useState(0);
  const [clock, setClock] = useState("--:--");

  useEffect(() => {
    const ids = stations.map((s) => s.href.slice(1));
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((e): e is HTMLElement => Boolean(e));

    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: [0, 0.2, 0.6] },
    );
    els.forEach((e) => io.observe(e));

    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? Math.min(1, Math.max(0, window.scrollY / h)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const tick = () =>
      setClock(
        new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: identity.tz,
        }).format(new Date()),
      );
    tick();
    const t = window.setInterval(tick, 20_000);

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.clearInterval(t);
    };
  }, []);

  return (
    <div className="spine" aria-hidden={false}>
      <a href="#top" className="spine__mark" aria-label="Back to top">
        <span>{identity.first[0]}</span>
        <span>{identity.last[0]}</span>
      </a>

      <nav className="spine__nav" aria-label="Page index">
        <ul>
          {stations.map((s) => {
            const id = s.href.slice(1);
            const on = id === active;
            return (
              <li key={s.href}>
                <a href={s.href} className={`spine__tick${on ? " is-on" : ""}`} aria-current={on ? "true" : undefined}>
                  <i aria-hidden />
                  <span>{s.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="spine__foot">
        <span className="spine__read">{clock}</span>
        <span className="spine__bar" aria-hidden>
          <span style={{ transform: `scaleY(${progress})` }} />
        </span>
        <span className="spine__read spine__read--pct">
          {String(Math.round(progress * 100)).padStart(3, "0")}
        </span>
      </div>
    </div>
  );
}
