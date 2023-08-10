import "./button.css";

function ButtonComponent(props) {
    const { children, colorFondo, radius, h, w } = props;
    const styleButton = {
    backgroundColor: colorFondo,
    borderRadius: radius,
    height: h,
    width: w
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