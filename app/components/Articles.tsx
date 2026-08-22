"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { articles } from "../data/content";
import { articleArt } from "./Diagrams";
import { ArrowLeft, ArrowRight } from "./Icons";
import { Reveal } from "./Reveal";

export function Articles() {
  const scroller = useRef<HTMLUListElement | null>(null);
  const [active, setActive] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const sync = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft >= el.scrollWidth - el.clientWidth - 4);

    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let bestD = Infinity;
    Array.from(el.children).forEach((c, i) => {
      const n = c as HTMLElement;
      const cm = n.offsetLeft + n.offsetWidth / 2;
      const d = Math.abs(cm - mid);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    sync();
    el.addEventListener("scroll", sync, { passive: true });
    window.addEventListener("resize", sync);
    return () => {
      el.removeEventListener("scroll", sync);
      window.removeEventListener("resize", sync);
    };
  }, [sync]);

  const go = (dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const target = el.children[Math.min(articles.length - 1, Math.max(0, active + dir))] as HTMLElement | undefined;
    if (!target) return;
    el.scrollTo({
      left: target.offsetLeft - (el.clientWidth - target.offsetWidth) / 2,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <section id="articles" className="sec articles">
      <div className="u-shell u-pane">
        <div className="articles__head">
          <Reveal as="h2" variant="clip" className="u-display u-d-l articles__title">
            Writing
          </Reveal>
          <Reveal delay={80} className="articles__meta">
            <p className="u-marker">… /notes on things that broke …</p>
            <p className="u-meta articles__count">
              {String(active + 1).padStart(2, "0")} <i aria-hidden>/</i> {String(articles.length).padStart(2, "0")}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="articles__rail">
        <ul
          className="articles__track"
          ref={scroller}
          tabIndex={0}
          aria-label="Articles, scrollable"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault();
              go(1);
            }
            if (e.key === "ArrowLeft") {
              e.preventDefault();
              go(-1);
            }
          }}
        >
          {articles.map((a, i) => {
            const Art = articleArt[a.art];
            const on = i === active;
            return (
              <li key={a.id} className={`card${on ? " is-on" : ""}`} aria-current={on ? "true" : undefined}>
                <article className="card__in">
                  <div className="card__screen">
                    <Art />
                  </div>
                  <div className="card__text">
                    <div className="card__top">
                      <span className="u-meta">{a.date}</span>
                      <span className="u-meta">{a.read}</span>
                    </div>
                    <h3 className="u-display u-d-s card__t">{a.title}</h3>
                    <p className="card__b">{a.blurb}</p>
                    <div className="card__foot">
                      <a className="card__cta" href="#articles">
                        <span>Read more</span>
                      </a>
                      <a className="u-circ card__go" href="#articles" aria-label={`Read: ${a.title}`}>
                        <ArrowRight width={17} height={17} />
                      </a>
                    </div>
                    <p className="u-data card__tags">
                      {a.tags.map((t, j) => (
                        <span key={t}>
                          {t}
                          {j < a.tags.length - 1 && <i aria-hidden> / </i>}
                        </span>
                      ))}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          className="u-circ articles__nav articles__nav--prev"
          onClick={() => go(-1)}
          disabled={atStart}
          aria-label="Previous article"
        >
          <ArrowLeft width={19} height={19} />
        </button>
        <button
          type="button"
          className="u-circ articles__nav articles__nav--next"
          onClick={() => go(1)}
          disabled={atEnd}
          aria-label="Next article"
        >
          <ArrowRight width={19} height={19} />
        </button>
      </div>
    </section>
  );
}
