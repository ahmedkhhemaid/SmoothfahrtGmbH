import { ArrowRight, ArrowUpRight, Car, Package, UtensilsCrossed, Sparkles, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { fleetImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";

const services = [
  {
    icon: Car,
    title: "Uber Flottenpartner",
    desc: "Professionelle Personenbeförderung und Flottenbetrieb in Zusammenarbeit mit der Uber-Plattform.",
    cta: "Mehr erfahren",
    href: "#uber-flotte",
    feature: true,
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
    badge: "BALD",
    desc: "Wir erweitern unsere Delivery-Flotte für neue Möglichkeiten im Food Delivery.",
    cta: "Interesse anmelden",
    href: "#uber-eats",
  },
];

export default function ServicesOverview() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const feature = services.find((s) => s.feature);
  const rest = services.filter((s) => !s.feature);

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

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[200px]">
          {/* Feature card */}
          <Reveal className="md:col-span-2 lg:col-span-2 lg:row-span-2">
            <button
              onClick={() => scrollTo(feature.href)}
              className="group relative flex h-full w-full flex-col justify-end overflow-hidden rounded-2xl border border-white/10 text-left"
            >
              <Image
                src={fleetImage}
                alt="Uber Flottenpartner Fahrzeug"
                fittingType="fill"
                className="absolute inset-0 h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-carbon via-carbon/70 to-carbon/10" />
              <div className="relative p-8">
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-electric text-white shadow-lg shadow-electric/30">
                  <feature.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-md text-base leading-relaxed text-white/70">{feature.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition-colors group-hover:bg-electric">
                  {feature.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </button>
          </Reveal>

          {/* Compact cards */}
          {rest.map((s, i) => (
            <Reveal key={s.title} delay={0.08 * (i + 1)}>
              <button
                onClick={() => scrollTo(s.href)}
                className="group relative flex h-full w-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-electric/40 hover:bg-white/[0.06]"
              >
                {s.badge && (
                  <span className="absolute right-5 top-5 rounded-full border border-electric/40 bg-electric/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-electric">
                    {s.badge}
                  </span>
                )}
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-electric transition-colors group-hover:bg-electric group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/55">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-electric">
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