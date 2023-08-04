import { useState, createContext } from "react";

const cartContext = createContext({ cart: [] });

function CartContextProvider(props) {
  const [cart, setCart] = useState([]);

  const prueba = "otra prueba";

  function addToCart(product, count) {
    const newCart = cart.map((item) => item);
    const newItemInCart = { count, ...product };
    newCart.push(newItemInCart);
    setCart(newCart);
  }

  function removeItem(id) {
    //
    return null;
  }

  function clearCart() {
    return null;
  }

  function getTotalItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  function getItem(id) {
    return cart[0];
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        prueba,
        addToCart,
        removeItem,
        clearCart,
        getTotalItemsInCart,
      }}
    >
      {props.children}
    </cartContext.Provider>
  );
}

export { cartContext, CartContextProvider };