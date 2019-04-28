// ##############################
// // // Styles for project
// #############################
import Config from '../../config/projectInfo';
import {createMuiTheme} from "@material-ui/core";

const drawerWidth = 260;

const transition = {
    transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const conatinerFluid = {
    paddingRight: "15px",
    paddingLeft: "15px",
    // marginTop: "40px",
    marginRight: "auto",
    marginLeft: "auto",
    width: "100%"
};
const container = {
    ...conatinerFluid,
    "@media (min-width: 576px)": {
        maxWidth: "540px"
    },
    "@media (min-width: 768px)": {
        maxWidth: "720px"
    },
    "@media (min-width: 960px)": {
        maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
        maxWidth: "1140px"
    }
};

const boxShadow = {
    boxShadow:
        "0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
};

const card = {
    display: "inline-block",
    position: "relative",
    width: "100%",
    margin: "25px 0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.14)",
    borderRadius: "3px",
    color: "rgba(0, 0, 0, 0.87)",
    background: "#fff"
};

const defaultFont = {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: "400",
    lineHeight: "1.5em"
};

const primaryColor = Config.primaryColor;
const secondaryColor = Config.secondaryColor;
const warningColor = "#ff9800";
const dangerColor = "#e53935";
const successColor = "#4caf50";
const infoColor = "#00acc1";
const roseColor = "#e91e63";
const grayColor = "#999999";
const titleColor = "#3C4858";

const colorToPrimary = (color) => {
    const theme = createMuiTheme({
        palette: {
            primary: { main: color }
        }
    });

    return theme
};

const DangerPrimary = colorToPrimary(dangerColor);


const primaryRGBA = (num) => `rgba(0, 77, 64, ${num})`;

const makeRGBA = (hex, t) => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ?
        `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}, ${t})`
        :
        null
};

const makeButtonShadow = (color) => `0 4px 20px 0 ${makeRGBA(color, 0.14)}, 0 7px 10px -5px ${makeRGBA(color, 0.4)}`;

const makeShadow = (color) => `0 12px 20px -10px ${makeRGBA(color, 0.28)}, 0 4px 20px 0px ${makeRGBA(color, 0.12)}, 0 7px 8px -5px ${makeRGBA(color, 0.2)}`;

const primaryBoxShadow = {
    boxShadow: makeShadow(primaryColor)
};
const secondaryBoxShadow = {
    boxShadow: makeShadow(secondaryColor)
};
const infoBoxShadow = {
    boxShadow: makeShadow(infoColor)
};
const successBoxShadow = {
    boxShadow: makeShadow(successColor)
};
const warningBoxShadow = {
    boxShadow: makeShadow(warningColor)
};
const dangerBoxShadow = {
    boxShadow: makeShadow(dangerColor)
};
const roseBoxShadow = {
    boxShadow: makeShadow(roseColor)
};
const warningCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ffa726, #fb8c00)",
    ...warningBoxShadow
};
const successCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #66bb6a, #43a047)",
    ...successBoxShadow
};
const dangerCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ef5350, #e53935)",
    ...dangerBoxShadow
};
const infoCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #26c6da, #00acc1)",
    ...infoBoxShadow
};
const primaryCardHeader = {
    color: "#fff",
    background: `linear-gradient(60deg, ${primaryColor} , ${secondaryColor} )`,
    ...primaryBoxShadow
};
const roseCardHeader = {
    color: "#fff",
    background: "linear-gradient(60deg, #ec407a, #d81b60)",
    ...roseBoxShadow
};
const cardActions = {
    margin: "0 20px 10px",
    paddingTop: "10px",
    borderTop: "1px solid #eeeeee",
    height: "auto",
    ...defaultFont
};

const cardHeader = {
    margin: "-30px 15px 0",
    borderRadius: "3px",
    padding: "15px"
};

const defaultBoxShadow = {
    border: "0",
    borderRadius: "3px",
    boxShadow: makeShadow("#000000"),
    padding: "10px 0",
    transition: "all 150ms ease 0s"
};

const title = {
    color: titleColor,
    margin: "1.75rem 0 0.875rem",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`
};

const titleContent = {
    color: titleColor,
    margin: "20px 0 20px 0",
    textAlign: "left",
    textDecoration: "none",
    fontWeight: "700",
    fontFamily: `"Roboto Slab", "Times New Roman", serif`,//`"Helvetica"`,
    minHeight: "32px"
};

const description = {
    color: "#999 !important"
};

const cardTitle = {
    ...title,
    marginTop: ".625rem"
};

const cardLink = {
    "& + $cardLink": {
        marginLeft: "1.25rem"
    }
};

const cardSubtitle = {
    marginBottom: "0",
    marginTop: "-.375rem"
};

const section = {
    padding: "50px 20px 20px 20px",
    color: "#999",
};

const hidenBlock = {
    // height: "400px",
    overflow: "hidden"
};

export {
    //variables
    colorToPrimary,
    DangerPrimary,
    drawerWidth,
    transition,
    container,
    section,
    conatinerFluid,
    boxShadow,
    card,
    defaultFont,
    primaryColor,
    secondaryColor,
    warningColor,
    dangerColor,
    successColor,
    primaryRGBA,
    infoColor,
    roseColor,
    grayColor,
    primaryBoxShadow,
    infoBoxShadow,
    successBoxShadow,
    warningBoxShadow,
    dangerBoxShadow,
    roseBoxShadow,
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    cardActions,
    cardHeader,
    defaultBoxShadow,
    title,
    titleContent,
    description,
    cardTitle,
    cardLink,
    cardSubtitle,
    makeButtonShadow,
    makeRGBA,
    secondaryBoxShadow,
    hidenBlock
}
