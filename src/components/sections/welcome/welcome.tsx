import React from "react";

import "./welcome.scss";

const Welcome = () => {
  return (
    <>
      <section id="sec-welcome" className="welcome">
        <div className="container-main">
          <h1 className="title">
            Tenga sus impuestos y obligaciones tributarias al día
          </h1>
          <p className="description">
            Somos un equipo de profesionales dedicados al cálculo de impuestos y
            al cumplimiento de obligaciones fiscales. Ten al día tus tributos
            sin preocuparte de los trámites que de eso nos encargamos nosotros
          </p>
          <button className="button">
            <p className="button__text">Conócenos</p>
          </button>
        </div>
      </section>
    </>
  );
};

export default Welcome;
