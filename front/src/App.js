import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisplayPage from "./pages/DisplayPage";
import { getProducts } from "./redux/action";

import stl from "./css/App.module.css";
import cart_img from "./assets/shopping-cart.png";

const App = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <nav className={stl.navbar}>
          <h1> Prueba tecnica front Ecomsur 2021</h1>
          <div>
            <img src={cart_img} alt="car-img" />
            <span>
              {cart.reduce((p, c) => {
                return p + c.cantidad;
              }, 0)}
            </span>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<DisplayPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
