import React from "react";

//? images & styles
import Logo from "@images/buenaventura-tax-logo.svg";

import "./header.scss";

const Header = () => {
  const scrollTo = () => {
    console.log("Scroll function called");
  };

  return (
    <header className="header">
      <div className="container-main">
        <div className="header__logo">
          <a onClick={() => scrollTo()} href="/">
            <img src={Logo} alt="Buenaventura tax logo" />
          </a>
        </div>
        <nav className="header__menu">
          <ul className="header__list">
            <li className="header__item">
              <button
                className="header__button"
                id="Nos"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                Nosotros
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Esp"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                Especialidades
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Ser"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                Servicios
              </button>
            </li>
            <li className="header__item">
              <button
                className="header__button"
                id="Con"
                onClick={(e) => {
                  scrollTo();
                }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
