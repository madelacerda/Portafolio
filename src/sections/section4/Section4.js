import React, { useState, Component } from "react";
import "./section4.css";
import fotocal from "../../svg/svg-calificaciones.svg";
import fotograd from "../../svg/graduation-cap.svg";
import fototrabajos from "../../svg/suitcase.svg";
const Section4 = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="contenedor4">
      <div className="contenedor-textos">
        <div className="txt-titulo">
          <p className="habilidades">Calificaciones</p>
        </div>
        <div className="contenedor-principal-calificaciones">
          <div className="contenedor-estudios-trabajos">
            <div className="cont-titulo-estudio" onClick={() => setShow(true)}>
              <img src={fotograd} className="foto-grad" />

              <p className="txt-trabajos">Estudios</p>
            </div>
            <div
              className="cont-titulo-trabajos"
              onClick={() => setShow(false)}
            >
              <img src={fototrabajos} className="foto-grad" />
              <p className="txt-trabajos">Trabajos</p>
            </div>
          </div>
          {show ? (
            <div className="bottom">
              {data.map((item, index) => (
                <Item key={index} data={item} />
              ))}
              <div className="linea1"></div>
              <div className="circulo1"></div>
              <div className="circulo2"></div>
              <div className="circulo3"></div>
            </div>
          ) : (
            <div className="bottom">
              {data2.map((item, index) => (
                <Item1 key={index} data={item} />
              ))}
              <div className="linea2"></div>
              <div className="circulo1"></div>
              <div className="circulo2"></div>
              {/* <div className="circulo3"></div> */}
            </div>
          )}
        </div>

        <div className="cont-right">
          <object
            type="image/svg+xml"
            data={fotocal}
            className="foto-calificaciones"
          >
            svg-animation
          </object>
        </div>
      </div>
    </div>
  );
};

export default Section4;

const Item = ({ data }) => {
  const { trabajo, fecha, clase } = data;
  return (
    <div className={`item ${clase}`}>
      <div className="contenedor-estudios">
        <p className="txt-establecimiento">{trabajo}</p>
        <p className="txt-fecha">{fecha}</p>
      </div>
    </div>
  );
};

const Item1 = ({ data }) => {
  const { trabajo, fecha, clase } = data;
  return (
    <div className={`item ${clase}`}>
      <div className="contenedor-estudios">
        <p className="txt-trabajo">{trabajo}</p>
        <p className="txt-fecha">{fecha}</p>
      </div>
    </div>
  );
};

const data = [
  {
    clase: "elemento1",
    trabajo: "Colegio Saint Johns School",
    fecha: "Marzo 1999 - Diciembre 2013",
  },
  {
    clase: "elemento2",
    trabajo: "Ingenieria Comercial | Universidad del desarrollo ",
    fecha: "Marzo 2014- Diciembre 2016",
  },
  {
    clase: "elemento3",
    trabajo: "Ingenieria Informatica | DuocUC",
    fecha: "Marzo 2018- Diciembre 2021",
  },
];

const data2 = [
  {
    clase: "elemento4",
    trabajo: "Ingeniero Informatico | Inmobiliaria Integral",
    fecha: "JUNIO – SEPTIEMBRE 2020",
  },
  {
    clase: "elemento5",
    trabajo: "Desarrollador Full Stack | Agencia Merken",
    fecha: "Marzo 2014- Diciembre 2016",
  },
];
