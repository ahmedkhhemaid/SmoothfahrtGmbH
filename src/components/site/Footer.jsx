import { Phone, Mail, MapPin } from "lucide-react";
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
        <div className="grid gap-10 lg:grid-cols-4 text-center lg:text-left items-start">
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-2.5 justify-center lg:justify-start">
              <SmoothFahrtLogo className="h-10 w-10" />
              <span className="font-heading text-lg font-semibold tracking-tight">
                Smooth<span className="text-electric">Fahrt</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-white/50 max-w-xs mx-auto lg:mx-0">
              Mobilität, Lieferung und Reinigung aus einer Hand – zuverlässig, flexibel und effizient.
            </p>
          </div>

          <FooterCol title="Leistungen" links={serviceLinks} go={go} />
          <FooterCol title="Unternehmen" links={companyLinks} go={go} />
          <FooterCol title="Rechtliches" links={legalLinks} go={go} />
        </div>

        <div className="mt-10 text-center lg:text-left">
          <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/40">Kontakt</h3>
          <ul className="mt-5 flex flex-col sm:flex-row sm:flex-wrap gap-x-10 gap-y-4 text-sm items-center sm:items-start justify-center lg:justify-start">
            <li>
              <a href={`tel:${company.phoneHref}`} className="inline-flex items-center gap-3 text-white/60 hover:text-electric transition-colors justify-center lg:justify-start">
                <Phone className="h-4 w-4" /> {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="inline-flex items-center gap-3 text-white/60 hover:text-electric transition-colors break-all justify-center lg:justify-start">
                <Mail className="h-4 w-4 shrink-0" /> {company.email}
              </a>
            </li>
            <li className="inline-flex items-start gap-3 text-white/60 justify-center lg:justify-start text-center lg:text-left">
              <MapPin className="h-4 w-4 shrink-0 mt-0.5" /> {company.address}
            </li>
          </ul>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-center lg:justify-between gap-4 text-sm text-white/40 text-center lg:text-left">
          <p>© {new Date().getFullYear()} {company.name}. Alle Rechte vorbehalten.</p>
          <p>Unabhängiger Uber Flottenpartner.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, go }) {
  return (
    <div className="text-center lg:text-left">
      <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-white/40">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            <button onClick={() => go(l.href)} className="text-white/60 hover:text-electric transition-colors text-center lg:text-left w-full">
              {l.label}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}