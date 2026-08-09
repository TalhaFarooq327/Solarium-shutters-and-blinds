import { ChevronRight } from "lucide-react";
import { shutters } from "@/data";
import Reveal from "@/components/Reveal";

export default function Shutters({ onSelectProduct }) {
  return (
    <section id="shutters" className="relative py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          {/* Main title animate from left */}
          <Reveal className="max-w-2xl" direction="left" duration={850}>
            <span className="eyebrow gold-line">Plantation Shutters</span>
            <h2 className="mt-5 font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl lg:text-6xl">
              Every panel, every hinge,<br />
              <span className="italic">made for your window.</span>
            </h2>
          </Reveal>

          {/* Sub-heading / description animate from right */}
          <Reveal className="max-w-md" direction="right" duration={850} delay={100}>
            <p className="text-base leading-relaxed text-muted-foreground">
              We shape each shutter to the millimetre of your reveal. Hand-finished hardwood, brass hinges,
              louvres that whisper closed — the details you feel every day.
            </p>
          </Reveal>
        </div>

        {/* Grid — cards coming one by one from down to up */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shutters.map((s, idx) => (
            <Reveal
              key={s.slug || s.name}
              delay={idx * 120}
              duration={800}
              direction="up"
              as="article"
              onClick={() => onSelectProduct?.(s.slug)}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 shadow-2xs transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-25px_rgba(60,45,30,0.22)] hover:ring-accent/40 cursor-pointer"
            >
              <div className="hover-zoom relative aspect-[4/5] w-full overflow-hidden bg-cream/40">
                <img
                  src={s.img}
                  alt={s.name}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 group-hover:bg-black/5" />
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="font-serif text-xl text-charcoal transition-colors group-hover:text-accent-foreground">{s.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.22em] text-accent transition-all group-hover:gap-2.5">
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

