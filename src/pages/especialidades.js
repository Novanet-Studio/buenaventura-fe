import React from "react"
import ReactMarkdown from "react-markdown"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { graphql } from "gatsby"

const Especialidades = ({ data: { strapiServicios } }) => {
  const {
    messages: { servicio: servicios },
  } = useIntl()

  return (
    <section className="especialidades">
      <h2 className="especialidades__titulo">
        {servicios.content.principal.titulo}
      </h2>
      <p className="especialidades__descripcion">
        {servicios.content.principal.descripcion}
      </p>
      {servicios.content.especialidades.map((especialidad, index) => (
        <article
          className={`contenedor contenedor--${index > 0 ? "der" : "izq"}`}
          key={especialidad.id}
        >
          <Img className="imagen" fluid={strapiServicios.content_es.especialidades[index].imagen.childImageSharp.fluid} />
          <img src="" alt="calculadora en mesa" className="imagen" />
          <div className="especialidades__contenido">
            <h3 className="especialidades__subtitulo">{especialidad.nombre}</h3>
            {/* Testing showing the data into list */}
            <ul>
              {/* Aún no sé como representaran esta parte en la página */}
              {(index === 0 &&
                servicios.content.lista
                  .filter(item => item.especialidad === "contabilidad")
                  .map((item, id) => (
                    <li key={item.id}>
                      <h4>{item.titulo}</h4>
                      <ReactMarkdown source={item.items} escapeHtml={false} />
                    </li>
                  ))) ||
                servicios.content.lista
                  .filter(item => item.especialidad === "rrhh")
                  .map(item => (
                    <li key={item.id}>
                      <h4>{item.titulo}</h4>
                      <ReactMarkdown source={item.items} escapeHtml={false} />
                    </li>
                  ))}
            </ul>
            <button className="boton">
              <p className="boton__texto">Leer más</p>
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Especialidades

export const query = graphql`
  query EspecialidadesQuery {
    strapiServicios {
      content_es {
        especialidades {
          imagen {
            childImageSharp {
              fluid(maxWidth: 490) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
