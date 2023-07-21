import "./App.css";
import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import CartWidget from "./components/CartWidget/CartWidget";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Saludo from "./components/ItemListContainer/Saludo";
import Logo from "./components/BarraNavegacion/Logo";
import Start from "./components/Start/Start";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
        <Logo />
          <div className="header-div">
            <nav className="header-nav">
              <ul className="header-nav-ul">
                <BarraNavegacion />
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
                    <h1>
                      Prueba <button>Volver</button>
                    </h1>
                  }
                />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<h1>Page not found: 404</h1>} />
              </Routes>
            </div>
          </section>
        </main>
      </BrowserRouter>
      <footer>
      <h2> Soy el footer</h2>
      </footer>
    </div>
  );
}

export default App;
