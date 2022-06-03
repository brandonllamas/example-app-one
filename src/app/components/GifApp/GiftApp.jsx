import React from 'react'
import { useState } from 'react'
import AgregarBusqueda from './AgregarBusqueda'
import GifContenedor from './GifContenedor';

const GifApp = ({categorias = ['rick and morti']}) => {
    const [categoriasBusqueda, setCategoriasBusqueda] = useState(categorias);
    return (
    <>
    <AgregarBusqueda setCategoriasBusqueda={setCategoriasBusqueda}/>
    {/* {categorias} */}

    <ol>
    {
                <GifContenedor
                    key = {'topGif'} 
                    valorBusqueda={'topGif'}
                />
        }
        
        {
            categoriasBusqueda.map(categoriaBusqueda => (
                <GifContenedor
                    key = {categoriaBusqueda} 
                    valorBusqueda={categoriaBusqueda}
                />
            ))
        }
    </ol>
    </>
  )
}

export default GifApp