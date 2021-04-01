import React from "react"
import ReactMarkdown from "react-markdown"
import { useIntl } from "gatsby-plugin-intl-graphql"
import "./especialidades.scss"

const Especialidades = () => {
  const {
    messages: { servicio: servicios },
  } = useIntl()

  return (
    <>
      <section id="Especialidades" className="especialidades">
        <div className="contenedor-principal">
          <h2 className="titulo">{servicios.content.titulo}</h2>
          <p className="descripcion">{servicios.content.descripcion}</p>
          {servicios.content.lista.map(item => (
            <div className="especialidades__columnas" key={item.id}>
              <div className="contenedor--izq">
                <img
                  className="especialidades__imagen"
                  src={item.foto.url}
                  title={item.foto.titulo}
                  alt={item.foto.alt}
                />
              </div>
              <h3 className="especialidades__subtitulo">{item.titulo}</h3>
              <div className="contenedor--der">
                <div className="especialidades__contenido">
                  {item.lista.map(listItem => (
                    <div className="especialidades__tabla" key={listItem.id}>
                      <h4 className="especialidades__tabla-titulo">
                        {listItem.titulo}
                      </h4>
                      <ReactMarkdown
                        source={listItem.contenido}
                        escapeHtml={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Especialidades
