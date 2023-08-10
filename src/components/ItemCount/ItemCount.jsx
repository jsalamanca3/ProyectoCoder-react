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
        <button disabled={props.stock === 0} className="btn-increment" onClick={handleIncrement}>+</button>
        <p className="p-count">{count}</p>
        <button disabled={props.stock === 0} className="btn-Decrement" onClick={handleDecrement}>-</button>
      </div>
      <button disabled={props.stock === 0} onClick={() => props.onConfirm(count)} className="btn-carrito">Añadir al Carrito</button>
    </div>
  );
};

export default ItemCount;