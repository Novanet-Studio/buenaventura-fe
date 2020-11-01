import React from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./contacto.scss"

const Contacto = () => {
  const {
    messages: { contacto },
  } = useIntl()
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
      <h2 className="titulo">{contacto.content.principal.titulo}</h2>
      <p className="descripcion">{contacto.content.principal.descripcion}</p>
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
              placeholder="Nombre"
              className="contacto__input"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="contacto__input"
            />
          </div>
          <div className="contacto__formulario-grupo">
            <input
              type="text"
              placeholder="Teléfono"
              className="contacto__input"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="contacto__input"
            />
          </div>
          <input
            type="textarea"
            placeholder="Mensaje"
            className="contacto__textarea"
          />
          <button className="button">
            <p className="button__texto">Enviar información</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto
