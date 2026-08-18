import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import { company } from "@/lib/companyInfo";

export default function LegalLayout({ title, children }) {
  return (
    <div className="bg-carbon min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-3xl w-full px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-electric transition-colors">
          <ArrowLeft className="h-4 w-4" /> Zurück zur Startseite
        </Link>
        <h1 className="mt-6 font-heading text-3xl sm:text-4xl font-bold tracking-tight text-white">{title}</h1>
        <div className="mt-8 prose-legal">{children}</div>
      </main>
      <Footer />
    </div>
  );
}