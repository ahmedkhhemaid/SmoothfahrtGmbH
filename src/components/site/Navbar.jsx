import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company, navItems } from "@/lib/companyInfo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-steel shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? "h-16" : "h-20"}`}>
          <button onClick={() => handleNav("#startseite")} className="flex items-center gap-2.5 group">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-carbon text-white font-heading font-bold text-lg">
              U
            </span>
            <span className="font-heading text-lg font-semibold tracking-tight text-carbon">
              Urban<span className="text-electric">Services</span>
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="px-3 py-2 text-sm font-medium text-carbon/70 hover:text-electric transition-colors rounded-md"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${company.phoneHref}`}
              className="flex items-center gap-2 text-sm font-medium text-carbon/70 hover:text-electric transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{company.phone}</span>
            </a>
            <button
              onClick={() => handleNav("#kontakt")}
              className="rounded-full bg-electric px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric/20 hover:bg-electric/90 transition-all hover:shadow-electric/30"
            >
              Kontakt aufnehmen
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-carbon"
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden glass border-t border-steel">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.href)}
                className="block w-full text-left px-3 py-2.5 text-base font-medium text-carbon/80 hover:bg-concrete rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav("#kontakt")}
              className="mt-2 w-full rounded-full bg-electric px-5 py-3 text-base font-semibold text-white"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}