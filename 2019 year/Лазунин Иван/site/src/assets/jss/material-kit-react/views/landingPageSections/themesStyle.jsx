import {section, titleContent, description, hidenBlock} from "assets/jss/material-kit-react.jsx"

const themesStyle = {
    flexCell: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    numberName: {
        verticalAlign: "middle",
        fontWeight: "400"
    },
    level: {
        width: "38px",
        height: "38px",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "38px"
    },
    levelA: {
        backgroundColor: "#C8B5B0",
        color: "#885D52"
    },
    levelB: {
        backgroundColor: "#C0C0C0",
        color: "#757575"
    },
    levelC: {
        backgroundColor: "#EED699",
        color: "#DAA520"
    },
    tableRow: {
        padding: "10px 0",
        borderRadius: "3px"
    },
    geg: {
        willChange: "transform",
        transition:
            "box-shadow 0.13s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        touchAction: "manipulation",
        cursor: "pointer",
        "&:hover,&:focus": {
            background: "rgba(200, 200, 200, 0.2)"
        },
        "&:active": {
            background: "rgba(200, 200, 200, 0.5)"
        }
    },
    titleContent: {
        ...titleContent
    },
    section: {
        ...section
    },
    hidenBlock: {
        ...hidenBlock
    }
};
export default themesStyle