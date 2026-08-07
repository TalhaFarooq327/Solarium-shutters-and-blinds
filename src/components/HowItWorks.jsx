import { steps } from "@/data";
import Reveal from "@/components/Reveal";

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-24 text-primary-foreground lg:py-32 overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,oklch(0.72_0.095_78/0.08),transparent_50%)] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl" direction="up">
          <span className="eyebrow text-accent" style={{ letterSpacing: "0.24em" }}>
            How It Works
          </span>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Four calm, considered steps
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 120}
              direction="up"
              className="group relative flex flex-col"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-10 top-5 hidden h-[2px] w-[calc(100%-2.5rem)] bg-gradient-to-r from-accent/70 via-accent/30 to-accent/10 md:block transition-all duration-700" />
              )}
              <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/70 bg-charcoal font-serif text-sm font-semibold text-accent shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-charcoal group-hover:shadow-[0_0_20px_rgba(184,134,11,0.4)]">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary-foreground transition-colors group-hover:text-accent">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/75">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

