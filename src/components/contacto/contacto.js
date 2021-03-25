import React from "react"
import Img from "gatsby-image"
import SEO from "../seo"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./contacto.scss"

const Contacto = () => {
  /* const intl = useIntl()
  const { strapiContacto } = useStaticQuery(
    graphql`
      query {
        strapiContacto {
          imagen {
            localFile {
              childImageSharp {
                fluid(maxWidth: 225) {
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
    <>
      <SEO
        title={intl.messages.contacto.content.seo.titulo}
        description={intl.messages.contacto.content.seo.descripcion}
        image={intl.messages.contacto.content.seo.imagen}
      />
      <section id="Contacto" className="contacto">
        <div className="contenedor-principal">
          <h2 className="titulo">
            {intl.messages.contacto.content.principal.titulo}
          </h2>
          <p className="descripcion">
            {intl.messages.contacto.content.principal.descripcion}
          </p>
          <div className="contacto__columnas">
            <div className="contenedor--izq">
              <form className="contacto__formulario">
                <input
                  type="text"
                  placeholder={
                    intl.messages.static.contacto.formulario.nombrePlaceholder
                  }
                  className="contacto__input-text"
                />
                <input
                  type="text"
                  placeholder={
                    intl.messages.static.contacto.formulario.apellidoPlaceholder
                  }
                  className="contacto__input-text"
                />
                <input
                  type="text"
                  placeholder={
                    intl.messages.static.contacto.formulario.telefonoPlaceholder
                  }
                  className="contacto__input-text"
                />
                <input
                  type="email"
                  placeholder={
                    intl.messages.static.contacto.formulario.correoPlaceholder
                  }
                  className="contacto__input-email"
                />
                <input
                  type="textarea"
                  placeholder={
                    intl.messages.static.contacto.formulario.mensajePlaceholder
                  }
                  className="contacto__textarea"
                />
                <button className="boton">
                  <p className="boton__texto">
                    {intl.messages.static.contacto.boton}
                  </p>
                </button>
              </form>
            </div>
            <div className="contenedor--der">
              <Img
                className="contacto__imagen"
                fluid={strapiContacto.imagen.localFile.childImageSharp.fluid}
                title={intl.messages.contacto.content.seo_imagen.titulo}
                alt={intl.messages.contacto.content.seo_imagen.alt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  ) */
}

export default Contacto
