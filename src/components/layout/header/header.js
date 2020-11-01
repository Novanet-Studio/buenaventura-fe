import React from "react"

import "./header.scss"
import Logo from "../../../assets/images/buenaventura-tax-logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => (
  <header className="header">
    <div className="contenedor-principal">
      <div className="header__logo">
        <div className="header__logo-contenedor">
        {/* eslint-disable */}
          <a onClick={() => scrollTo("#Inicio")} href="#">
            <img
              className="header__logo"
              src={Logo}
              alt="Buenaventura tax logo"
            />
          </a>
        </div>
      </div>
      <nav className="header__menu">
        <ul className="header__menu-lista">
          <li className="header__item">
            <button onClick={() => scrollTo("#Nosotros")}>Nosotros</button>
          </li>
          <li className="header__item">
            <button onClick={() => scrollTo("#Especialidades")}>
              Especialidades
            </button>
          </li>
          <li className="header__item">
            <button onClick={() => scrollTo("#Servicios")}>
              Servicios adicionales
            </button>
          </li>
          <li className="header__item">
            <button onClick={() => scrollTo("#Contacto")}>Contacto</button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
