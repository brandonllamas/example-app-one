import React from "react";
import { useGetGifs } from "../../hooks/useGetGifs";
import GifItem from "./GiftItem";

const GifContenedor = ({ valorBusqueda }) => {
  const { gifs, cargando } = useGetGifs(valorBusqueda);
  return (
    <> 
      <h3 className="mt-5 card-grid animate__animated animate__bounce"> Gif {valorBusqueda}</h3>
      {cargando && <p className="animate__animated animate__flash">Cargando</p>}

      <div className="card-grid animate__animated animate__bounceInUp">
        <div className="row">
          {gifs.map((gif) => (
            <div className="col">
              <GifItem key={gif.id} {...gif} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GifContenedor;
