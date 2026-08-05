import { MapPin } from "lucide-react";
import { areas } from "@/data";

const MAP_DOTS = [
  [30, 55], [45, 48], [52, 60], [40, 72], [60, 40],
  [70, 55], [25, 40], [80, 68], [55, 32],
];

export default function ServiceAreas() {
  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div>
            <span className="eyebrow gold-line">Where We Work</span>
            <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">
              Serving homes across the South &amp; beyond
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Our specialists cover London and the Home Counties, with regular installations across the North West.
              Unsure if we come to you? Send us your postcode.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs tracking-wide text-charcoal"
                >
                  <MapPin className="mr-1.5 -mt-0.5 inline h-3 w-3 text-accent" />
                  {a}
                </span>
              ))}
            </div>
          </div>

          {/* Stylised map */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background ring-1 ring-border/60">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,oklch(0.72_0.095_78/0.25),transparent_55%),radial-gradient(circle_at_70%_65%,oklch(0.72_0.095_78/0.18),transparent_50%)]" />
            <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full opacity-40">
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.4" />
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#grid)" className="text-muted-foreground" />
            </svg>
            {MAP_DOTS.map(([x, y], i) => (
              <span
                key={i}
                className="absolute h-2 w-2 rounded-full bg-accent shadow-[0_0_0_6px_oklch(0.72_0.095_78/0.2)]"
                style={{ left: `${x}%`, top: `${y}%` }}
              />
            ))}
            <div className="absolute bottom-6 left-6 font-serif text-2xl text-charcoal">
              United Kingdom
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
