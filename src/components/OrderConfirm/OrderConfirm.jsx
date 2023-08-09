import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import "./orderconfirm.css";
import { DotSpinner } from "@uiball/loaders";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrder(id)
      .then((order) => {
        setOrderData(order);
        setIsLoading(false);
      })
      .catch((error) => {
        setOrderData(null);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div>
      <div className="container-orderConfirm">
        <h2 className="h-orderConfirm">Información de la Compra</h2>
        <hr style={{ width: "100%" }} />
        {isLoading ? (
          <div className="">
            <h2 className="h-loading-orderconfirm">
              Espera un momento estamos Cargando la información de tu compra...
            </h2>
            <div className={`div-container-product ${isLoading ? "center-loader" : ""}`}>
            <DotSpinner size={100} speed={2} color="black" />
            </div>
          </div>
        ) : orderData && orderData.items ? (
          <div className="div-container-products-orderConfirm">
            <p className="p-orderConfirm">
              Tus productos:
              {orderData.items.map((items, index) => (
                <h2
                  className="h-products-description-orderConfirm"
                  key={items.id}
                >
                  {index + 1}. {items.title} - {items.count} - ${items.price * items.count}
                  <hr style={{ width: "90%" }} />
                </h2>
              ))}
            </p>
            <p className="p-orderConfirm-total">
              Valor total de la compra: $
              {orderData.items.reduce(
                (total, items) => total + items.count * items.price,
                0
              )}
            </p>
          </div>
        ) : (
          <p>No se encontraron productos en la orden.</p>
        )}
      </div>
    </div>
  );
}

export default OrderConfirm;
