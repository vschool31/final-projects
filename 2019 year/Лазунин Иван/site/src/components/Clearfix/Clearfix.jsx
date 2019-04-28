import React from "react";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";

const style = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "'
    },
    "&:after": {
      clear: "both"
    }
  }
};

function Clearfix({ ...props }) {
  const { classes } = props;
  return <div className={classes.clearfix} />;
}

Clearfix.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(style)(Clearfix);
