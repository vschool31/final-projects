import React from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { Manager, Target, Popper } from "react-popper";

import { withStyles } from "@material-ui/core/styles";
import { MenuItem, MenuList, ClickAwayListener, Paper, Grow, Divider } from "@material-ui/core";

import customDropdownStyle from "../../assets/jss/material-kit-react/components/customDropdownStyle";

class UserBatton extends React.Component {
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
            dropdownList,
            dropUp,
            dropdownHeader,
            left,
            picChild
        } = this.props;
        return (
            <Manager>
                <Target>
                    <div
                        className={classes.userPic}
                        onClick={this.handleClick}
                    >
                        {picChild}
                    </div>
                </Target>
                <Popper
                    placement={
                        dropUp
                            ? left ? "top-end" : "top-start"
                            : left ? "bottom-end" : "bottom-start"
                    }
                    eventsEnabled={open}
                >
                    <ClickAwayListener onClickAway={this.handleClose}>
                        <Grow
                            in={open}
                            id="menu-list"
                            style={{
                                transformOrigin: dropUp ? "0 100% 0" : "0 0 0"
                            }}
                        >
                            <Paper>
                                <MenuList role="menu">
                                    {dropdownHeader !== undefined ? (
                                        <MenuItem onClick={this.handleClose}>
                                            {dropdownHeader}
                                        </MenuItem>
                                    ) : null}
                                    {dropdownList.map((prop, key) => {
                                        if (prop.divider) {
                                            return (
                                                <Divider
                                                    key={key}
                                                    onClick={this.handleClose}
                                                />
                                            );
                                        }
                                        return (
                                            <Link
                                                to={prop.url}
                                                key={key}
                                                onClick={prop.onClick}>
                                                <MenuItem onClick={this.handleClose}>
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

UserBatton.propTypes = {
    buttonText: PropTypes.node,
    buttonIcon: PropTypes.func,
    dropdownList: PropTypes.array,
    buttonProps: PropTypes.object,
    dropUp: PropTypes.bool,
    dropdownHeader: PropTypes.node,
    left: PropTypes.bool
};

export default withStyles(customDropdownStyle)(UserBatton);
