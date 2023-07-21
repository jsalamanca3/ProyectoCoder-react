import "./logo.css";
import { Link } from "react-router-dom";


function Logo() {
    return (
        <Link to="/" className="App-logo">
          <img src="/"  alt="PóKemon"/>
        </Link>
    )
}
export default Logo;