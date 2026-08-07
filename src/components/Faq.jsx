import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/data";
import Reveal from "@/components/Reveal";

export default function Faq() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="faq" className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-10">
        {/* Left column */}
        <Reveal direction="up">
          <span className="eyebrow gold-line">Frequently Asked</span>
          <h2 className="mt-5 font-serif text-4xl leading-tight text-charcoal sm:text-5xl">
            Answers, in plain English.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">
            Can't see your question? Ring us on{" "}
            <a
              className="text-accent font-medium underline-offset-4 hover:underline"
              href="tel:+442045772222"
            >
              020 4577 2222
            </a>{" "}
            — we'd love to help.
          </p>
        </Reveal>

        {/* Accordion */}
        <Reveal direction="up" delay={150}>
          <div className="divide-y divide-border/70 border-y border-border/70">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="transition-colors duration-200 hover:bg-cream/40">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-serif text-lg text-charcoal sm:text-xl transition-colors hover:text-accent">
                      {f.q}
                    </span>
                    <span className={`mt-1 text-accent transition-transform duration-300 ${open ? "rotate-180" : "rotate-0"}`}>
                      {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pr-10 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

