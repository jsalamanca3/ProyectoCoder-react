import "./carrito.css";

function CartWidget() {
    return (
        <div className="header-carrito">
            <span class="material-symbols-outlined">
            shopping_cart
            </span>
            <div className="header-cartWidget-carrito">
                <p className="cartWidget-carrito">1</p>
            </div>
        </div>
    )
}

export default CartWidget;