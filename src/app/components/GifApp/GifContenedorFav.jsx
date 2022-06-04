import React from "react";
import { addFavorite, eliminarFavorite } from "../../hooks/useGetGifs";
import { fire } from "../../services/firebase";
import GifItem from "./GiftItem";

const GifContenedorFav = () => {
  const [favoritos, setFavoritos] = React.useState([]);

  React.useEffect(() => {
    escucha()
    obtenerDatos();
    // console.log("array");
  }, []);

  const escucha = async () => {
    const db = fire.firestore();
    db.collection("favoritos").onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        obtenerDatos()
      });
    });
  };
  const obtenerDatos = async () => {
    try {
      setFavoritos([]);
      const db = fire.firestore();
      const data = await db.collection("favoritos").get();

      const array = data.docs.map((item) => ({
        ids: item.id,
        ...item.data(),
      }));
      setFavoritos(array);
      //   console.log(array);
    } catch (error) {
      console.log(error);
    }
  };

  const likess = async (image) => {
    //   console.log(image);
    await addFavorite(image);
    //await obtenerDatos();
  };

  const eliminar= async (id) =>{
    // console.log(id);
    await eliminarFavorite(id)
}

  return (
    <>
      <h3 className="mt-5 card-grid animate__animated animate__bounce">
        {" "}
        Gif Favoritos
      </h3>

      <div className="card-grid animate__animated animate__bounceInUp">
        <div className="row">
          {favoritos.map((gif) => (
            <div className="col">
              <GifItem key={gif.id} url={gif.url} like={likess} title={gif.ids} remove={true} removeAction={eliminar} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GifContenedorFav;
