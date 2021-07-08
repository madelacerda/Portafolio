import React from "react";
import "./section5.css";
import fondo from "../../svg/Circuit_Primary.svg";
import imgproductividad from "../../svg/undraw_dev_productivity_umsq.svg";

export const Section5 = () => {
  return (
    <div className="contenedor5">
      <div className="cont-titulo-port">
        <p className="titulo">Portafolio</p>
      </div>
      <div className="cont-foto-prod">
        <object
          type="image/svg+xml"
          data={imgproductividad}
          className="foto-prod"
        >
          svg-animation
        </object>
      </div>
      <div className="cont-port">
        <img className="img-portafolio" src={fondo}></img>
        <p className="n-portafolio">Mi Portafolio</p>
      </div>
    </div>
  );
};

export default Section5;
