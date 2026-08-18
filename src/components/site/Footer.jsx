import { Phone, Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import { company } from "@/lib/companyInfo";
import SmoothFahrtLogo from "@/components/site/SmoothFahrtLogo";

const serviceLinks = [
  { label: "Uber Flottenpartner", href: "#uber-flotte" },
  { label: "Paketlieferung", href: "#lieferung" },
  { label: "Food Delivery", href: "#lieferung" },
  { label: "Reinigung", href: "#reinigung" },
  { label: "Baustellenservice", href: "#baustellenservice" },
];

const companyLinks = [
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const legalLinks = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
];

export default function Footer() {
  const go = (href) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  };

  return (
    <footer className="bg-carbon text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <SmoothFahrtLogo className="h-10 w-10" />
              <span className="font-heading text-lg font-semibold tracking-tight">
                Smooth<span className="text-electric">Fahrt</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/50 max-w-xs">
              Mobilität, Lieferung und Reinigung aus einer Hand – zuverlässig, flexibel und effizient.
            </p>
            <div className="mt-6 flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Media" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 hover:text-electric hover:border-electric/40 transition-colors">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Leistungen" links={serviceLinks} go={go} />
          <FooterCol title="Unternehmen" links={companyLinks} go={go} />
          <FooterCol title="Rechtliches" links={legalLinks} go={go} />

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/40">Kontakt</h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a href={`tel:${company.phoneHref}`} className="flex items-center gap-3 text-white/60 hover:text-electric transition-colors">
                  <Phone className="h-4 w-4" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-white/60 hover:text-electric transition-colors break-all">
                  <Mail className="h-4 w-4 shrink-0" /> {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {company.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-sm text-white/40">
          <p>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          <p>Unabhängiger Uber Flottenpartner.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, go }) {
  return (
    <div>
      <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/40">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <button onClick={() => go(l.href)} className="text-white/60 hover:text-electric transition-colors text-left">
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}