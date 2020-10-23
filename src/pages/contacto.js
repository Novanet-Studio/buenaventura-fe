import React from 'react'

const Contacto = () => (
  <section className="contacto">
    <h2 className="contact__titulo">Lorem, ipsum</h2>
    <p className="contacto__descripcion">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit ipsam
      amet ipsa assumenda hic quasi quibusdam dignissimos aspernatur libero.
    </p>
    <div className="contacto__fila">
      <img src="" alt="lapicero rojo" className="imagen" />
      <form className="contact__formulario">
        <div className="contacto__formulario-grupo">
          <input type="text" placeholder="Nombre" className="contacto__input" />
          <input type="text" placeholder="Apellido" className="contacto__input" />
        </div>
        <div className="contacto__formulario-grupo">
          <input type="text" placeholder="Teléfono" className="contacto__input" />
          <input type="email" placeholder="Correo electrónico" className="contacto__input" />
        </div>
        <input type="textarea" className="contacto__textarea" />
        <button className="boton">
          <p className="boton__texto">Enviar información</p>
        </button>
      </form>
    </div>
  </section>
)

export default Contacto