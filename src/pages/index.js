import React from "react"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <section className="inicio">
      <article className="contenedor contenedor--izq">
        <h1 className="inicio__titulo">Tenga sus impuesto</h1>
        <p className="inicio__descripcion">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate
          debitis commodi accusamus vero libero quasi quas facere consequuntur
          molestiae. Eligendi cupiditate eveniet est, dicta animi sequi
          architecto maiores quod exercitationem?
        </p>
        <button className="button">
          <p className="button__texto">Conócenos</p>
        </button>
      </article>
      <article className="contenedor contenedor--der">
        <img src="" alt="dos personas sentadas" className="imagen" />
      </article>
    </section>
  </Layout>
)

export default IndexPage
