import { ArrowRight, Package, UtensilsCrossed, Zap, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { deliveryImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const stats = [
  { icon: Zap, label: "Same-day Lieferung" },
  { icon: ShieldCheck, label: "Zuverlässige Kuriere" },
  { icon: Clock, label: "Flexible Kapazität" },
];

export default function DeliverySection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="lieferung" className="py-16 lg:py-20 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-6 items-end">
          <Reveal className="lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">Logistik & Lieferung</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Schnell. Sicher. Zuverlässig geliefert.
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/60">
              Paket- und Food-Delivery-Lösungen für Privat- und Geschäftskunden – termingerecht, transparent und mit professionellen Kurieren.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="flex flex-col gap-2">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-electric/15 text-electric">
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-white/80">{s.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-8 relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={deliveryImage}
              alt="Professionelle Paketübergabe durch Kurier"
              fittingType="fill"
              className="aspect-[3/1] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/40 to-transparent" />
            <div className="absolute bottom-5 left-5 max-w-xs">
              <span className="inline-flex items-center gap-2 rounded-full bg-electric/15 px-3 py-1 text-xs font-semibold text-electric backdrop-blur">
                <span className="h-1.5 w-1.5 rounded-full bg-electric animate-pulse" />
                Logistik & Lieferung
              </span>
              <p className="mt-3 font-heading text-xl font-semibold text-white">
                Eine Flotte. Zwei Dienstleistungen. Keine Kompromisse.
              </p>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}