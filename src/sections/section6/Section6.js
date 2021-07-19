import React from "react";
import "./section6.css";
import footer from "../../svg/Shiny.svg"
import icongit from "../../svg/github.svg"
import iconlin from "../../svg/linkedin.svg"
import iconmail from "../../svg/at.svg"


export const Section6 = () => {
  return (
    <div className="contenedor6">
      <div className="cont-footer">
        <img src={footer} className="img-footer" />
        <img src={icongit} className="icon-footer" />
      <img src={iconlin} className="icon-footer1" />
      <img src={iconmail} className="icon-footer2" />
      </div>
    </div>
  );
};

export default Section6;
