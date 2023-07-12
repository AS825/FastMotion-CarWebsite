import { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Fahrzeuge() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/cars")
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
    <div  className="background-cars">
      <h1 data-aos="fade-right" className="cars-header-h1">Unsere Fahrzeuge</h1>
      <div className="carsPage">
        {cars?.map((car) => (
          <Link
            to={`/fahrzeuge/${car.id}`}
            key={car.id}
          >
            <div data-aos="fade-up" className="car">
              <div className="car-left">
                <h2>
                  {car.carBrand} {car.name}
                </h2>
                {car.image && (
                  <img
                    className="car-pic"
                    src={`data:image/jpeg;base64,${car.image}`}
                    alt="Car Image"
                  />
                )}
              </div>
              <div className="car-right">
                <div className="item">
                  <p className="item-1">Erstzulassung:</p>
                  <p className="item-2">{car.dom}</p>
                </div>
                <div className="item">
                  <p className="item-1">Kilometer:</p>
                  <p className="item-2">{car.mileage.toLocaleString()} km</p>
                </div>
                <div className="item">
                  <p className="item-1">Leistung</p>
                  <p className="item-2">{car.hp} PS</p>
                </div>
                <div className="item">
                  <p className="item-1">Preis:</p>
                  <p className="item-price">{car.price.toLocaleString()} €</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
