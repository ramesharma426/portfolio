import Image from "next/image";
import { identity, stack, socials } from "../data/content";
import { ArrowUpRight, Github } from "./Icons";
import { Reveal } from "./Reveal";

export function About() {
  const gh = socials.find((s) => s.icon === "github");

  return (
    <section id="about" className="sec about">
      <div className="u-shell u-pane">
        <div className="about__head">
          <Reveal as="p" className="u-marker about__marker">
            … /About me …
          </Reveal>
          <Reveal delay={80} className="about__intro">
            <p className="u-lede" dangerouslySetInnerHTML={{ __html: identity.intro }} />
          </Reveal>
        </div>

        <div className="about__body">
          <div className="about__stack">
            {stack.map((g, i) => (
              <Reveal key={g.title} delay={i * 90} className={`plateWrap plateWrap--${g.span}`}>
                <article className="u-plate stackCard">
                  <h3 className="u-d-s stackCard__t">{g.title}</h3>
                  <p className="u-data stackCard__l">
                    {g.items.map((it, j) => (
                      <span key={it}>
                        {it}
                        {j < g.items.length - 1 && <i aria-hidden> / </i>}
                      </span>
                    ))}
                  </p>
                </article>
              </Reveal>
            ))}

            <Reveal delay={360} className="about__aside">
              <p className="u-meta about__asideText" dangerouslySetInnerHTML={{ __html: identity.aside }} />
              {gh && (
                <a className="about__ghLink" href={gh.href} target="_blank" rel="noreferrer noopener">
                  <span className="u-circ about__ghMark" aria-hidden>
                    <Github width={17} height={17} />
                  </span>
                  <span className="u-circ about__ghGo">
                    <ArrowUpRight width={17} height={17} />
                  </span>
                  <span className="u-meta about__ghLabel">{gh.handle}</span>
                </a>
              )}
            </Reveal>
          </div>

          <Reveal delay={140} className="about__figure">
            <figure>
              <Image
                src="/portrait.webp"
                alt="Portrait of Ramesh Sharma"
                width={900}
                height={1260}
                sizes="(max-width: 900px) 90vw, 34vw"
                className="about__img"
                priority={false}
              />
              <figcaption className="u-meta about__cap">Ramesh Sharma</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
