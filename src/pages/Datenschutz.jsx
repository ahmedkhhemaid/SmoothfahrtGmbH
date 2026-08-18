import LegalLayout from "@/components/site/LegalLayout";
import { company } from "@/lib/companyInfo";

export default function Datenschutz() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Datenschutz auf einen Blick</h2>
      <p>
        Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre Daten
        vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO) sowie dieser
        Datenschutzerklärung.
      </p>

      <h2>2. Verantwortliche Stelle</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
        {company.name}<br />
        {company.address}<br />
        E-Mail: <a href={`mailto:${company.email}`} className="text-electric">{company.email}</a>
      </p>

      <h2>3. Erhebung und Speicherung von Kontaktdaten</h2>
      <p>
        Wenn Sie uns über die Kontaktformulare oder per E-Mail kontaktieren, werden Ihre Angaben
        (Name, E-Mail, Telefon, Firma, gewünschte Dienstleistung und Nachricht) zur Bearbeitung
        Ihrer Anfrage und für den Fall von Anschlussfragen gespeichert.
      </p>

      <h2>4. Fahrer- und Kurierbewerbungen</h2>
      <p>
        Angaben von Interessenten, die als Fahrer oder Kurier arbeiten möchten, werden ausschließlich
        zur Bearbeitung der Bewerbung gespeichert und verwendet.
      </p>

      <h2>5. Rechtsgrundlage</h2>
      <p>
        Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung bzw.
        vorvertragliche Maßnahmen) sowie Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
      </p>

      <h2>6. Ihre Rechte</h2>
      <p>
        Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
        Datenübertragbarkeit und Widerspruch. Beschwerderecht bei der zuständigen Aufsichtsbehörde.
      </p>

      <p className="text-sm text-white/40 mt-10">
        Hinweis: Dies ist eine Datenschutz-Vorlage. Bitte lassen Sie diese vor Veröffentlichung
        rechtlich prüfen und an Ihre tatsächlichen Datenverarbeitungsprozesse anpassen.
      </p>
    </LegalLayout>
  );
}