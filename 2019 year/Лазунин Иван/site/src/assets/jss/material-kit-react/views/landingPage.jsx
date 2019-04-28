import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = {
    container: {
        zIndex: "1",
        color: "#FFFFFF",
        ...container
    },
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },
    main: {
        background: "#FFFFFF",
        position: "relative",
        zIndex: "3",
        paddingTop: "10px",
        marginTop: "-60px",
        "@media (min-width: 576px)": {
            margin: "-60px 30px 0px",
            borderRadius: "6px"
        }
    }
};

export default landingPageStyle;
