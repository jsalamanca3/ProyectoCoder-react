import "./itemList.css";

function ItemListContainer(props) {

    const styleTexto = {
        color: props.colorTexto,
    }

    return (
        <>
            <h1 style={styleTexto}>{props.texto}</h1>
            <h2>Bienvenidos a nuestra Tienda</h2>
        </>
    )
}

export default ItemListContainer;