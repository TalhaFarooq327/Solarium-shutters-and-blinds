import { useState, useEffect } from "react";
import {
  ArrowLeft, CheckCircle2, ChevronRight, ChevronLeft, Phone, ShieldCheck,
  Sparkles, Hammer, Ruler, Layers, ChevronDown, Send, Eye, X, Loader2, AlertCircle
} from "lucide-react";
import { shutters, blinds } from "@/data";

export default function ProductDetail({ product, onBack, onSelectProduct }) {
  const [selectedImg, setSelectedImg] = useState(product?.img);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
    windowCount: "1 - 3 windows",
    notes: ""
  });

  const galleryImages = (product?.gallery && product.gallery.length > 0)
    ? product.gallery
    : (product?.img ? [product.img] : []);

  const currentIndex = galleryImages.indexOf(selectedImg) !== -1
    ? galleryImages.indexOf(selectedImg)
    : 0;

  const handlePrev = (e) => {
    e?.stopPropagation();
    if (galleryImages.length <= 1) return;
    const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImg(galleryImages[prevIdx]);
  };

  const handleNext = (e) => {
    e?.stopPropagation();
    if (galleryImages.length <= 1) return;
    const nextIdx = (currentIndex + 1) % galleryImages.length;
    setSelectedImg(galleryImages[nextIdx]);
  };

  // Touch swipe support
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 45;

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  // Keyboard navigation for gallery & lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (galleryImages.length > 1) {
        if (e.key === "ArrowLeft") {
          handlePrev();
        } else if (e.key === "ArrowRight") {
          handleNext();
        }
      }
      if (e.key === "Escape" && lightboxOpen) {
        setLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [galleryImages, currentIndex, lightboxOpen]);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (product) {
      setSelectedImg(product.img);
      setStatus("idle");
      setErrorMessage("");
      setOpenFaq(0);
    }
  }, [product]);

  if (!product) return null;

  const isShutter = product.category === "Plantation Shutters";
  const relatedProducts = (isShutter ? shutters : blinds).filter(p => p.slug !== product.slug);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      let res;
      const payload = {
        formType: "product_measure",
        interest: `${product.name} (${product.category})`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        postcode: formData.postcode,
        windowCount: formData.windowCount,
        notes: formData.notes
      };

      try {
        res = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (res.status === 404) {
          res = await fetch("/api/contact.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload)
          });
        }
      } catch {
        res = await fetch("/api/contact.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
      }

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit measure request. Please try again or call us.");
      }

      setStatus("success");
    } catch (err) {
      console.error("Product measure request error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please call +44 (745) 123-45-67 directly.");
    }
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
              <div
                className="group relative aspect-[4/5] sm:aspect-[4/4.5] w-full overflow-hidden rounded-2xl bg-card ring-1 ring-border/80 shadow-lg select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={selectedImg || product.img}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Left and Right Navigation Buttons */}
                {galleryImages.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/85 sm:bg-white/80 backdrop-blur-md text-charcoal shadow-md ring-1 ring-black/10 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    <button
                      type="button"
                      onClick={handleNext}
                      className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/85 sm:bg-white/80 backdrop-blur-md text-charcoal shadow-md ring-1 ring-black/10 hover:bg-white hover:scale-110 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </>
                )}

                {/* Image Counter Badge */}
                {galleryImages.length > 1 && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="rounded-full bg-charcoal/75 backdrop-blur-md px-3 py-1 text-[11px] font-medium tracking-wider text-white shadow-sm ring-1 ring-white/10">
                      {currentIndex + 1} / {galleryImages.length}
                    </span>
                  </div>
                )}

                {/* Lightbox button */}
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-4 right-4 z-10 inline-flex items-center gap-1.5 rounded-full bg-charcoal/80 backdrop-blur-md px-3.5 py-1.5 text-xs text-white shadow-md transition-all hover:bg-charcoal hover:scale-105 cursor-pointer"
                  aria-label="View full size image"
                >
                  <Eye className="h-3.5 w-3.5" /> Full View
                </button>

                {/* Category Pill */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-white/90 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium uppercase tracking-wider text-charcoal shadow-sm ring-1 ring-black/5">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Thumbnails strip */}
              {galleryImages.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {galleryImages.map((gImg, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedImg(gImg)}
                      className={`relative aspect-[4/3] w-20 sm:w-24 shrink-0 overflow-hidden rounded-xl ring-2 transition-all cursor-pointer ${selectedImg === gImg
                          ? "ring-accent shadow-md scale-100 opacity-100"
                          : "ring-transparent opacity-65 hover:opacity-100"
                        }`}
                      aria-label={`Thumbnail ${idx + 1}`}
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
                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById("product-quote");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="inline-flex items-center justify-center rounded-full bg-charcoal px-7 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all hover:bg-accent hover:text-charcoal hover:shadow-lg cursor-pointer"
                >
                  Book Free In-Home Measure
                </button>
                <a
                  href="tel:+447451234567"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/30 bg-transparent px-6 py-4 text-xs font-medium uppercase tracking-[0.18em] text-charcoal transition-all hover:bg-cream"
                >
                  <Phone className="h-3.5 w-3.5 text-accent" /> +44 (745) 123-45-67
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
                      className={`h-5 w-5 text-accent transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""
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

            {status === "success" ? (
              <div className="mt-10 rounded-2xl bg-card p-8 text-center ring-1 ring-border animate-fade-in">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 shadow-inner">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-serif text-2xl text-charcoal">
                  Thank You, {formData.name || "Customer"}!
                </h3>
                <p className="mt-2 text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We've received your request for <strong>{product.name}</strong> ({formData.windowCount}). A design specialist will contact you on <strong>{formData.phone}</strong> within 24 hours to arrange your complimentary in-home measure.
                </p>
                <div className="mt-6 pt-6 border-t border-border/80 flex flex-col items-center gap-3">
                  <p className="text-xs text-muted-foreground">Confirmation details sent to <strong>{formData.email}</strong></p>
                  <button
                    type="button"
                    onClick={() => {
                      setStatus("idle");
                      setErrorMessage("");
                    }}
                    className="text-xs uppercase tracking-widest text-accent font-medium hover:underline cursor-pointer"
                  >
                    Send another enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
                {status === "error" && (
                  <div className="sm:col-span-2 rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-xs text-destructive flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Submission Issue</p>
                      <p className="mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

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
                    Your Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="e.g. Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Telephone Number <span className="text-accent">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    disabled={status === "loading"}
                    placeholder="07123 456 789"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Postcode / Area <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="e.g. SW3 4RD or Surrey"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider text-charcoal mb-1.5">
                    Estimated Windows
                  </label>
                  <select
                    value={formData.windowCount}
                    disabled={status === "loading"}
                    onChange={(e) => setFormData({ ...formData, windowCount: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
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
                    disabled={status === "loading"}
                    placeholder="Tell us about your room, window shapes, or any questions..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-charcoal focus:border-accent focus:outline-hidden disabled:opacity-60"
                  />
                </div>

                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-lg transition-all hover:bg-accent hover:text-charcoal disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin text-accent" />
                        Submitting Measure Request...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" /> Submit Free Measure Request
                      </>
                    )}
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close button */}
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 z-30 grid h-11 w-11 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-colors cursor-pointer"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Lightbox Navigation Buttons */}
          {galleryImages.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev(e);
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-7 w-7" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext(e);
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 grid h-12 w-12 sm:h-14 sm:w-14 place-items-center rounded-full bg-white/20 text-white hover:bg-white/40 backdrop-blur-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="h-7 w-7" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs text-white/90 ring-1 ring-white/10">
                {currentIndex + 1} / {galleryImages.length}
              </div>
            </>
          )}

          <img
            src={selectedImg || product.img}
            alt={product.name}
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl transition-all duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
