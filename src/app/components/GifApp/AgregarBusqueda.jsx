import { useState } from "react";

const AgregarBusqueda = ({ setCategoriasBusqueda }) => {
  const [valorBusqueda, setValorBusqueda] = useState("");

  const cambiarValorBusqueda = (e) => {
    setValorBusqueda(e.target.value);
  };

  const buscar = (e) => {
    e.preventDefault();

    if (valorBusqueda.trim().length > 0) {
      setCategoriasBusqueda((valores) => [valorBusqueda, ...valores]);
      setValorBusqueda("");
    }
  };

  return (
    <>
      <form onSubmit={buscar}>
        <div className="row">
          <div className="col">
            <div className="mb-3">
                <label htmlFor="" className="form-label">Busqueda</label>
              <input
                type="text"
                className="form-control"
                value={valorBusqueda}
                onChange={cambiarValorBusqueda}
              />
            </div>
          </div>
        </div>
      </form>
      {
      valorBusqueda != "" ?(<p className="row animate__animated animate__bounce">{valorBusqueda}</p>) : ""
      }
    </>
  );
};

export default AgregarBusqueda;
