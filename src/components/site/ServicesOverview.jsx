import { ArrowRight, Car, Package, UtensilsCrossed, Brush, HardHat } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Car,
    title: "Uber Flottenpartner",
    desc: "Personenbeförderung und Flottenbetrieb mit der Uber-Plattform.",
    cta: "Mehr erfahren",
    href: "#uber-flotte",
  },
  {
    icon: Package,
    title: "Kurier & Paketlieferung",
    desc: "Zuverlässige und flexible Paketlieferung für Privat- und Geschäftskunden.",
    cta: "Lieferung anfragen",
    href: "#lieferung",
  },
  {
    icon: UtensilsCrossed,
    title: "Food Delivery",
    desc: "Lieferlösungen für Restaurants und Lebensmittelunternehmen.",
    cta: "Partner werden",
    href: "#lieferung",
  },
  {
    icon: Brush,
    title: "Reinigungsservice",
    desc: "Reinigung für Wohnungen, Büros und Gewerbeimmobilien.",
    cta: "Angebot anfragen",
    href: "#reinigung",
  },
  {
    icon: HardHat,
    title: "Baustellenservice",
    desc: "Flexible Unterstützung, Logistik und Reinigung für Baustellen und Renovierungsprojekte.",
    cta: "Anfrage senden",
    href: "#baustellenservice",
  },
];

export default function ServicesOverview() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="py-16 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Unsere Leistungen</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Ein Partner. Mehrere Lösungen.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Fünf aktive Dienstleistungsbereiche – gebündelt unter einem Dach.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <button
                onClick={() => scrollTo(s.href)}
                className="group relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.06] to-white/[0.01] p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-electric/30"
              >
                {/* glowing top accent */}
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-electric to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                {s.badge && (
                  <span className="absolute left-7 top-6 rounded-full border border-electric/40 bg-electric/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-electric">
                    {s.badge}
                  </span>
                )}

                <span className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-electric transition-all duration-300 group-hover:scale-110 group-hover:bg-electric group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>

                <h3 className="relative mt-6 font-heading text-lg font-semibold leading-snug text-white">
                  {s.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/50">{s.desc}</p>

                <span className="relative mt-6 inline-flex items-center gap-2 text-sm font-semibold text-electric">
                  {s.cta}
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-electric/15 transition-all duration-300 group-hover:bg-electric group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}