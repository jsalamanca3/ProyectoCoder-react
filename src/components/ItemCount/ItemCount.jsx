import { React, useState } from "react";
import "./itemcount.css"

function ItemCount(props) {
  const [count, setCount] = useState(1);


  const handleIncrement = () => {
    if (count < props.stock) {
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
      <p className="p-stock-count">Stock disponible: {props.stock}</p>
      <div className="div-count">
        <button className="btn-increment" onClick={handleIncrement}>+</button>
        <p className="p-count">{count}</p>
        <button className="btn-Decrement" onClick={handleDecrement}>-</button>
      </div>
      <button onClick={() => props.onConfirm(count)} className="btn-carrito">Añadir al Carrito</button>
    </div>
  );
};

export default ItemCount;


