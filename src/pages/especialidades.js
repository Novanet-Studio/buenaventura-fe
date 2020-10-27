import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useIntl } from "gatsby-plugin-intl-graphql"

const Especialidades = () => {
  const { messages: intl } = useIntl()

  console.log(intl)

  return (
    <section className="especialidades">
      <h2 className="especialidades__titulo">
        {intl.servicio.content.principal.titulo}
      </h2>
      <p className="especialidades__descripcion">
        {intl.servicio.content.principal.descripcion}
      </p>
      {intl.servicio.content.especialidades.map((especialidad, i) => (
        <article
          className={`contenedor contenedor--${i > 0 ? "der" : "izq"}`}
          key={especialidad.id}
        >
          <img src="" alt="calculadora en mesa" className="imagen" />
          <div className="especialidades__contenido">
            <h3 className="especialidades__subtitulo">{especialidad.nombre}</h3>
            {/* Testing showing the data into list */}
            <ul>
              {/* Aún no sé como representaran esta parte en la página */}
              {(i === 0 &&
                intl.servicio.content.lista
                  .filter(item => item.tipo === "contabilidad")
                  .map((item, id) => (
                    <li key={item.id}>
                      <h4>{item.titulo}</h4>
                      <ReactMarkdown source={item.items} escapeHtml={false} />
                    </li>
                  ))) ||
                intl.servicio.content.lista
                  .filter(item => item.tipo === "recursos-humanos")
                  .map(item => (
                    <li key={item.id}>
                      <h4>{item.titulo}</h4>
                      <ReactMarkdown source={item.items} escapeHtml={false} />
                    </li>
                  ))}
            </ul>
            <button className="boton">
              <p className="boton__texto">Leer más</p>
            </button>
          </div>
        </article>
      ))}
    </section>
  )
}

export default Especialidades