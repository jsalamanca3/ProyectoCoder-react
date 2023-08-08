import "./NavBar.css";
import { Link } from "react-router-dom";

function NavLink() {

        return (
        <>
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
        </>
    )
}

export default NavLink;