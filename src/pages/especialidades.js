import React from 'react'

const Especialidades = () => (
  <section className="especialidades">
    <h2 className="especialidades__titulo">Lorem, ipsum dolor</h2>
    <p className="especialidades__descripcion">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta omnis
      perferendis odit soluta voluptate ad, nobis minus. Temporibus, cum unde!
    </p>
    <article className="contenedor contenedor--izq">
      <img src="" alt="calculadora en mesa" className="imagen" />
      <div className="especialidades__contenido">
        <h3 className="especialidades__subtitulo">Lorem, ipsum dolor</h3>
        <button className="boton">
          <p className="boton__texto">Leer más</p>
        </button>
      </div>
    </article>
    <article className="contenedor contenedor--der">
      <div className="especialidades__contenido">
        <h3 className="especialidades__subtitulo">Lorem, ipsum dolor</h3>
        <button className="boton">
          <p className="boton__texto">Leer más</p>
        </button>
      </div>
    </article>
  </section>
)

export default Especialidades