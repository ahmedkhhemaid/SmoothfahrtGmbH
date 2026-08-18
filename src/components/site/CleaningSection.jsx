import { Check, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { cleaningImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const services = [
  "Büroreinigung",
  "Wohnungsreinigung",
  "Gewerbereinigung",
  "Regelmäßige Reinigung",
  "Grundreinigung",
  "Individuelle Reinigungslösungen",
];

export default function CleaningSection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="reinigung" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal className="order-2 lg:order-1">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">Reinigungsservice</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Sauberkeit, auf die Sie sich verlassen können.
            </h2>
            <p className="mt-5 text-lg text-white/60">
              Professionelle Reinigung für Wohnungen, Büros und Gewerbeimmobilien – regelmäßig, einmalig
              oder als individuelle Lösung.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3 border border-white/10">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric/10 text-electric">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/80">{s}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={() => scrollTo("#kontakt")}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-electric px-7 py-4 text-base font-semibold text-white shadow-lg shadow-electric/20 hover:bg-electric/90 transition-all"
            >
              Kostenloses Angebot anfragen
              <ArrowRight className="h-5 w-4" />
            </button>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={cleaningImage}
                alt="Reinigungsfachkräfte bei der Büro- und Wohnungsreinigung"
                fittingType="fill"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}