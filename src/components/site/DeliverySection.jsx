import { ArrowRight, Package, UtensilsCrossed, Zap, ShieldCheck, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { deliveryImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const cards = [
  {
    icon: Package,
    title: "Paket & Kurier",
    points: [
      "Same-day Lieferung",
      "Terminierte Lieferung",
      "Geschäftskunden-Lieferung",
      "Private Lieferung",
      "Zuverlässige Kuriere",
      "Flexible Lieferlösungen",
    ],
    cta: "Lieferung anfragen",
    href: "#kontakt",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    points: [
      "Restaurant-Lieferung",
      "Last-Mile Delivery",
      "Professionelle Kuriere",
      "Flexible Lieferkapazität",
      "Geschäftspartnerschaften",
    ],
    cta: "Partnerschaft anfragen",
    href: "#kontakt",
  },
];

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
    <section id="lieferung" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-end">
          <Reveal className="lg:col-span-7">
            <span className="text-sm font-semibold uppercase tracking-widest text-electric">Logistik & Lieferung</span>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Schnell. Sicher. Zuverlässig geliefert.
            </h2>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              Paket- und Food-Delivery-Lösungen für Privat- und Geschäftskunden – termingerecht, transparent und mit professionellen Kurieren.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="flex flex-col gap-3">
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
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
          <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10">
            <Image
              src={deliveryImage}
              alt="Professionelle Paketübergabe durch Kurier"
              fittingType="fill"
              className="aspect-[21/9] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-carbon via-carbon/40 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs">
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

        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-electric/30">
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-electric to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-electric transition-all duration-300 group-hover:scale-110 group-hover:bg-electric group-hover:text-white">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <h3 className="font-heading text-2xl font-semibold text-white">{c.title}</h3>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 flex-1">
                  {c.points.map((p) => (
                    <span
                      key={p}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/70 transition-colors group-hover:border-electric/30 group-hover:text-white/90"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-electric/70" />
                      {p}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => scrollTo(c.href)}
                  className="mt-8 inline-flex items-center justify-center gap-2 self-start rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-electric"
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}