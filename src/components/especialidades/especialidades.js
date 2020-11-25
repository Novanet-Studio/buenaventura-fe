import React, { useState } from "react"
import Img from "gatsby-image"
import SEO from "../seo"
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
    <>
      <SEO
        title={intl.messages.servicio.content.seo.titulo}
        description={intl.messages.servicio.content.seo.descripcion}
        image={intl.messages.servicio.content.seo.imagen}
      />
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
                fluid={
                  strapiServicios.imagenes[index].localFile.childImageSharp
                    .fluid
                }
                title={intl.messages.servicio.content.seo_imagen[index].titulo}
                alt={intl.messages.servicio.content.seo_imagen[index].alt}
              />
              <div className="especialidades__contenido">
                <h3 className="especialidades__subtitulo">
                  {especialidad.nombre}
                </h3>
                <button
                  className="button"
                  onClick={() => setTarget(especialidad.id)}
                >
                  <p className="button__texto">
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
    </>
  )
}

export default Especialidades
