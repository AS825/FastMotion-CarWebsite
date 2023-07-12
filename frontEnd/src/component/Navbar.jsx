import { useState } from "react";
import { NavLink, Link, Outlet } from "react-router-dom";
import Logo from "../assets/Logo.png"
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="logo-container">
          <Link className="navlink" to="/">
            <img src={Logo} alt="" className="logo"/>
          </Link>
        </div>
        <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`ul ${menuOpen ? "open" : ""}`}>
          <li>
            <NavLink className="navlink" to="/fahrzeuge">
              Fahrzeuge
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/unternehmen">
              Unternehmen
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/kontakt">
              Kontakt
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/impressum">
              Impressum
            </NavLink>
          </li>
          <li>
            <NavLink className="navlink" to="/probefahrten">
              Probefahrten
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
