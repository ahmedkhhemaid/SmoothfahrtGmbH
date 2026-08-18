import { useState } from "react";
import { ArrowRight, Bike, Store, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { eatsImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

const interestOptions = ["Fahrer / Kurier", "Restaurant", "Geschäftspartner", "Sonstiges"];

export default function UberEatsSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    interest: "Fahrer / Kurier",
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const interestedMap = {
        "Fahrer / Kurier": "Uber Eats",
        Restaurant: "Uber Eats",
        Geschäftspartner: "Uber Eats",
        Sonstiges: "Uber Eats",
      };
      await base44.entities.DriverApplication.create({
        first_name: form.first_name,
        last_name: form.last_name,
        phone: form.phone,
        email: form.email,
        interested_in: "Uber Eats",
        message: `Interesse: ${form.interest}. ${form.message}`,
      });
      setDone(true);
      toast({ title: "Interesse eingegangen", description: "Wir melden uns schnellstmöglich bei Ihnen." });
    } catch (err) {
      toast({ title: "Fehler", description: "Bitte versuchen Sie es erneut.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="uber-eats" aria-labelledby="eats-heading" className="relative py-24 lg:py-32 bg-carbon overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <Image src={eatsImage} alt="Food Delivery Kurier bei Nacht" fittingType="fill" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-electric px-4 py-1.5 text-xs font-bold tracking-widest text-white animate-pulse-glow">
            COMING SOON
          </span>
          <h2 id="eats-heading" className="mt-6 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Unser nächster Schritt: Uber Eats
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Wir erweitern unsere Delivery-Flotte und bereiten uns auf neue Möglichkeiten im Bereich Food Delivery vor.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full">
              <Bike className="h-8 w-8 text-electric" />
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">Fahrer / Kuriere</h3>
              <p className="mt-2 text-white/60">Du möchtest zukünftig mit uns als Kurier arbeiten?</p>
              <a
                href="#eats-form"
                onClick={(e) => { e.preventDefault(); document.querySelector("#eats-form")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white transition-colors"
              >
                Jetzt vormerken <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur h-full">
              <Store className="h-8 w-8 text-electric" />
              <h3 className="mt-5 font-heading text-xl font-semibold text-white">Restaurants / Geschäftspartner</h3>
              <p className="mt-2 text-white/60">Sie suchen einen zulässigen Delivery-Partner?</p>
              <a
                href="#kontakt"
                onClick={(e) => { e.preventDefault(); document.querySelector("#kontakt")?.scrollIntoView({ behavior: "smooth" }); }}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white transition-colors"
              >
                Partnerschaft anfragen <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div id="eats-form" className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
            {done ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="h-14 w-14 text-electric" />
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Vielen Dank für Ihr Interesse!</h3>
                <p className="mt-2 text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Vorname *">
                  <input required value={form.first_name} onChange={update("first_name")} className="form-input" />
                </Field>
                <Field label="Nachname *">
                  <input required value={form.last_name} onChange={update("last_name")} className="form-input" />
                </Field>
                <Field label="Telefonnummer *">
                  <input required value={form.phone} onChange={update("phone")} className="form-input" />
                </Field>
                <Field label="E-Mail *">
                  <input required type="email" value={form.email} onChange={update("email")} className="form-input" />
                </Field>
                <Field label="Interesse" full>
                  <select value={form.interest} onChange={update("interest")} className="form-input">
                    {interestOptions.map((o) => (
                      <option key={o} value={o} className="text-carbon">{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Nachricht" full>
                  <textarea rows={3} value={form.message} onChange={update("message")} className="form-input resize-none" />
                </Field>
                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-2 rounded-none bg-electric px-7 py-4 text-base font-semibold text-white shadow-lg shadow-electric/30 hover:bg-electric/90 transition-all disabled:opacity-60"
                  >
                    {submitting ? "Wird gesendet…" : "Interesse senden"}
                    {!submitting && <Send className="h-4 w-4" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>

      <style>{`
        .form-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid hsl(0 0% 100% / 0.15);
          background: hsl(0 0% 100% / 0.05);
          padding: 0.75rem 1rem;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input::placeholder { color: hsl(0 0% 100% / 0.4); }
        .form-input:focus { border-color: hsl(220 100% 50%); }
        .form-input option { color: hsl(240 6% 4%); }
      `}</style>
    </section>
  );
}

function Field({ label, children, full }) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-1.5 block text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}