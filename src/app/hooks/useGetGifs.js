import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/GetGifs'

export const useGetGifs = (valorBusqueda) => {

    const [estado, setEstado] = useState({
        gifs: [],
        cargando: true
    })


    useEffect(() => {
        setTimeout(() =>
            getGifs(valorBusqueda)
            .then(gifs => {
                setEstado({
                    gifs: gifs,
                    cargando: false
                });
            }), 10)
    }, [valorBusqueda])

    return estado;

}