import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl-graphql"

import Layout from "../components/layout"

const IndexPage = () => {
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
    <Layout>
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
    </Layout>
  )
}

export default IndexPage
