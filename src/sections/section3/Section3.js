import React from "react";
import "./section3.css";
import fotoreact from "../../svg/react.svg";
import fotohtml from "../../svg/html.svg";
import fotojs from "../../svg/js.svg";
import fotocss from "../../svg/css.svg";
import LinearWithValueLabel from "../../Components/circulo-progreso";
import fotonode from "../../svg/nodejs.svg";
import fotomongo from "../../svg/mongo.svg";
import fotoredux from "../../svg/redux.svg";
import fotomysql from "../../svg/mysql.svg";

const Section3 = () => {
  return (
    <div className="contenedor3">
      <div className="contenedor-textos">
        <p className="habilidades">Habilidades</p>
        <img src={fotoreact} className="icono-react" />
        <img src={fotohtml} className="icono-html" />
        <img src={fotojs} className="icono-js" />
        <img src={fotocss} className="icono-css" />
        <img src={fotonode} className="icono-node" />
        <img src={fotomongo} className="icono-mongo" />
        <img src={fotoredux} className="icono-redux" />
        <img src={fotomysql} className="icono-mysql" />
        <div className="cont-hab-1">
          {data.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </div>
        <div className="cont-hab-2">
          {data2.map((item, index) => (
            <Item key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;

const Item = ({ data }) => {
  const { habilidad, nivel, porcentaje } = data;
  return (
    <div className="item">
      <div className="textos-item">
        <p className="txt-html">{habilidad}</p>
        <p className="txt-html">{nivel}</p>
      </div>
      <LinearWithValueLabel value={porcentaje} />
    </div>
  );
};

const data = [
  { habilidad: "HTML", nivel: "Experto", porcentaje: 100 },
  { habilidad: "CSS", nivel: "Intermedio", porcentaje: 50 },
  { habilidad: "JavaScript", nivel: "Intermedio", porcentaje: 60 },
  { habilidad: "React", nivel: "Avanzado", porcentaje: 90 },
  { habilidad: "React Native", nivel: "Avanzado", porcentaje: 90 },
];

const data2 = [
  { habilidad: "NodeJS", nivel: "Experto", porcentaje: 100 },
  { habilidad: "Express", nivel: "Avanzado", porcentaje: 80 },
  { habilidad: "Mongo", nivel: "Intermedio", porcentaje: 66 },
  { habilidad: "MySQL", nivel: "Avanzado", porcentaje: 85 },
  { habilidad: "Python", nivel: "Intermedio", porcentaje: 50 },
];
