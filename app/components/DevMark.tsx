/**
 * "Laravel and vue" — unDraw illustration (CC0-style, no attribution required),
 * downloaded via undraw.co's own UI per its license (scraping is prohibited there).
 * Deliberate, scoped exception to the site's monochrome discipline: user's choice.
 */
export function DevMark() {
  return (
    <div className="u-plate devMark">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="devMark__scene"
        src="/devmark.svg"
        alt="Illustration of a full-stack developer working with Laravel and Vue.js"
        width={863}
        height={827}
        loading="lazy"
      />
    </div>
  );
}
