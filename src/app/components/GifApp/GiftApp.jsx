import React from "react";
import { useState } from "react";
import AgregarBusqueda from "./AgregarBusqueda";
import GifContenedor from "./GifContenedor";
import GifContenedorFav from "./GifContenedorFav";

const GifApp = ({ categorias = ["rick and morti"] }) => {
  const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
 
  
  return (
    <>
      <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda} />
      <ol>
        {<GifContenedorFav></GifContenedorFav>}
        {<GifContenedor key={"topGif"} valorBusqueda={"topGif"} />}

        {categoriasBusqueda.map((categoriaBusqueda) => (
          <GifContenedor
            key={categoriaBusqueda}
            valorBusqueda={categoriaBusqueda}
          />
        ))}
      </ol>
    </>
  );
};

export default GifApp;
