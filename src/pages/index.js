import React from "react"
import Layout from "../components/layout"
import Inicio from "../components/inicio"
import Nosotros from "../components/nosotros"
import Especialidades from "../components/especialidades"
import Servicios from "../components/servicios"
import Contacto from "../components/contacto"

const IndexPage = () => (
  <Layout>
    <Inicio />
    <Nosotros />
    {/* 
    
    <Especialidades />
    <Servicios />
    <Contacto /> */}
  </Layout>
)

export default IndexPage
