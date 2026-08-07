import { Star } from "lucide-react";
import { reviews } from "@/data";
import Reveal from "@/components/Reveal";

export default function Reviews() {
  return (
    <section className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center" direction="up">
          <span className="eyebrow">Testimonials</span>
          <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">
            Loved in the finest homes
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map((r, idx) => (
            <Reveal
              key={r.name}
              delay={idx * 110}
              direction="up"
              as="figure"
              className="group flex flex-col rounded-2xl bg-cream/70 p-8 ring-1 ring-border/70 shadow-2xs transition-all duration-400 hover:-translate-y-1.5 hover:shadow-lg hover:ring-accent/40"
            >
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
              <blockquote className="mt-5 flex-1 font-serif text-lg leading-relaxed text-charcoal">
                "{r.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 font-serif text-sm font-semibold text-accent transition-transform duration-300 group-hover:scale-110">
                  {r.name.split(" ").map((p) => p[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-medium text-charcoal">{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {r.location}
                  </div>
                </div>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

