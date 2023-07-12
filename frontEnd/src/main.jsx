import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import ErrorPage from './component/ErrorPage';
import Navbar from './component/Navbar';
import LandingPage from './component/LandingPage';
import Unternehmen from './component/Unternehmen';
import Kontakt from './component/Kontakt';
import Impressum from './component/Impressum';
import Fahrzeuge from './component/Fahrzeuge';
import FahrzeugPage from './component/FahrzeugPage';
import Testdrive from './component/Testdrive';
import TestdrivesTable from './component/TestdrivesTable';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/unternehmen",
        element: <Unternehmen/>,
      },
      {
        path: "/kontakt",
        element: <Kontakt/>,
      },
      {
        path: "/impressum",
        element: <Impressum/>,
      },
      {
        path: "/fahrzeuge",
        element: <Fahrzeuge/>,
      },
      {
        path: "/fahrzeuge/:id",
        element: <FahrzeugPage />,
      },
      {
        path: "/probefahrt/:id",
        element: <Testdrive />,
      },
      {
        path: "/probefahrten",
        element: <TestdrivesTable/>,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);