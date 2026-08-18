import { ShieldCheck, SlidersHorizontal, MessageSquare, Users, Layers, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";

const benefits = [
  { icon: ShieldCheck, title: "Zuverlässigkeit", desc: "Wir nehmen Fristen, Zusagen und Servicequalität ernst." },
  { icon: SlidersHorizontal, title: "Flexibilität", desc: "Lösungen, die zu Unternehmen und Privatkunden passen." },
  { icon: MessageSquare, title: "Schnelle Kommunikation", desc: "Direkte und unkomplizierte Kommunikation." },
  { icon: Users, title: "Professionelles Team", desc: "Erfahrene und serviceorientierte Mitarbeiter." },
  { icon: Layers, title: "Mehrere Dienstleistungen", desc: "Mobilität, Lieferung und Reinigung aus einer Hand." },
  { icon: TrendingUp, title: "Wachstum & Innovation", desc: "Ständige Erweiterung in neue Servicebereiche." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-electric">Warum wir</span>
          <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-carbon text-balance">
            Warum Kunden und Partner mit uns arbeiten
          </h2>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <div className="group h-full rounded-2xl border border-steel bg-concrete p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:border-electric/30">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-electric shadow-sm transition-colors group-hover:bg-electric group-hover:text-white">
                  <b.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold text-carbon">{b.title}</h3>
                <p className="mt-2 text-sm text-carbon/60 leading-relaxed">{b.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}