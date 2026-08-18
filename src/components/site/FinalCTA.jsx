import { ArrowRight, Phone } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/companyInfo";

export default function FinalCTA() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 lg:py-28 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="absolute inset-0 bg-grid opacity-[0.05]" />
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-electric/30 blur-3xl" />
            <div className="relative">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                Sie suchen einen zuverlässigen Partner?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-white/60">
                Ob Mobilität, Lieferung oder Reinigung – sprechen Sie mit uns über Ihre Anforderungen.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-electric px-7 py-4 text-base font-semibold text-white shadow-xl shadow-electric/30 hover:bg-electric/90 transition-all"
                >
                  Jetzt Kontakt aufnehmen
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-base font-semibold text-white hover:bg-white/10 transition-all"
                >
                  <Phone className="h-5 w-5" />
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}