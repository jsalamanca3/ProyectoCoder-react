import { useContext } from "react";
import "./carrito.css";
import { cartContext } from "../../context/cartContext";

function CartWidget() {
    const context = useContext(cartContext)
    return (
        <div className="header-carrito">
            <span className="material-symbols-outlined">
            shopping_cart
            </span>
            <div className="header-cartWidget-carrito">
                <p className="cartWidget-carrito">{context.cart.length}</p>
            </div>
        </div>
    )
}

export default CartWidget;