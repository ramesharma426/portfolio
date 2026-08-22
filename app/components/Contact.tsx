"use client";

import { useState } from "react";
import { identity, socials } from "../data/content";
import { ArrowUpRight, Check, Copy, socialIcons } from "./Icons";
import { Arcs } from "./Arcs";
import { Reveal } from "./Reveal";

type CopyState = "idle" | "done" | "failed";

export function Contact() {
  const [state, setState] = useState<CopyState>("idle");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(identity.email);
      setState("done");
      window.setTimeout(() => setState("idle"), 2400);
    } catch {
      setState("failed");
      window.setTimeout(() => setState("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="sec contact">
      <Arcs className="contact__arcs" seed={1} />

      <div className="u-shell u-pane contact__in">
        <Reveal as="h2" variant="clip" className="u-display u-d-l contact__title">
          Say hello
        </Reveal>

        <Reveal delay={100} className="contact__mail">
          <a className="contact__addr u-display" href={`mailto:${identity.email}`}>
            {identity.email}
          </a>
          <button type="button" className="u-circ contact__copy" onClick={copy} aria-label="Copy email address">
            {state === "done" ? <Check width={18} height={18} /> : <Copy width={17} height={17} />}
          </button>
          <span className="u-meta contact__state" role="status" aria-live="polite">
            {state === "done" ? "copied" : state === "failed" ? "copy blocked — select it instead" : ""}
          </span>
        </Reveal>

        <Reveal delay={180} className="contact__grid">
          <ul className="contact__socials">
            {socials.map((s) => {
              const Ico = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer noopener" className="contact__soc u-invert">
                    <Ico width={15} height={15} />
                    <span className="contact__socName">{s.label}</span>
                    <span className="u-data contact__socHandle">{s.handle}</span>
                    <ArrowUpRight width={15} height={15} />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
