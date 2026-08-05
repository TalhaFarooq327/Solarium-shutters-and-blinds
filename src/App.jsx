import { useEffect, useState } from "react";

import Navbar       from "@/components/Navbar";
import Hero         from "@/components/Hero";
import TrustStrip   from "@/components/TrustStrip";
import Shutters     from "@/components/Shutters";
import Blinds       from "@/components/Blinds";
import Gallery      from "@/components/Gallery";
import HowItWorks   from "@/components/HowItWorks";
import Reviews      from "@/components/Reviews";
import About        from "@/components/About";
import Faq          from "@/components/Faq";
import ServiceAreas from "@/components/ServiceAreas";
import Contact      from "@/components/Contact";
import Footer       from "@/components/Footer";
import Lightbox     from "@/components/Lightbox";

export default function App() {
  const [scrolled, setScrolled]   = useState(false);
  const [lightbox, setLightbox]   = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="home" className="min-h-screen bg-background text-foreground">
      <Navbar       scrolled={scrolled} />
      <Hero />
      <TrustStrip />
      <Shutters />
      <Blinds />
      <Gallery      onOpen={setLightbox} />
      <HowItWorks />
      <Reviews />
      <About />
      <Faq />
      <ServiceAreas />
      <Contact />
      <Footer />
      <Lightbox     src={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}
