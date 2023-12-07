export default function Home() {
    return(
        <div>
            <div className="start-img">
                <h3 className="start-text">Ingredientes <br />
                de calidad, <br />
                aprovechados <br />
                al máximo</h3>
                <img src="./images/RailingBottleWide.jpg" alt="img" />
            </div>
            <div className="start-content"></div>
            <div class="start-info image-left" style={{backgroundColor: "rgb(20, 20, 20)"}}>
                <div style={{zIndex: "3"}}>
                    <h2>sutilmente</h2>
                </div>
            </div>
            <div class="start-info image-right" style={{backgroundColor: "rgb(20, 20, 20)"}}>
            </div>
        </div>
    )
}