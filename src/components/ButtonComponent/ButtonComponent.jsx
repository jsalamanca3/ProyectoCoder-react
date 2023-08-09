import "./button.css";

function ButtonComponent(props) {
    const { children, colorFondo, radius, h } = props;
    const styleButton = {
    backgroundColor: colorFondo,
    borderRadius: radius,
    height: h
    };

    return (
    <>
        <button style={styleButton} className="btn">
        {children}
        </button>
    </>
    );
}

export default ButtonComponent;
