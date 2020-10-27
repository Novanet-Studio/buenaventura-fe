import React from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { graphql } from "gatsby"

const Contacto = ({data:{ strapiContacto } }) => {
  const {messages:{ contacto }} = useIntl()

  return (
    <section className="contacto">
      <h2 className="contact__titulo">{contacto.content.principal.titulo}</h2>
      <p className="contacto__descripcion">{contacto.content.principal.descripcion}</p>
      <div className="contacto__fila">
        <Img 
          className="imagen"
          fluid={strapiContacto.imagen.childImageSharp.fluid}
          alt="lapicero rojo"
        />
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
          <input type="textarea" className="contacto__textarea" />
          <button className="boton">
            <p className="boton__texto">Enviar información</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto

export const query = graphql`
  query ContactoQuery {
    strapiContacto {
      imagen {
        childImageSharp {
          fluid(maxWidth: 490) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`