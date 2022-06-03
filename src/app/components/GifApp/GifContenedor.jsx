import React from "react";
import { addFavorite, useGetGifs } from "../../hooks/useGetGifs";
import GifItem from "./GiftItem";

const GifContenedor = ({ valorBusqueda }) => {
  const { gifs, cargando } = useGetGifs(valorBusqueda);

  const likess = async (image) => {
    //   console.log(image);
    await addFavorite(image);
  };
  return (
    <>
      <h3 className="mt-5 card-grid animate__animated animate__bounce">
        {" "}
        Gif {valorBusqueda}
      </h3>
      {cargando && <p className="animate__animated animate__flash">Cargando</p>}

      <div className="card-grid animate__animated animate__bounceInUp">
        <div className="row">
          {gifs.map((gif) => (
            <div className="col">
              <GifItem key={gif.id} url={gif.url} like={likess} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GifContenedor;
