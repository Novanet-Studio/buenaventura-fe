import React, { useState } from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import Logo from "../../../assets/images/buenaventura-tax-logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import "./header.scss"

const Header = () => {
  let [linkPressed] = useState("")

  const intl = useIntl()

  const toggleButton = e => {
    /* linkPressed = document.querySelector(`#${e}`).parentElement
    linkPressed.style.borderBottom = "3px solid #267a4f" */
  }

  return (
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
              <button
                id="Nos"
                onClick={e => {
                  scrollTo("#Nosotros")
                  toggleButton(e.target.id)
                }}
              >
                {intl.messages.static.nav.botonA}
              </button>
            </li>
            <li className="header__item">
              <button
                id="Esp"
                onClick={e => {
                  scrollTo("#Especialidades")
                  toggleButton(e.target.id)
                }}
              >
                {intl.messages.static.nav.botonB}
              </button>
            </li>
            <li className="header__item">
              <button
                id="Ser"
                onClick={e => {
                  scrollTo("#Servicios")
                  toggleButton(e.target.id)
                }}
              >
                {intl.messages.static.nav.botonC}
              </button>
            </li>
            <li className="header__item">
              <button
                id="Con"
                onClick={e => {
                  scrollTo("#Contacto")
                  toggleButton(e.target.id)
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
