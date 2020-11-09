import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Novanet from "../../../assets/images/logo-nn.svg"
import { useIntl } from "gatsby-plugin-intl-graphql"

// @fortawesome libraries
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import "./footer.scss"
// add fas and fab to the library
library.add(fab)

const Footer = () => {
  const intl = useIntl()
  return (
    <footer className="footer">
      <div className="contenedor-principal">
        <div className="footer__rsss">
          <div className="footer__item">
            <FontAwesomeIcon
              className="footer__link"
              icon={["fab", "linkedin-in"]}
              fixedWidth
              size="1x"
            />
          </div>
          <div className="footer__item">
            <FontAwesomeIcon
              className="footer__link"
              icon={["fab", "instagram"]}
              fixedWidth
              size="1x"
            />
          </div>
          <div className="footer__item">
            <FontAwesomeIcon
              className="footer__link"
              icon={["fab", "twitter"]}
              fixedWidth
              size="1x"
            />
          </div>
        </div>
        <p className="footer__copy">
          {intl.messages.static.footer.legal} {new Date().getFullYear()}{" "}
          {intl.messages.static.footer.autor}
          <a href="https://novanet.studio" target="_blank" rel="noreferrer">
            <img
              className="footer__logo-novanet"
              src={Novanet}
              alt="logo-novanet"
            />
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
