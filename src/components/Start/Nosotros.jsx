import React from "react";
import "./nosotros.css";

function Nosotros() {

    return(
        <div className="div-container-nosotros">
            <h1 className="h-nosotros"> ¿Quiénes somos?</h1>
            <hr />
            <div className="div-container-somos">
                <h2 className="h-somos"> Somos una tienda dedicada a vender productos relacionados con los Pokémons...</h2>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/235.svg" alt="Presentacion" className="img-somos"/>
            </div>
            <div className="div-valores">
                <h2 className="h-valores"> Nuestos Valores</h2>
                <hr />
                <div className="container-valores">
                    <div className="valores">
                        <p>La Familia</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/242.svg" alt="Presentacion" className="img-valores"/>
                    </div>
                    <div className="valores">
                        <p>Creatividad sin limites</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/244.svg" alt="Presentacion" className="img-valores"/>
                    </div>
                    <div className="valores">
                        <p>Respeto</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/251.svg" alt="Presentacion" className="img-valores"/>
                    </div>
                    <div className="valores">
                        <p>Crea y aprende</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/249.svg" alt="Presentacion" className="img-valores"/>
                    </div>
                </div>
            </div>
            <div className="div-contacto">
                <h2> Ponte en contacto con nosotros</h2>
                <hr />
            </div>
            <div className="div-saber-mas">
                <p className="p-saber-mas">Si quieresa saber más acerca de nosotros</p>
                <p>Siguenos en nuestras redes sociales</p>
            </div>
        </div>
    )
}

export default Nosotros;