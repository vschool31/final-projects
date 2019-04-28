import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

import {withStyles} from "@material-ui/core/styles";
import { MenuItem, MenuList, ClickAwayListener, Paper, Grow, Divider } from "@material-ui/core";

import Button from "../CustomButtons/Button.jsx";

import customDropdownStyle from "../../assets/jss/material-kit-react/components/customDropdownStyle";

class CustomDropdownLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleClick() {
        this.setState({ open: true });
    }
    handleClose() {
        this.setState({ open: false });
    }
    render() {
        const { open } = this.state;
        const {
            classes,
            buttonText,
            buttonIcon,
            dropdownList,
            buttonProps,
            dropup,
            dropdownHeader,
            caret,
            hoverColor,
            left,
            rtlActive
        } = this.props;
        const caretClasses = classNames({
            [classes.caret]: true,
            [classes.caretActive]: open,
            [classes.caretRTL]: rtlActive
        });
        const dropdownItem = classNames({
            [classes.dropdownItem]: true,
            [classes[hoverColor + "Hover"]]: true,
            [classes.dropdownItemRTL]: rtlActive
        });
        return (
            <Manager>
                <Target>
                    <Button
                    aria-label="Notifications"
                    aria-owns={open ? "menu-list" : null}
                    aria-haspopup="true"
                    {...buttonProps}
                    onClick={this.handleClick}>
                        {buttonIcon !== undefined ? <this.props.buttonIcon className={classes.buttonIcon} /> : null}
                        {buttonText !== undefined ? buttonText : null}
                        {caret ? <b className={caretClasses} /> : null}
                    </Button>
                </Target>
                <Popper
                    placement={
                        dropup
                            ? left ? "top-end" : "top-start"
                            : left ? "bottom-end" : "bottom-start"
                    }
                    eventsEnabled={open}
                    className={classNames({
                        [classes.popperClose]: !open,
                        [classes.pooperResponsive]: true
                    })}>
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={open}
                            id="menu-list"
                            style={
                                dropup
                                    ? { transformOrigin: "0 100% 0" }
                                    : { transformOrigin: "0 0 0" }
                            }
                        >
                            <Paper className={classes.dropdown}>
                                <MenuList role="menu" className={classes.menuList}>
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem onClick={this.handleClose} className={classes.dropdownHeader}>
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={this.handleClose}
                                                    className={classes.dropdownDividerItem}
                                                />
                                            );
                                        }
                                        return (
                                            <Link
                                                to={prop.url}
                                                key={key}
                                                onClick={prop.onClick}>
                                                <MenuItem
                                                    onClick={this.handleClose}
                                                    className={dropdownItem}>
                                                    {prop.name}
                                                </MenuItem>
                                            </Link>
                                        );
                                    })}
                                </MenuList>
                            </Paper>
                        </Grow>
                    </ClickAwayListener>
                </Popper>
            </Manager>
        );
    }
}

CustomDropdownLink.defaultProps = {
    caret: true,
    hoverColor: "primary"
};

CustomDropdownLink.propTypes = {
    classes: PropTypes.object.isRequired,
    hoverColor: PropTypes.oneOf(["primary", "black", "secondary"]),
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropup: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    rtlActive: PropTypes.bool,
    caret: PropTypes.bool,
    left: PropTypes.bool
};

export default withStyles(customDropdownStyle)(CustomDropdownLink);
