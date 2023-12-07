import { Link } from "react-router-dom";

export default function Footer() {
    return(
        <div className="py-5 bg-dark" style={{padding: "17%", zIndex: "4"}}>
            <div className="d-flex justify-content-between pb-5 flex-wrap">
                <div style={{color: "white"}}><i className="flag flag-cl" style={{fontSize: "1.6rem"}}></i>Chile</div>
                <Link to="/"><img height="70" src="./images/logo_trans_small.png" alt="Logo"/></Link>
                <ul className="d-flex p-0" style={{gap: "10%", listStyle: "none"}}>
                    <li className="my-auto" style={{height: "fit-content"}}><Link to="/contacto"><i className="bi bi-envelope-open" style={{fontSize: "1.4rem", cursor: "pointer", color: "white"}}></i></Link></li>
                    <li className="my-auto" style={{height: "fit-content"}}><a href="https://www.instagram.com/sutilmente.drinks/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA=="><i className="bi bi-instagram" style={{fontSize: "1.4rem", cursor: "pointer", color: "white"}}></i></a></li>
                    <li className="my-auto" style={{height: "fit-content"}}><i className="bi bi-whatsapp" style={{fontSize: "1.4rem", cursor: "pointer", color: "white"}}></i></li>
                </ul>
            </div>
            <div className="d-flex justify-content-center mb-3" style={{gap: "5%"}}>
                <Link to="/" className="footbar-big">Inicio</Link>
                <Link to="/quienes" className="footbar-big">Quienes Somos</Link>
                <Link to="/nosotros" className="footbar-big">Nosotros</Link>
                <Link to="/galeria" className="footbar-big">Galería</Link>
                <Link to="/contacto" className="footbar-big">Contacto</Link>
            </div>
            <div className="footbar-underline"></div>
            <div className="d-flex justify-content-center my-3" style={{gap: "5%"}}>
                <Link to="/" className="footbar-small">Responsabilidad con el ambiente</Link>
                <Link to="/" className="footbar-small">Información nutricional</Link>
                <Link to="/" className="footbar-small">Términos y condiciones</Link>
            </div>
            <p className="footbar-text"><br />&#169; Sútilmente by Clemente Jara<br /><br />
            El consumo excesivo de alcohol provoca riesgos para la salud. Bebe con moderación.<br />
            Solo comparte este contenido con personas mayores de edad.</p>
        </div>
    )
}