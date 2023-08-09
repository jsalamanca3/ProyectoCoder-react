import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

function ItemList(props) {
    const {products } = props;
    return(
    <>
      <div>
        <h2 className="h2-listado">Mira nuestros Productos</h2>
        <div className="container-products">
          {products.map((item) => (
            <Item key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
    )
}


export default ItemList;