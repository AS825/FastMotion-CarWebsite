import { useState, useEffect } from "react";
import AOS from "aos";
import axios from "axios";
import { Chart } from "react-google-charts";

export default function TestdrivesTable() {
  const [testdrives, setTestDrives] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [cars, setCars] = useState([]);

  const getCar = () => {
    axios
      .get(`http://localhost:8080/cars`)
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCar();
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/testdrives/data")
      .then((response) => {
        const responseData = response.data;
        const chartData = convertToChartData(responseData);
        console.log(chartData);
        setChartData(chartData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  

  function convertToChartData(responseData, cars) {
    const chartData = [["Car", "Amount"]];
    Object.entries(responseData).forEach(([key, amount]) => {
      const car = cars?.find((car) => car.id === key);
      const label = car ? `car ${car.carBrand}` : `ID ${key}`;
      const label2 = `${label} - ${String(amount)}`;
      chartData.push([label2, amount]);
      console.log(cars);
    });
  
    console.log(chartData);
    return chartData;
  }
  
  

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  useEffect(() => {
    axios
      .get("http://localhost:8080/testdrives ")
      .then((res) => {
        const data = res.data;
        setTestDrives(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="probefahrt">
      <h2>Probefahrten</h2>
      <div className="table">
        <div className="table-header">
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Auto ID
            </a>
          </div>
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Hersteller
            </a>
          </div>
          <div className="header__item">
            <a id="name" className="filter__link" href="#">
              Typ
            </a>
          </div>
          <div className="header__item">
            <a id="wins" className="filter__link filter__link--number" href="#">
              Kunde
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Datum
            </a>
          </div>
          <div className="header__item">
            <a
              id="draws"
              className="filter__link filter__link--number"
              href="#"
            >
              Uhrzeit
            </a>
          </div>
        </div>
        <div className="table-content">
          {testdrives?.map((drive) => {
            const car = cars.find((car) => car.id === drive.carId);
            return (
              <div key={drive.id} className="table-row">
                <p className="table-data">{drive.carId}</p>
                <p className="table-data">{car ? car.carBrand : ""}</p>
                <p className="table-data">{car ? car.name : ""}</p>
                <p className="table-data">{drive.fullName}</p>
                <p className="table-data">{drive.localDate}</p>
                <p className="table-data">{drive.localTime}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="diagramm">
        <h2>Diagramm</h2>
        <Chart
          chartType="PieChart"
          width="100%"
          height="400px"
          data={chartData}
          options={{
            title: "Test Drive Counts",
          }}
        />
      </div>
    </div>
  );
}
