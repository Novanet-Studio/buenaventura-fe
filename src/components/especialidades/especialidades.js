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
        <div className="contenedor-principal">
          <h2 className="titulo">
            {intl.messages.servicio.content.principal.titulo}
          </h2>
          <p className="descripcion">
            {intl.messages.servicio.content.principal.descripcion}
          </p>

          {intl.messages.servicio.content.especialidades.map(
            (especialidad, index) => (
              <div className="especialidades__columnas" key={especialidad.id}>
                <div className="contenedor--izq">
                  <Img
                    className="especialidades__imagen"
                    fluid={
                      strapiServicios.imagenes[index].localFile.childImageSharp
                        .fluid
                    }
                    title={
                      intl.messages.servicio.content.seo_imagen[index].titulo
                    }
                    alt={intl.messages.servicio.content.seo_imagen[index].alt}
                  />
                </div>
                <div className="contenedor--der">
                  <h3 className="especialidades__subtitulo">
                    {especialidad.nombre}
                  </h3>
                  <div className="especialidades__contenido">
                    <ul className="especialidades__tabla">
                      <h4 className="especialidades__tabla-titulo">
                        Monthly services
                      </h4>
                      <li>Sales Taxes & Liquor Taxes</li>
                      <li>Monthly Accounting</li>
                      <li>Payroll & Payroll Taxes</li>
                    </ul>
                    <ul className="especialidades__tabla">
                      <h4 className="especialidades__tabla-titulo">
                        Quarterly Services
                      </h4>
                      <li>Quarterly Tax Returns</li>
                      <li>Profit and Loss Reports</li>
                      <li>Estimated Taxes</li>
                    </ul>
                    <ul className="especialidades__tabla">
                      <h4 className="especialidades__tabla-titulo">
                        Annual Services
                      </h4>
                      <li>Payroll Year End Reports and compliance</li>
                      <li>W-2’s for Employees</li>
                      <li>Financial Statements (P&L/Balance Sheet)</li>
                      <li>Property Tax</li>
                      <li>Corporate License Renewal</li>
                      <li>
                        Audits for Workers Compensation and General Liability
                      </li>
                    </ul>
                  </div>
                  <div className="especialidades__boton">
                    <button
                      className="boton"
                      onClick={() => setTarget(especialidad.id)}
                    >
                      <p className="boton__texto">
                        {intl.messages.static.boton.texto}
                      </p>
                    </button>
                  </div>
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
        </div>
      </section>
    </>
  )
}

export default Especialidades
