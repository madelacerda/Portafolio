import React from "react";
import Foto from "./foto";
import "./section2.css";
import FotoDescarga from "../../svg/file-download.svg";

export const Section2 = () => {
  return (
    <div style={{ padding: "80px ", width: "100%", paddingBottom: "250px" }}>
      <div className="contenedor-imagen">
        <Foto />
        <p className="titulo">Sobre mi</p>
        <div className="contenedor-texto">
          <p className="texto">
            Desarrollador Full Stack, Con experiencia en lenguajes de
            programación y plataformas web, con experiencia laboral tanto en
            desarrollo de aplicaciones móviles y trabajando con metodologías
            agiles tales como Scrum, trabajando siempre con equipos
            multidisciplinarios de desarrollador
          </p>
          <div className="contenedor-cv">
            <img src={FotoDescarga} className="foto" />
            <p className="descargar">Descargar CV</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
