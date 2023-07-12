import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
export default function FahrzeugPage() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [car, setCar] = useState([]);
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/cars/${id}`)
      .then((res) => {
        const data = res.data;
        setCar(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  console.log(car);
  return (
    <div className="background-car-detail">
      {car && (
        <div className="cardetails">
          <div className="car-left-detail">
            {car.image && (
              <img
                className="car-pic-detail"
                src={`data:image/jpeg;base64,${car.image}`}
                alt="Car Image"
              />
            )}
          </div>
          <div className="car-right-detail">
            <h2>
              {car.carBrand} {car.name}
            </h2>
            <div className="item-detail">
              <p className="item-1">Erstzulassung:</p>
              <p className="item-2">{car.dom}</p>
            </div>
            <div className="item-detail">
              <p className="item-1">Kilometer:</p>
              <p className="item-2">
                {car.mileage ? car.mileage.toLocaleString() : "N/A"} km
              </p>
            </div>
            <div className="item-detail">
              <p className="item-1">Leistung</p>
              <p className="item-2">{car.hp} PS</p>
            </div>
            <div className="item-detail">
              <p className="item-1">Preis:</p>
              <p className="item-price">
                {car.price ? car.price.toLocaleString() : "N/A"} €
              </p>
            </div>
            <div className="car-story">
              <h3>Hersteller</h3>
              <p>
                {car.carBrand} präsentiert ein bemerkenswertes Auto. Präzise
                gebaut und für Exzellenz konzipiert, beeindruckt dieses
                außergewöhnliche Fahrzeug mit beeindruckenden Eigenschaften, die
                es von der Masse abheben lassen. Erleben Sie den Nervenkitzel
                der Straße mit seinem leistungsstarken Motor und der
                geschmeidigen Handhabung.
              </p>
            </div>

            <div className="car-list">
              <h2>Ausstatung </h2>
              <p>
                Allradantrieb, Leichtmetallfelgen, ZentralverriegelungElektr.,
                FensterheberElektr., Wegfahrsperre, Servolenkung, ABS, ESP,
                Navigationssystem, Sitzheizung, Garantie, Regensensor,
                SportsitzeElektr., Seitenspiegel, Sportfahrwerk, Sportpaket,
                Bluetooth, BordcomputerElektr. SitzeinstellungHead-Up Display,
                Freisprecheinrichtung, Multifunktionslenkrad, Lichtsensor,
                Nebelscheinwerfer, Traktionskontrolle, Spurhalteassistent,
                Notbremsassistent, Schlüssellose, Zentralverriegelung,
                Totwinkel-AssistentSitzbelüftung, Alarmanlage, Armlehne,
                Berganfahrassistent, Lederlenkrad, Lordosenstütze, Notrufsystem,
                Reifendruckkontrolle, Schaltwippen, Soundsystem USB,
                Fernlichtassistent, Sommerreifen, Blendfreies Fernlicht,
                Scheinwerferreinigung, Ambiente-Beleuchtung, Apple CarPlay,
                Volldigitales Kombiinstrument, Induktionsladen für Smartphones,
                Musikstreaming integriert, Innenspiegel autom. abblendend,
                Einparkhilfe
              </p>
            </div>
            <Link to={`/probefahrt/${id}`} className="testdrive-link">
              Jetzt Probefahrt vereinbaren
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
