import { container } from "assets/jss/material-kit-react.jsx"
import {section, titleContent} from "assets/jss/material-kit-react.jsx"


const testPageStyle = {
    parallax: {
        background: '#37474f',
        color: '#fff'
    },
    taskNum: {
        margin: '20px 0 20px 40px'
    },
    container: {
        ...container
    },
    main: {
        background: "#FFFFFF",
        paddingTop: "25px",
        borderRadius: "6px",
        boxShadow: "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
        position: "relative",
        zIndex: "3"
    },
    mainFirst: {
        margin: "-60px 30px 0px"
    },
    mainSecond: {
        margin: "40px 30px 0px"
    },
    task: {
        padding: '0 0 30px 0'
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
    submit: {
        display: 'flex',
        justifyContent: 'center',
        padding: '30px 0'
    },
    flexCell: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    numberName: {
        verticalAlign: "middle",
        fontWeight: "400"
    },
    tableRow: {
        padding: "5px 0",
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
    progressBox: {
        backgroundColor:'#f4f4f4',
        borderRadius: '50%',
        display: 'inline-block'
    },
    progressCell: {
        display: "flex",
        justifyContent: "center",
        textAlign: 'center'
    }
};

export default testPageStyle;
