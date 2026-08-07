import { ChevronRight, Phone, Mail, MapPin } from "lucide-react";
import Field from "@/components/Field";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you — we'll be in touch within one working day.");
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal py-24 text-primary-foreground lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,oklch(0.72_0.095_78/0.18),transparent_55%)] pointer-events-none" />

      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">
        {/* Left — info */}
        <Reveal direction="left">
          <span className="eyebrow text-accent">Request a Quote</span>
          <h2 className="mt-5 font-serif text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Beautiful shutters<br />
            <span className="italic text-accent">begin with a hello.</span>
          </h2>
          <p className="mt-6 max-w-md text-primary-foreground/75 leading-relaxed">
            Leave a few details and we'll be in touch to arrange your free home measure — no hard sales, we promise.
          </p>
          <div className="mt-10 space-y-4 text-sm text-primary-foreground/85">
            <a href="tel:02045772222" className="flex items-center gap-3 transition-colors hover:text-accent group">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-accent/20">
                <Phone className="h-4 w-4 text-accent" />
              </span>
              020 4577 2222
            </a>
            <a href="mailto:hello@solariumshutters.co.uk" className="flex items-center gap-3 transition-colors hover:text-accent group">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-accent/20">
                <Mail className="h-4 w-4 text-accent" />
              </span>
              hello@solariumshutters.co.uk
            </a>
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10">
                <MapPin className="h-4 w-4 text-accent" />
              </span>
              Showroom — 12 Chiltern Mews, London
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal direction="right" delay={150}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-background p-8 text-foreground shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] ring-1 ring-border/80 sm:p-10"
          >
            <div className="space-y-5">
              <Field label="Name" name="name" required />
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Postcode" name="postcode" required />

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Interested In
                </label>
                <select
                  name="interest"
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  defaultValue="Plantation Shutters"
                >
                  <option>Plantation Shutters</option>
                  <option>Blinds</option>
                  <option>Both</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Message (optional)
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>

              <button
                type="submit"
                className="shimmer-button mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-sm font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all duration-300 hover:bg-accent hover:text-charcoal hover:scale-[1.01] active:scale-[0.99]"
              >
                Request Free Quote <ChevronRight className="h-4 w-4" />
              </button>
              <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Free · No obligation · No hard sales
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

