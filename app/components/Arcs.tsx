/** Hairline orbital arcs — the ground's structural geometry, bleeding off frame. */
export function Arcs({
  className = "",
  seed = 0,
}: {
  className?: string;
  seed?: number;
}) {
  const radii = [seed === 1 ? 520 : 430, seed === 1 ? 700 : 620, 880];
  return (
    <svg
      className={className}
      viewBox="0 0 1000 1000"
      fill="none"
      stroke="currentColor"
      aria-hidden
      focusable="false"
      preserveAspectRatio="xMidYMid slice"
    >
      {radii.map((r, i) => (
        <circle
          key={r}
          cx={500}
          cy={500}
          r={r}
          strokeWidth={1}
          opacity={0.16 - i * 0.035}
          vectorEffect="non-scaling-stroke"
        />
      ))}
      <circle cx={500} cy={500} r={radii[0] - 96} strokeWidth={1} opacity={0.07} strokeDasharray="2 10" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
