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
    <section className="inicio">
      <article className="contenedor contenedor--izq">
        <h1 className="inicio__titulo">
          {principal.content.principal.titulo}
        </h1>
        <p className="inicio__descripcion">
          {principal.content.principal.descripcion}
        </p>
        <button className="button">
          <p className="button__texto">{principal.content.cta_titulo}</p>
        </button>
      </article>
      <article className="contenedor contenedor--der">
        <Img
          className="imagen"
          fluid={strapiPrincipal.imagen.localFile.childImageSharp.fluid}
          alt="dos personas sentadas conversando"
        />
      </article>
    </section>
  )
}

export default Inicio
