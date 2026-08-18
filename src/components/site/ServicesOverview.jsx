import { ArrowUpRight, Car, Package, UtensilsCrossed, Sparkles, Clock } from "lucide-react";
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
    icon: Sparkles,
    title: "Reinigungsservice",
    desc: "Reinigung für Wohnungen, Büros und Gewerbeimmobilien.",
    cta: "Angebot anfragen",
    href: "#reinigung",
  },
  {
    icon: Clock,
    title: "Uber Eats",
    badge: "BALD",
    desc: "Erweiterung der Delivery-Flotte für neue Möglichkeiten.",
    cta: "Interesse anmelden",
    href: "#uber-eats",
  },
];

export default function ServicesOverview() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Unsere Leistungen</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Ein Partner. Mehrere Lösungen.
          </h2>
          <p className="mt-5 text-lg text-white/60">
            Vier aktive Dienstleistungsbereiche und ein wachsender Service – gebündelt unter einem Dach.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <button
                onClick={() => scrollTo(s.href)}
                className="group relative flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.06]"
              >
                {s.badge && (
                  <span className="absolute right-5 top-5 rounded-full border border-electric/40 bg-electric/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-electric">
                    {s.badge}
                  </span>
                )}
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{s.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
                  {s.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}