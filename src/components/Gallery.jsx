import { g1, g2, g3, g4 } from "@/data";
import Reveal from "@/components/Reveal";
import { Eye } from "lucide-react";

const images = [
  { src: g1, cls: "md:row-span-2 md:col-span-1 aspect-[4/5] md:aspect-auto", delay: 0 },
  { src: g2, cls: "aspect-[4/3]", delay: 100 },
  { src: g4, cls: "aspect-[4/3]", delay: 200 },
  { src: g3, cls: "md:col-span-2 aspect-[16/9]", delay: 150 },
];

export default function Gallery({ onOpen }) {
  return (
    <section id="gallery" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl" direction="up">
          <span className="eyebrow gold-line">Recent Installations</span>
          <h2 className="mt-5 font-serif text-4xl text-charcoal sm:text-5xl">A closer look</h2>
          <p className="mt-4 text-base text-muted-foreground">
            From listed cottages to city apartments — a small selection of projects, quietly finished.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {images.map((im, i) => (
            <Reveal
              key={i}
              delay={im.delay}
              direction="zoom"
              className={`hover-zoom group relative overflow-hidden rounded-2xl ring-1 ring-border/70 shadow-2xs cursor-pointer ${im.cls}`}
            >
              <button
                type="button"
                onClick={() => onOpen(im.src)}
                className="h-full w-full block text-left"
                aria-label={`View installation photo ${i + 1}`}
              >
                <img
                  src={im.src}
                  alt="Plantation shutter installation"
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                />
                <span className="absolute inset-0 bg-charcoal/0 transition-all duration-300 group-hover:bg-charcoal/25 flex items-center justify-center">
                  <span className="opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 grid h-12 w-12 place-items-center rounded-full bg-white/90 text-charcoal shadow-lg backdrop-blur-xs">
                    <Eye className="h-5 w-5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

