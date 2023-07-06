import "./NavBar.css";

function BarraNavegacion(props) {

    const styleAncla = {
        color: props.colorAncla,
    }

    return (
        <>
        <a style={styleAncla} className="nav-ul-a">{props.ancla}</a>
        </>
    )
}

export default BarraNavegacion;