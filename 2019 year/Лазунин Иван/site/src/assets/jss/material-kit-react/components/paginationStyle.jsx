// ##############################
// // // Pagination component styles
// #############################

import {
  grayColor,
  secondaryColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  makeRGBA
} from "assets/jss/material-kit-react.jsx";

const makeShadow = (color) => `0 4px 5px 0 ${makeRGBA(color, 0.14)}, 0 1px 10px 0 ${makeRGBA(color, 0.12)}, 0 2px 4px -1px ${makeRGBA(color, 0.2)}`

const paginationStyle = {
  pagination: {
    display: "inline-block",
    paddingLeft: "0",
    margin: "0 0 20px 0",
    borderRadius: "4px"
  },
  paginationItem: {
    display: "inline"
  },
  paginationLink: {
    ":first-of-type": {
      marginleft: "0"
    },
    border: "0",
    borderRadius: "30px !important",
    transition: "all .3s",
    padding: "0px 11px",
    margin: "0 3px",
    minWidth: "30px",
    height: "30px",
    minHeight: "auto",
    lineHeight: "30px",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    background: "transparent",
    position: "relative",
    float: "left",
    textDecoration: "none",
    boxSizing: "border-box",
    "&,&:hover,&:focus": {
      color: grayColor
    },
    "&:hover,&:focus": {
      zIndex: "3",
      backgroundColor: "#eee",
      borderColor: "#ddd"
    },
    "&:hover": {
      cursor: "pointer"
    }
  },
  primary: {
    "&,&:hover,&:focus": {
      backgroundColor: primaryColor,
      borderColor: primaryColor,
      color: "#FFFFFF",
      boxShadow: makeShadow(primaryColor)
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  secondary: {
      "&,&:hover,&:focus": {
          backgroundColor: secondaryColor,
          borderColor: secondaryColor,
          color: "#FFFFFF",
          boxShadow: makeShadow(secondaryColor)
      },
      "&:hover,&:focus": {
          zIndex: "2",
          cursor: "default"
      }
  },
  info: {
    "&,&:hover,&:focus": {
      backgroundColor: infoColor,
      borderColor: infoColor,
      color: "#FFFFFF",
      boxShadow: makeShadow(infoColor)
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  success: {
    "&,&:hover,&:focus": {
      backgroundColor: successColor,
      borderColor: successColor,
      color: "#FFFFFF",
      boxShadow: makeShadow(successColor)
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  warning: {
    "&,&:hover,&:focus": {
      backgroundColor: warningColor,
      borderColor: warningColor,
      color: "#FFFFFF",
      boxShadow: makeShadow(warningColor)
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  danger: {
    "&,&:hover,&:focus": {
      backgroundColor: dangerColor,
      borderColor: dangerColor,
      color: "#FFFFFF",
      boxShadow: makeShadow(dangerColor)
    },
    "&:hover,&:focus": {
      zIndex: "2",
      cursor: "default"
    }
  },
  disabled: {
    "&,&:hover,&:focus": {
      color: "#777",
      cursor: "not-allowed",
      backgroundColor: "#fff",
      borderColor: "#ddd"
    }
  }
};

export default paginationStyle;
