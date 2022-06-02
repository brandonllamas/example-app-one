import React from "react";
import {
    BrowserRouter,
    Routes ,
    Route
  } from "react-router-dom";
import './Dashboard.css';
  
import Calculadora from "../Calculadora/calculadora";
import Toolbar from "./toolbar/toolbar";
import GifApp from "../GifApp/GiftApp";

const Dashboard = () => {
  return (
    <BrowserRouter>

    <div className="contenedorPadre">
      <Toolbar></Toolbar>
      <div className="contenedorRuta">
      {/* HI soy dashboard */}
        <Routes >
          <Route exact  path="/" element={<Calculadora />} />
          <Route exact  path="/gifApp" element={<GifApp />} />
        </Routes >
      </div>
  
    </div>
    </BrowserRouter>

  );
};

export default Dashboard;
