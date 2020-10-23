import React from "react"
import { Link } from "gatsby"

const Header = () => (
  <header className="header">
    <img src="" alt="ave verde con dorado" className="header__logo"/>
    <nav className="header__menu">
      <ul className="header__menu-lista">
        <li className="header__item">
          <Link to="/nosotros">Nosotros</Link>
        </li>
        <li className="header__item">
          <Link to="/nosotros">Especialidades</Link>
        </li>
        <li className="header__item">
          <Link to="/nosotros">Servicios adicionales</Link>
        </li>
        <li className="header__item">
          <Link to="/nosotros">Contacto</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
