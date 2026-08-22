/**
 * Authored technical diagrams — the article and project artwork.
 * Drawn in the surface's own grammar: hairlines, mono labels, tabular ticks.
 * Everything is currentColor so a diagram reads correctly on any plate.
 */

const F = "var(--font-martian), ui-monospace, monospace";

const Frame = ({
  children,
  vb = "0 0 400 260",
}: {
  children: React.ReactNode;
  vb?: string;
}) => (
  <svg
    viewBox={vb}
    width="100%"
    height="100%"
    preserveAspectRatio="xMidYMid meet"
    fill="none"
    stroke="currentColor"
    aria-hidden
    focusable="false"
    style={{ display: "block" }}
  >
    <g strokeWidth={1} vectorEffect="non-scaling-stroke">
      {children}
    </g>
  </svg>
);

const T = ({
  x,
  y,
  children,
  size = 7.4,
  op = 0.62,
  anchor = "start",
}: {
  x: number;
  y: number;
  children: React.ReactNode;
  size?: number;
  op?: number;
  anchor?: "start" | "middle" | "end";
}) => (
  <text
    x={x}
    y={y}
    fill="currentColor"
    stroke="none"
    fontFamily={F}
    fontSize={size}
    letterSpacing="0.09em"
    opacity={op}
    textAnchor={anchor}
  >
    {children}
  </text>
);

const Box = ({
  x,
  y,
  w,
  h,
  r = 4,
  op = 0.34,
  fill,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  r?: number;
  op?: number;
  fill?: number;
}) => (
  <>
    {fill !== undefined && (
      <rect x={x} y={y} width={w} height={h} rx={r} fill="currentColor" opacity={fill} stroke="none" />
    )}
    <rect x={x} y={y} width={w} height={h} rx={r} opacity={op} />
  </>
);

const Arrow = ({
  x1,
  y1,
  x2,
  y2,
  op = 0.4,
  head = 4,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  op?: number;
  head?: number;
}) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const s = 2.6;
  return (
    <g opacity={op}>
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <path
        d={`M${x2} ${y2} L${x2 - head * Math.cos(a - Math.PI / s)} ${y2 - head * Math.sin(a - Math.PI / s)}`}
      />
      <path
        d={`M${x2} ${y2} L${x2 - head * Math.cos(a + Math.PI / s)} ${y2 - head * Math.sin(a + Math.PI / s)}`}
      />
    </g>
  );
};

/* ── 01 · Kafka fan-out: one topic, three partitions, two consumer groups ── */
const Kafka = () => {
  const lanes = [78, 122, 166];
  return (
    <Frame>
      <Box x={22} y={104} w={62} h={40} fill={0.07} />
      <T x={53} y={122} anchor="middle" op={0.72}>PROD</T>
      <T x={53} y={133} anchor="middle" size={6.2} op={0.42}>go</T>

      <T x={116} y={62} op={0.44}>topic · events.v1</T>
      <Box x={116} y={68} w={168} h={116} r={6} op={0.2} />

      {lanes.map((y, li) => (
        <g key={y}>
          <T x={122} y={y - 6} size={6.2} op={0.4}>{`p${li}`}</T>
          {Array.from({ length: 8 }).map((_, i) => (
            <rect
              key={i}
              x={140 + i * 17}
              y={y - 12}
              width={14}
              height={13}
              rx={1.5}
              fill="currentColor"
              opacity={i < 6 - li ? 0.3 : 0.075}
              stroke="none"
            />
          ))}
          <line x1={140} y1={y + 5} x2={276} y2={y + 5} opacity={0.16} />
          <Arrow x1={84} y1={124} x2={134} y2={y - 5} op={0.26} />
        </g>
      ))}

      <Box x={314} y={78} w={64} h={40} fill={0.07} />
      <T x={346} y={95} anchor="middle" op={0.7}>CG-A</T>
      <T x={346} y={106} anchor="middle" size={6.2} op={0.42}>lag 0</T>

      <Box x={314} y={140} w={64} h={40} />
      <T x={346} y={157} anchor="middle" op={0.7}>CG-B</T>
      <T x={346} y={168} anchor="middle" size={6.2} op={0.42}>lag 4</T>

      <Arrow x1={286} y1={104} x2={310} y2={98} op={0.34} />
      <Arrow x1={286} y1={150} x2={310} y2={158} op={0.34} />

      <line x1={22} y1={212} x2={378} y2={212} opacity={0.12} />
      <T x={22} y={228} size={6.4} op={0.36}>offset committed after handler returns</T>
    </Frame>
  );
};

