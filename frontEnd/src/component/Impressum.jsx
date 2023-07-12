import Logo from "../assets/Logo.png";
export default function Impressum() {
  return (
    <div className="background">
      <div className="impressum" data-aos="fade-down">
        <img
          data-aos="fade-up"
          src={Logo}
          alt="fast-motors"
          className="logo-footer"
        />

        <p>
          Angaben gemäß § 5 TMG:
          <br />
          Fiktive Autos GmbH
          <br />
          Musterstraße 123
          <br />
          12345 Fiktivstadt
        </p>

        <p>
          Vertreten durch:
          <br />
          Max Mustermann (Geschäftsführer)
        </p>

        <p>
          Kontakt:
          <br />
          Telefon: +49 123 456789
          <br />
          E-Mail: info@fiktiveautos.de
        </p>

        <p>
          Registereintrag:
          <br />
          Eintragung im Handelsregister.
          <br />
          Registergericht: Amtsgericht Fiktivstadt
          <br />
          Registernummer: HRB 12345
        </p>

        <p>
          Umsatzsteuer-ID:
          <br />
          Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz: DE
          123456789
        </p>

        <p>
          Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
          <br />
          Max Mustermann
          <br />
          Musterstraße 123
          <br />
          12345 Fiktivstadt
        </p>

        <p>
          Haftungsausschluss:
          <br />
          Die Fiktive Autos GmbH übernimmt keine Gewähr für die Aktualität,
          Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
          Informationen. Haftungsansprüche gegen das Autohaus, welche sich auf
          Schäden materieller oder immaterieller Art beziehen, die durch die
          Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
          die Nutzung fehlerhafter oder unvollständiger Informationen verursacht
          wurden, sind grundsätzlich ausgeschlossen.
        </p>
      </div>
    </div>
  );
}
