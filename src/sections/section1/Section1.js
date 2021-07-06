import React from "react";
import CircuitPrimary from "./fondo.js";
import "./section1.css";

export const Section1 = () => {
  return (
    <div className="contenedor">
      <CircuitPrimary />

      <p className="nombre">Matias de la Cerda</p>
      <p className="subtitulo">Desarrollador FullStack</p>
    </div>
  );
};

export default Section1;
