import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import {withStyles} from "@material-ui/core/styles";

import parallaxStyle from "../../assets/jss/material-kit-react/components/parallaxStyle";

const scrollSpeed = 3;

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      transform: "translate3d(0," + window.pageYOffset / scrollSpeed + "px,0)"
    };
    this.resetTransform = this.resetTransform.bind(this);
  }

  componentDidMount() {
    this.setState({
      transform: "translate3d(0," + window.pageYOffset / scrollSpeed + "px,0)"
    });
    window.addEventListener("scroll", this.resetTransform);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.resetTransform);
  }
  resetTransform() {
    this.setState({
      transform: "translate3d(0," + window.pageYOffset / scrollSpeed + "px,0)"
    });
  }

  render() {
    const {
      classes,
      filter,
      className,
      children,
      style,
      image,
      sm,
      xs
    } = this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes.filter]: filter,
      [classes.sm]: sm,
      [classes.xs]: xs,
      [className]: className !== undefined
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.bool,
  sm: PropTypes.bool,
  xs: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string
};

export default withStyles(parallaxStyle)(Parallax);
