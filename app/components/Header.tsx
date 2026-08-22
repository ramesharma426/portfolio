"use client";

import { useEffect, useState } from "react";
import { identity, nav } from "../data/content";
import { ArrowUpRight, Close, Menu } from "./Icons";

export function Header() {
  const [lifted, setLifted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setLifted(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`hdr${lifted ? " is-lifted" : ""}`}>
        <div className="hdr__in u-shell u-pane">
          <a href="#top" className="hdr__name">
            <span>{identity.first}</span>
            <span>{identity.last}</span>
          </a>

          <nav className="hdr__nav" aria-label="Sections">
            {nav.map((n) => (
              <a key={n.href} href={n.href}>
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hdr__right">
            <span className="u-meta hdr__place">
              {identity.place} · {identity.tzLabel}
            </span>
            <a className="u-cap hdr__cta" href={`mailto:${identity.email}`}>
              Get in touch
              <ArrowUpRight width={13} height={13} />
            </a>
            <button
              type="button"
              className="u-circ hdr__burger"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <Menu width={18} height={18} />
            </button>
          </div>
        </div>
      </header>

      <div className={`sheet${open ? " is-open" : ""}`} role="dialog" aria-modal="true" aria-label="Menu" hidden={!open}>
        <div className="sheet__top u-shell">
          <span className="u-meta">Index</span>
          <button type="button" className="u-circ" onClick={() => setOpen(false)} aria-label="Close menu">
            <Close width={18} height={18} />
          </button>
        </div>
        <nav className="sheet__nav u-shell" aria-label="Sections">
          {nav.map((n, i) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} style={{ ["--i" as string]: i }}>
              <span className="u-display u-d-m">{n.label}</span>
              <ArrowUpRight width={20} height={20} />
            </a>
          ))}
        </nav>
        <div className="sheet__foot u-shell">
          <a className="u-cap" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
        </div>
      </div>
    </>
  );
}
