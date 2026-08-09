import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logoImg from "@/assets/logo.png";
import { nav } from "@/data";

export default function Navbar({ scrolled, onNavigateHome, isProductPage }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  const activeHeader = scrolled || mobileOpen || isProductPage;

  const handleLinkClick = (e, href) => {
    setMobileOpen(false);
    if (isProductPage && onNavigateHome) {
      e.preventDefault();
      onNavigateHome(href);
    }
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 ${mobileOpen ? "" : "transition-all duration-300"} ${
          activeHeader
            ? "bg-cream border-b border-border/80 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.08)] py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="group flex items-center gap-2.5 sm:gap-3"
          >
            <img
              src={logoImg}
              alt="Solarium Shutters & Blinds"
              className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className={`font-serif text-xl sm:text-2xl font-semibold tracking-tight transition-colors ${activeHeader ? "text-foreground" : "text-white"
                  }`}
              >
                Solarium
              </span>
              <span
                className={`text-[9px] sm:text-[10px] uppercase tracking-[0.28em] font-medium -mt-1 transition-colors ${activeHeader ? "text-accent" : "text-white/80"
                  }`}
              >
                Shutters & Blinds
              </span>
            </div>
          </a>

          {/* Desktop Nav links */}
          <nav className="hidden items-center gap-8 xl:gap-9 lg:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`text-[13px] font-medium tracking-wide transition-colors ${activeHeader
                    ? "text-foreground/80 hover:text-foreground"
                    : "text-white/85 hover:text-white"
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Desktop / Tablet CTA */}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, "#contact")}
              className={`hidden sm:inline-flex rounded-full border px-3.5 py-1.5 sm:px-5 sm:py-2.5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.16em] sm:tracking-[0.18em] transition-all ${activeHeader
                  ? "border-charcoal bg-charcoal text-primary-foreground hover:bg-charcoal/90"
                  : "border-white/70 text-white hover:bg-white hover:text-charcoal"
                }`}
            >
              Get a Free Quote
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={`grid h-9 w-9 place-items-center rounded-lg border transition-all lg:hidden ${
                activeHeader
                  ? "border-border bg-transparent text-charcoal hover:bg-black/5"
                  : "border-white/50 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
              }`}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      <div
        className={`fixed inset-x-0 top-[59px] sm:top-[63px] bottom-0 z-40 bg-cream border-b border-border transition-all duration-300 ease-in-out lg:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto ${
          mobileOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col space-y-3">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleLinkClick(e, item.href)}
              className="font-serif text-xl sm:text-2xl font-medium text-charcoal hover:text-accent transition-colors py-2 border-b border-border/50 flex items-center justify-between"
            >
              <span>{item.label}</span>
              <span className="text-xs text-accent font-sans uppercase tracking-widest">→</span>
            </a>
          ))}
        </nav>

        <div className="pt-8 space-y-4">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "#contact")}
            className="flex w-full items-center justify-center rounded-full bg-charcoal px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all hover:bg-accent hover:text-charcoal"
          >
            Get a Free Quote
          </a>
          <a
            href="tel:+447451234567"
            className="flex items-center justify-center gap-2 text-xs font-medium text-charcoal/80 hover:text-accent tracking-wider pt-1"
          >
            <Phone className="h-3.5 w-3.5 text-accent" /> +44 (745) 123-45-67
          </a>
        </div>
      </div>
    </>
  );
}
