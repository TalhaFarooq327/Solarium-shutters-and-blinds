import { Star } from "lucide-react";
import { reviews } from "@/data";
import Reveal from "@/components/Reveal";

function ReviewCard({ r }) {
  return (
    <figure className="group flex w-80 shrink-0 flex-col rounded-2xl bg-cream/70 p-7 ring-1 ring-border/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-accent/40 mx-3">
      {/* Stars */}
      <div className="flex gap-1 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4 fill-current transition-transform duration-300 group-hover:scale-110"
            style={{ transitionDelay: `${i * 40}ms` }}
            strokeWidth={0}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="mt-4 flex-1 font-serif text-base leading-relaxed text-charcoal">
        "{r.quote}"
      </blockquote>

      {/* Author */}
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/20 font-serif text-sm font-semibold text-accent transition-transform duration-300 group-hover:scale-110">
          {r.name.split(" ").map((p) => p[0]).join("")}
        </div>
        <div>
          <div className="text-sm font-medium text-charcoal">{r.name}</div>
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {r.location}
          </div>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  // Duplicate the array so the seamless loop works
  const looped = [...reviews, ...reviews];

  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center" direction="up">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">
            Loved in the finest homes
          </h2>
        </Reveal>
      </div>

      {/* Marquee track — no horizontal padding so cards bleed edge-to-edge */}
      <div className="relative mt-14">
        {/* Fade masks on left & right edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24"
          style={{ background: "linear-gradient(to right, var(--background), transparent)" }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24"
          style={{ background: "linear-gradient(to left, var(--background), transparent)" }}
        />

        {/* Scrolling row */}
        <div className="marquee-track pb-3">
          {looped.map((r, idx) => (
            <ReviewCard key={`${r.name}-${idx}`} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
