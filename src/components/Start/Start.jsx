import "./start.css"


function Start() {
    return (
        <div className="div-container-start">
            <div className="div-container-title_start">
                <span className="span-start"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" alt="Icono"/></span>
                <h1 className="h1-start">Bienvenidos a Nuestra Tienda</h1>
                <span className="span-start"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png" alt="Icono"/></span>
            </div>
            <div>
                <p className="p-start">En nuestra Appi encontrarás una lista de productos relacionados con los Pókemons.</p>
                <p className="p-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="div-section-galeria">
                <h2 className="h2-galeria"> Nuestra galeria</h2>
                <div className="container-galeria-start">
                    <div className="caja-1">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/95.svg" alt="Onix"/>
                    </div>
                    <div className="caja-2">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/103.svg" alt="Exeggutor"/>
                    </div>
                    <div className="caja-3">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/108.svg" alt="Lickitung"/>
                    </div>
                    <div className="caja-4">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/125.svg" alt="Electabuzz"/>
                    </div>
                    <div className="caja-5">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/141.svg" alt="Kabutops"/>
                    </div>
                    <div className="caja-6">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/144.svg" alt="Articuno"/>
                    </div>
                    <div className="caja-7">
                    <img className="img-galery-pokemon" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg" alt="Mewtwo"/>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Start;