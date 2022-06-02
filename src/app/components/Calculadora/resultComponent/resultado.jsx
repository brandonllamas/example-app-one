import "./resultado.css";
import React from "react";
import { nanoid } from "nanoid";

const Resultado = ({ textoIngresado, FormulaCalcular }) => {
  return (
    <div className="inputCalculo">
      {/* <div className="row">
        <div className="col">s</div>
        <div className="col"></div>
        <div className="col">ss</div>
      </div> */}
      <div className="row">
        <div className="col" id="formulaCalcular">
          {FormulaCalcular}
        </div>
      </div>
      <div className="row mt-3">
        <div className="col text-left textCalculo" id="result">
          {textoIngresado}
        </div>
      </div>
    </div>
  );
};

export default Resultado;
