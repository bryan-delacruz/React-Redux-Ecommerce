import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";

const DisplayPage = () => {
  let products = useSelector((state) => state.products);
  console.log(products);
  return (
    <div>
      <h2>Lista de Productos</h2>
      <div>
        {products?.map((p) => (
          <Card
            key={p._id}
            id={p._id}
            name={p.name}
            image={p.image}
            rating={p.rating}
            numReviews={p.numReviews}
            price={p.price}
            countInStock={p.countInStock}
          >
            {p._id}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DisplayPage;
