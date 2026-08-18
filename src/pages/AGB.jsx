import LegalLayout from "@/components/site/LegalLayout";
import { company } from "@/lib/companyInfo";

export default function AGB() {
  return (
    <LegalLayout title="Allgemeine Geschäftsbedingungen (AGB)">
      <h2>§ 1 Geltungsbereich</h2>
      <p>
        Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen {company.name}
        (nachfolgend „Anbieter“) und ihren Kunden über die Erbringung von Dienstleistungen aus den
        Bereichen Mobilität, Lieferung und Reinigung.
      </p>

      <h2>§ 2 Leistungen</h2>
      <p>
        Der Anbieter erbringt Dienstleistungen in den Bereichen Personenbeförderung als Uber
        Flottenpartner, Kurier- und Paketlieferung, Food Delivery sowie Reinigung. Der Umfang der
        jeweils geschuldeten Leistung ergibt sich aus der jeweiligen Auftragsbestätigung oder dem
        individuellen Servicevertrag.
      </p>

      <h2>§ 3 Vertragsschluss</h2>
      <p>
        Ein Vertrag kommt durch Annahme eines Angebots des Kunden durch den Anbieter zustande.
        Anfragen über die Website oder Kontaktformulare stellen noch kein bindendes Angebot dar.
      </p>

      <h2>§ 4 Preise und Zahlung</h2>
      <p>
        Es gelten die im jeweiligen Angebot oder Servicevertrag genannten Preise. Alle Preise
        verstehen sich zzgl. der gesetzlichen Umsatzsteuer, soweit ausgewiesen.
      </p>

      <h2>§ 5 Haftung</h2>
      <p>
        Der Anbieter haftet nach den gesetzlichen Bestimmungen. Für leichte Fahrlässigkeit haftet
        der Anbieter nur bei Verletzung wesentlicher Vertragspflichten und nur in Höhe des
        typischerweise vorhersehbaren Schadens.
      </p>

      <h2>§ 6 Schlussbestimmungen</h2>
      <p>
        Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne Bestimmungen unwirksam
        sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
      </p>

      <p className="text-sm text-carbon/40 mt-10">
        Hinweis: Dies ist eine AGB-Vorlage. Bitte lassen Sie diese vor Verwendung rechtlich prüfen
        und an Ihre tatsächlichen Geschäftsbedingungen anpassen.
      </p>
    </LegalLayout>
  );
}