import CartWidget from "../CartWidget/CartWidget";
import Logo from "./Logo";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavLink() {
  return (
    <>
      <header className="App-header">
        <Logo />
        <div className="header-div">
          <nav className="header-nav">
            <ul className="header-nav-ul">
              <li>
                <Link to="/productos" className="nav-ul-a">Productos</Link>
              </li>
              <li>
                <Link to="/category/fuego" className="nav-ul-a">Fuego</Link>
              </li>
              <li>
                <Link to="/category/planta" className="nav-ul-a">Planta</Link>
              </li>
              <li>
                <Link to="/sobre-nosotros" className="nav-ul-a">Sobre Nosotros</Link>
              </li>
            </ul>
          </nav>
        </div>
        <CartWidget />
      </header>
    </>
  );
}

export default NavLink;
