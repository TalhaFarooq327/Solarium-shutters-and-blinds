import aboutImg from "@/assets/about.jpg";

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
        {/* Image */}
        <div className="hover-zoom relative overflow-hidden rounded-2xl ring-1 ring-border/60">
          <img
            src={aboutImg}
            alt="Master installer fitting a shutter"
            loading="lazy"
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
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
            No hard sales. No sub-contractors. Just quiet, careful craftsmanship — and a home you'll love a little more.
          </p>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-8">
            <div>
              <div className="font-serif text-3xl text-accent">10+</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Years</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-accent">500+</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Homes</div>
            </div>
            <div>
              <div className="font-serif text-3xl text-accent">5★</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Rated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
