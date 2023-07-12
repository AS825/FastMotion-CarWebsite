import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import Boss from "../assets/boss.jpg";
import cars1 from "../assets/cars-1.png";
import cars2 from "../assets/cars-2.png";
import Car from "../assets/Car.mp4";
import axios from "axios";
import CarCard from "./CarCard";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LandingPage() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/cars/size/2")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  console.log(cars);

  return (
    <div className="background">
      <div className="home-container">
        <section className="section-container section-hero">
          <div data-aos="fade-down" className="left">
            <h1>Erleben Sie die Welt der Premium-Fahrzeuge</h1>
            <p>
              Entdecken Sie unsere exklusive Auswahl an luxuriösen Fahrzeugen,
              die Leistung, Stil und Komfort vereinen.
            </p>
            <button className="hero-btn">
              <NavLink className="navlink" to="/fahrzeuge">
                Fahrzeuge
              </NavLink>
            </button>
            <div data-aos="fade-left">
              <CarCard cars={cars} />
            </div>
          </div>

          <div data-aos="fade-right" className="right">
            <img
              data-aos="fade-up"
              src={Logo}
              alt="fast-motors"
              className="logo-hero"
            />
            <video src={Car} muted autoPlay loop className="car-video"></video>
          </div>
        </section>
        <section className="section-container section-logos">
          <img src={cars1} alt="EMBLEMS-1" />
          <img src={cars2} alt="EMBLEMS-2" />
        </section>

        <section className="section-container section-info">
          <div className="info-container">
            <div data-aos="fade-up" className="info-text-container">
              <h1>FAST MOTORS</h1>
              <p>
                Willkommen bei Fast Motors, Ihrem exklusiven Anbieter für
                Luxusfahrzeuge der Spitzenklasse.
              </p>
              <p>
                Bei Fast Motors stehen Kundenzufriedenheit und ein erstklassiges
                Erlebnis an erster Stelle. Unser engagiertes Team von Fachleuten
                steht Ihnen zur Verfügung, um Sie bei der Auswahl Ihres
                Traumautos zu beraten und Ihnen einen erstklassigen Service zu
                bieten.
              </p>
              <p>
                Unser Portfolio umfasst erstklassige Marken wie Ferrari,
                Lamborghini, Bentley, Rolls-Royce und viele mehr. Egal, ob Sie
                ein sportliches Coupé, eine luxuriöse Limousine oder einen
                leistungsstarken SUV suchen, wir haben das perfekte Fahrzeug für
                Ihre Ansprüche.
              </p>
              <p>
                Zögern Sie nicht, uns zu kontaktieren, um einen Termin zu
                vereinbaren und Ihre automobilen Träume zu verwirklichen.
                Besuchen Sie unsere Ausstellungsräume, um unsere beeindruckende
                Sammlung von Luxusfahrzeugen hautnah zu erleben.
              </p>
              <p>
                Fast Motors - Wo Leistung, Eleganz und Luxus zusammenkommen.
              </p>
            </div>
            <img
              data-aos="fade-right"
              src={Boss}
              alt="CEO"
              className="ceo-img"
            />
          </div>
        </section>

        <section className="section-container section-footer">
          <img
            data-aos="fade-up"
            src={Logo}
            alt="fast-motors"
            className="logo-footer"
          />
          <Link to={"/impressum"} className="link-impressum">
            Impressum
          </Link>
        </section>
      </div>
    </div>
  );
}
