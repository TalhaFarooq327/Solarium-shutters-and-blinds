import { blinds } from "@/data";

export default function Blinds() {
  return (
    <section id="blinds" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Heading */}
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="eyebrow gold-line">Also Available</span>
            <h2 className="mt-5 font-serif text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Considered blinds, tailored to your rooms
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            For spaces where shutters aren't the fit, we offer a curated collection of blinds in premium fabrics and finishes.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blinds.map((b) => (
            <article
              key={b.name}
              className="group flex flex-col overflow-hidden rounded-xl bg-background ring-1 ring-border/60 transition-all hover:shadow-[0_20px_40px_-25px_rgba(60,45,30,0.35)]"
            >
              <div className="hover-zoom relative aspect-[3/4] w-full">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  width={900}
                  height={1100}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-serif text-lg text-charcoal">{b.name}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
