import React from "react";
import "../../src/App.css";

export const Reducer = () => {
  const products = [
    { id: 1, name: "pencil", price: 12 },
    { id: 2, name: "paper", price: 22 },
    { id: 3, name: "table", price: 32 },
  ];
  const sumPrice = products.reduce(
    (sum, product) => (sum = sum + product.price),
    0
  );
  const concatNames = products.reduce(
    (sum, product) => (sum = sum + product.name),
    "product names:"
  );
  return (
    <div className="content">
      <h3>Reducer Function</h3>
      <h4>Totol Price: {sumPrice}</h4>
      <h6> {concatNames}</h6>
    </div>
  );
};
