import Image from "next/image";
import { Icon } from "./Brand";

/**
 * City positions are real coordinates projected with Robinson (ESRI:54030),
 * using the same projection and bounds that generated /public/world-dots.webp,
 * so every marker sits exactly on its country.
 * Values are percentages of the map's 1800 x 735 frame.
 */
const MAP_W = 1800;
const MAP_H = 735;

type City = {
  key: string;
  label: string;
  country: string;
  x: number;
  y: number;
  hub?: boolean;
};

const CITIES: City[] = [
  { key: "muc", label: "München", country: "Deutschland", x: 52.83, y: 20.29, hub: true },
  { key: "sao", label: "São Paulo", country: "Brasilien", x: 37.36, y: 75.38 },
  { key: "lim", label: "Lima", country: "Peru", x: 28.74, y: 66.52 },
  { key: "jkt", label: "Jakarta", country: "Indonesien", x: 79.62, y: 62.02 },
  { key: "mnl", label: "Manila", country: "Philippinen", x: 83.29, y: 46.0 },
  { key: "coc", label: "Kochi", country: "Indien", x: 71.09, y: 49.6 },
];

const hub = CITIES.find((c) => c.hub)!;
const sources = CITIES.filter((c) => !c.hub);

/** Quadratic arc from a source city to the hub, bowing away from the equator. */
function arcPath(from: City) {
  const x1 = (from.x / 100) * MAP_W;
  const y1 = (from.y / 100) * MAP_H;
  const x2 = (hub.x / 100) * MAP_W;
  const y2 = (hub.y / 100) * MAP_H;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.hypot(dx, dy);
  const cx = (x1 + x2) / 2;
  const cy = (y1 + y2) / 2 - dist * 0.26;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

type Badge = { value: string; label: string };

export default function HeroArt({
  badgeOne,
  badgeTwo,
  caption,
}: {
  badgeOne: Badge;
  badgeTwo: Badge;
  caption: string;
}) {
  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl3 bg-brand-950 p-5 shadow-lift sm:p-7">
        <div className="grain grain-light" />
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(209,94,0,.32) 0%, transparent 62%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(53,112,77,.45) 0%, transparent 65%)" }}
        />

        {/* ---- map ---- */}
        <div
          className="relative w-full"
          style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}
          role="img"
          aria-label={caption}
        >
          <Image
            src="/world-dots.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="object-contain"
          />

          {/* recruiting corridors */}
          <svg
            viewBox={`0 0 ${MAP_W} ${MAP_H}`}
            className="absolute inset-0 h-full w-full overflow-visible"
            aria-hidden="true"
          >
            {sources.map((c, i) => (
              <path
                key={c.key}
                d={arcPath(c)}
                fill="none"
                stroke="rgba(232,132,58,.85)"
                strokeWidth="3.4"
                className="anim-dash"
                style={{ animationDelay: `${i * -1.4}s` }}
              />
            ))}
          </svg>

          {/* markers */}
          {CITIES.map((c) => (
            <span
              key={c.key}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              {c.hub ? (
                <span className="relative block">
                  <span className="anim-ring absolute left-1/2 top-1/2 block h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-400" />
                  <span className="relative block h-3 w-3 rounded-full bg-accent-500 ring-2 ring-accent-400/40" />
                </span>
              ) : (
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-100 ring-[3px] ring-brand-100/20" />
              )}
            </span>
          ))}
        </div>

        {/* ---- corridor legend ---- */}
        <ul className="relative mt-5 flex flex-wrap gap-x-4 gap-y-2 border-t border-white/10 pt-4">
          <li className="flex items-center gap-1.5 text-[0.76rem] font-semibold text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            {hub.label}
          </li>
          {sources.map((c) => (
            <li key={c.key} className="flex items-center gap-1.5 text-[0.76rem] text-brand-100/75">
              <span className="h-1 w-1 rounded-full bg-brand-100/60" />
              {c.label}
            </li>
          ))}
        </ul>
      </div>

      {/* ---- proof badges, in flow so they never cover the map ---- */}
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="anim-float card flex items-center gap-3 px-4 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <Icon name="certificate" className="h-4 w-4" />
          </span>
          <p className="text-[0.78rem] leading-snug text-ink-soft">
            <span className="block font-display text-[1.4rem] leading-none text-brand-700">
              {badgeOne.value}
            </span>
            <span className="mt-1 block">{badgeOne.label}</span>
          </p>
        </div>

        <div className="anim-float-delayed card flex items-center gap-3 px-4 py-3">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-500/12 text-accent-700">
            <Icon name="users" className="h-4 w-4" />
          </span>
          <p className="text-[0.78rem] leading-snug text-ink-soft">
            <span className="block font-display text-[1.4rem] leading-none text-accent-700">
              {badgeTwo.value}
            </span>
            <span className="mt-1 block">{badgeTwo.label}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
