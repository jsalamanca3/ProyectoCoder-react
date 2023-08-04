
import { useState, useEffect, useContext } from "react";
import { getProductData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetailContainer/ItemDetail";
import { cartContext } from "../../context/cartContext";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import "./itemDetail.css";



function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const { id } = useParams();

  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    async function requestProduct() {
      const respuesta = await getProductData(id);
      setProduct(respuesta);
    }

    requestProduct();
  }, [id]);

  function handleAddToCart(count) {
    addToCart(product, count);
    alert(`Producto agregado al carrito, cantidad: ${count}`);
    setIsAddedToCart(true);
  }

  return (
    <div className="div-container-product">
      <div className="container-card ">
        <ItemDetail product={product} />
        <div>
          {product.stock > 0 ? (
            /* Si tenemos STOCK */
            isAddedToCart ? ( <a href="/cart">Ir al carrito</a> ) : ( <ItemCount stock={product.stock} onConfirm={handleAddToCart} /> )
          ) : (
            // END si tenemos stock
            <p>No hay stock disponible</p>
          )}
          <Link to="/" className="link-inicio">
            <ButtonComponent colorFondo="black" >Volver al inicio</ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  )
}


export default ItemDetailContainer;