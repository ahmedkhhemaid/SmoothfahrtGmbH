import { ShieldCheck, HeartHandshake, SlidersHorizontal, Award, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import { aboutImage } from "@/lib/companyInfo";
import { Image } from "@/components/ui/image";
import SmoothFahrtLogo from "@/components/site/SmoothFahrtLogo";

const values = [
  { icon: ShieldCheck, label: "Zuverlässigkeit" },
  { icon: HeartHandshake, label: "Verantwortung" },
  { icon: SlidersHorizontal, label: "Flexibilität" },
  { icon: Award, label: "Qualität" },
  { icon: TrendingUp, label: "Wachstum" },
];

export default function AboutUs() {
  return (
    <section id="ueber-uns" className="py-24 lg:py-32 bg-carbon">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src={aboutImage}
                alt="SmoothFahrt Transporter am Logistikstandort bei Dämmerung"
                fittingType="fill"
                className="aspect-[4/3] w-full object-cover"
              />
              {/* SmoothFahrt logo decal on the rear side panel, aligned with the window */}
              <div className="absolute left-[80%] top-[55%] -translate-x-1/2 -translate-y-1/2 flex items-center px-2 py-2 rounded-lg">
                <SmoothFahrtLogo className="h-12 w-12" />
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-widest text-electric">Über uns</span>
              <h2 className="mt-3 font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
                Mehr als nur ein Dienstleister
              </h2>
              <p className="mt-5 text-lg text-white/60">
                Wir verbinden Mobilität, Logistik, Lieferung und Reinigung unter einem Dach. Als unabhängiger
                Dienstleister bieten wir Unternehmen und Privatkunden zuverlässige Lösungen aus einer Hand –
                flexibel, professionell und mit klarem Fokus auf Qualität.
              </p>
              <p className="mt-4 text-base text-white/60">
                Unser wachsendes Serviceportfolio wird kontinuierlich erweitert, um den Anforderungen unserer
                Kunden und Partner gerecht zu werden.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/40">Unsere Werte</p>
                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {values.map((v) => (
                    <div key={v.label} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3">
                      <v.icon className="h-5 w-5 text-electric" />
                      <span className="text-sm font-medium text-white/80">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}