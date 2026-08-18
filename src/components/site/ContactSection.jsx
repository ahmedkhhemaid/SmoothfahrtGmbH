import { useState } from "react";
import { Phone, Mail, MessageCircle, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/companyInfo";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

const serviceOptions = [
  "Uber / Fahrservice",
  "Als Uber Fahrer arbeiten",
  "Paketlieferung",
  "Food Delivery",
  "Reinigung",
  "Baustellenservice",
  "Uber Eats",
  "Geschäftspartnerschaft",
  "Sonstiges",
];

export default function ContactSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    service: "Uber / Fahrservice",
    message: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.Lead.create({
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        service_requested: form.service,
        message: form.message,
      });
      setDone(true);
      toast({ title: "Anfrage gesendet", description: "Wir melden uns schnellstmöglich bei Ihnen." });
    } catch (err) {
      toast({ title: "Fehler", description: "Bitte versuchen Sie es erneut.", variant: "destructive" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="kontakt" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Kontakt</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Wie können wir Ihnen helfen?
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-5 gap-8">
          <Reveal className="lg:col-span-2">
            <div className="flex flex-col gap-4 h-full">
              <a href={`tel:${company.phoneHref}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-electric/40 transition-colors">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric text-white">
                  <Phone className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-white/50">Telefon</p>
                  <p className="font-heading font-semibold text-white group-hover:text-electric transition-colors">{company.phone}</p>
                </div>
              </a>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-electric/40 transition-colors">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric text-white">
                  <Mail className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-white/50">E-Mail</p>
                  <p className="font-heading font-semibold text-white group-hover:text-electric transition-colors break-all">{company.email}</p>
                </div>
              </a>
              <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-electric/40 transition-colors">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-electric text-white">
                  <MessageCircle className="h-6 w-6" />
                </span>
                <div>
                  <p className="text-sm text-white/50">WhatsApp</p>
                  <p className="font-heading font-semibold text-white group-hover:text-electric transition-colors">Direkt schreiben</p>
                </div>
              </a>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 mt-auto">
                <p className="text-sm text-white/50">Geschäftsadresse</p>
                <p className="mt-1 font-heading font-semibold text-white">{company.address}</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              {done ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle2 className="h-16 w-16 text-electric" />
                  <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Vielen Dank für Ihre Anfrage!</h3>
                  <p className="mt-2 text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
                  <Field label="Ich interessiere mich für:" full>
                    <select value={form.service} onChange={update("service")} className="c-input">
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Name *">
                    <input required value={form.name} onChange={update("name")} className="c-input" />
                  </Field>
                  <Field label="Firma (optional)">
                    <input value={form.company} onChange={update("company")} className="c-input" />
                  </Field>
                  <Field label="Telefonnummer">
                    <input value={form.phone} onChange={update("phone")} className="c-input" />
                  </Field>
                  <Field label="E-Mail *">
                    <input required type="email" value={form.email} onChange={update("email")} className="c-input" />
                  </Field>
                  <Field label="Nachricht" full>
                    <textarea rows={4} value={form.message} onChange={update("message")} className="c-input resize-none" />
                  </Field>
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="inline-flex items-center gap-2 rounded-md bg-electric px-7 py-4 text-base font-semibold text-white shadow-lg shadow-electric/20 hover:bg-electric/90 transition-all disabled:opacity-60"
                    >
                      {submitting ? "Wird gesendet…" : "Anfrage senden"}
                      {!submitting && <Send className="h-4 w-4" />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .c-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid hsl(0 0% 100% / 0.15);
          background: hsl(0 0% 100% / 0.05);
          padding: 0.75rem 1rem;
          color: white;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .c-input::placeholder { color: hsl(0 0% 100% / 0.4); }
        .c-input:focus { border-color: hsl(220 100% 50%); box-shadow: 0 0 0 3px hsl(220 100% 50% / 0.15); }
        .c-input option { color: hsl(240 6% 4%); }
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