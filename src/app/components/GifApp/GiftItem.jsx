import "./GiftAppStyle.css";
import React from "react";

const GifItem = ({ title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn card">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body text-center">
        <button className="btn btn-outline-danger">
          <i class="fa fa-heart" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default GifItem;
