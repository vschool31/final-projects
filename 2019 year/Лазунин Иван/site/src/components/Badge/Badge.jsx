import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import badgeStyle from "../../assets/jss/material-kit-react/components/badgeStyle";

function Badge({ ...props }) {
  const { classes, color, children } = props;
  return (
    <span className={classes.badge + " " + classes[color]}>{children}</span>
  );
}

Badge.defaultProps = {
  color: "gray"
};

Badge.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ])
};

export default withStyles(badgeStyle)(Badge);
