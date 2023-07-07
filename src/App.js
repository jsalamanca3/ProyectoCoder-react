import './App.css';
import BarraNavegacion from './components/BarraNavegacion/BarraNavegacion';
import CartWidget from './components/CartWidget/CartWidget';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <div className="header-div">
            <nav className="header-nav">
                <ul className="header-nav-ul">
                <BarraNavegacion colorAncla="red" ancla="Uno" />
                <BarraNavegacion ancla="Dos" />
                <BarraNavegacion ancla="Tres" />
                <BarraNavegacion ancla="Cuatro" />
                </ul>
            </nav>
        </div>
        <CartWidget />
      </header>
      <main>
        <section className='main-section'>
          <div>
            <ItemListContainer colorTexto="blue" texto="Bienvenidos a la Tienda" />
          </div>
        </section>
      </main>
    </div>
  );

}

export default App;
