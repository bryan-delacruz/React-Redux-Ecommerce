import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import DisplayPage from "./pages/DisplayPage";
import CartPage from "./pages/CartPage";
import ListPage from "./pages/ListPage";

import { getProducts } from "./redux/action";

import stl from "./css/App.module.css";
import cart_img from "./assets/shopping-cart.png";

const App = () => {
  const dispatch = useDispatch();
  let cart = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getProducts());
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [dispatch, cart]);

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <nav className={stl.navbar}>
          <Link to={`/`} style={{ textDecoration: "none", color: "#fff" }}>
            <h1> Prueba tecnica front Ecomsur 2021</h1>
          </Link>
          <Link to={`/cart`} style={{ textDecoration: "none", color: "#fff" }}>
            <div>
              <img src={cart_img} alt="car-img" />
              <span>
                {cart.reduce((p, c) => {
                  return p + c.cantidad;
                }, 0)}
              </span>
            </div>
          </Link>
        </nav>
        <Routes>
          <Route exact path="/" element={<ListPage />} />
          <Route exact path="/:id" element={<DisplayPage />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
