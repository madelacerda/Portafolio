import React from "react";
import "./section6.css";
import footer from "../../svg/Shiny.svg";

export const Section6 = () => {
  return (
    <div className="contenedor6">
      <div className="cont-footer">
        <img src={footer} className="img-footer" />
      </div>
      <p>seccion6</p>
    </div>
  );
};

export default Section6;
