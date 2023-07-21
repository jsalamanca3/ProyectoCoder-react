import "./itemList.css";

function Saludo (props) {

    const styleTexto = {
        color: props.colorTexto,
      };

    return (
        <h1 className="h1-saludo" style={styleTexto}>{props.greenting}</h1>
    )
}

export default Saludo;