import "./calculadora.css";
import React from "react";
import Resultado from "./resultComponent/resultado";

const Calculadora = () => {
  const [textoIngreso, setTextoIngreso] = React.useState("");
  const [FormulaCalcular, setFormulaCalcular] = React.useState("=");

  const agregarCalculo = async (value) => {
    // console.log(textoIngreso);

    if (textoIngreso ===  "Error") {
      setTextoIngreso("");
    }
    // console.log("agergar calculo => " + value);
    setTextoIngreso(textoIngreso + value);
  };

  const calcular = async (value) => {
    try {
    if (textoIngreso ===  "Error") {
    setTextoIngreso(0);
      
    }else{
      var textoFinal = eval(textoIngreso);
      setTextoIngreso(textoFinal);
      setFormulaCalcular(`${textoIngreso} =  ${textoFinal}`);
    }
 
    } catch (error) {
      // setFormulaCalcular(`Error`);
      setTextoIngreso(`SINTAX ERROR`);
    }
  };

  const limpiar = async () => {
    setTextoIngreso("");

  };

  return (
    <div className="contenedor">
      <div className="row animate__animated animate__rubberBand" id="rowTitle">
        <div className="col text-center">
          <h3>Calculadora</h3>
        </div>
      </div>
      <div className="hijo">
        <div className="cardCalcu  animate__animated  animate__rubberBand">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="row">
                <div className="col  mb-5">
                  <Resultado
                    textoIngresado={textoIngreso}
                    FormulaCalcular={FormulaCalcular}
                  ></Resultado>
                </div>
              </div>
            </li>
            <li className="list-group-item ">
              <div className="row mt-5 mb-3">
                <div className="col">
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"  
                      >
                      
                      </button>
                    </div>
                    <div className="col ">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-7"
                        onClick={() => agregarCalculo("7")}
                      >
                        7
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-8"
                        onClick={() => agregarCalculo("8")}
                      >
                        8
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-9"
                        onClick={() => agregarCalculo("9")}
                      >
                        9
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-secondary botonOperation"
                        id="btn-div"
                        onClick={() => agregarCalculo("/")}
                      >
                        /
                      </button>
                    </div>
                  </div>

                  <div className="row mt-2 ">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-parenteAbr"
                        onClick={() => agregarCalculo("(")}
                      >
                        (
                      </button>
                    </div>

                    <div className="col ">
                      <button
                        type="button"
                        className="btn btn-light botonNumero "
                        id="btn-4"
                        onClick={() => agregarCalculo("4")}
                      >
                        4
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-5"
                        onClick={() => agregarCalculo("5")}
                      >
                        5
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-6"
                        onClick={() => agregarCalculo("6")}
                      >
                        6
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-secondary botonOperation"
                        id="btn-x"
                        onClick={() => agregarCalculo("*")}
                      >
                        X
                      </button>
                    </div>
                  </div>

                  <div className="row mt-2 ">

                  <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-parenteCerr"
                        onClick={() => agregarCalculo(")")}
                      >
                        )
                      </button>
                    </div>

                    <div className="col ">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-1"
                        onClick={() => agregarCalculo("1")}
                      >
                        1
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-2"
                        onClick={() => agregarCalculo("2")}
                      >
                        2
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-3"
                        onClick={() => agregarCalculo("3")}
                      >
                        3
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-secondary botonOperation "
                        id="btn-men"
                        onClick={() => agregarCalculo("-")}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <div className="row mt-2 ">
                    <div className="col">
                    <button
                        type="button"
                        className="btn btn-danger botonNumero"
                        id="btn-clear"
                        onClick={() => limpiar()}
                      >
                        C
                      </button>
                    </div>
                    <div className="col ">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-0"
                        onClick={() => agregarCalculo("0")}
                      >
                        0
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-light botonNumero"
                        id="btn-punto"
                        onClick={() => agregarCalculo(".")}
                      >
                        .
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-primary botonOperation"
                        id="calcular"
                        onClick={() => calcular()}
                      >
                        =
                      </button>
                    </div>
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-secondary botonOperation"
                        id="btn-mas"
                        onClick={() => agregarCalculo("+")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculadora;
