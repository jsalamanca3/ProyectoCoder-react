import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetailContainer.css"


function ItemDetail(props) {
    const {product} = props;

    return(
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
          <div className="container-card_product">
                <ItemCount key={product.id} stock={product.stock} />
          </div>
        </div>
      </div>
    </>
    )
}

export default ItemDetail;