import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { useStaticQuery, graphql } from "gatsby"
import "./nosotros.scss"

const Nosotros = () => {
  const {
    messages: { nosotro: nosotros },
  } = useIntl()
  const { strapiNosotros } = useStaticQuery(
    graphql`
      query NosotrosQuery {
        strapiNosotros {
          iconos {
            url
          }
        }
      }
    `
  )
  return (
    <section id="Nosotros" className="nosotros">
      <div className="contenedor--izq">
        <h2 className="titulo">{nosotros.content.principal.titulo}</h2>
        <p className="descripcion">{nosotros.content.principal.descripcion}</p>
      </div>
      <div className="contenedor--der">
        <div className="guia">
          <h3 className="guia__titulo">{nosotros.content.atributos_titulo}</h3>
          <p className="descripcion">
            {nosotros.content.atributos_descripcion}
          </p>
          <ul className="guia__lista">
            {nosotros.content.atributos_lista.map((item, index) => (
              <li className="guia__item" key={item.id}>
                <img
                  src={strapiNosotros.iconos[index].url}
                  alt="icono like"
                  className="guia__icono"
                />
                <h4 className="guia__subtitulo">{item.titulo}</h4>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Nosotros
