import {section, titleContent, description, makeRGBA, secondaryColor} from "assets/jss/material-kit-react.jsx"

const pastYearsStyle = {
    titleContent: {
        ...titleContent
    },
    section: {
        ...section
    },
    yearsScroll: {
        border: "1px solid rgba(0, 0, 0, 0.23)",
        borderRadius: "3px",
        minWidth: "100%",
        display: "flex",
        overflowX: "auto",
        "&::-webkit-scrollbar": {
            backgroundColor: "transparent",
            height: "8px"
        },
        "&::-webkit-scrollbar-thumb": {
            borderRadius: "10px",
            background: makeRGBA(secondaryColor, 0.15)
        },
        scrollbarColor: makeRGBA(secondaryColor, 0.15),
    }
};
export default pastYearsStyle