import "./itemList.css";

function ItemListContainer(props) {

    const styleTexto = {
        color: props.colorTexto,
    }

    return (
        <>
            <h1 style={styleTexto}>{props.texto}</h1>
        </>
    )
}

export default ItemListContainer;