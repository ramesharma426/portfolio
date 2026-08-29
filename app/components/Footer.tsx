import { identity } from "../data/content";

export function Footer() {
  return (
    <footer className="ftr">
      <div className="u-shell u-pane ftr__in">
        <p className="u-meta">
          {identity.first} {identity.last} · {identity.place} · {identity.tzLabel}
        </p>
        <p className="u-meta">
          <a href="#top" className="ftr__up">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  );
}
