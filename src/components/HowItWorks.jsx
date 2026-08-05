import { steps } from "@/data";

export default function HowItWorks() {
  return (
    <section className="bg-charcoal py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <span className="eyebrow text-accent" style={{ letterSpacing: "0.24em" }}>
            How It Works
          </span>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-primary-foreground sm:text-5xl">
            Four calm, considered steps
          </h2>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              {i < steps.length - 1 && (
                <div className="absolute left-8 top-4 hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-accent/60 to-transparent md:block" />
              )}
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/60 font-serif text-sm text-accent">
                {s.n}
              </div>
              <h3 className="mt-5 font-serif text-xl text-primary-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
