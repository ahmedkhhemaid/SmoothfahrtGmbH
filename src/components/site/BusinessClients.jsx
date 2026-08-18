import { Check, ArrowRight, Building2 } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  "Mitarbeitertransporte",
  "Paketlieferungen",
  "Kurierfahrten",
  "Food Delivery",
  "Büroreinigung",
  "Individuelle Serviceverträge",
];

export default function BusinessClients() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative py-24 lg:py-32 bg-carbon overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80">
                <Building2 className="h-4 w-4 text-electric" />
                Geschäftskunden
              </span>
              <h2 className="mt-5 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                Flexible Lösungen für Unternehmen
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Unternehmen können unsere Dienstleistungen kombinieren – von Mobilität über Lieferung bis zur
                Reinigung. Maßgeschneidert, zuverlässig und aus einer Hand.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <li key={s} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/20 text-electric">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{s}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 text-base font-semibold text-white shadow-lg shadow-electric/30 hover:bg-electric/90 transition-all"
                >
                  Geschäftskunde werden
                </button>
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  Individuelles Angebot anfragen
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { k: "Mobilität", v: "Mitarbeiter- & Fahrgasttransporte" },
                { k: "Logistik", v: "Pakete, Kurier & Food Delivery" },
                { k: "Reinigung", v: "Büro & Gewerbe" },
                { k: "Verträge", v: "Individuelle Serviceverträge" },
              ].map((c) => (
                <div key={c.k} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <p className="font-heading text-xl font-semibold text-electric">{c.k}</p>
                  <p className="mt-2 text-sm text-white/60">{c.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}