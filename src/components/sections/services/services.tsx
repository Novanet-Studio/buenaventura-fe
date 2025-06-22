import React from "react";
import ReactMarkdown from "react-markdown";

import "./services.scss";

const Services = () => {
  return (
    <>
      <section id="sec-services" className="services">
        <h2 className="titulo">Nuestros servicios</h2>
        <p className="description">
          Nos dedicamos a la contabilidad, incluidos los impuestos y la nómina,
          y algunos servicios relacionados con recursos humanos.
        </p>
        {/* <ul className="services__list">
          {intl.messages.servicesAdicionale.content.services.map(
            (servicio, index) => (
              <li className="services__content" key={servicio.id}>
                <img
                  className="services__icon"
                  src={strapiservicesAdicionales.iconos[index].url}
                  title={
                    intl.messages.servicesAdicionale.content.seo_imagen[index]
                      .titulo
                  }
                  alt={
                    intl.messages.servicesAdicionale.content.seo_imagen[index]
                      .alt
                  }
                />
                <h3 className="services__content-title">{servicio.nombre}</h3>
                <ReactMarkdown source={servicio.items} escapeHtml={false} />
              </li>
            )
          )}
        </ul> */}
      </section>
    </>
  );
};

export default Services;
