import "./App.css";
import NavLink from "./components/NavBar/NavLink";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saludo from "./components/ItemListContainer/Saludo";
import Logo from "./components/NavBar/Logo";
import Start from "./components/Start/Start";
import { CartContextProvider } from "./context/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";
import Checkout from "./components/Checkout/Checkout";
import {FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import Nosotros from "./components/Start/Nosotros";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
    <CartContextProvider>
      <BrowserRouter>
        <header className="App-header">
        <Logo />
          <div className="header-div">
            <nav className="header-nav">
              <ul className="header-nav-ul">
                <NavLink />
              </ul>
            </nav>
          </div>
          <CartWidget />
        </header>
        <main>
          <section className="main-section">
            <div>
              <Routes>
                <Route path="/" element={
                  <>
                    <Start />
                  </>
                  }/>
                <Route path="/productos" element={
                <>
                  <Saludo colorTexto="blue" greenting="Bienvenido Usuario" />
                  <ItemListContainer />
                </>
                }/>
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/sobre-nosotros" element={<Nosotros />          }
                />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />} />
                <Route path="/checkout" element={ <Checkout /> }/>
                <Route path="/order-confirmation/:id" element={ <OrderConfirm /> }/>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
              <ToastContainer />
            </div>
          </section>
        </main>
      </BrowserRouter>
    </CartContextProvider>
      <footer>
      <div className="footer">
        <div className="div-container-footer">
          <nav className="footer-nav-container">
              <ul className="footer-nav-ul">
                <li><a className="footer-li-a" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
                <li><a className="footer-li-a" href="https://github.com/jsalamanca3/ProyectoCoder-react/tree/PreEntrega2SalamancaCh" target="_blank" rel="noopener noreferrer"><FaGithub /></a></li>
                <li><a className="footer-li-a" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a></li>
                <li><a className="footer-li-a" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
              </ul>
            </nav>
            <h2 className="h2-footer">Todos los derechos Reservados 2023</h2>
        </div>
      </div>
      </footer>
    </div>
  );
}

export default App;
