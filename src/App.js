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
                <Route path="/category/:categoryId" element={<ItemListContainer />}/>
                <Route path="/prueba" element={
                  <div>
                    <h1> ¿Quiénes somos?</h1>
                      <div>
                        <h2> Somos una tienda dedicada a vender productos de...</h2>
                        <img src="../../assets/logo192.png" alt="Presentacion"/>
                        <hr/>
                      </div>
                      <div>
                        <h2> Nuestos Valores</h2>
                      </div>
                      <div>
                        <h2> Ponte en contacto con nosotros</h2>
                        <div>
                          <p>Si quieresa saber mas acerca de nosotros</p>
                          <p>Siguenos en nuestras redes sociales</p>
                        </div>
                      </div>
                  </div>
                  }
                />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<CartContainer />}></Route>
                <Route path="*" element={<h1>Page not found: 404</h1>} />
              </Routes>
            </div>
          </section>
        </main>
      </BrowserRouter>
    </CartContextProvider>
      <footer>
        <div>
          <nav className="h">
              <ul className="h">
                <li>GitHub</li>
                <li>YouTube</li>
                <li>Facebook</li>
                <li>Linkendin</li>
              </ul>
            </nav>
        </div>
        <h2>Todos los derechos Reservados 2023</h2>
      </footer>
    </div>
  );
}

export default App;
