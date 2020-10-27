import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import { graphql } from "gatsby"

const Nosotros = ({data:{ strapiNosotros }}) => {
  const {messages:{ nosotro: nosotros }} = useIntl()

  return (
    <section className="nosotros">
      <article className="contenedor contenedor--izq">
        <h2 className="nosotros__titulo">
          {nosotros.content.principal.titulo}
        </h2>
        <p className="nosotros__descripcion-corta">
          {nosotros.content.principal.descripcion}
        </p>
        <h3 className="nosotros__subtitulo">Lorem, ipsum dolor</h3>
        <p className="nosotros__subdescripcion">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ipsum.
          Accusamus dolores delectus laboriosam beatae eveniet. Consequatur
          numquam deserunt illo.
        </p>
      </article>
      <article className="contenedor contenedor--der">
        <div className="guia">
          <h3 className="guia__titulo">{nosotros.content.atributos_titulo}</h3>
          <p className="guia__descripcion">
            {nosotros.content.atributos_descripcion}
          </p>
          <ul className="guia__lista">
            {nosotros.content.atributos_lista.map((item, index) => (
              <li className="guia__item" key={item.id}>
                <img
                  style={{ background: "red" }}
                  width="500"
                  height="500"
                  src={strapiNosotros.iconos[index].url}
                  alt="icono like"
                  className="guia__icono"
                />
                <h4 className="guia__subtitulo">{item.titulo}</h4>
              </li>
            ))}
          </ul>
          <p className="guia__texto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.
          </p>
        </div>
      </article>
    </section>
  )
}

export default Nosotros

export const query = graphql`
  query NosotrosQuery {
    strapiNosotros {
      iconos {
        url
      }
    }
  }
`