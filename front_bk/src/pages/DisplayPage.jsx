import React from "react";
import stl from "../css/DisplayPage.module.css";
import DetailProduct from "../components/DetailProduct";

const DisplayPage = () => {

  return (
    <div className={stl.displayContainer}>
      <DetailProduct />
    </div>
  );
};

export default DisplayPage;
