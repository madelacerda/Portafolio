import React from "react";
import fotopc from "../../svg/undraw_programming_2svr.svg";
import "./section2.css";
import FotoDescarga from "../../svg/file-download.svg";

export const Section2 = () => {
  return (
    <div className="contenedor-general2">
      <div className="contenedor-imagen">
        <object type="image/svg+xml" data={fotopc} className="foto-pc">
          svg-animation
        </object>
      </div>

      <div className="contenedor-texto">
        <p className="titulo">Sobre mi</p>
        <p className="texto">
          Desarrollador Full Stack, Con experiencia en lenguajes de programación
          y plataformas web, con experiencia laboral tanto en desarrollo de
          aplicaciones móviles y trabajando con metodologías agiles tales como
          Scrum, trabajando siempre con equipos multidisciplinarios de
          desarrollador
        </p>
        <div className="contenedor-cv">
          <img src={FotoDescarga} className="foto" />
          <p className="descargar">Descargar CV</p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
