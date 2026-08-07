import { ChevronRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
      {/* Ambient Ken Burns background zoom */}
      <img
        src={heroImg}
        alt="Luxury living room with bespoke plantation shutters"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-90 animate-ken-burns will-change-transform"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85 pointer-events-none" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 pt-32 text-white lg:px-10 lg:pb-24">
        <span 
          className="eyebrow fade-up text-white/80" 
          style={{ animationDelay: "100ms" }}
        >
          Bespoke · Handcrafted · Since 2014
        </span>

        <h1 
          className="fade-up mt-6 max-w-4xl font-serif text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          style={{ animationDelay: "250ms" }}
        >
          Beautiful Bespoke<br />
          <span className="italic text-white/95">Plantation Shutters</span>
        </h1>

        <p 
          className="fade-up mt-6 max-w-xl text-lg font-light text-white/85 sm:text-xl"
          style={{ animationDelay: "400ms" }}
        >
          Expertly measured. Professionally installed. Crafted to transform your home.
        </p>

        <div 
          className="fade-up mt-10 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "550ms" }}
        >
          <a
            href="#contact"
            className="shimmer-button inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-medium tracking-wide text-charcoal shadow-lg transition-all duration-300 hover:bg-accent hover:text-charcoal hover:scale-[1.03] active:scale-[0.98]"
          >
            Get a Free Quote <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#shutters"
            className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/5 backdrop-blur-xs px-7 py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-charcoal hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Our Shutters
          </a>
        </div>

        <div 
          className="fade-up mt-12 grid grid-cols-2 gap-x-8 gap-y-3 border-t border-white/20 pt-6 text-xs uppercase tracking-[0.2em] text-white/80 sm:flex sm:flex-wrap sm:gap-x-10"
          style={{ animationDelay: "700ms" }}
        >
          <span className="transition-opacity hover:text-white">· Free Home Measure</span>
          <span className="transition-opacity hover:text-white">· No Hard Sales</span>
          <span className="transition-opacity hover:text-white">· Professional Installation</span>
          <span className="transition-opacity hover:text-white">· 5-Star Reviews</span>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <a
        href="#shutters"
        aria-label="Scroll down to explore shutters"
        className="absolute bottom-6 right-8 z-20 hidden lg:flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-white/70 hover:text-white transition-colors animate-float-slow"
      >
        <span>Scroll</span>
        <span className="grid h-6 w-6 place-items-center rounded-full border border-white/30 bg-black/20 backdrop-blur-xs">
          <ChevronDown className="h-3.5 w-3.5" />
        </span>
      </a>
    </section>
  );
}

