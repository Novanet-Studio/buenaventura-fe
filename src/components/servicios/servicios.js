import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./servicios.scss"

const Servicios = () => {
  const intl = useIntl()
  const { strapiServiciosAdicionales } = useStaticQuery(
    graphql`
      query ServiciosQuery {
        strapiServiciosAdicionales {
          iconos {
            url
          }
        }
      }
    `
  )

  return (
    <section id="Servicios" className="servicios">
      <h2 className="titulo">
        {intl.messages.serviciosAdicionale.content.principal.titulo}
      </h2>
      <p className="descripcion">
        {intl.messages.serviciosAdicionale.content.principal.descripcion}
      </p>
      <ul className="servicios__lista">
        {intl.messages.serviciosAdicionale.content.servicios.map(
          (servicio, index) => (
            <li className="servicios__contenido" key={servicio.id}>
              <img
                className="servicios__icono"
                src={strapiServiciosAdicionales.iconos[index].url}
                alt="icono servicio"
              />
              <h3 className="servicios__contenido-titulo">{servicio.nombre}</h3>
              <ReactMarkdown source={servicio.items} escapeHtml={false} />
            </li>
          )
        )}
      </ul>
    </section>
  )
}

export default Servicios
