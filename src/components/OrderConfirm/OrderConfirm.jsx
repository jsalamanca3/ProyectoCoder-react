import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../services/firebase";

function OrderConfirm() {
    const [ orderData, setOrderData ] = useState(null)
    const { id } = useParams()

    useEffect(()=> {
        getOrder(id).then (
            (order) => { setOrderData(order) }
        ).catch((error) => {
            setOrderData(null);
        });
    }, [id])

    return(
        <div>
            <div className="container-orderConfirm">
                <h2>Información de la Compra</h2>
                { orderData && orderData.items ?
                    <div>
                        <p>Tus productos:
                            {orderData.items.map((items) => {
                                return (
                                <h2 key={items.id}>{items.title} - {items.count}</h2>
                                );
                            })}
                        </p>
                    </div>
                    : <h2> Cargando </h2>
                }
            </div>
        </div>
    )
}

export default OrderConfirm;