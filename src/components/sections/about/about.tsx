import React from "react";

import "./about.scss";

import icon1 from "@images/icons/icon-1.svg";
import icon2 from "@images/icons/icon-2.svg";
import icon3 from "@images/icons/icon-3.svg";
import icon4 from "@images/icons/icon-4.svg";
import icon5 from "@images/icons/icon-5.svg";

const items = [
  {
    icon: icon1,
    title: "Compromiso",
    description:
      "Estamos comprometidos contigo y tus procesos fiscales y contables. Nuestro objetivo es eliminar las multas por completo.",
  },
  {
    icon: icon2,
    title: "Calidad",
    description:
      " Comprendemos la importancia y la sensibilidad de los procesos fiscales y contables.",
  },
  {
    icon: icon3,
    title: "Vocación de servicio",
    description:
      "Nos gusta lo que hacemos. Un servicio bien entregado redunda en ventajas para ambos.",
  },
  {
    icon: icon4,
    title: "Confianza",
    description:
      "Queremos transmitir la tranquilidad de que tus impuestos y contabilidad están en buenas manos.",
  },

  {
    icon: icon5,
    title: "Responsabilidad ",
    description:
      " Actuamos de la manera más expedita posible para cumplir nuestros acuerdos.",
  },
];

const About = () => {
  return (
    <>
      <section id="sec-about" className="about">
        <div className="container-main">
          <h2 className="title">Queremos convertirnos en tus aliados</h2>
          <p className="description">
            Nuestro objetivo es apoyarte en todo lo relacionado con impuestos y
            contabilidad al punto de ser considerados como un departamento más
            dentro de tu organización empresarial.
          </p>
          <div className="guia">
            <p className="description">Principalmente, queremos destacar:</p>
            <ul className="guia__list">
              {items.map((item, index) => (
                <li className="guia__item" key={index}>
                  <span className="guia__item__icon">
                    <img
                      src={item.icon}
                      alt={`icon_${index}`}
                      title={`icon_${index}`}
                    />
                  </span>
                  <h4 className="guia__item__subtitle">{item.title}</h4>
                  <p className="guia__item__desc">{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
