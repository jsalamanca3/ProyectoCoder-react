import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./itemDetail.css";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import { DotSpinner } from "@uiball/loaders";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [productNotFound, setProductNotFound] = useState(false);

  const { id } = useParams();

  const { addToCart, getItemInCart } = useContext(cartContext);

  const itemInCart = getItemInCart(id);
  const maxItem = itemInCart ? product.stock - itemInCart.count : product.stock;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function requestProduct() {
      try {
        setIsLoading(true);

        const respuesta = await getProductData(id);
        setProduct(respuesta);
      } catch (error) {
        setProductNotFound(true);
      } finally {
        setIsLoading(false);
      }
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(count) {
    addToCart(product, count);
    setIsAddedToCart(true);

    toast.success(`Producto agregado al carrito, cantidad: ${count}`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  if (productNotFound) {
    return <NotFoundPage to="/page-not-found" />;
  }

  return (
    <div
      className={`div-container-product ${isLoading ? "center-loader" : ""}`}
    >
      {isLoading ? (
        <DotSpinner size={100} speed={2} color="black" />
      ) : (
        <>
          <div className="container-card">
            <ItemDetail product={product} />
            <div className="div-ir-carrito">
              {product.stock > 0 ? (
                isAddedToCart ? (
                  <Link to="/cart" className="ir-carrito">
                    Ir al carrito
                  </Link>
                ) : (
                  <ItemCount stock={maxItem} onConfirm={handleAddToCart} />
                )
              ) : (
                <p>No hay stock disponible</p>
              )}
              {itemInCart && (
                <h2 className="h-stock-agregado">
                  Ya agregaste {itemInCart.count} unidades de este producto
                </h2>
              )}
              <Link to="/productos" className="link-inicio">
                <ButtonComponent colorFondo="#000000cc" radius="20px" h="50px">
                  Volver a la tienda
                </ButtonComponent>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetailContainer;
