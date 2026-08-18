import { useState } from "react";
import {
  HardHat, Truck, Package, Sparkles, Trash2, Users,
  Send, CheckCircle2, ShieldAlert,
} from "lucide-react";
import Reveal from "./Reveal";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

const serviceAreas = [
  { icon: HardHat, title: "Baustellenhelfer", desc: "Flexible Unterstützung bei allgemeinen Arbeiten." },
  { icon: Truck, title: "Materialtransport", desc: "Transport und Bereitstellung von Materialien." },
  { icon: Package, title: "Be- und Entladehilfe", desc: "Laden und Entladen von Material und Werkzeug." },
  { icon: Sparkles, title: "Baustellenreinigung", desc: "Reinigung und Ordnung während und nach den Arbeiten." },
  { icon: Trash2, title: "Entrümpelung", desc: "Aufräumarbeiten und Entsorgung nicht benötigter Materialien." },
  { icon: Users, title: "Projektunterstützung", desc: "Zusätzliche Hilfe für kurzfristige oder laufende Projekte." },
];

const targetCustomers = [
  "Bauunternehmen", "Handwerksbetriebe", "Immobilienunternehmen",
  "Hausverwaltungen", "Renovierungsfirmen", "Projektleiter", "Gewerbliche Auftraggeber",
];

const benefits = [
  "Flexible Einsatzmöglichkeiten",
  "Kurzfristige Unterstützung",
  "Zuverlässige Kommunikation",
  "Einzelne Einsätze oder laufende Projekte",
  "Individuelle Lösungen für Geschäftskunden",
  "Mehrere Dienstleistungen, ein Ansprechpartner",
];

const leistungOptions = [
  "Baustellenhelfer",
  "Materialtransport",
  "Be- und Entladehilfe",
  "Baustellenreinigung",
  "Entrümpelung / Aufräumarbeiten",
  "Sonstige Unterstützung",
];

export default function BaustellenSection() {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    firma: "",
    ansprechpartner: "",
    telefon: "",
    email: "",
    einsatzort: "",
    leistung: "Baustellenhelfer",
    zeitraum: "",
    anzahl: "",
    nachricht: "",
  });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await base44.entities.Baustellenanfrage.create({
        firma: form.firma,
        ansprechpartner: form.ansprechpartner,
        telefon: form.telefon,
        email: form.email,
        einsatzort: form.einsatzort,
        gewuenschte_leistung: form.leistung,
        gewuenschter_zeitraum: form.zeitraum,
        anzahl_mitarbeiter: form.anzahl,
        nachricht: form.nachricht,
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
    <section id="baustellenservice" className="py-20 lg:py-28 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Baustellenservice</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Zuverlässige Unterstützung für Ihre Baustelle
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Flexible Dienstleistungen rund um Baustellen und Renovierungsprojekte – schnell verfügbar, zuverlässig
            organisiert und individuell auf Ihren Bedarf abgestimmt.
          </p>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left: info */}
          <div className="lg:col-span-7 space-y-8">
            {/* Service areas */}
            <Reveal>
              <div className="grid sm:grid-cols-2 gap-4">
                {serviceAreas.map((s) => (
                  <div
                    key={s.title}
                    className="group flex gap-4 rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-5 transition-all duration-300 hover:border-electric/30"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-electric transition-all duration-300 group-hover:bg-electric group-hover:text-white">
                      <s.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-semibold text-white">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-white/55">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Target customers */}
            <Reveal delay={0.05}>
              <div>
                <h3 className="font-heading text-lg font-semibold text-white">Für wen wir arbeiten</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {targetCustomers.map((c) => (
                    <span
                      key={c}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-electric/70" />
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Benefits */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="font-heading text-lg font-semibold text-white">Ihre Vorteile</h3>
                <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                  {benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-electric/15 text-electric">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-white/80">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Disclaimer */}
            <Reveal delay={0.1}>
              <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <ShieldAlert className="h-5 w-5 shrink-0 text-electric/80 mt-0.5" />
                <p className="text-sm text-white/55">
                  Wir bieten <span className="text-white/80 font-medium">Baustellenunterstützung, Logistik, Reinigung und Hilfsarbeiten</span> –
                  keine reglementierten Facharbeiten wie Elektro-, Sanitär-, Heizungs-, Dachdecker- oder meisterpflichtige Handwerksarbeiten.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div id="baustellen-form" className="lg:sticky lg:top-24 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 sm:p-8 scroll-mt-24">
              <h3 className="font-heading text-xl font-semibold text-white">Baustellenservice anfragen</h3>
              <p className="mt-2 text-sm text-white/55">Schnelle Rückmeldung – meist innerhalb eines Werktages.</p>

              {done ? (
                <div className="flex flex-col items-center justify-center py-14 text-center">
                  <CheckCircle2 className="h-14 w-14 text-electric" />
                  <h3 className="mt-4 font-heading text-xl font-semibold text-white">Vielen Dank für Ihre Anfrage!</h3>
                  <p className="mt-2 text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="mt-6 grid gap-4">
                  <Field label="Firma">
                    <input value={form.firma} onChange={update("firma")} className="b-input" />
                  </Field>
                  <Field label="Ansprechpartner *">
                    <input required value={form.ansprechpartner} onChange={update("ansprechpartner")} className="b-input" />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Telefon *">
                      <input required value={form.telefon} onChange={update("telefon")} className="b-input" />
                    </Field>
                    <Field label="E-Mail *">
                      <input required type="email" value={form.email} onChange={update("email")} className="b-input" />
                    </Field>
                  </div>
                  <Field label="Einsatzort">
                    <input value={form.einsatzort} onChange={update("einsatzort")} className="b-input" placeholder="z. B. Mönchengladbach" />
                  </Field>
                  <Field label="Gewünschte Leistung *">
                    <select value={form.leistung} onChange={update("leistung")} className="b-input">
                      {leistungOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Zeitraum">
                      <input value={form.zeitraum} onChange={update("zeitraum")} className="b-input" placeholder="z. B. KW 35" />
                    </Field>
                    <Field label="Mitarbeiter">
                      <input value={form.anzahl} onChange={update("anzahl")} className="b-input" placeholder="z. B. 2–3" />
                    </Field>
                  </div>
                  <Field label="Nachricht">
                    <textarea rows={3} value={form.nachricht} onChange={update("nachricht")} className="b-input resize-none" />
                  </Field>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#005691] to-[#00A69C] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity disabled:opacity-60"
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
        .b-input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid hsl(0 0% 100% / 0.15);
          background: hsl(0 0% 100% / 0.05);
          padding: 0.7rem 0.95rem;
          color: white;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .b-input::placeholder { color: hsl(0 0% 100% / 0.4); }
        .b-input:focus { border-color: hsl(176 100% 33%); box-shadow: 0 0 0 3px hsl(176 100% 33% / 0.15); }
        .b-input option { color: hsl(205 50% 8%); }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-white/70">{label}</span>
      {children}
    </label>
  );
}