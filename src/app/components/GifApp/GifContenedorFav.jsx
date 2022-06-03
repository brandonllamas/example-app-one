import React from "react";
import { addFavorite } from "../../hooks/useGetGifs";
import { fire } from "../../services/firebase";
import GifItem from "./GiftItem";

const GifContenedorFav = () => {
  const [favoritos, setFavoritos] = React.useState([]);

  React.useEffect(() => {
    obtenerDatos();
    // console.log("array");
  }, []);

  const obtenerDatos = async () => {
    try {
      setFavoritos([]);
      const db = fire.firestore();
      const data = await db.collection("favoritos").get();
      db.collection("favoritos").onSnapshot((snapshot )=>{
          snapshot.docChanges().forEach( (change) =>{
            if (change.type === "added") {
                console.log("New city: ", change.doc.data());
                var fav = favoritos;
                var data = change.doc.data();
                fav.push({id:data.id ,...data});
                setFavoritos(fav);
            }
            if (change.type === "modified") {
                console.log("Modified city: ", change.doc.data());
            }
            if (change.type === "removed") {
                console.log("Removed city: ", change.doc.data());
            }
          })
      })
      const array = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
    //   setFavoritos(array);
      //   console.log(array);
    } catch (error) {
      console.log(error);
    }
  };

  const likess = async (image) => {
    //   console.log(image);
    await addFavorite(image);
    await obtenerDatos();
  };

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
              <GifItem key={gif.id} url={gif.url} like={likess} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GifContenedorFav;
