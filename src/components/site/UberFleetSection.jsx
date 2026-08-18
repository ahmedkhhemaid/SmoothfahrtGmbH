import { Check, ArrowRight, Car, UserPlus } from "lucide-react";
import Reveal from "./Reveal";
import { fleetImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const highlights = [
  "Professionelle Fahrer",
  "Zuverlässige Fahrzeuge",
  "Flexible Einsatzzeiten",
  "Professionelles Flottenmanagement",
  "Unterstützung für Fahrer",
];

export default function UberFleetSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="uber-flotte" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={fleetImage}
                  alt="Professionelles Uber Flottenfahrzeug Innenraum bei Nacht"
                  fittingType="fill"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl bg-white/5 border border-white/10 p-6 shadow-xl max-w-[220px] backdrop-blur">
                <p className="font-heading text-3xl font-bold text-white">100%</p>
                <p className="mt-1 text-sm text-white/60">Unabhängiger Flottenpartner</p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric">Uber Flotte</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                Professioneller Uber Flottenpartner
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Wir betreiben professionelle Flotten und arbeiten mit Fahrern zusammen, die Personenbeförderung
                über die Uber-Plattform anbieten. Als unabhängiger Flottenpartner sorgen wir für zuverlässige
                Fahrzeuge und begleitende Unterstützung.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {highlights.map((h) => (
                  <li key={h} className="flex items-center gap-3 text-white/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/10 text-electric">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <Car className="h-7 w-7 text-electric" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">Für Fahrgäste & Geschäftspartner</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Professionelle Personenbeförderung und Mobilitätslösungen.
                  </p>
                  <button
                    onClick={() => scrollTo("#kontakt")}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white transition-colors"
                  >
                    Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <UserPlus className="h-7 w-7 text-electric" />
                  <h3 className="mt-4 font-heading text-lg font-semibold text-white">Für Fahrer</h3>
                  <p className="mt-2 text-sm text-white/60">
                    Interessierte Fahrer können uns kontaktieren, um der Flotte beizutreten.
                  </p>
                  <button
                    onClick={() => scrollTo("#kontakt")}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-electric hover:text-white transition-colors"
                  >
                    Fahrer werden <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}