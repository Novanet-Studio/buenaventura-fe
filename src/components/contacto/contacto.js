import React from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./contacto.scss"

const Contacto = () => {
  const intl = useIntl()
  const { strapiContacto } = useStaticQuery(
    graphql`
      query {
        strapiContacto {
          imagen {
            localFile {
              childImageSharp {
                fluid(maxWidth: 490) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <section id="Contacto" className="contacto">
      <h2 className="titulo">
        {intl.messages.contacto.content.principal.titulo}
      </h2>
      <p className="descripcion">
        {intl.messages.contacto.content.principal.descripcion}
      </p>
      <div className="contenedor--izq">
        <Img
          className="imagen"
          fluid={strapiContacto.imagen.localFile.childImageSharp.fluid}
          alt="lapicero rojo"
        />
      </div>
      <div className="contenedor--der">
        <form className="contact__formulario">
          <div className="contacto__formulario-grupo">
            <input
              type="text"
              placeholder={intl.messages.static.contacto.formulario.nombrePlaceholder}
              className="contacto__input"
            />
            <input
              type="text"
              placeholder={intl.messages.static.contacto.formulario.apellidoPlaceholder}
              className="contacto__input"
            />
          </div>
          <div className="contacto__formulario-grupo">
            <input
              type="text"
              placeholder={intl.messages.static.contacto.formulario.telefonoPlaceholder}
              className="contacto__input"
            />
            <input
              type="email"
              placeholder={intl.messages.static.contacto.formulario.correoPlaceholder}
              className="contacto__input"
            />
          </div>
          <input
            type="textarea"
            placeholder={intl.messages.static.contacto.formulario.mensajePlaceholder}
            className="contacto__textarea"
          />
          <button className="button">
            <p className="button__texto">
              {intl.messages.static.contacto.boton}
            </p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto
