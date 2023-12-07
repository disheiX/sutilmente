import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    useEffect(() => {
        var prevScrollpos = window.scrollY;
        window.onscroll = function() {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos < currentScrollPos) {
            document.getElementById("navbar").style.top = `-${document.getElementById("navbar").offsetHeight * 0.6}px`;
        } else {
            document.getElementById("navbar").style.top = "0";
        }
        prevScrollpos = currentScrollPos;
        }
    }, [])

    return(
        <nav id="navbar" className="nav-style py-2">
            <div className="d-flex justify-content-around my-2">
                <Link to="/"><img height="60" src="./images/logo_trans_small.png" alt="Logo"/></Link>
                <div className="d-flex align-items-stretch" style={{gap: "2vh"}}>
                    <Link to="/" className="list-style nav-item">Inicio</Link>
                    <Link to="/quienes" className="list-style nav-item">Quienes Somos</Link>
                    <Link to="/nosotros" className="list-style nav-item">Nosotros</Link>
                    <Link to="/galeria" className="list-style nav-item">Galería</Link>
                    <Link to="/contacto" className="list-style nav-item">Contacto</Link>
                </div>
                <div className="nav-item" style={{marginTop: "auto", marginBottom: "auto"}}>
                    <i class="bi bi-envelope-open" style={{fontSize: "1.5rem", cursor: "pointer"}}></i>
                </div>
            </div>
            <div class="underline"></div>
        </nav>
    )
}