import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import DisplayPage from "./pages/DisplayPage";
import { getProducts } from "./redux/action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div style={{ textAlign: "center" }}>
        <h1> Prueba tecnica front Ecomsur 2021</h1>
        <Routes>
          <Route exact path="/" element={<DisplayPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
