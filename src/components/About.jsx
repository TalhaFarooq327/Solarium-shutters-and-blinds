import aboutImg from "@/assets/about.jpg";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Hammer } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        {/* Left Side: Realistic Image Container */}
        <Reveal direction="left" duration={900}>
          <div className="relative group">
            {/* Background Decorative Accent frame */}
            <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-accent/20 via-cream to-accent/10 opacity-70 blur-lg transition duration-1000 group-hover:opacity-100" />

            <div className="relative overflow-hidden rounded-2xl ring-1 ring-border/80 shadow-2xl bg-card">
              <img
                src={aboutImg}
                alt="Master craftsman fitting bespoke wooden shutters"
                loading="lazy"
                width={1400}
                height={1000}
                className="h-[480px] sm:h-[560px] w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Floating Badge - Top Right */}
              <div className="absolute top-5 right-5 bg-charcoal/90 text-white backdrop-blur-md px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase flex items-center gap-2 border border-white/10 shadow-lg">
                <Hammer className="w-3.5 h-3.5 text-accent" />
                In-House Master Fitters
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content - Right Side */}
        <Reveal direction="right" delay={150} duration={900}>
          <div>
            <span className="eyebrow gold-line">Our Story</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-foreground sm:text-5xl">
              A workshop mindset.<br />
              <span className="italic">A showroom finish.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Solarium Shutters & Blinds began in a small workshop with three joiners, a hand plane and a belief that
              window dressings deserve the same care as fine furniture. A decade on, we still measure every
              window ourselves, still hand-finish every panel, and still answer the phone when you call.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              No hard sales. No sub-contractors. Just quiet, careful craftsmanship and a home you'll love a little more.
            </p>

            {/* Animated Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/70 pt-8">
              <div className="group">
                <div className="font-serif text-3xl sm:text-4xl text-accent font-semibold">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Years</div>
              </div>
              <div className="group">
                <div className="font-serif text-3xl sm:text-4xl text-accent font-semibold">
                  <AnimatedCounter end={500} suffix="+" />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Homes</div>
              </div>
              <div className="group">
                <div className="font-serif text-3xl sm:text-4xl text-accent font-semibold">
                  <AnimatedCounter end={5} suffix="★" />
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Rated</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

