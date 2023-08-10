import React from "react";
import "./itemDetail.css";

function ItemDetail(props) {
  const { product } = props;

  return (
    <>
      <div>
        <div className="container-img container-card_product">
          <img className="img-product" src={product.img} alt="imagen"></img>
        </div>
        <div>
          <h2 className="text-card-product">{product.title}</h2>
        </div>
        <div>
          <h4 className="text-card-price">$ {product.price}</h4>
          <small className="text-card-description">{product.description}</small>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;