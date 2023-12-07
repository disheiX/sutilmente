export default function Nosotros() {
    return(
        <div style={{backgroundColor: "rgb(20, 20, 20)"}}>
            <div className="title"><span>Nosotros</span></div>
            <p className="text-explain">A medida que avanzamos, seguimos comprometidos con la innovación,
                    la sostenibilidad y la excelencia en cada aspecto de nuestro negocio,
                    para que más personas puedan disfrutar de la magia de Sutilmente en cualquier ocasión.</p>
            <div className="title"><span>Equipo de trabajo</span></div>
            <div className="d-flex justify-content-left px-5 mx-5">
                <div className="my-auto">
                    <img src="./images/user.png" alt="img"style={{height: "25vh", width: "auto"}} />
                </div>
                <div className="my-3">
                    <div className="title" style={{backgroundColor: "rgba(0, 0, 0, 0)", textAlign: "left", paddingLeft: "5%"}}><span>Clemente Jara</span></div>
                    <p className="text-explain">Fundador de Sutilmente. Emprendendor y estudiante de Ingeniería Civíl en Informática de la Universidad Adolfo Ibañez</p>
                </div>
            </div>
        </div>
    )
}