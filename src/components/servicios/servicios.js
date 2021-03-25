import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./servicios.scss"

const Servicios = () => {
  const {
    messages: { servicio },
  } = useIntl()

  return (
    <>
      <section id="Servicios" className="servicios">
        {console.log(servicio)}
        {/* <div className="contenedor-principal">
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
                    title={
                      intl.messages.serviciosAdicionale.content.seo_imagen[
                        index
                      ].titulo
                    }
                    alt={
                      intl.messages.serviciosAdicionale.content.seo_imagen[
                        index
                      ].alt
                    }
                  />
                  <h3 className="servicios__contenido-titulo">
                    {servicio.nombre}
                  </h3>
                  <ReactMarkdown source={servicio.items} escapeHtml={false} />
                </li>
              )
            )}
          </ul>
        </div> */}
      </section>
    </>
  )
}

export default Servicios
