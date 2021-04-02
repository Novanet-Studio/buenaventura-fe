import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import "./nosotros.scss"

const Nosotros = () => {
  const {
    messages: { nosotro },
  } = useIntl()

  return (
    <>
      <section id="Nosotros" className="nosotros">
        <div className="contenedor-principal">
          <h2 className="titulo">{nosotro.content.titulo}</h2>
          <p className="descripcion">{nosotro.content.descripcion}</p>
          <div className="guia">
            <h3 className="guia__titulo">{nosotro.content.subitulo}</h3>
            <p className="descripcion">
              {nosotro.content.subtitulo_descripcion}
            </p>
            <ul className="guia__lista">
              {nosotro.content.atributo.map(item => (
                <li className="guia__item" key={item.id}>
                  <img
                    className="guia__icono"
                    src={item.foto.url}
                    alt={item.foto.alt}
                    title={item.foto.titulo}
                  />
                  <h4 className="guia__subtitulo">{item.titulo}</h4>
                  <p className="guia__texto">{item.descripcion}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nosotros
