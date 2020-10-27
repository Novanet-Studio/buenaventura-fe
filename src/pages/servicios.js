import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { graphql } from "gatsby"

const Servicios = ({data:{ strapiServiciosAdicionales }}) => {
  const {messages:{ serviciosAdicionale: adicionales }} = useIntl()

  return (
    <section className="servicios">
      <h2 className="servicios__titulo">
        {adicionales.content.principal.titulo}
      </h2>
      <p className="servicios__descripcion">
        {adicionales.content.principal.descripcion}
      </p>
      <ul className="servicios__lista">
        {adicionales.content.servicios.map((servicio, index) => (
          <li className="servicios__contenido" key={servicio.id}>
            <img
              className="servicios__icono"
              src={strapiServiciosAdicionales.iconos[index].url}
              alt="icono servicio"
            />
            <h3 className="servicios__contenido-titulo">{servicio.nombre}</h3>
            <ReactMarkdown source={servicio.items} escapeHtml={false} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Servicios

export const query = graphql`
  query ServiciosQuery {
    strapiServiciosAdicionales {
      iconos {
        url
      }
    }
  }
`