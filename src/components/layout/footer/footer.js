import React from 'react'
import "./footer.scss"

const Footer = () => (
  <footer className="footer">
    <div className="footer__rsss">
      <div className="footer__item">
        <div className="footer__link">LinkedIn</div>
      </div>
      <div className="footer__item">
        <div className="footer__link">Instagram</div>
      </div>
      <div className="footer__item">
        <div className="footer__link">Twitter</div>
      </div>
    </div>
    <p className="footer__copy">
      © Derechos reservados {new Date().getFullYear()} | Diseñado por: <img className="footer__logo-novanet" src="" alt="logo-novanet" />
    </p>
  </footer>
)

export default Footer
