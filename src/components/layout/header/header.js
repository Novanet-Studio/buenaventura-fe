import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import Logo from "../../../assets/images/btax-logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./header.scss"

const Header = () => {
  const intl = useIntl()

  return (
    <header className="header">
      <div className="contenedor-principal">
        <div className="header__logo">
          {/* eslint-disable */}
          <a onClick={() => scrollTo("#Inicio")} href="#">
            <img
              className="header__logo-img"
              src={Logo}
              alt="Buenaventura tax logo"
            />
          </a>
        </div>
        <nav className="header__menu">
          <ul className="header__lista">
            <li className="header__item">
              <button
                className="header__boton"
                id="Nos"
                onClick={e => {
                  scrollTo("#Nosotros")
                }}
              >
                {intl.messages.static.nav.botonA}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__boton"
                id="Esp"
                onClick={e => {
                  scrollTo("#Especialidades")
                }}
              >
                {intl.messages.static.nav.botonB}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__boton"
                id="Ser"
                onClick={e => {
                  scrollTo("#Servicios")
                }}
              >
                {intl.messages.static.nav.botonC}
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__boton"
                id="Con"
                onClick={e => {
                  scrollTo("#Contacto")
                }}
              >
                {intl.messages.static.nav.botonD}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
