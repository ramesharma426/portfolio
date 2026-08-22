import { identity, socials } from "../data/content";
import { socialIcons } from "./Icons";
import { Arcs } from "./Arcs";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="hero">
      <Arcs className="hero__arcs" />

      <div className="u-shell u-pane hero__in">
        <div className="hero__grid">
          <h1 className="hero__h1">
            <Reveal as="span" variant="clip" className="hero__line hero__line--a">
              {identity.role[0]}
            </Reveal>
            <Reveal as="span" variant="clip" delay={140} className="hero__line hero__line--b">
              {identity.role[1]}
            </Reveal>
          </h1>

          <Reveal delay={220} className="hero__lede">
            <p className="u-lede" dangerouslySetInnerHTML={{ __html: identity.goal }} />
          </Reveal>
        </div>

        <Reveal delay={380} className="hero__socials">
          <ul>
            {socials.map((s) => {
              const Ico = socialIcons[s.icon];
              return (
                <li key={s.label}>
                  <a className="u-cap" href={s.href} target="_blank" rel="noreferrer noopener">
                    <Ico width={14} height={14} />
                    <span>{s.label}</span>
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
