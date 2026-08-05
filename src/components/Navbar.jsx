import logoImg from "@/assets/logo.png";
import { nav } from "@/data";

export default function Navbar({ scrolled }) {
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream border-b border-border/80 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.08)] py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <img
            src={logoImg}
            alt="Solarium Shutters & Blinds"
            className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span
              className={`font-serif text-2xl font-semibold tracking-tight transition-colors ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              Solarium
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.28em] font-medium -mt-1 transition-colors ${
                scrolled ? "text-accent" : "text-white/80"
              }`}
            >
              Shutters & Blinds
            </span>
          </div>
        </a>

        {/* Nav links */}
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className={`hidden rounded-full border px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] transition-all sm:inline-flex ${
            scrolled
              ? "border-charcoal bg-charcoal text-primary-foreground hover:bg-charcoal/90"
              : "border-white/70 text-white hover:bg-white hover:text-charcoal"
          }`}
        >
          Get a Free Quote
        </a>
      </div>
    </header>
  );
}
