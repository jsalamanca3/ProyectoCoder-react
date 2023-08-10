import "./App.css";
import NavLink from "./components/NavBar/NavLink";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saludo from "./components/ItemListContainer/Saludo";
import Start from "./components/Start/Start";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";
import Checkout from "./components/Checkout/Checkout";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Nosotros from "./components/Start/Nosotros";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Start/Footer";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavLink />
          <main>
            <section className="main-section">
              <div>
                <Routes>
                  <Route path="/" element={<Start />} />
                  <Route path="/productos" element={<><Saludo colorTexto="blue" greenting="Bienvenido Usuario"/><ItemListContainer /></>}/>
                  <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                  <Route path="/sobre-nosotros" element={<Nosotros />}/>
                  <Route path="/product/:id" element={<ItemDetailContainer />}/>
                  <Route path="/cart" element={<CartContainer />}/>
                  <Route path="/checkout" element={<Checkout />}/>
                  <Route path="/order-confirmation/:id" element={<OrderConfirm />}/>
                  <Route path="*" element={<NotFoundPage />}/>
                </Routes>
                <ToastContainer />
              </div>
            </section>
          </main>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;