/* ── 02 · Wait-for graph with one cycle ── */
const Locks = () => {
  const n = [
    { x: 96, y: 76, l: "T1" },
    { x: 246, y: 76, l: "T2" },
    { x: 246, y: 172, l: "T3" },
    { x: 96, y: 172, l: "T4" },
  ];
  return (
    <Frame>
      <T x={22} y={44} op={0.44}>wait-for graph · row locks</T>
      <line x1={22} y1={52} x2={378} y2={52} opacity={0.12} />

      {n.map((p) => (
        <g key={p.l}>
          <circle cx={p.x} cy={p.y} r={21} opacity={0.3} />
          <circle cx={p.x} cy={p.y} r={21} fill="currentColor" opacity={0.05} stroke="none" />
          <T x={p.x} y={p.y + 3} anchor="middle" op={0.78}>{p.l}</T>
        </g>
      ))}

      {/* the cycle: T1 → T2 → T3 → T4 → T1, drawn heavier */}
      <Arrow x1={119} y1={76} x2={223} y2={76} op={0.62} />
      <Arrow x1={246} y1={99} x2={246} y2={149} op={0.62} />
      <Arrow x1={223} y1={172} x2={119} y2={172} op={0.62} />
      <Arrow x1={96} y1={149} x2={96} y2={99} op={0.62} />

      <T x={171} y={68} anchor="middle" size={6.2} op={0.5}>row 41</T>
      <T x={258} y={128} size={6.2} op={0.5}>row 12</T>
      <T x={171} y={188} anchor="middle" size={6.2} op={0.5}>row 88</T>
      <T x={62} y={128} anchor="end" size={6.2} op={0.5}>row 7</T>

      <Box x={286} y={106} w={82} h={38} r={4} />
      <T x={327} y={124} anchor="middle" op={0.72}>DEADLOCK</T>
      <T x={327} y={135} anchor="middle" size={6.2} op={0.44}>cycle len 4</T>
      <line x1={272} y1={124} x2={282} y2={124} opacity={0.3} strokeDasharray="2 3" />

      <T x={22} y={228} size={6.4} op={0.36}>the victim is whichever transaction wrote least</T>
    </Frame>
  );
};

/* ── 03 · Gateway with a surviving trace ── */
const Gateway = () => {
  const svc = ["auth", "orders", "pricing", "audit"];
  return (
    <Frame>
      <T x={22} y={44} op={0.44}>trace 7f2a · 4 hops</T>
      <line x1={22} y1={52} x2={378} y2={52} opacity={0.12} />

      <Box x={22} y={112} w={54} h={36} />
      <T x={49} y={134} anchor="middle" op={0.7}>CLI</T>

      <Box x={104} y={96} w={62} h={68} r={6} fill={0.07} />
      <T x={135} y={124} anchor="middle" op={0.78}>GW</T>
      <T x={135} y={136} anchor="middle" size={6.2} op={0.44}>grpc</T>

      <Arrow x1={76} y1={130} x2={100} y2={130} op={0.44} />

      {svc.map((s, i) => {
        const y = 66 + i * 44;
        const lit = i !== 2;
        return (
          <g key={s}>
            <Box x={238} y={y} w={92} h={30} r={4} fill={lit ? 0.07 : undefined} op={lit ? 0.34 : 0.16} />
            <T x={250} y={y + 19} op={lit ? 0.74 : 0.34}>{s}</T>
            <T x={322} y={y + 19} anchor="end" size={6.2} op={lit ? 0.5 : 0.26}>
              {lit ? "OK" : "—"}
            </T>
            <path
              d={`M166 130 C 198 130, 200 ${y + 15}, 234 ${y + 15}`}
              opacity={lit ? 0.4 : 0.13}
              strokeDasharray={lit ? undefined : "2 3"}
            />
          </g>
        );
      })}

      <line x1={344} y1={60} x2={344} y2={196} opacity={0.16} />
      <T x={352} y={78} size={6.2} op={0.44}>12ms</T>
      <T x={352} y={122} size={6.2} op={0.44}>31ms</T>
      <T x={352} y={166} size={6.2} op={0.44}>4ms</T>

      <T x={22} y={228} size={6.4} op={0.36}>status codes survive the proxy hop</T>
    </Frame>
  );
};

