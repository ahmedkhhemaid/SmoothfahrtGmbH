import LegalLayout from "@/components/site/LegalLayout";
import { company } from "@/lib/companyInfo";

export default function Impressum() {
  return (
    <LegalLayout title="Impressum">
      <p>Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz).</p>

      <h2>Diensteanbieter</h2>
      <p>
        {company.name}<br />
        {company.address}<br />
        {company.country}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: <a href={`tel:${company.phoneHref}`} className="text-electric">{company.phone}</a><br />
        E-Mail: <a href={`mailto:${company.email}`} className="text-electric">{company.email}</a>
      </p>

      <h2>Registereintrag</h2>
      <p>
        Handelsregister: {company.handelsregister}<br />
        Umsatzsteuer-Identifikationsnummer: {company.ustId}<br />
        Steuernummer: {company.steuernummer}
      </p>

      <h2>Verantwortlich für den Inhalt</h2>
      <p>{company.name}, {company.address}</p>

      <h2>Haftung für Inhalte</h2>
      <p>
        Als Diensteanbieter sind wir gemäß § 7 Abs.1 DDG für eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen.
      </p>

      <p>
        Diese Inhalte werden nach Bekanntwerden einer konkreten Rechtsverletzung umgehend entfernt.
      </p>
    </LegalLayout>
  );
}