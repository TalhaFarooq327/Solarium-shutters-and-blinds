import { useState } from "react";
import { ChevronRight, Phone, Mail, MapPin, Clock, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import Field from "@/components/Field";
import Reveal from "@/components/Reveal";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    postcode: "",
    interest: "Plantation Shutters",
    message: ""
  });

  const [status, setStatus] = useState("idle"); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const payload = {
        formType: "general_consultation",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        postcode: formData.postcode,
        interest: formData.interest,
        message: formData.message
      };

      const res = await fetch("/api/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit your enquiry. Please try again or call us.");
      }

      setStatus("success");
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setErrorMessage(err.message || "An unexpected error occurred. Please call +44 (745) 123-45-67 directly.");
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      postcode: "",
      interest: "Plantation Shutters",
      message: ""
    });
    setStatus("idle");
    setErrorMessage("");
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
            Leave a few details and we'll be in touch to arrange your free home measure in Greater Manchester &amp; surrounds — no hard sales, we promise.
          </p>
          <div className="mt-10 space-y-4 text-sm text-primary-foreground/85">
            <a href="tel:+447451234567" className="flex items-center gap-3 transition-colors hover:text-accent group">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-accent/20">
                <Phone className="h-4 w-4 text-accent" />
              </span>
              +44 (745) 123-45-67
            </a>
            <a href="mailto:solariumshutters@gmail.com" className="flex items-center gap-3 transition-colors hover:text-accent group">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 group-hover:bg-accent/20">
                <Mail className="h-4 w-4 text-accent" />
              </span>
              solariumshutters@gmail.com
            </a>
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 shrink-0 mt-0.5">
                <MapPin className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="font-medium text-primary-foreground">4 Broadhalgh Road, Rochdale, England</p>
                <p className="text-xs text-primary-foreground/60">Sole Operating Location &amp; Workshop</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 shrink-0 mt-0.5">
                <Clock className="h-4 w-4 text-accent" />
              </span>
              <div>
                <p className="font-medium text-primary-foreground">Operating Hours</p>
                <p className="text-xs text-primary-foreground/75">Mon–Fri: 08:00 AM – 04:00 PM</p>
                <p className="text-xs text-primary-foreground/75">Sat–Sun: 08:00 AM – 12:00 PM</p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — form */}
        <Reveal direction="right" delay={150}>
          <div className="rounded-2xl bg-background p-8 text-foreground shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)] ring-1 ring-border/80 sm:p-10">
            {status === "success" ? (
              <div className="py-8 text-center animate-fade-in">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/30 shadow-inner">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 font-serif text-2xl sm:text-3xl text-foreground">
                  Thank You, {formData.name || "Customer"}!
                </h3>
                <p className="mt-3 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Your enquiry for <strong>{formData.interest}</strong> has been received. A design specialist will contact you at <strong>{formData.email}</strong> within 24 hours to schedule your free measure.
                </p>
                <div className="mt-8 pt-6 border-t border-border/80 flex flex-col items-center gap-3">
                  <p className="text-xs text-muted-foreground">Confirmation details sent to <strong>{formData.email}</strong></p>
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs font-medium uppercase tracking-widest text-accent hover:underline cursor-pointer"
                  >
                    Send another enquiry →
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {status === "error" && (
                  <div className="rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-xs text-destructive flex items-start gap-3">
                    <AlertCircle className="h-4 w-4 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold">Submission Issue</p>
                      <p className="mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}

                <Field
                  label="Name"
                  name="name"
                  required
                  placeholder="e.g. Charlotte Hayes"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="07123 456 789"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    placeholder="charlotte@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                </div>

                <Field
                  label="Postcode / Area"
                  name="postcode"
                  required
                  placeholder="e.g. SW3 4RD"
                  value={formData.postcode}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    Interested In <span className="text-accent">*</span>
                  </label>
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent disabled:opacity-60"
                  >
                    <option value="Plantation Shutters">Plantation Shutters</option>
                    <option value="Luxury Blinds">Luxury Blinds</option>
                    <option value="Both Shutters & Blinds">Both Shutters &amp; Blinds</option>
                    <option value="Commercial / Large Project">Commercial / Large Project</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
                    Message or Window Notes (optional)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Tell us about your windows, rooms, or any specific style preferences..."
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    className="w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground transition-all duration-200 focus:border-accent focus:outline-hidden focus:ring-1 focus:ring-accent disabled:opacity-60"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="shimmer-button mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground shadow-md transition-all duration-300 hover:bg-accent hover:text-charcoal hover:scale-[1.01] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none cursor-pointer"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin text-accent" />
                      Sending Request...
                    </>
                  ) : (
                    <>
                      Request Free Measure <ChevronRight className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Free · No obligation · No hard sales
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
