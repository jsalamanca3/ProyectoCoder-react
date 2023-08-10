import {FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';


function Footer() {
    return(
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
    )
};

export default Footer;