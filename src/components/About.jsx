import aboutImg from "@/assets/about.jpg";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        {/* Image */}
        <Reveal direction="left" duration={900}>
          <div className="hover-zoom relative overflow-hidden rounded-2xl ring-1 ring-border/70 shadow-lg">
            <img
              src={aboutImg}
              alt="Master installer fitting a shutter"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </Reveal>

        {/* Content */}
        <Reveal direction="right" delay={150} duration={900}>
          <div>
            <span className="eyebrow gold-line">Our Story</span>
            <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
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