/* ── 04 · Render tree with a memo boundary ── */
const Render = () => {
  const rows: { x: number; y: number; hot: boolean; l: string }[] = [
    { x: 190, y: 62, hot: true, l: "App" },
    { x: 110, y: 116, hot: true, l: "List" },
    { x: 270, y: 116, hot: false, l: "Aside" },
    { x: 66, y: 176, hot: true, l: "Row" },
    { x: 150, y: 176, hot: true, l: "Row" },
    { x: 246, y: 176, hot: false, l: "Tag" },
    { x: 318, y: 176, hot: false, l: "Tag" },
  ];
  const edges: [number, number][] = [
    [0, 1],
    [0, 2],
    [1, 3],
    [1, 4],
    [2, 5],
    [2, 6],
  ];
  return (
    <Frame>
      <T x={22} y={40} op={0.44}>commit · 1 state change</T>
      <line x1={22} y1={48} x2={378} y2={48} opacity={0.12} />

      <rect x={228} y={96} width={132} height={100} rx={8} opacity={0.22} strokeDasharray="3 4" />
      <T x={294} y={210} anchor="middle" size={6.2} op={0.44}>memo boundary</T>

      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={rows[a].x}
          y1={rows[a].y + 12}
          x2={rows[b].x}
          y2={rows[b].y - 12}
          opacity={rows[b].hot ? 0.4 : 0.15}
        />
      ))}

      {rows.map((r, i) => (
        <g key={i}>
          <rect
            x={r.x - 30}
            y={r.y - 12}
            width={60}
            height={24}
            rx={3}
            fill="currentColor"
            opacity={r.hot ? 0.3 : 0.04}
            stroke="none"
          />
          <rect x={r.x - 30} y={r.y - 12} width={60} height={24} rx={3} opacity={r.hot ? 0.5 : 0.2} />
          <T x={r.x} y={r.y + 3} anchor="middle" op={r.hot ? 0.92 : 0.4} size={7}>
            {r.l}
          </T>
        </g>
      ))}

      <T x={22} y={240} size={6.4} op={0.36}>4 of 7 re-rendered · 3 skipped</T>
    </Frame>
  );
};

/* ── 05 · Expand / dual-write / backfill / verify / contract ── */
const Migrate = () => {
  const phase = ["expand", "dual-write", "backfill", "verify", "contract"];
  return (
    <Frame>
      <T x={22} y={40} op={0.44}>five deploys · zero downtime</T>
      <line x1={22} y1={48} x2={378} y2={48} opacity={0.12} />

      <T x={22} y={92} size={6.4} op={0.44}>name</T>
      <T x={22} y={140} size={6.4} op={0.44}>full_name</T>

      <line x1={72} y1={88} x2={302} y2={88} opacity={0.34} />
      <line x1={302} y1={88} x2={356} y2={88} opacity={0.34} strokeDasharray="2 4" />
      <line x1={126} y1={136} x2={356} y2={136} opacity={0.34} />
      <line x1={72} y1={136} x2={126} y2={136} opacity={0.14} strokeDasharray="2 4" />

      <rect x={126} y={74} width={122} height={76} rx={5} fill="currentColor" opacity={0.055} stroke="none" />
      <rect x={126} y={74} width={122} height={76} rx={5} opacity={0.24} />
      <T x={187} y={166} anchor="middle" size={6.2} op={0.5}>both columns written</T>

      {phase.map((p, i) => {
        const x = 72 + i * 63;
        return (
          <g key={p}>
            <line x1={x} y1={186} x2={x} y2={196} opacity={0.3} />
            <circle cx={x} cy={182} r={3.2} fill="currentColor" opacity={0.5} stroke="none" />
            <T x={x} y={212} anchor="middle" size={6.2} op={0.56}>{p}</T>
          </g>
        );
      })}
      <line x1={64} y1={196} x2={364} y2={196} opacity={0.16} />

      <T x={22} y={240} size={6.4} op={0.36}>readers never see a missing column</T>
    </Frame>
  );
};

/* ── Projects ── */

const Ledger = () => (
  <Frame vb="0 0 320 200">
    <T x={16} y={30} op={0.44}>entries · append only</T>
    <line x1={16} y1={38} x2={304} y2={38} opacity={0.12} />
    {Array.from({ length: 6 }).map((_, i) => {
      const y = 54 + i * 20;
      return (
        <g key={i}>
          <rect x={16} y={y} width={92} height={14} rx={2} opacity={0.22} />
          <rect x={16} y={y} width={92} height={14} rx={2} fill="currentColor" opacity={0.05} stroke="none" />
          <T x={22} y={y + 10} size={6} op={0.56}>{`DR ${(140 + i * 37).toString()}`}</T>
          <rect x={114} y={y} width={92} height={14} rx={2} opacity={0.22} />
          <T x={120} y={y + 10} size={6} op={0.56}>{`CR ${(140 + i * 37).toString()}`}</T>
          <Arrow x1={210} y1={y + 7} x2={238} y2={112} op={0.16} head={0} />
        </g>
      );
    })}
    <rect x={240} y={92} width={64} height={40} rx={4} fill="currentColor" opacity={0.08} stroke="none" />
    <rect x={240} y={92} width={64} height={40} rx={4} opacity={0.36} />
    <T x={272} y={110} anchor="middle" op={0.82}>Σ 0</T>
    <T x={272} y={124} anchor="middle" size={6} op={0.46}>balanced</T>
    <T x={16} y={186} size={6} op={0.34}>balances are a fold, never a column</T>
  </Frame>
);

