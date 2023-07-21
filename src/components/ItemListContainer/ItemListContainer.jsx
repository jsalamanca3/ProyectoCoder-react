import "./itemList.css";
import { useState, useEffect } from "react";
import getData, { getCategoryData } from "../../services/asyncProducts";
import Item from "../Item/Item";
import { useParams } from "react-router-dom";

function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  async function requestProducts() {
    let respuesta = categoryId
      ? await getCategoryData(categoryId)
      : await getData();
    setProducts(respuesta);
  }
  useEffect(() => {
    requestProducts();
  }, []);

  return (
    <>
      <div>
        <h2 className="h2-listado">Listado de Productos</h2>
        <div className="container-products">
          {products.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemListContainer;
