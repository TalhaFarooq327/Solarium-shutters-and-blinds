import { useState, useEffect } from "react";
import { 
  ArrowLeft, CheckCircle2, ChevronRight, Phone, ShieldCheck, 
  Sparkles, Hammer, Ruler, Layers, ChevronDown, Send, Eye, X 
} from "lucide-react";
import { shutters, blinds } from "@/data";

export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const [selectedImg, setSelectedImg] = useState(product?.img);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    windowCount: "1 - 3 windows",
    notes: ""
  });

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (product) {
      setSelectedImg(product.img);
      setSubmitted(false);
      setOpenFaq(0);
    }
  }, [product]);

  if (!product) return null;

  const isShutter = product.category === "Plantation Shutters";
  const relatedProducts = (isShutter ? shutters : blinds).filter(p => p.slug !== product.slug);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-20">
      {/* Top Breadcrumb Bar */}
      <div className="border-b border-border/70 bg-cream/50 py-3">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          <button
            type="button"
            onClick={onBack}
            className="group inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-charcoal"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to all {isShutter ? "Shutters" : "Blinds"}</span>
          </button>

          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <button type="button" onClick={onBack} className="hover:text-charcoal transition-colors">Home</button>
            <ChevronRight className="h-3 w-3" />
            <button 
              type="button" 
              onClick={() => {
                onBack();
                setTimeout(() => {
                  const el = document.getElementById(isShutter ? "shutters" : "blinds");
                  el?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }} 
              className="hover:text-charcoal transition-colors"
            >
              {product.category}
            </button>
            <ChevronRight className="h-3 w-3" />
            <span className="font-medium text-charcoal">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Main Hero Showcase */}
      <section className="py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-start">
            
            {/* Left: Interactive Media Gallery */}
            <div className="lg:col-span-6 space-y-4">
              {/* Main Image Stage */}
              <div className="group relative aspect-[4/5] sm:aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-card ring-1 ring-border/80 shadow-lg">
                <img
                  src={selectedImg || product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Lightbox button */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-charcoal/80 backdrop-blur-md px-3.5 py-1.5 text-xs text-white shadow-md transition-all hover:bg-charcoal hover:scale-105"
                  aria-label="View full size image"
                >
                  <Eye className="h-3.5 w-3.5" /> Full View
                </button>

                {/* Category Pill */}
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium uppercase tracking-wider text-charcoal shadow-sm ring-1 ring-black/5">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnails strip */}
              {product.gallery && product.gallery.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.gallery.map((gImg, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImg(gImg)}
                      className={`relative aspect-[4/3] w-20 sm:w-24 shrink-0 overflow-hidden rounded-xl ring-2 transition-all ${
                        selectedImg === gImg
                          ? "ring-accent shadow-md scale-100"
                          : "ring-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <img src={gImg} alt={`${product.name} preview ${idx + 1}`} className="h-full w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-3 sm:grid-cols-4">
                <div className="rounded-xl border border-border/70 bg-cream/50 p-3 text-center">
                  <Ruler className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-1.5 text-[11px] font-medium text-charcoal">Free Measure</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-cream/50 p-3 text-center">
                  <Sparkles className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-1.5 text-[11px] font-medium text-charcoal">100% Bespoke</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-cream/50 p-3 text-center">
                  <Hammer className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-1.5 text-[11px] font-medium text-charcoal">Master Fitting</p>
                </div>
                <div className="rounded-xl border border-border/70 bg-cream/50 p-3 text-center">
                  <ShieldCheck className="mx-auto h-4 w-4 text-accent" />
                  <p className="mt-1.5 text-[11px] font-medium text-charcoal">Guaranteed</p>
                </div>
              </div>
            </div>

            {/* Right: Summary, Highlights & CTA */}
            <div className="lg:col-span-6 flex flex-col space-y-6">
              <div>
                <span className="eyebrow gold-line">{product.category}</span>
                <h1 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-[1.1]">
                  {product.name}
                </h1>
                <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/80 font-medium">
                  {product.tagline}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5 pt-2">
                <a
                  href="#product-quote"
                  className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all hover:bg-accent hover:text-charcoal hover:shadow-lg"
                >
                  Book Free In-Home Measure
                </a>
                <a
                  href="tel:02045772222"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/30 bg-transparent px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-all hover:bg-cream"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" /> 020 4577 2222
                </a>
              </div>

              {/* Key Highlights Bullets */}
              <div className="rounded-2xl border border-border/80 bg-cream/60 p-6 space-y-3.5">
                <h3 className="font-serif text-lg text-charcoal">Why Choose This Style:</h3>
                <ul className="space-y-2.5">
                  {product.keyBenefits?.map((kb, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal/90">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span><strong>{kb.title}:</strong> {kb.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal Placements */}
              {product.idealFor && (
                <div>
                  <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
                    Recommended Window & Room Placements
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {product.idealFor.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg border border-border bg-card px-3.5 py-1.5 text-xs text-charcoal font-medium shadow-2xs"
                      >
                        ✓ {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* Detailed Overview & Craftsmanship Section */}
      <section className="bg-cream/40 py-16 border-y border-border/70">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
          <div className="max-w-3xl">
            <span className="eyebrow gold-line">Craftsmanship & Design</span>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-charcoal">
              Engineered with care, hand-finished for life
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-charcoal/80">
              {product.overview.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Materials */}
          {product.materials && (
            <div className="mt-12">
              <h3 className="font-serif text-2xl text-charcoal mb-6">Material & Construction Options</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {product.materials.map((mat, i) => (
                  <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-2xs">
                    <div className="grid h-8 w-8 place-items-center rounded-full bg-cream text-accent mb-3">
                      <Layers className="h-4 w-4" />
                    </div>
                    <h4 className="font-serif text-base font-semibold text-charcoal">{mat.split("(")[0]}</h4>
                    {mat.includes("(") && (
                      <p className="mt-1.5 text-xs text-muted-foreground leading-relaxed">
                        {mat.substring(mat.indexOf("(") + 1, mat.lastIndexOf(")"))}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Product FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="bg-cream/40 py-16 border-b border-border/70">
          <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
            <div className="text-center">
              <span className="eyebrow gold-line">Got Questions?</span>
              <h2 className="mt-4 font-serif text-3xl text-charcoal sm:text-4xl">
                Frequently Asked About {product.name}
              </h2>
            </div>

            <div className="mt-10 space-y-3">
              {product.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-border bg-card overflow-hidden transition-all shadow-2xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="flex w-full items-center justify-between p-5 text-left font-serif text-lg text-charcoal"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-accent transition-transform duration-300 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground border-t border-border/40 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Direct Quote Form for this Product */}
      <section id="product-quote" className="py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-10">
          <div className="rounded-3xl border border-border/80 bg-cream p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-xl mx-auto">
              <span className="eyebrow gold-line">Complimentary Service</span>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl text-charcoal">
                Book a Free Measure for {product.name}
              </h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A Solarium design specialist will visit your home with full material and finish samples, laser-measure your windows, and provide a precise, no-obligation quotation.
              </p>
            </div>

            {submitted ? (
              <div className="mt-10 rounded-2xl bg-card p-8 text-center ring-1 ring-border">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">Thank You!</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We've received your request for <strong>{product.name}</strong>. A design specialist will contact you within 24 hours to schedule your free measure.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-accent font-medium hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Selected Product
                  </label>
                  <input
                    type="text"
                    disabled
                    value={`${product.name} (${product.category})`}
                    className="w-full rounded-xl border border-border bg-white/70 px-4 py-3 text-sm font-medium text-charcoal cursor-not-allowed opacity-90"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Telephone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="07123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Postcode / Area *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SW3 4RD or Surrey"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Estimated Windows
                  </label>
                  <select
                    value={formData.windowCount}
                    onChange={(e) => setFormData({ ...formData, windowCount: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  >
                    <option>1 - 2 windows</option>
                    <option>3 - 5 windows</option>
                    <option>6 - 10 windows</option>
                    <option>Whole house (10+ windows)</option>
                    <option>French / Patio Doors</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Additional Notes or Preferred Dates (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your room, window shapes, or any questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-all hover:bg-accent hover:text-charcoal"
                  >
                    <Send className="h-4 w-4" /> Submit Free Measure Request
                  </button>
                  <p className="mt-3 text-center text-[11px] text-muted-foreground">
                    Strict privacy. No spam. No high-pressure sales tactics — ever.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Explore Related Styles */}
      {relatedProducts.length > 0 && (
        <section className="bg-cream/40 py-16 border-t border-border/70">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <span className="eyebrow gold-line">Discover More</span>
                <h2 className="mt-3 font-serif text-2xl sm:text-3xl text-charcoal">
                  Other {isShutter ? "Plantation Shutter" : "Blind"} Styles
                </h2>
              </div>
              <button
                type="button"
                onClick={onBack}
                className="text-xs font-medium uppercase tracking-widest text-accent hover:underline"
              >
                View all collection →
              </button>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.slice(0, 3).map((rel) => (
                <article
                  key={rel.slug}
                  onClick={() => onSelectProduct(rel.slug)}
                  className="group cursor-pointer flex flex-col overflow-hidden rounded-2xl bg-card ring-1 ring-border/70 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={rel.img}
                      alt={rel.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-1 flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl text-charcoal">{rel.name}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{rel.desc}</p>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-accent group-hover:gap-2 transition-all">
                      View Details <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImg || product.img}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
