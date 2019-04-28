import React from "react";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";

import typographyStyle from "../../assets/jss/material-kit-react/components/typographyStyle";

function Warning({ ...props }) {
  const { classes, children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}

Warning.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(typographyStyle)(Warning);
