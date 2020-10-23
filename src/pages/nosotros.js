import React from "react"

const Nosotros = () => (
  <section className="nosotros">
    <article className="contenedor contenedor--izq">
      <h2 className="nosotros__titulo">Lorem, ipsum dolor</h2>
      <p className="nosotros__descripcion-corta">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iste
        quasi incidunt porro nostrum consequatur laborum, quisquam cumque
        inventore esse libero quas aspernatur in blanditiis commodi delectus
        eius, repudiandae fuga!
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
        <h3 className="guia__titulo">Lorem, ipsum dolor</h3>
        <p className="guia__descripcion">Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <ul className="guia__lista">
          <li className="guia__item">
            <img src="" alt="icono like" className="guia__icono"/>
            <h4 className="guia__subtitulo">Compromiso</h4>
          </li>
          <li className="guia__item">
            <img src="" alt="icono corazon" className="guia__icono"/>
            <h4 className="guia__subtitulo">Confianza</h4>
          </li>
          <li className="guia__item">
            <img src="" alt="icono estrella" className="guia__icono"/>
            <h4 className="guia__subtitulo">Calidad</h4>
          </li>
          <li className="guia__item">
            <img src="" alt="icono tiempo" className="guia__icono"/>
            <h4 className="guia__subtitulo">Responsabilidad</h4>
          </li>
          <li className="guia__item">
            <img src="" alt="icono engranaje" className="guia__icono"/>
            <h4 className="guia__subtitulo">Vocación de servicio</h4>
          </li>
        </ul>
        <p className="guia__texto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed.</p>
      </div>
    </article>
  </section>
)

export default Nosotros