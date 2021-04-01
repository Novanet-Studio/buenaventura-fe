import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import "./servicios.scss"

const Servicios = () => {
  const {
    messages: { especifico: especificos },
  } = useIntl()

  return (
    <>
      <section id="Servicios" className="servicios">
        {console.log(especificos)}
        <div className="contenedor-principal">
          <h2 className="titulo">{especificos.content.titulo}</h2>
          <p className="descripcion">{especificos.content.descripcion}</p>
          <ul className="servicios__lista">
            {especificos.content.item_especifico.map(item => (
              <li className="servicios__contenido" key={item.id}>
                <img
                  className="servicios__icono"
                  src={item.foto.url}
                  title={item.foto.titulo}
                  alt={item.foto.alt}
                />
                <h3 className="servicios__contenido-titulo">{item.titulo}</h3>
                <ReactMarkdown source={item.contenido} escapeHtml={false} />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}

export default Servicios
