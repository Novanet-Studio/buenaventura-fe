import React, { useState } from "react"
import Img from "gatsby-image"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "../modal"
import "./especialidades.scss"

const Especialidades = () => {
  const [target, setTarget] = useState("")
  const intl = useIntl()
  const { strapiServicios } = useStaticQuery(
    graphql`
      query {
        strapiServicios {
          imagenes {
            localFile {
              childImageSharp {
                fluid(maxWidth: 235) {
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
    <section id="Especialidades" className="especialidades">
      <h2 className="titulo">
        {intl.messages.servicio.content.principal.titulo}
      </h2>
      <p className="descripcion">
        {intl.messages.servicio.content.principal.descripcion}
      </p>
      {intl.messages.servicio.content.especialidades.map(
        (especialidad, index) => (
          <div
            className={`contenedor--${index > 0 ? "der" : "izq"}`}
            key={especialidad.id}
          >
            <Img
              className="especialidades__imagen"
              fluid={
                strapiServicios.imagenes[index].localFile.childImageSharp.fluid
              }
            />
            <div className="especialidades__contenido">
              <h3 className="especialidades__subtitulo">
                {especialidad.nombre}
              </h3>
              <button
                className="boton"
                onClick={() => setTarget(especialidad.id)}
              >
                <p className="boton__texto">
                  {intl.messages.static.boton.texto}
                </p>
              </button>
            </div>
            <Modal
              id={target}
              data={intl.messages.servicio.content.especialidades}
              list={intl.messages.servicio.content.lista}
              onClose={() => setTarget("")}
            />
          </div>
        )
      )}
    </section>
  )
}

export default Especialidades
