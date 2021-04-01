import React from "react"
import { useIntl } from "gatsby-plugin-intl-graphql"
import "./contacto.scss"

const Contacto = () => {
  const {
    messages: { contactano: contacto, static: data },
  } = useIntl()

  return (
    <>
      <section id="Contacto" className="contacto">
        <div className="contenedor-principal">
          <h2 className="titulo">{contacto.content.titulo}</h2>
          <p className="descripcion">{contacto.content.descripcion}</p>
          {console.log(data)}
          <div className="contacto__columnas">
            <div className="contenedor--izq">
              <form className="contacto__formulario">
                <input
                  type="text"
                  placeholder={data.contacto.formulario.nombrePlaceholder}
                  className="contacto__input-text"
                />
                <input
                  type="text"
                  placeholder={data.contacto.formulario.apellidoPlaceholder}
                  className="contacto__input-text"
                />
                <input
                  type="text"
                  placeholder={data.contacto.formulario.telefonoPlaceholder}
                  className="contacto__input-text"
                />
                <input
                  type="email"
                  placeholder={data.contacto.formulario.correoPlaceholder}
                  className="contacto__input-email"
                />
                <input
                  type="textarea"
                  placeholder={data.contacto.formulario.mensajePlaceholder}
                  className="contacto__textarea"
                />
                <button className="boton">
                  <p className="boton__texto">{data.contacto.boton}</p>
                </button>
              </form>
            </div>
            <div className="contenedor--der">
              <img
                className="contacto__imagen"
                src={contacto.content.foto.url}
                title={contacto.content.foto.titulo}
                alt={contacto.content.foto.alt}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contacto
