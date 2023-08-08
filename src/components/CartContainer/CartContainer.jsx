import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";


function CartContainer() {
  const {cart, removeItem } = useContext(cartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div>
      <h1>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          <h2>{item.title}</h2>
          <p>Precio unitario: ${item.price}</p>
          <p>Cantidad a comprar {item.count}</p>
          <p>Precio total ${item.count * item.price}</p>
          <button onClick={() => removeItem(item.id)}>Eliminiar</button>
        </div>
      ))}

      <br />
      <div>Total de la compra: ${totalPrice} </div>
      <Link to="/checkout">Comprar</Link>
    </div>
  );
}

export default CartContainer;