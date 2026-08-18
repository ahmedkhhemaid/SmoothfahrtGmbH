import { Check, ArrowRight, Package, UtensilsCrossed } from "lucide-react";
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

export default function DeliverySection() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="lieferung" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Logistik & Lieferung</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Schnell. Sicher. Zuverlässig geliefert.
          </h2>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 transition-all hover:shadow-xl">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-electric shadow-sm">
                  <c.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl font-semibold text-white">{c.title}</h3>
                <ul className="mt-6 grid sm:grid-cols-2 gap-3 flex-1">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      {p}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => scrollTo(c.href)}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-electric transition-colors"
                >
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={deliveryImage}
              alt="Professionelle Paketübergabe durch Kurier"
              fittingType="fill"
              className="aspect-[21/9] w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}