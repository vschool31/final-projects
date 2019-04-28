import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { List, ListItem } from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

import footerStyle from "../../assets/jss/material-kit-react/components/footerStyle";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
              <ListItem className={classes.inlineBlock}>
                  <a
                      href="/"
                      className={classes.block}
                  >
                      Math+
                  </a>
              </ListItem>
              <ListItem className={classes.inlineBlock}>
                  <a href="https://vk.com/wibbn" className={classes.block}>
                      Мой вконтакте
                  </a>
              </ListItem>

          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} , @wibbn
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
