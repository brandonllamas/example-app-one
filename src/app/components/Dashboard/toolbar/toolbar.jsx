import React from "react";
import { Link } from "react-router-dom";
import "./Toolbar.css";
 
const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <Link to="/gifApp">
                <span className="navbar-text mr-3 text-ligth text-nass">
                  Gif
                </span>
              </Link>
              <Link to="/">
                <span className="navbar-text text-nass">Calculadora</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <span class="navbar-brand">Utilidades</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;
