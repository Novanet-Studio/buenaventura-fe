import React from "react"
import Img from "gatsby-image"
import SEO from "../seo"
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
                fluid(maxWidth: 390) {
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
        title={principal.content.seo.titulo}
        description={principal.content.seo.descripcion}
        image={principal.content.seo.imagen}
      />
      <section id="Inicio" className="inicio">
        <div className="contenedor-principal">
          <div className="inicio__info">
            <h1 className="titulo">{principal.content.principal.titulo}</h1>
            <p className="descripcion">
              {principal.content.principal.descripcion}
            </p>
            <button className="boton">
              <p className="boton__texto">{principal.content.cta_titulo}</p>
            </button>
          </div>
          <Img
            className="inicio__imagen"
            fluid={strapiPrincipal.imagen.localFile.childImageSharp.fluid}
            title={principal.content.seo_imagen.titulo}
            alt={principal.content.seo_imagen.alt}
          />
        </div>
      </section>
    </>
  )
}

export default Inicio
