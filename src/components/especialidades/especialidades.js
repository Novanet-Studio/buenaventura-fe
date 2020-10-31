import React, { useState } from "react"
import Img from "gatsby-image"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "../modal"
import "./especialidades.scss"

const Especialidades = () => {
  const [target, setTarget] = useState("")
  const {
    messages: { servicio: servicios },
  } = useIntl()
  const { strapiServicios } = useStaticQuery(
    graphql`
      query {
        strapiServicios {
          imagenes {
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
    <section className="especialidades">
      <h2 className="titulo">{servicios.content.principal.titulo}</h2>
      <p className="descripcion">{servicios.content.principal.descripcion}</p>
      {servicios.content.especialidades.map((especialidad, index) => (
        <div
          className={`contenedor contenedor--${index > 0 ? "der" : "izq"}`}
          key={especialidad.id}
        >
          <Img
            fluid={
              strapiServicios.imagenes[index].localFile.childImageSharp.fluid
            }
          />
          <div className="especialidades__contenido">
            <h3 className="especialidades__subtitulo">{especialidad.nombre}</h3>
            <button
              className="button"
              onClick={() => setTarget(especialidad.id)}
            >
              <p className="button__texto">Leer más</p>
            </button>
          </div>
          <Modal
            id={target}
            data={servicios.content.especialidades}
            list={servicios.content.lista}
            onClose={() => setTarget("")}
          />
        </div>
      ))}
    </section>
  )
}

export default Especialidades
