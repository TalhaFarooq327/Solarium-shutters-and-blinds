import { ChevronRight, ChevronDown } from "lucide-react";
import heroImg from "@/assets/hero.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col w-full overflow-hidden">
      {/* Ambient Ken Burns background zoom */}
      <img
        src={heroImg}
        alt="Luxury living room with bespoke plantation shutters"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-90 animate-ken-burns will-change-transform"
      />
      {/* Deeper gradient on mobile for contrast, lighter in middle for desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/90 sm:from-black/75 sm:via-black/45 sm:to-black/85 pointer-events-none" />

      {/* ── Mobile: vertically-centered flex column  ── Desktop: bottom-anchored ── */}
      <div className="relative z-10 flex flex-1 w-full flex-col items-center justify-center text-center sm:items-start sm:justify-end sm:text-left px-6 pt-24 pb-10 sm:px-6 sm:pb-20 sm:pt-32 lg:px-10 lg:pb-24 text-white max-w-7xl mx-auto">

        {/* Eyebrow */}
        <span
          className="eyebrow fade-up text-white/70 text-[10px] sm:text-[11px]"
          style={{ animationDelay: "100ms" }}
        >
          Bespoke · Handcrafted · Since 2014
        </span>

        {/* Gold decorative rule — mobile only */}
        <div
          className="fade-up mt-4 mb-1 w-10 h-px bg-accent/80 sm:hidden"
          style={{ animationDelay: "175ms" }}
        />

        {/* Heading — larger on mobile */}
        <h1
          className="fade-up mt-5 sm:mt-6 max-w-4xl font-serif text-[2.75rem] font-medium leading-[1.06] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "250ms" }}
        >
          Beautiful Bespoke<br />
          <span className="italic text-white/95">Plantation Shutters</span>
        </h1>

        {/* Sub-headline */}
        <p
          className="fade-up mt-5 sm:mt-6 max-w-sm sm:max-w-xl text-base font-light text-white/80 sm:text-lg md:text-xl leading-relaxed"
          style={{ animationDelay: "400ms" }}
        >
          Expertly measured. Professionally installed. Crafted to transform your home.
        </p>

        {/* CTA Buttons */}
        <div
          className="fade-up mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
          style={{ animationDelay: "550ms" }}
        >
          <a
            href="#contact"
            className="shimmer-button inline-flex justify-center items-center gap-2 rounded-full bg-white px-7 py-4 sm:px-7 sm:py-4 text-sm font-semibold tracking-wide text-charcoal shadow-lg transition-all duration-300 hover:bg-accent hover:text-charcoal hover:scale-[1.03] active:scale-[0.98]"
          >
            Get a Free Quote <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href="#shutters"
            className="inline-flex justify-center items-center gap-2 rounded-full border border-white/60 bg-white/10 backdrop-blur-xs px-7 py-4 sm:px-7 sm:py-4 text-sm font-medium tracking-wide text-white transition-all duration-300 hover:bg-white hover:text-charcoal hover:scale-[1.03] active:scale-[0.98]"
          >
            Explore Our Shutters
          </a>
        </div>

        {/* Trust strip — fixed margin on mobile, no more mt-auto gap */}
        <div
          className="fade-up mt-10 sm:mt-12 grid grid-cols-2 gap-y-3 gap-x-6 border-t border-white/20 pt-6 text-[11px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] text-white/75 md:flex md:flex-wrap md:gap-x-10 w-full sm:w-auto"
          style={{ animationDelay: "700ms" }}
        >
          <span className="transition-opacity hover:text-white">· Free Home Measure</span>
          <span className="transition-opacity hover:text-white">· No Hard Sales</span>
          <span className="transition-opacity hover:text-white">· Pro Installation</span>
          <span className="transition-opacity hover:text-white">· 5-Star Reviews</span>
        </div>
      </div>


    </section>
  );
}


