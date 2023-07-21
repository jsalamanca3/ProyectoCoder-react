import React, { useState, useEffect } from "react";
import "./itemcount.css"

const ItemCount = ({ producto, stock }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
  }, []);

  const handleIncrement = () => {
    if (count < stock) {
      setCount((prevCount) => prevCount + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="div-container-itemcount">
      <p className="p-stock-count">Stock disponible: {stock}</p>
      <div className="div-count">
        <button className="btn-increment" onClick={handleIncrement}>+</button>
        <p className="p-count">{count}</p>
        <button className="btn-Decrement" onClick={handleDecrement}>-</button>
      </div>
      <button className="btn-carrito">Añadir al Carrito</button>
    </div>
  );
};

export default ItemCount;


