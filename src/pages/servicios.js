import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"

const Servicios = () => {
  const { messages: intl } = useIntl()
  
  return (
    <section className="servicios">
      <h2 className="servicios__titulo">
        {intl.serviciosAdicionale.content.principal.titulo}
      </h2>
      <p className="servicios__descripcion">
        {intl.serviciosAdicionale.content.principal.descripcion}
      </p>
      <ul className="servicios__lista">
        {intl.serviciosAdicionale.content.servicios.map(servicio => (
          <li className="servicios__contenido" key={servicio.id}>
            <img src="" alt="icono servicio" className="servicios__icono" />
            <h3 className="servicios__contenido-titulo">{servicio.nombre}</h3>
            <ReactMarkdown 
              source={servicio.items}
              escapeHtml={false}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Servicios
