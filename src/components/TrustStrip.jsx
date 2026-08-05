import { trust } from "@/data";

export default function TrustStrip() {
  return (
    <section className="border-y border-border bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 py-14 sm:grid-cols-3 md:grid-cols-5 lg:px-10">
        {trust.map(({ icon: Icon, stat, label }) => (
          <div key={label} className="flex flex-col items-center text-center">
            <Icon className="h-6 w-6 text-accent" strokeWidth={1.4} />
            <div className="mt-3 font-serif text-2xl text-charcoal">{stat}</div>
            <div className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
