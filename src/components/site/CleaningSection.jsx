import { ArrowRight, Sparkles } from "lucide-react";
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
    <section id="reinigung" className="py-16 lg:py-20 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          <Reveal className="lg:col-span-5 flex">
            <div className="flex flex-col justify-center">
              <span className="text-sm font-semibold uppercase tracking-widest text-electric">Reinigungsservice</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
                Sauberkeit, auf die Sie sich verlassen können.
              </h2>
              <p className="mt-4 text-base text-white/60">
                Professionelle Reinigung für Wohnungen, Büros und Gewerbeimmobilien – regelmäßig, einmalig oder individuell.
              </p>

              <button
                onClick={() => scrollTo("#kontakt")}
                className="mt-7 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#005691] to-[#00A69C] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity self-start"
              >
                Kostenloses Angebot anfragen
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-3xl border border-white/10">
              <Image
                src={cleaningImage}
                alt="Reinigungsservice für Büro und Wohnraum"
                fittingType="fill"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-carbon/20 to-transparent" />

              {/* Highlight pills */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <span
                      key={s}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-carbon/60 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-md"
                    >
                      <Sparkles className="h-3.5 w-3.5 text-electric" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}