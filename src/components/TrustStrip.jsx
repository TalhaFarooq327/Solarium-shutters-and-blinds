import { trust } from "@/data";
import Reveal from "@/components/Reveal";

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-cream/70 backdrop-blur-xs overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-3 lg:grid-cols-6 lg:px-10">
        {trust.map(({ icon: Icon, stat, label }, idx) => (
          <Reveal
            key={label}
            delay={idx * 80}
            direction="up"
            className="group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1 cursor-default"
          >
            <div className="grid h-12 w-12 place-items-center rounded-full bg-card shadow-2xs ring-1 ring-border/80 transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/15 group-hover:ring-accent/40">
              <Icon className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />
            </div>
            <div className="mt-3.5 font-serif text-2xl font-semibold text-foreground">{stat}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium">
              {label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

