import { Link } from "react-router-dom";

export default function CarCard({ cars }) {

  return (
    <div className="car-grid">
      {cars?.map((car) => (
        <div key={car.id} className="car-Card">
          <div className="car-left">
            <h2>
              {car.carBrand} {car.name}
            </h2>
            {car.image && (
              <Link to={`/fahrzeuge/${car.id}`}>
                <img
                  className="carImage"
                  src={`data:image/jpeg;base64,${car.image}`}
                  alt="Car Image"
                />
              </Link>
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
      ))}
    </div>
  );
}
