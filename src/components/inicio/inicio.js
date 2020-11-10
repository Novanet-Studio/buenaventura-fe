import React from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./inicio.scss"

const Inicio = () => {
  const {
    messages: { principal },
  } = useIntl()
  const { strapiPrincipal } = useStaticQuery(
    graphql`
      query {
        strapiPrincipal {
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
    <section id="Inicio" className="inicio">
      <div className="contenedor--izq">
        <h1 className="titulo">{principal.content.principal.titulo}</h1>
        <p className="descripcion">{principal.content.principal.descripcion}</p>
        <button className="boton">
          <p className="boton__texto">{principal.content.cta_titulo}</p>
        </button>
      </div>
      <div className="contenedor--der">
        <Img
          fluid={strapiPrincipal.imagen.localFile.childImageSharp.fluid}
          alt="dos personas sentadas conversando"
        />
      </div>
    </section>
  )
}

export default Inicio
