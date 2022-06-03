import {
    useEffect,
    useState
} from 'react'
import {
    getGifs
} from '../helpers/GetGifs'
import {
    fire
} from '../services/firebase'
import {
    nanoid
} from "nanoid";

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

export const addFavorite = async (url) => {

    console.log("valid()");

    try {
        const db = fire.firestore();
        const nuevoFav = {
            id: nanoid(),
            url: url,
            title: url
        };
        await db.collection('favoritos').add(nuevoFav)

    } catch (error) {
        console.log(error);
    }
};