import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"

const Contacto = () => {

  const { messages: intl } = useIntl()

  return (
    <section className="contacto">
      <h2 className="contact__titulo">{intl.contacto.content.principal.titulo}</h2>
      <p className="contacto__descripcion">{intl.contacto.content.principal.descripcion}</p>
      <div className="contacto__fila">
        <img src="" alt="lapicero rojo" className="imagen" />
        <form className="contact__formulario">
          <div className="contacto__formulario-grupo">
            <input
              type="text"
              placeholder="Nombre"
              className="contacto__input"
            />
            <input
              type="text"
              placeholder="Apellido"
              className="contacto__input"
            />
          </div>
          <div className="contacto__formulario-grupo">
            <input
              type="text"
              placeholder="Teléfono"
              className="contacto__input"
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              className="contacto__input"
            />
          </div>
          <input type="textarea" className="contacto__textarea" />
          <button className="boton">
            <p className="boton__texto">Enviar información</p>
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contacto