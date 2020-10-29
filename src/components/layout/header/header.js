import React from "react"
import { Link } from "gatsby"
import "./header.scss"
import Logo from "../../../assets/images/buenaventura-tax-logo.svg"

const Header = () => (
  <header className="header">
    <div className="header__logo">
      <div className="header__logo-contenedor">
        <img className="header__logo" src={Logo} alt="Buenaventura tax logo" />
      </div>
    </div>
    <nav className="header__menu">
      <ul className="header__menu-lista">
        <li className="header__item">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="header__item">
          <Link to="/especialidades">Especialidades</Link>
        </li>
        <li className="header__item">
          <Link to="/servicios">Servicios adicionales</Link>
        </li>
        <li className="header__item">
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
