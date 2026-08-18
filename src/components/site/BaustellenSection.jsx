import { useState } from "react";
import {
  HardHat, Truck, Package, Sparkles, Trash2, Users,
  ArrowRight, Send, CheckCircle2, Check, ShieldAlert, Clock, ShieldCheck, Layers, MessageSquare, Handshake,
} from "lucide-react";
import Reveal from "./Reveal";
import { base44 } from "@/api/base44Client";
import { useToast } from "@/components/ui/use-toast";

const serviceAreas = [
  { icon: HardHat, title: "Baustellenhelfer", desc: "Flexible Unterstützung bei allgemeinen Arbeiten auf Baustellen und bei Renovierungsprojekten." },
  { icon: Truck, title: "Materialtransport", desc: "Unterstützung beim Transport und bei der Bereitstellung von Materialien innerhalb des Projekts." },
  { icon: Package, title: "Be- und Entladehilfe", desc: "Unterstützung beim Be- und Entladen von Materialien, Werkzeugen und Lieferungen." },
  { icon: Sparkles, title: "Baustellenreinigung", desc: "Reinigung und Ordnung während oder nach Bau- und Renovierungsarbeiten." },
  { icon: Trash2, title: "Entrümpelung & Aufräumarbeiten", desc: "Unterstützung bei Aufräumarbeiten sowie beim Entfernen nicht mehr benötigter Materialien im Rahmen des Projekts." },
  { icon: Users, title: "Flexible Projektunterstützung", desc: "Zusätzliche Unterstützung nach Absprache für kurzfristige oder laufende Projekte." },
];

const targetCustomers = [
  "Bauunternehmen", "Handwerksbetriebe", "Immobilienunternehmen",
  "Hausverwaltungen", "Renovierungsfirmen", "Projektleiter", "Gewerbliche Auftraggeber",
];

const benefits = [
  { icon: Layers, label: "Flexible Einsatzmöglichkeiten" },
  { icon: Clock, label: "Kurzfristige Unterstützung" },
  { icon: MessageSquare, label: "Zuverlässige Kommunikation" },
  { icon: Check, label: "Einzelne Einsätze oder laufende Projekte" },
  { icon: Handshake, label: "Individuelle Lösungen für Geschäftskunden" },
  { icon: ShieldCheck, label: "Mehrere Dienstleistungen, ein Ansprechpartner" },
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

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

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
    <section id="baustellenservice" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Baustellenservice</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Zuverlässige Unterstützung für Ihre Baustelle
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Wir unterstützen Bauunternehmen, Handwerksbetriebe, Projektleiter und Immobilienunternehmen mit flexiblen
            Dienstleistungen rund um Baustellen und Renovierungsprojekte. Schnell verfügbar, zuverlässig organisiert
            und individuell auf Ihren Bedarf abgestimmt.
          </p>
        </Reveal>

        {/* Service areas */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {serviceAreas.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group h-full rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-electric transition-all duration-300 group-hover:scale-110 group-hover:bg-electric group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Target customers + benefits */}
        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-heading text-xl font-semibold text-white">Für wen wir arbeiten</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {targetCustomers.map((c) => (
                  <span key={c} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70">
                    <span className="h-1.5 w-1.5 rounded-full bg-electric/70" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="font-heading text-xl font-semibold text-white">Ihre Vorteile</h3>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {benefits.map((b) => (
                  <li key={b.label} className="flex items-center gap-3 rounded-xl bg-white/[0.03] px-4 py-3 border border-white/10">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/15 text-electric">
                      <b.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/80">{b.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Disclaimer */}
        <Reveal delay={0.1}>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <ShieldAlert className="h-5 w-5 shrink-0 text-electric/80 mt-0.5" />
            <p className="text-sm text-white/55">
              Wir bieten <span className="text-white/80 font-medium">Baustellenunterstützung, Logistik, Reinigung und Hilfsarbeiten</span> –
              keine reglementierten Facharbeiten wie Elektro-, Sanitär-, Heizungs-, Dachdecker- oder meisterpflichtige Handwerksarbeiten.
            </p>
          </div>
        </Reveal>

        {/* CTAs */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("#baustellen-form")}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#005691] to-[#00A69C] px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity"
            >
              Baustellenservice anfragen <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={() => scrollTo("#baustellen-form")}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-7 py-3.5 text-base font-semibold text-white hover:bg-white/15 transition-colors"
            >
              Individuelles Angebot erhalten
            </button>
          </div>
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1}>
          <div id="baustellen-form" className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 scroll-mt-28">
            {done ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2 className="h-16 w-16 text-electric" />
                <h3 className="mt-4 font-heading text-2xl font-semibold text-white">Vielen Dank für Ihre Anfrage!</h3>
                <p className="mt-2 text-white/60">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={submit} className="grid sm:grid-cols-2 gap-5">
                <Field label="Firma">
                  <input value={form.firma} onChange={update("firma")} className="b-input" />
                </Field>
                <Field label="Ansprechpartner *">
                  <input required value={form.ansprechpartner} onChange={update("ansprechpartner")} className="b-input" />
                </Field>
                <Field label="Telefonnummer *">
                  <input required value={form.telefon} onChange={update("telefon")} className="b-input" />
                </Field>
                <Field label="E-Mail-Adresse *">
                  <input required type="email" value={form.email} onChange={update("email")} className="b-input" />
                </Field>
                <Field label="Einsatzort">
                  <input value={form.einsatzort} onChange={update("einsatzort")} className="b-input" />
                </Field>
                <Field label="Gewünschte Leistung *">
                  <select value={form.leistung} onChange={update("leistung")} className="b-input">
                    {leistungOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>
                <Field label="Gewünschter Zeitraum">
                  <input value={form.zeitraum} onChange={update("zeitraum")} className="b-input" placeholder="z. B. KW 35 oder ab sofort" />
                </Field>
                <Field label="Anzahl benötigter Mitarbeiter">
                  <input value={form.anzahl} onChange={update("anzahl")} className="b-input" placeholder="z. B. 2–3" />
                </Field>
                <Field label="Nachricht" full>
                  <textarea rows={4} value={form.nachricht} onChange={update("nachricht")} className="b-input resize-none" />
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

      <style>{`
        .b-input {
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
        .b-input::placeholder { color: hsl(0 0% 100% / 0.4); }
        .b-input:focus { border-color: hsl(176 100% 33%); box-shadow: 0 0 0 3px hsl(176 100% 33% / 0.15); }
        .b-input option { color: hsl(205 50% 8%); }
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