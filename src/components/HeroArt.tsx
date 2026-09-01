import { Icon } from "./Brand";

const nodes = [
  { cx: 60, cy: 78, r: 26, label: "PH" },
  { cx: 196, cy: 46, r: 21, label: "BR" },
  { cx: 268, cy: 148, r: 30, label: "DE" },
  { cx: 118, cy: 196, r: 22, label: "IN" },
  { cx: 236, cy: 252, r: 19, label: "VN" },
  { cx: 78, cy: 292, r: 24, label: "TN" },
];

const edges = [
  [0, 2],
  [1, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [0, 3],
  [1, 0],
];

type Badge = { value: string; label: string };

export default function HeroArt({
  badgeOne,
  badgeTwo,
}: {
  badgeOne: Badge;
  badgeTwo: Badge;
}) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl3 bg-teal-950 p-6 shadow-lift sm:p-9">
        <div className="grain grain-light" />
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(232,163,61,.38) 0%, transparent 62%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(23,134,122,.5) 0%, transparent 65%)" }}
        />

        <svg
          viewBox="0 0 330 350"
          className="relative mx-auto h-auto w-full max-w-[22rem]"
          role="img"
          aria-label="FairAdvicer"
        >
          <g stroke="rgba(255,255,255,.28)" strokeWidth="1.2" fill="none">
            {edges.map(([a, b], i) => {
              const A = nodes[a];
              const B = nodes[b];
              const mx = (A.cx + B.cx) / 2 + (i % 2 === 0 ? 26 : -26);
              const my = (A.cy + B.cy) / 2 + (i % 3 === 0 ? -20 : 18);
              return (
                <path
                  key={`${a}-${b}`}
                  d={`M${A.cx} ${A.cy} Q ${mx} ${my} ${B.cx} ${B.cy}`}
                  className="anim-dash"
                  style={{ animationDelay: `${i * -1.3}s` }}
                />
              );
            })}
          </g>

          {nodes.map((n, i) => {
            const isHub = n.label === "DE";
            return (
              <g key={n.label}>
                {isHub && (
                  <circle
                    cx={n.cx}
                    cy={n.cy}
                    r={n.r}
                    fill="none"
                    stroke="#E8A33D"
                    strokeWidth="1.4"
                    className="anim-ring"
                    style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
                  />
                )}
                <circle
                  cx={n.cx}
                  cy={n.cy}
                  r={n.r}
                  fill={isHub ? "#E8A33D" : "rgba(255,255,255,.10)"}
                  stroke={isHub ? "none" : "rgba(255,255,255,.25)"}
                  strokeWidth="1"
                  className={i % 2 === 0 ? "anim-float" : "anim-float-delayed"}
                  style={{ transformOrigin: `${n.cx}px ${n.cy}px`, animationDelay: `${i * -0.9}s` }}
                />
                <text
                  x={n.cx}
                  y={n.cy + 4}
                  textAnchor="middle"
                  fontSize={isHub ? 13 : 11}
                  fontWeight="600"
                  fill={isHub ? "#06302C" : "rgba(255,255,255,.85)"}
                  fontFamily="var(--font-inter), system-ui, sans-serif"
                >
                  {n.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <div className="anim-float absolute -left-3 top-10 hidden rounded-xl2 border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <Icon name="certificate" className="h-4 w-4" />
          </span>
          <p className="max-w-[10rem] text-[0.76rem] leading-snug text-ink-soft">
            <span className="block font-display text-[1.35rem] leading-none text-teal-700">
              {badgeOne.value}
            </span>
            <span className="mt-1 block">{badgeOne.label}</span>
          </p>
        </div>
      </div>

      <div className="anim-float-delayed absolute -bottom-5 right-2 hidden rounded-xl2 border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur sm:block">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500/15 text-amber-600">
            <Icon name="euro" className="h-4 w-4" />
          </span>
          <p className="max-w-[10rem] text-[0.76rem] leading-snug text-ink-soft">
            <span className="block font-display text-[1.35rem] leading-none text-amber-600">
              {badgeTwo.value}
            </span>
            <span className="mt-1 block">{badgeTwo.label}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
