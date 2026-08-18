import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown, Car, Package, UtensilsCrossed, Sparkles, Clock } from "lucide-react";
import { company } from "@/lib/companyInfo";

const primaryLinks = [
  { label: "Startseite", href: "#startseite" },
  { label: "Leistungen", href: "#leistungen", dropdown: true },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

const serviceLinks = [
  { label: "Uber-Flotte", href: "#uber-flotte", icon: Car },
  { label: "Kurier & Paketlieferung", href: "#lieferung", icon: Package },
  { label: "Food Delivery", href: "#lieferung", icon: UtensilsCrossed },
  { label: "Reinigungsservice", href: "#reinigung", icon: Sparkles },
  { label: "Uber Eats – Demnächst", href: "#uber-eats", icon: Clock, soon: true },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll, { passive: true });
  }, []);

  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setServicesOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [servicesOpen]);

  const handleNav = (href) => {
    setOpen(false);
    setServicesOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto w-full max-w-6xl rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "h-14 border-white/10 bg-[#0c1622]/80 shadow-lg shadow-black/20"
            : "h-16 border-white/10 bg-[#0c1622]/70"
        } glass-dark backdrop-blur-xl`}
      >
        <div className="flex h-full items-center justify-between gap-4 px-4 sm:px-6">
          {/* Logo */}
          <button
            onClick={() => handleNav("#startseite")}
            className="flex items-center gap-2.5 group shrink-0"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-none bg-gradient-to-br from-[#005691] to-[#06A8BC] text-white font-heading font-bold text-sm tracking-tight">
              SF
            </span>
            <span className="flex flex-col leading-none text-left">
              <span className="font-heading text-base font-bold tracking-tight text-white">
                Smooth<span className="text-electric">Fahrt</span>
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
                GmbH
              </span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {primaryLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="relative" ref={dropRef}>
                  <button
                    onClick={() => setServicesOpen((v) => !v)}
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {servicesOpen && (
                    <div className="absolute left-1/2 top-full mt-2 -translate-x-1/2 w-64 rounded-xl border border-white/10 bg-[#11202e]/95 backdrop-blur-xl p-2 shadow-xl shadow-black/30 animate-fade-in">
                      {serviceLinks.map((s) => (
                        <button
                          key={s.label}
                          onClick={() => handleNav(s.href)}
                          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 hover:bg-white/5 hover:text-white transition-colors"
                        >
                          <s.icon className="h-4 w-4 text-electric shrink-0" />
                          <span className="flex-1">{s.label}</span>
                          {s.soon && (
                            <span className="text-[10px] font-semibold uppercase tracking-wide text-electric/80">
                              bald
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="px-3 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors rounded-lg"
                >
                  {item.label}
                </button>
              )
            )}
          </div>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleNav("#kontakt")}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors px-3 py-2"
            >
              Fahrer werden
            </button>
            <button
              onClick={() => handleNav("#kontakt")}
              className="rounded-none bg-gradient-to-r from-[#005691] to-[#00A69C] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-electric/25 hover:opacity-90 transition-opacity"
            >
              Kontakt aufnehmen
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg text-white"
            aria-label="Menü"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="pointer-events-auto lg:hidden absolute top-full inset-x-4 mt-2 rounded-2xl border border-white/10 bg-[#0c1622]/95 backdrop-blur-xl p-3 shadow-xl shadow-black/30 animate-fade-in">
          <div className="space-y-1">
            {primaryLinks.map((item) =>
              item.dropdown ? (
                <div key={item.label}>
                  <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white/40">
                    {item.label}
                  </div>
                  <div className="pl-2 space-y-1">
                    {serviceLinks.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => handleNav(s.href)}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm text-white/80 hover:bg-white/5 transition-colors"
                      >
                        <s.icon className="h-4 w-4 text-electric shrink-0" />
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleNav(item.href)}
                  className="block w-full text-left px-3 py-2.5 text-base font-medium text-white/85 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          <div className="mt-3 space-y-2 border-t border-white/10 pt-3">
            <a
              href={`tel:${company.phoneHref}`}
              className="flex items-center gap-2 px-3 py-2 text-sm text-white/70"
            >
              {company.phone}
            </a>
            <button
              onClick={() => handleNav("#kontakt")}
              className="w-full rounded-none bg-white/10 px-5 py-3 text-base font-semibold text-white"
            >
              Fahrer werden
            </button>
            <button
              onClick={() => handleNav("#kontakt")}
              className="w-full rounded-none bg-gradient-to-r from-[#005691] to-[#00A69C] px-5 py-3 text-base font-semibold text-white"
            >
              Kontakt aufnehmen
            </button>
          </div>
        </div>
      )}
    </header>
  );
}