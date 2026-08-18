import { ArrowRight, Bike, Clock, ShieldCheck, UtensilsCrossed } from "lucide-react";
import Reveal from "./Reveal";
import { Image } from "@/components/ui/image";

const foodDeliveryImage =
  "https://media.base44.com/images/public/6a849815724cee83fdb039d2/8ca76aed3_generated_image.png";

const highlights = [
  { icon: Bike, label: "Eigene Kuriere" },
  { icon: Clock, label: "Schnelle Lieferung" },
  { icon: ShieldCheck, label: "Zuverlässig & transparent" },
];

export default function FoodDeliverySection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="food-delivery" className="py-16 lg:py-24 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
              <Image
                src={foodDeliveryImage}
                alt="Food Delivery mit Uber Eats Partner-Bag"
                fittingType="fill"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1.5 text-xs font-semibold text-electric backdrop-blur">
                <UtensilsCrossed className="h-3.5 w-3.5" />
                Bald Uber Eats Partner
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric">Food Delivery</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                Frisch geliefert – bald auch mit Uber Eats
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Wir bauen unser Delivery-Angebot weiter aus und bereiten uns darauf vor, offizieller
                Uber Eats Partner zu werden. Mit eigener Flotte und zuverlässigen Kurieren bringen wir
                Essen schnell und sicher ans Ziel.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric/15 text-electric shrink-0">
                      <h.icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/80">{h.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => scrollTo("#kontakt")}
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-[#005691] to-[#00A69C] px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity"
                >
                  Anfrage senden <ArrowRight className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollTo("#uber-eats")}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Fahrer werden
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}