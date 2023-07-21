import "./itemDetailContainer.css"
import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncProducts";
import { useParams } from "react-router-dom";


function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();


  async function requestProduct() {
    const respuesta = await getProductData(id);
    setProduct(respuesta);
  }

  useEffect(() => {
    requestProduct();
  }, []);

  return (
    <>
      <div className="div-container-product">
        <div className="container-card container-card_product">
          <div className="container-img container-card_product">
              <img className="img-product" src={product.img} alt="imagen"></img>
          </div>
          <div className="container-card_product">
              <h2 className="text-card-product">{product.title}</h2>
          </div>
          <div className="container-card_product">
              <h4 className="text-card-price">$ {product.price}</h4>
              <small className="text-card-description">{product.description}</small>
          </div>
        </div>
      </div>
    </>
  )
}


export default ItemDetailContainer;