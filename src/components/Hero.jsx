import { ChevronRight } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Luxury living room with bespoke plantation shutters"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-90"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-32 text-white lg:px-10 lg:pb-28">
        <span className="eyebrow fade-up text-white/80">Bespoke · Handcrafted · Since 2014</span>

        <h1 className="fade-up mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          Beautiful Bespoke<br />
          <span className="italic text-white/95">Plantation Shutters</span>
        </h1>

        <p className="fade-up mt-6 max-w-xl text-lg font-light text-white/85 sm:text-xl">
          Expertly measured. Professionally installed. Crafted to transform your home.
        </p>

        <div className="fade-up mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium tracking-wide text-charcoal transition-all hover:bg-accent hover:text-charcoal"
          >
            Get a Free Quote <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#shutters"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 px-7 py-4 text-sm font-medium tracking-wide text-white transition-all hover:bg-white hover:text-charcoal"
          >
            Explore Our Shutters
          </a>
        </div>

        <div className="fade-up mt-12 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.2em] text-white/80 sm:flex sm:flex-wrap sm:gap-x-10">
          <span>· Free Home Measure</span>
          <span>· No Hard Sales</span>
          <span>· Professional Installation</span>
          <span>· 5-Star Reviews</span>
        </div>
      </div>
    </section>
  );
}
