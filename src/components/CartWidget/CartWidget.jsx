import { useContext } from "react";
import "./carrito.css";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

function CartWidget() {
    const context = useContext(cartContext);

    const showCart = context.cart.length > 0;

    return (
        <div className="header-carrito">
                <Link to="/cart">
                    <span className="material-symbols-outlined">
                        shopping_cart
                    </span>
                </Link>
            {showCart && (
                <div className="header-cartWidget-carrito">
                    <p className="cartWidget-carrito">{context.cart.length}</p>
                </div>
            )}
        </div>
    );
}

export default CartWidget;
