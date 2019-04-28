const size = "48px"
const radianStatusStyle = {
    lol: {
        position: "relative",
        width: size,
        height: size,
        color: "#555",
        fontSize: "16px"
    },
    kek: {
        zIndex: "1",
        width: size,
        height: size,
        borderRadius: "50%",
        "&::after": {
            zIndex: "2",
            borderRadius: "50%",
            display: "block",
            content: '""',
            backgroundColor: "#fff",
            position: "absolute",
            left: "3px",
            top: "3px",
            height: "42px",
            width: "42px"
        }
    },
    cheburek: {
        color: "#999",
        zIndex: "3",
        position: "absolute",
        height: "48px",
        width: "48px",
        lineHeight: "48px",
        backgroundColor: "transparent",
        textAlign: "center",
        verticalAlign: "middle"
    }
}
export default radianStatusStyle