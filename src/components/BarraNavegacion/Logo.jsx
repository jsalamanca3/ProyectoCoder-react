import "./logo.css";
import { Link } from "react-router-dom";
import logo from '../../assets/logo192.png';

function Logo() {
  return (
    <Link to="/" className="App-logo">
      <img src={logo} alt="PóKemon" />
    </Link>
  )
}
export default Logo;