import { useState, useMemo } from "react";
import { MapPin, Search, Navigation } from "lucide-react";
import { manchesterAreaCategories } from "@/data";
import Reveal from "@/components/Reveal";
import StockportMap from "@/components/StockportMap";

const POSTCODES = ["M", "SK", "OL", "BL", "WN", "WA", "M1-M90"];

export default function ServiceAreas() {
  const [activeCategory, setActiveCategory] = useState(manchesterAreaCategories[0]?.id || "central-city");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState(null);

  const filteredCategories = useMemo(() => {
    return manchesterAreaCategories
      .map((cat) => {
        if (cat.id !== activeCategory) {
          return null;
        }

        if (!searchQuery.trim()) {
          return cat;
        }

        const query = searchQuery.toLowerCase().trim();
        const matchingAreas = cat.areas.filter(
          (a) =>
            a.name.toLowerCase().includes(query) ||
            a.details.toLowerCase().includes(query)
        );

        if (matchingAreas.length === 0) return null;

        return {
          ...cat,
          areas: matchingAreas,
        };
      })
      .filter(Boolean);
  }, [activeCategory, searchQuery]);

  return (
    <section id="areas" className="bg-cream/60 py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal direction="up" className="text-center max-w-3xl mx-auto">
          <span className="eyebrow gold-line justify-center">Where We Work</span>
          <h2 className="mt-4 font-serif text-4xl text-foreground sm:text-5xl">
            Serving Homes Across Greater Manchester &amp; Cheshire
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Our master fitters provide complimentary in-home laser measurement, architectural consultation, and precision installation across all 10 boroughs of Greater Manchester and Cheshire borders.
          </p>
        </Reveal>

        {/* Filter Bar & Search */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-border/60 pb-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {manchesterAreaCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setSelectedArea(null);
                }}
                className={`px-4 py-2 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? "bg-accent text-accent-foreground font-semibold shadow-xs"
                    : "bg-background border border-border/80 text-muted-foreground hover:text-foreground hover:border-accent"
                }`}
              >
                <span>{cat.icon}</span>
                <span>{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search city, suburb, postcode..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value) setSelectedArea(e.target.value);
              }}
              className="w-full rounded-full border border-border/80 bg-background pl-9 pr-8 py-2 text-xs text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent/30 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedArea(null);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground hover:text-foreground cursor-pointer"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Main Content Layout: Area Grid + Leaflet Map */}
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Areas Display (7 Columns) */}
          <div className="lg:col-span-7 space-y-8">
            {filteredCategories.length === 0 ? (
              <div className="rounded-2xl border border-border/80 bg-card p-8 text-center">
                <p className="text-sm font-medium text-foreground">No areas match &quot;{searchQuery}&quot;</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  We serve all of Greater Manchester. Ring us or leave a quote request to confirm your postcode.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory(manchesterAreaCategories[0]?.id || "central-city");
                    setSelectedArea(null);
                  }}
                  className="mt-4 text-xs font-semibold text-accent underline cursor-pointer hover:text-foreground"
                >
                  Clear search
                </button>
              </div>
            ) : (
              filteredCategories.map((cat) => (
                <Reveal key={cat.id} direction="up" className="rounded-2xl border border-border/70 bg-card p-6 shadow-2xs">
                  <div>
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">{cat.icon}</span>
                        <div>
                          <h3 className="font-serif text-lg font-semibold text-foreground">{cat.category}</h3>
                          <p className="text-xs text-muted-foreground">{cat.tagline}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-cream px-2.5 py-1 text-[10px] font-semibold text-accent tracking-wider uppercase">
                        {cat.areas.length} Locations
                      </span>
                    </div>

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {cat.areas.map((area, idx) => (
                        <div
                          key={idx}
                          onClick={() => setSelectedArea(area.name)}
                          className={`group relative rounded-xl border p-3.5 transition-all duration-200 cursor-pointer ${
                            selectedArea === area.name
                              ? "border-accent bg-accent/10 shadow-xs"
                              : "border-border/40 bg-cream/30 hover:border-accent/60 hover:bg-cream/80 hover:shadow-2xs"
                          }`}
                        >
                          <div className="flex items-start gap-2.5">
                            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent transition-transform duration-300 group-hover:scale-110" />
                            <div>
                              <h4 className="text-xs font-semibold text-foreground group-hover:text-accent transition-colors">
                                {area.name}
                              </h4>
                              <p className="mt-0.5 text-[11px] text-muted-foreground leading-snug">
                                {area.details}
                              </p>
                              <span className="mt-1 inline-block text-[10px] text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                View on Map &rarr;
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))
            )}

            {/* Postcode Coverage Banner */}
            <Reveal direction="up" delay={100}>
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Navigation className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground">Greater Manchester Postcodes Covered</h4>
                    <div className="mt-1 flex flex-wrap gap-1.5">
                      {POSTCODES.map((code) => (
                        <span key={code} className="rounded-md bg-background px-2 py-0.5 text-[10px] font-bold text-foreground border border-border/60">
                          {code}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shrink-0 text-xs font-semibold text-accent hover:text-foreground underline flex items-center gap-1 cursor-pointer"
                >
                  Book Free Survey &rarr;
                </a>
              </div>
            </Reveal>
          </div>

          {/* Interactive Leaflet Map (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <Reveal direction="right" delay={150}>
              <StockportMap selectedArea={selectedArea} height="440px" />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
