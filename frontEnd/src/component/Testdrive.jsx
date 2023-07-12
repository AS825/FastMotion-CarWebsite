import { useRef, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./Popup";
export default function Testdrive() {
  const [car, setCar] = useState([]);
  const { id } = useParams();
  const [timedPopup, setTimedPopup] = useState(false);
  const formRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(formRef.current);
    const carId = car.id;
    data.append("carId", carId);

    const jsonData = JSON.stringify(Object.fromEntries(data));
    console.log(jsonData);

    axios
      .post(`http://localhost:8080/testdrives`, jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((jsonData) => {
        console.log(jsonData);
        formRef.current.reset();
        setTimedPopup(!timedPopup);
        window.setTimeout(function () {
          window.location.href = "/fahrzeuge";
        }, 2000);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="background">
      <h1 data-aos="fade-right" className="cars-test">
        Probefahrt
      </h1>
      <div data-aos="fade-down" className="container">
        <div className="card">
          <div className="card-image">
            <img
              src={`data:image/jpeg;base64,${car.image}`}
              alt="carimage"
              className="carimage"
            />

            <h2 className="card-heading">
              <small>{car.carBrand}</small>
              <br />
              <small>{car.name}</small>
            </h2>
          </div>
          <form ref={formRef} onSubmit={handleSubmit} className="card-form">
            <div className="input">
              <input
                type="text"
                className="input-field"
                name="fullName"
                required
              />
              <label className="input-label">Name</label>
            </div>

            <div className="input">
              <input
                type="text"
                className="input-field"
                name="email"
                required
              />
              <label className="input-label">Email</label>
            </div>

            <div className="input">
              <input
                type="text"
                className="input-field"
                name="telephone"
                required
              />
              <label className="input-label">Telefon</label>
            </div>

            <div className="input">
              <input
                type="date"
                className="input-field"
                name="localDate"
                required
              />
            </div>

            <div className="input">
              <input
                type="time"
                className="input-field"
                name="localTime"
                required
              />
            </div>

            <div className="action">
              <button className="action-button" type="submit">
                Termin anfragen
              </button>
            </div>
          </form>
          <div className="card-info">
            <p>By signing up you are agreeing to our Terms and Conditions</p>
          </div>
        </div>
      </div>
      <Popup trigger={timedPopup}></Popup>
    </div>
  );
}
