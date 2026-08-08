import logoImg from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";
import { nav } from "@/data";

// lucide-react v1.x removed social brand icons — using inline SVGs instead
function IconInstagram({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconFacebook({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-background pt-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-14 lg:grid-cols-4 lg:px-10">
        {/* Brand */}
        <div>
          <a href="#home" className="group flex items-center gap-3">
            <img
              src={logoImg}
              alt="Solarium Shutters & Blinds"
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-semibold text-charcoal">Solarium</span>
              <span className="text-[10px] uppercase tracking-[0.28em] font-medium text-accent -mt-1">Shutters & Blinds</span>
            </div>
          </a>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Bespoke plantation shutters and premium blinds, handcrafted and installed with quiet care.
          </p>
          <div className="mt-6 flex gap-3">
            {[IconInstagram, IconFacebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            {nav.slice(1, 5).map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-accent">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            <li className="flex items-center gap-2"><Phone className="h-3.5 w-3.5 text-accent" /> +44 (745) 123-45-67</li>
            <li className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-accent" /> hello@solariumshutters.co.uk</li>
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-3.5 w-3.5 text-accent shrink-0" /> 4 Broadhalgh Road, Rochdale, England</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Hours</div>
          <ul className="mt-4 space-y-2 text-sm text-charcoal">
            <li>Mon – Fri · 08:00 AM – 04:00 PM</li>
            <li>Sat – Sun · 08:00 AM – 12:00 PM</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-xs text-muted-foreground sm:flex-row lg:px-10">
          <div>© {new Date().getFullYear()} Solarium Shutters & Blinds. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-accent">Privacy</a>
            <a href="#" className="hover:text-accent">Terms</a>
            <a href="#" className="hover:text-accent">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
