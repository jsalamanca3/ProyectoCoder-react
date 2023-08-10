import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";
import "./orderconfirm.css";
import { DotSpinner } from "@uiball/loaders";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderConfirm() {
  const [orderData, setOrderData] = useState(null);
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [isConfirmed, setIsConfirmed] = useState(false);

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

  const handleConfirmation = () => {
    if (!isConfirmed) {
      setIsConfirmed(true);
      if (!isConfirmed) {
        toast.success(
          `¡Gracias por tu compra! ID de la compra: ${orderData.id}`,
          {
            autoClose: 10000,
          }
        );
      }
    }
  };

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
            <div
              className={`div-container-product ${
                isLoading ? "center-loader" : ""
              }`}
            >
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
                  {index + 1}. {items.title} - {items.count} - $
                  {items.price * items.count}
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
          <p className="p-order-confirm-error">Lo sentimos, pero no se encontraron productos en la orden</p>
        )}
        {!isConfirmed && orderData && orderData.items && orderData.items.length > 0 && (
          <div className="confirmation-section">
            <p>Por favor, confirma tu compra:</p>
            <p>
              En caso de cualquier problema con el producto, es importante conservar el ID de la compra: <strong>{orderData?.id}</strong>
            </p>
            <button className="btn" style={{width: "25%", height: "30px", borderRadius: "40px"}} onClick={handleConfirmation}>Aceptar</button>
          </div>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default OrderConfirm;