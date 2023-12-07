import React , { useState, useEffect } from 'react';

export default function Galeria() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://scratchya.com.ar/react/datos.php')
        .then((response) => response.json())
        .then((jsonData) => {
            setData(jsonData);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
    }, []);
    return(
        <>
            <div className="carousel-style">
                <div style={{width: "100%", overflow: "hidden", position: "absolute"}}>
                    <p className="moving-text anim-left">SUTILMENTESUTILMENTESUTILMENTESUTILMENTE</p>
                    <p className="moving-text anim-right">SUTILMENTESUTILMENTESUTILMENTESUTILMENTE</p>
                    <p className="moving-text anim-left">SUTILMENTESUTILMENTESUTILMENTESUTILMENTE</p>
                </div>
                <div id="demo" className="carousel slide my-5" data-bs-ride="carousel" style={{width: "fit-content", margin:"auto"}}>
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active align-items-middle">
                            <img src="./images/TableWide.jpg" alt="im1" className="d-block carousel-img" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Coctelería sustentable</h5>
                                <p>Conscientes con el medioambiente!</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/PlantsSquare.jpg" alt="im2" className="d-block carousel-img" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Sabores Sorprendentes</h5>
                                <p>Creados con delicadeza</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="./images/RailingBottleWide.jpg" alt="im3" className="d-block carousel-img" />
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Creados con conciencia</h5>
                                <p>Solo para usted!</p>
                            </div>
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev" style={{background: "linear-gradient(90deg, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)"}}>
                        <i className="bi bi-arrow-left" style={{fontSize: "2rem"}}></i>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next" style={{background: "linear-gradient(-90deg, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0) 100%)"}}>
                        <i className="bi bi-arrow-right" style={{fontSize: "2rem"}}></i>
                    </button>
                </div>
            </div>
            <div className="py-3" style={{backgroundColor: "rgb(20, 20, 20)", textAlign: "center", color:"white"}}>
            <div className="title"><span>Nuestros Productos</span></div>
                <table className="mx-auto mt-3">
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Descripcion</th>
                        <th>Precio</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                        <td>{item.codigo}</td>
                        <td>{item.descripcion}</td>
                        <td>{item.precio}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}