import { ArrowRight, ShieldCheck, Users, SlidersHorizontal, MessageSquare } from "lucide-react";
import Reveal from "./Reveal";
import { heroImage, company } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const trust = [
  { icon: ShieldCheck, label: "Zuverlässiger Service" },
  { icon: Users, label: "Professionelles Team" },
  { icon: SlidersHorizontal, label: "Flexible Lösungen" },
  { icon: MessageSquare, label: "Schnelle Kommunikation" },
];

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="startseite" className="relative min-h-screen flex items-center overflow-hidden bg-carbon">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Premium Fahrzeug und Lieferfahrzeug in modernem Stadtplatz bei Dämmerung"
          fittingType="fill"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/80 to-carbon/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-carbon via-transparent to-carbon/40" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-20 lg:pt-32 lg:pb-28">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/80 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-electric animate-pulse-glow" />
              Ein Partner. Mehrere Lösungen.
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-heading text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight text-white text-balance">
              Mobilität. Lieferung. Reinigung.
              <span className="block text-electric">Alles aus einer Hand.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/70">
              Professionelle Dienstleistungen für Mobilität, Logistik, Food Delivery und Reinigung –
              zuverlässig, flexibel und effizient.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("#leistungen")}
                className="group inline-flex items-center justify-center gap-2 rounded-md bg-electric px-7 py-4 text-base font-semibold text-white shadow-xl shadow-electric/30 hover:bg-electric/90 transition-all"
              >
                Unsere Leistungen
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollTo("#kontakt")}
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur hover:bg-white/10 transition-all"
              >
                Kontakt aufnehmen
              </button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 max-w-2xl">
              {trust.map((t) => (
                <div key={t.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-electric">
                    <t.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-medium text-white/80 leading-tight">{t.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-carbon to-transparent" />
    </section>
  );
}