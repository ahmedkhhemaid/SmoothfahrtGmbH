import { useState } from "react";
import { Phone, Mail, MessageCircle, Send, CheckCircle2, MapPin } from "lucide-react";
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
    <section id="kontakt" className="py-16 lg:py-20 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          <Reveal className="lg:col-span-2">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">Kontakt</span>
            <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white text-balance">
              Wie können wir helfen?
            </h2>
            <p className="mt-3 text-sm text-white/55">Wir melden uns schnellstmöglich bei Ihnen.</p>

            <div className="mt-6 flex flex-col gap-2.5">
              <a href={`tel:${company.phoneHref}`} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-electric/40 transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric text-white">
                  <Phone className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/45">Telefon</p>
                  <p className="text-sm font-semibold text-white group-hover:text-electric transition-colors truncate">{company.phone}</p>
                </div>
              </a>
              <a href={`mailto:${company.email}`} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-electric/40 transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric text-white">
                  <Mail className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs text-white/45">E-Mail</p>
                  <p className="text-sm font-semibold text-white group-hover:text-electric transition-colors truncate">{company.email}</p>
                </div>
              </a>
              <a href={company.whatsappLink} target="_blank" rel="noreferrer" className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 hover:border-electric/40 transition-colors">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric text-white">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-white/45">WhatsApp</p>
                  <p className="text-sm font-semibold text-white group-hover:text-electric transition-colors">Direkt schreiben</p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric text-white">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-white/45">Geschäftsadresse</p>
                  <p className="text-sm font-semibold text-white">{company.address}</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              {done ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 className="h-12 w-12 text-electric" />
                  <h3 className="mt-3 font-heading text-xl font-semibold text-white">Vielen Dank!</h3>
                  <p className="mt-1.5 text-sm text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="grid gap-3.5">
                  <Field label="Ich interessiere mich für:">
                    <select value={form.service} onChange={update("service")} className="c-input">
                      {serviceOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <Field label="Name *">
                      <input required value={form.name} onChange={update("name")} className="c-input" />
                    </Field>
                    <Field label="Firma">
                      <input value={form.company} onChange={update("company")} className="c-input" />
                    </Field>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3.5">
                    <Field label="Telefonnummer">
                      <input value={form.phone} onChange={update("phone")} className="c-input" />
                    </Field>
                    <Field label="E-Mail *">
                      <input required type="email" value={form.email} onChange={update("email")} className="c-input" />
                    </Field>
                  </div>
                  <Field label="Nachricht">
                    <textarea rows={3} value={form.message} onChange={update("message")} className="c-input resize-none" />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#005691] to-[#00A69C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity disabled:opacity-60"
                  >
                    {submitting ? "Wird gesendet…" : "Anfrage senden"}
                    {!submitting && <Send className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .c-input {
          width: 100%;
          border-radius: 0.6rem;
          border: 1px solid hsl(0 0% 100% / 0.15);
          background: hsl(0 0% 100% / 0.05);
          padding: 0.6rem 0.9rem;
          color: white;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .c-input::placeholder { color: hsl(0 0% 100% / 0.4); }
        .c-input:focus { border-color: hsl(176 100% 33%); box-shadow: 0 0 0 3px hsl(176 100% 33% / 0.15); }
        .c-input option { color: hsl(205 50% 8%); }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}