import { cartContext } from "../../context/cartContext";
import { useContext, useState } from "react";
import { createOrder } from "../../services/firebase";
import { Link, useNavigate } from "react-router-dom";
import "./checkout.css"

function Checkout(){
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const { cart, getTotalPriceInCart } = useContext(cartContext);
  const navigate = useNavigate();


  async function handleCheckout(evt){
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: getTotalPriceInCart(),
     };

     try {
      const idOrder = await createOrder(orderData);
      navigate(`/order-confirmation/${idOrder}`);
     } catch (error) {
      const idOrder = await createOrder(orderData);
      navigate(`/order-confirmation/${idOrder}`);
     }
  }


  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    const newState = {...buyer}
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e){
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    })
  }


  return (
    <form className="container-form-paid">
      <h2 className="h-title-form">Completa tus datos para completar la compra</h2>

      <div className="div-form-divs-labels">
        <div className="div-form-label">
          <label htmlFor="firstname" className="label-forms-paid">Nombre</label>
          <input className="input-form-paid" required value={buyer.firstname} name="firstname" type="text" onChange={onInputChange} />
        </div>

        <div className="div-form-label">
          <label htmlFor="lastname" className="label-forms-paid">Apellido</label>
          <input className="input-form-paid" required value={buyer.lastname} name="lastname" type="text" onChange={onInputChange} />
        </div>

        <div className="div-form-label">
          <label className="label-forms-paid">Edad</label>
          <input className="input-form-paid" required value={buyer.age}  name="age" type="number" onChange={onInputChange} />
        </div>

        <div className="div-form-label">
          <button className="btn-form-paid"
            disabled={!(buyer.firstname !== '' && buyer.lastname !== '' && buyer.age !== '')}
            onClick={handleCheckout}
          >
            Confirmar Compra
          </button>
          <button className="btn-form-paid" onClick={resetForm}>Cancelar</button>
        </div>
        <div className="div-form-label">
         <Link to="/productos" className="link-product-checkout">Volver a la tienda </Link>
        </div>
      </div>
    </form>
  );
}

export default Checkout;


