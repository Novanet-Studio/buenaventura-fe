import React from "react"
import { useIntl } from "../../plugins/gatsby-plugin-intl-graphql"

const Nosotros = () => {
  const { messages: intl } = useIntl()

  return (
    <section className="nosotros">
      <article className="contenedor contenedor--izq">
        <h2 className="nosotros__titulo">
          {intl.nosotro.content.principal.titulo}
        </h2>
        <p className="nosotros__descripcion-corta">
          {intl.nosotro.content.principal.descripcion}
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
          <h3 className="guia__titulo">
            {intl.nosotro.content.atributos_titulo}
          </h3>
          <p className="guia__descripcion">
            {intl.nosotro.content.atributos_descripcion}
          </p>
          <ul className="guia__lista">
            {intl.nosotro.content.atributos_lista.map(item => (
              <li className="guia__item">
                <img width="500" height="500" src={item.icono.url} alt="icono like" className="guia__icono" />
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