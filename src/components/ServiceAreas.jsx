import { MapPin } from "lucide-react";
import { areas } from "@/data";
import Reveal from "@/components/Reveal";

const MAP_DOTS = [
  [30, 55], [45, 48], [52, 60], [40, 72], [60, 40],
  [70, 55], [25, 40], [80, 68], [55, 32],
];

export default function ServiceAreas() {
  return (
    <section className="bg-cream/60 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <Reveal direction="left">
            <span className="eyebrow gold-line">Where We Work</span>
            <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">
              Serving Homes Across Rochdale &amp; Surrounds
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              Operating exclusively from 4 Broadhalgh Road, Rochdale, England, our master joiners provide dedicated in-home laser measurement, bespoke craftsmanship, and precision installation across Rochdale and surrounding areas.
              Unsure if we cover your street? Send us your enquiry or call us directly.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {areas.map((a) => (
                <span
                  key={a}
                  className="rounded-full border border-border/80 bg-background px-4 py-2 text-xs tracking-wide text-charcoal font-medium shadow-2xs transition-all duration-300 hover:scale-105 hover:border-accent hover:shadow-xs cursor-default"
                >
                  <MapPin className="mr-1.5 -mt-0.5 inline h-3 w-3 text-accent" />
                  {a}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Stylised animated map */}
          <Reveal direction="right" delay={150}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-background ring-1 ring-border/70 shadow-lg">
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
                <div
                  key={i}
                  className="absolute"
                  style={{ left: `${x}%`, top: `${y}%` }}
                >
                  <span
                    className="block h-2.5 w-2.5 rounded-full bg-accent animate-radar-ping"
                    style={{ animationDelay: `${i * 300}ms` }}
                  />
                  <span className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-accent" />
                </div>
              ))}
              <div className="absolute bottom-6 left-6 font-serif text-2xl font-semibold text-charcoal flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                Rochdale, England
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

