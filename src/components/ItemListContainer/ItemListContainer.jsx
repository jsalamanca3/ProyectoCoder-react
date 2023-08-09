import { useState, useEffect } from "react";
import { getData, getCategoryData } from "../../services/firebase";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { DotSpinner } from "@uiball/loaders";

function ItemListContainer(props) {

  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const { categoryId } = useParams();


  useEffect(() => {
    async function requestProducts() {
      try {
        let respuesta = [];

        if (categoryId) {
          console.log(categoryId)
          respuesta = await getCategoryData(categoryId);
        } else {
          respuesta = await getData();
        }

        setProducts(respuesta);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    }

    requestProducts();
  }, [categoryId]);


  if (isLoading) {
    return (
      <div className={`div-container-product ${isLoading ? "center-loader" : ""}`}>
        <DotSpinner size={100} speed={2} color="black" />
      </div>
    );
  } else {
    console.log(products)
    return products.length === 0 ? (
      <p>No hay productos disponibles para esa consulta.</p>
    ) : (
      <ItemList products={products} />
    );
  }
}


export default ItemListContainer;
