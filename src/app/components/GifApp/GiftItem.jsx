import "./GiftAppStyle.css";
import React from "react";

const GifItem = ({ title, url, like, remove, removeAction }) => {
  const setLike = async () => {
    like(url);
  };
  const removAc = async () => {
    removeAction(title);
  };
  return (
    <div className="card animate__animated animate__fadeIn card">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body text-center">
      
        {remove ? (
          <button className="btn btn-outline-warning" onClick={removAc}>
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        ) : (
          <button className="btn btn-outline-danger" onClick={setLike}>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
        )}
      </div>
    </div>
  );
};

export default GifItem;
