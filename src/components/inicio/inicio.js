import React from "react"
import SEO from "../seo"
import { useIntl } from "gatsby-plugin-intl-graphql"
import "./inicio.scss"

const Inicio = () => {
  const {
    messages: { principal },
  } = useIntl()

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
            <h1 className="titulo">{principal.content.titulo}</h1>
            <p className="descripcion">
              {principal.content.descripcion}
            </p>
            <button className="boton">
              <p className="boton__texto">{principal.content.cta.titulo}</p>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Inicio
