import { ChevronRight } from "lucide-react";
import { blinds } from "@/data";
import Reveal from "@/components/Reveal";

export default function Blinds({ onSelectProduct }) {
  return (
    <section id="blinds" className="bg-cream/60 py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          {/* Main title animate from left */}
          <Reveal direction="left" duration={850} className="max-w-2xl">
            <span className="eyebrow gold-line">Also Available</span>
            <h2 className="mt-5 font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Considered blinds, tailored to your rooms
            </h2>
          </Reveal>

          {/* Sub-heading animate from right */}
          <Reveal direction="right" duration={850} delay={100} className="max-w-md">
            <p className="text-sm leading-relaxed text-muted-foreground">
              For spaces where shutters aren't the fit, we offer a curated collection of blinds in premium fabrics and finishes.
            </p>
          </Reveal>
        </div>

        {/* Grid — cards coming one by one from down to up */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blinds.map((b, idx) => (
            <Reveal
              key={b.slug || b.name}
              delay={idx * 80}
              duration={800}
              direction="up"
              threshold={0.06}
              as="article"
              onClick={() => onSelectProduct?.(b.slug)}
              className="group flex flex-col overflow-hidden rounded-xl bg-background ring-1 ring-border/70 shadow-2xs transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_24px_45px_-20px_rgba(60,45,30,0.22)] hover:ring-accent/40 cursor-pointer"
            >
              <div className="hover-zoom relative aspect-[3/4] w-full overflow-hidden bg-card">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-400 group-hover:bg-black/5" />
              </div>
              <div className="flex flex-1 flex-col justify-between p-5">
                <div>
                  <h3 className="font-serif text-lg text-charcoal transition-colors group-hover:text-accent-foreground">{b.name}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
                <div className="mt-5 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.18em] text-accent transition-all group-hover:gap-2">
                  <span>Explore Details</span>
                  <ChevronRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

