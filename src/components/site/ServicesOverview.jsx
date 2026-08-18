import { ArrowRight, Car, Package, UtensilsCrossed, Sparkles, Clock } from "lucide-react";
import Reveal from "./Reveal";

const services = [
  {
    icon: Car,
    title: "Uber Flottenpartner",
    desc: "Professionelle Personenbeförderung und Flottenbetrieb in Zusammenarbeit mit der Uber-Plattform.",
    cta: "Mehr erfahren",
    href: "#uber-flotte",
    image: true,
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
    desc: "Professionelle Lieferlösungen für Restaurants und Lebensmittelunternehmen.",
    cta: "Partner werden",
    href: "#lieferung",
  },
  {
    icon: Sparkles,
    title: "Reinigungsservice",
    desc: "Professionelle Reinigung für Wohnungen, Büros und Gewerbeimmobilien.",
    cta: "Angebot anfragen",
    href: "#reinigung",
  },
  {
    icon: Clock,
    title: "Uber Eats",
    badge: "COMING SOON",
    desc: "Wir erweitern unsere Delivery-Flotte für neue Möglichkeiten im Food Delivery.",
    cta: "Interesse anmelden",
    href: "#uber-eats",
    dark: true,
  },
];

export default function ServicesOverview() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leistungen" className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Unsere Leistungen</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon text-balance">
            Ein Partner. Mehrere Lösungen.
          </h2>
          <p className="mt-5 text-lg text-carbon/60">
            Vier aktive Dienstleistungsbereiche und ein wachsender Service – gebündelt unter einem Dach.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                className={`group relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1.5 ${
                  s.dark
                    ? "bg-carbon border-electric/40 shadow-[0_0_30px_-8px] shadow-electric/40"
                    : "bg-concrete border-steel hover:border-electric/30 hover:shadow-xl"
                }`}
              >
                {s.badge && (
                  <span className="absolute top-6 right-6 rounded-full bg-electric px-3 py-1 text-xs font-bold tracking-wider text-white animate-pulse-glow">
                    {s.badge}
                  </span>
                )}
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition-colors ${
                    s.dark ? "bg-white/10 text-electric" : "bg-white text-electric group-hover:bg-electric group-hover:text-white"
                  }`}
                >
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className={`mt-6 font-heading text-xl font-semibold ${s.dark ? "text-white" : "text-carbon"}`}>
                  {s.title}
                </h3>
                <p className={`mt-3 flex-1 text-base leading-relaxed ${s.dark ? "text-white/60" : "text-carbon/60"}`}>
                  {s.desc}
                </p>
                <button
                  onClick={() => scrollTo(s.href)}
                  className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                    s.dark ? "text-electric hover:text-white" : "text-electric hover:text-carbon"
                  }`}
                >
                  {s.cta}
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