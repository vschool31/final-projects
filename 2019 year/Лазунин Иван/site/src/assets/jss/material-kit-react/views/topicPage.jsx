import { container, title, section, titleContent } from "../../material-kit-react.jsx";

const topicPageStyle = {
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
        padding: "10px",
        marginTop: "-60px",
        "@media (min-width: 576px)": {
            margin: "-60px 30px 0px",
            borderRadius: "6px"
        }
    },
    youTube: {
        padding: "0 50px 0 50px",
    },
    section: {
        ...section
    },
    titleContent: {
        ...titleContent
    },
    paper: {
        background: '#eceff1',
        color: '#666',
        fontStyle: 'italic',
        padding: '10px 20px 10px 20px'
    },
    imageBox: {
        "& img": {
            maxWidth: '100%',
            height: '100%',
            objectFit: 'scale-down',
            margin: '10px auto 10px auto',
            display: 'block'
        }
    },

};

export default topicPageStyle;
