import { ChevronRight } from "lucide-react";
import { shutters } from "@/data";

export default function Shutters({ onSelectProduct }) {
  return (
    <section id="shutters" className="relative py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow gold-line">Plantation Shutters</span>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
              Every panel, every hinge,<br />
              <span className="italic">made for your window.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            We shape each shutter to the millimetre of your reveal. Hand-finished hardwood, brass hinges,
            louvres that whisper closed — the details you feel every day.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shutters.map((s) => (
            <article
              key={s.slug || s.name}
              onClick={() => onSelectProduct?.(s.slug)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(60,45,30,0.35)] cursor-pointer"
            >
              <div className="hover-zoom relative aspect-[4/5] w-full">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-xl text-charcoal">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <a
                  href={`#product/${s.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectProduct?.(s.slug);
                  }}
                  className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent transition-all group-hover:gap-3"
                >
                  Explore Details <ChevronRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
