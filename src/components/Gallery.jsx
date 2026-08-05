import { g1, g2, g3, g4 } from "@/data";

const images = [
  { src: g1, cls: "md:row-span-2 md:col-span-1 aspect-[4/5] md:aspect-auto" },
  { src: g2, cls: "aspect-[4/3]" },
  { src: g4, cls: "aspect-[4/3]" },
  { src: g3, cls: "md:col-span-2 aspect-[16/9]" },
];

export default function Gallery({ onOpen }) {
  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow gold-line">Recent Installations</span>
          <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">A closer look</h2>
          <p className="mt-4 text-base text-muted-foreground">
            From listed cottages to city apartments — a small selection of projects, quietly finished.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {images.map((im, i) => (
            <button
              key={i}
              type="button"
              onClick={() => onOpen(im.src)}
              className={`hover-zoom group relative overflow-hidden rounded-xl ring-1 ring-border/60 ${im.cls}`}
            >
              <img
                src={im.src}
                alt="Plantation shutter installation"
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <span className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/10" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
