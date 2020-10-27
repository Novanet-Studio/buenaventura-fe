import React from "react"
import { useIntl } from "../../plugins/gatsby-plugin-intl-graphql"
import Layout from "../components/layout"

const IndexPage = () => {
  const { messages: intl } = useIntl()

  return (
    <Layout>
      <section className="inicio">
        <article className="contenedor contenedor--izq">
          <h1 className="inicio__titulo">
            {intl.principal.content.principal.titulo}
          </h1>
          <p className="inicio__descripcion">
            {intl.principal.content.principal.descripcion}
          </p>
          <button className="button">
            <p className="button__texto">{intl.principal.content.cta_titulo}</p>
          </button>
        </article>
        <article className="contenedor contenedor--der">
          <img src="" alt="dos personas sentadas" className="imagen" />
        </article>
      </section>
    </Layout>
  )
}

export default IndexPage
