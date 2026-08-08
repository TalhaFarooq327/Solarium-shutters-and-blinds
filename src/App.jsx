import { useEffect, useState } from "react";
import { getProductBySlug } from "@/data";

import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import TrustStrip    from "@/components/TrustStrip";
import Shutters      from "@/components/Shutters";
import Blinds        from "@/components/Blinds";
import Gallery       from "@/components/Gallery";
import HowItWorks    from "@/components/HowItWorks";
import Reviews       from "@/components/Reviews";
import About         from "@/components/About";
import Faq           from "@/components/Faq";
import ServiceAreas  from "@/components/ServiceAreas";
import Contact       from "@/components/Contact";
import Footer        from "@/components/Footer";
import Lightbox      from "@/components/Lightbox";
import ProductDetail from "@/components/ProductDetail";

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const [currentProductSlug, setCurrentProductSlug] = useState(() => {
    if (typeof window !== "undefined" && window.location.hash.startsWith("#product/")) {
      return window.location.hash.replace("#product/", "");
    }
    return null;
  });

  // Handle hash change for browser back/forward and direct links
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith("#product/")) {
        const slug = hash.replace("#product/", "");
        setCurrentProductSlug(slug);
      } else if (hash.startsWith("#product-")) {
        // Retain current product view if an in-page anchor is referenced
        return;
      } else {
        setCurrentProductSlug(null);
      }
    };

    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, []);

  // Track scroll position
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeProduct = getProductBySlug(currentProductSlug);

  // Dynamic document title
  useEffect(() => {
    if (activeProduct) {
      document.title = `${activeProduct.name} — Solarium Shutters & Blinds`;
    } else {
      document.title = "Solarium — Bespoke Plantation Shutters & Blinds";
    }
  }, [activeProduct]);

  const handleSelectProduct = (slug) => {
    window.location.hash = `#product/${slug}`;
    setCurrentProductSlug(slug);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavigateHome = (targetAnchor = "#home") => {
    setCurrentProductSlug(null);
    if (window.location.hash.startsWith("#product/")) {
      window.location.hash = targetAnchor || "#home";
    }
    setTimeout(() => {
      const anchor = targetAnchor.replace("#", "");
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);
  };

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar
        scrolled={scrolled}
        isProductPage={!!activeProduct}
        onNavigateHome={handleNavigateHome}
      />

      {activeProduct ? (
        <>
          <ProductDetail
            product={activeProduct}
            onBack={() =>
              handleNavigateHome(
                activeProduct.category === "Plantation Shutters" ? "#shutters" : "#blinds"
              )
            }
            onSelectProduct={handleSelectProduct}
          />
          <Footer />
        </>
      ) : (
        <>
          <Hero />
          <TrustStrip />
          <Shutters onSelectProduct={handleSelectProduct} />
          <Blinds   onSelectProduct={handleSelectProduct} />
          <Gallery  onOpen={setLightbox} />
          <HowItWorks />
          <Reviews />
          <About />
          <Faq />
          <ServiceAreas />
          <Contact />
          <Footer />
          <Lightbox src={lightbox} onClose={() => setLightbox(null)} />
        </>
      )}
    </div>
  );
}
