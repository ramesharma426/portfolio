import { experienceTotal, roles } from "../data/content";
import { Reveal } from "./Reveal";

export function Work() {
  return (
    <section id="work" className="sec work">
      <div className="u-shell u-pane work__top">
        <Reveal as="p" className="u-marker">
          … /where the years went …
        </Reveal>
        <Reveal as="h2" variant="clip" delay={60} className="u-display u-d-l work__title">
          Work
        </Reveal>
      </div>

      <div className="u-shell u-pane work__sheet">
        <table className="work__table" role="table">
          <caption className="u-sr">Employment history</caption>
          <thead role="rowgroup">
            <tr role="row">
              <th scope="col" role="columnheader">Period</th>
              <th scope="col" role="columnheader">Company</th>
              <th scope="col" role="columnheader">Role</th>
              <th scope="col" role="columnheader">Stack</th>
            </tr>
          </thead>
          <tbody role="rowgroup">
            {roles.map((r) => (
              <tr key={r.company} className="u-invert work__row" role="row">
                <td role="cell" data-l="Period">
                  <span className="work__years">
                    {r.from} <i aria-hidden>—</i> {r.to}
                  </span>
                  <span className="work__dur">{r.duration}</span>
                </td>
                <td role="cell" data-l="Company">
                  <span className="work__co">{r.company}</span>
                </td>
                <td role="cell" data-l="Role">
                  <span className="work__role">{r.title}</span>
                </td>
                <td role="cell" data-l="Stack">
                  <span className="work__tech">{r.stack}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="u-shell u-pane work__sum">
        <p className="u-meta">Work experience</p>
        <p className="u-d-s u-display work__total">{experienceTotal}</p>
      </div>
    </section>
  );
}