const Waypoint = () => (
  <Frame vb="0 0 320 200">
    <T x={16} y={30} op={0.44}>fleet · 12 of 40 shown</T>
    <line x1={16} y1={38} x2={304} y2={38} opacity={0.12} />
    {Array.from({ length: 12 }).map((_, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = 16 + col * 74;
      const y = 52 + row * 42;
      const pct = [1, 1, 0.62, 1, 1, 0.34, 1, 1, 1, 0.86, 1, 1][i];
      const rolling = i === 5;
      return (
        <g key={i}>
          <rect x={x} y={y} width={64} height={30} rx={3} opacity={rolling ? 0.5 : 0.22} />
          <T x={x + 5} y={y + 12} size={5.6} op={0.5}>{`svc-${(i + 1).toString().padStart(2, "0")}`}</T>
          <rect x={x + 5} y={y + 19} width={54} height={4} rx={2} opacity={0.16} />
          <rect
            x={x + 5}
            y={y + 19}
            width={54 * pct}
            height={4}
            rx={2}
            fill="currentColor"
            opacity={rolling ? 0.75 : 0.42}
            stroke="none"
          />
          {rolling && <Arrow x1={x + 60} y1={y + 21} x2={x + 44} y2={y + 21} op={0.8} head={3} />}
        </g>
      );
    })}
    <T x={16} y={186} size={6} op={0.34}>one keystroke reverses a rollout</T>
  </Frame>
);

const Sift = () => (
  <Frame vb="0 0 320 200">
    <T x={16} y={30} op={0.44}>cold objects · bloom gates</T>
    <line x1={16} y1={38} x2={304} y2={38} opacity={0.12} />
    <line x1={16} y1={104} x2={300} y2={104} opacity={0.5} />
    <Arrow x1={280} y1={104} x2={302} y2={104} op={0.6} />
    {Array.from({ length: 9 }).map((_, i) => {
      const x = 30 + i * 30;
      const open = i === 2 || i === 6;
      return (
        <g key={i}>
          <rect x={x} y={62} width={20} height={30} rx={2} opacity={open ? 0.44 : 0.16} />
          <rect
            x={x}
            y={62}
            width={20}
            height={30}
            rx={2}
            fill="currentColor"
            opacity={open ? 0.14 : 0.03}
            stroke="none"
          />
          <line x1={x + 10} y1={92} x2={x + 10} y2={100} opacity={open ? 0.4 : 0.12} />
          {open ? (
            <circle cx={x + 10} cy={104} r={3.4} fill="currentColor" opacity={0.8} stroke="none" />
          ) : (
            <path d={`M${x + 6} 100 h8 v8 h-8 z`} opacity={0.14} />
          )}
          <rect x={x} y={116} width={20} height={26} rx={2} opacity={open ? 0.3 : 0.1} />
        </g>
      );
    })}
    <T x={16} y={162} size={6} op={0.44}>2 of 9 segments read</T>
    <T x={16} y={186} size={6} op={0.34}>most queries never touch object storage</T>
  </Frame>
);

const Cadence = () => (
  <Frame vb="0 0 320 200">
    <T x={16} y={30} op={0.44}>one source · three targets</T>
    <line x1={16} y1={38} x2={304} y2={38} opacity={0.12} />
    <rect x={16} y={82} width={60} height={36} rx={4} fill="currentColor" opacity={0.08} stroke="none" />
    <rect x={16} y={82} width={60} height={36} rx={4} opacity={0.36} />
    <T x={46} y={104} anchor="middle" op={0.78}>tokens</T>
    {["css", "figma", "native"].map((t, i) => {
      const y = 62 + i * 40;
      return (
        <g key={t}>
          <path d={`M78 100 C 104 100, 106 ${y + 13}, 132 ${y + 13}`} opacity={0.32} />
          <rect x={134} y={y} width={62} height={26} rx={3} opacity={0.26} />
          <T x={142} y={y + 17} size={6.2} op={0.6}>{t}</T>
        </g>
      );
    })}
    <rect x={218} y={62} width={38} height={64} rx={3} opacity={0.24} />
    <rect x={262} y={62} width={38} height={64} rx={3} opacity={0.24} />
    <rect x={262} y={80} width={38} height={12} fill="currentColor" opacity={0.34} stroke="none" />
    <T x={218} y={140} size={6} op={0.5}>base</T>
    <T x={262} y={140} size={6} op={0.5}>head</T>
    <T x={218} y={158} size={6} op={0.64}>Δ 3.1% · blocked</T>
    <T x={16} y={186} size={6} op={0.34}>a pixel move over threshold fails the build</T>
  </Frame>
);

export const articleArt = { kafka: Kafka, locks: Locks, gateway: Gateway, render: Render, migrate: Migrate };
export const projectArt = { ledger: Ledger, waypoint: Waypoint, sift: Sift, cadence: Cadence };
