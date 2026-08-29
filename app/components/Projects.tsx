import { projects } from "../data/content";
import { ArrowUpRight } from "./Icons";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="sec projects">
      <div className="u-shell u-pane">
        <div className="projects__head">
          <Reveal as="h2" variant="clip" className="u-display u-d-l projects__title">
            Selected
          </Reveal>
          <Reveal as="p" delay={90} className="u-marker projects__count">
            Selected work · 2024—2026
          </Reveal>
        </div>

        <ol className="projects__list">
          {projects.map((p) => (
            <li key={p.name}>
              <Reveal delay={40} className="proj">
                <div className="proj__body">
                  <div className="proj__topline">
                    <span className="u-meta">{p.kind}</span>
                    <span className="u-meta">{p.year}</span>
                  </div>
                  <h3 className="u-display u-d-m proj__name">{p.name}</h3>
                  <p className="u-prose proj__sum">{p.summary}</p>

                  <ul className="proj__notes">
                    {p.detail.map((d) => (
                      <li key={d} className="u-prose">
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="proj__foot">
                    <p className="u-data proj__stack">
                      {p.stack.map((s, j) => (
                        <span key={s}>
                          {s}
                          {j < p.stack.length - 1 && <i aria-hidden> / </i>}
                        </span>
                      ))}
                    </p>
                    <a className="u-cap proj__link" href={p.repo} target="_blank" rel="noreferrer noopener">
                      Source
                      <ArrowUpRight width={13} height={13} />
                    </a>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
