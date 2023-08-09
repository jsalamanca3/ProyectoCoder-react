import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";
import "./cartcontainer.css"


function CartContainer() {
  const {cart, removeItem } = useContext(cartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="div-container-cart-empty">
        <p className="p-cart-empty">No hay productos en el carrito.</p>
        <Link to="/" className="a-back-to-home">Volver a la tienda</Link>
      </div>
    );
  }
  return (
    <div className="div-container-cart-products">
      <h1 className="h-cart-products">Productos en Carrito:</h1>
      <div className="div-container-products-in-cart-items">
        {cart.map((item) => (
        <div key={item} className="div-container-product-in-cart">
          <div className="div-img-product-in-cart">
            <img alt="Producto" src={item.img} className="img-product-in-cart"/>
          </div>
          <div className="div-details-product-in-cart">
            <h2 className="h2-item-title-in-cart">{item.title}</h2>
            <p className="p-in-cart">Precio unitario: ${item.price}</p>
            <p className="p-in-cart">Cantidad a comprar: {item.count}</p>
            <p className="p-in-cart">Precio total: ${item.count * item.price}</p>
            <button onClick={() => removeItem(item.id)} className="btn-products-in-cart">Eliminiar</button>
          </div>
        </div>
      ))}
      </div>
      <br />
      <div className="div-total-in-cart">Total de la compra: ${totalPrice}</div>
      <Link to={cart.length > 0 ? "/checkout" : "#"} className="a-checkout-in-cart">
        Comprar
      </Link>
    </div>
  );
}

export default CartContainer;