
import { useState, useEffect } from "react";
import { getProductData } from "../../services/asyncProducts";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


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
    <ItemDetail product={product} />
  )
}


export default ItemDetailContainer;