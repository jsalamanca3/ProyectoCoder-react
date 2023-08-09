import React from "react";
import "./nosotros.css";

function Nosotros() {

    return(
        <div className="div-container-nosotros">
            <h1 className="h-nosotros"> ¿Quiénes somos?</h1>
            <hr />
            <div className="div-container-somos">
                <p className="p-somos"> Somos una tienda dedicada a vender productos relacionados con los Pokémons... En nuestra tienda ponemos nuestro corazón y alma en todo lo que creamos para nuestros visitantes, además nos guiamos por nuestros principios para brindar el mejor acompañamiento a todo lo que hacemos.</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/235.svg" alt="Presentacion" className="img-somos"/>
            </div>
            <div className="div-valores">
                <h2 className="h-valores"> Nuestos Principios</h2>
                <hr />
                <p className="p-valores">Nos dedicamos a expresar las mejores ideas, seguidos por cuatro principios muy bien formados que son expresados por todos nuestros trabajadores en sus labores diarias, en su toma de decisiones y en sus acciones.</p>
                <div className="container-valores">
                    <div className="valores">
                        <p>La Familia</p>
                        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/242.svg" alt="Presentacion" className="img-valores"/>
                    </div>
                    <div className="valores">
                        <p>Originalidad</p>
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
                <h2>¡Mantente al día!</h2>
            </div>
            <hr />
            <div className="div-saber-mas">
                <p className="p-saber-mas">Si quieres saber más de nosotros y de los Pokémons, te invitamos a seguirnos en nuestras redes sociales</p>
                <p>¿Qué esperas?</p>
            </div>
        </div>
    )
}

export default Nosotros;