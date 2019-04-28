import { Link } from "react-router-dom";
import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import ReactHtmlParser from 'react-html-parser';

import { signOut } from "../../store/actions/auth";

import { AccountCircleOutlined } from "@material-ui/icons";

import {withStyles} from "@material-ui/core/styles";

import { Button, Snackbar } from "@material-ui/core";

import UserButton from '../CustomButtons/UserBatton';
import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

let jdenticon = require("jdenticon");


class AuthBtn extends React.Component {

    state = {
        open: false,
        vertical: 'bottom',
        horizontal: 'left'
    };

    handleClick = () => {
        setTimeout(() => this.setState({ open: true }), 1200);
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { auth, signIn, classes, signOut } = this.props;
        const { open, vertical, horizontal } = this.state;

        const userOnClick = () => {
            signOut();
            this.handleClick();
        };

        const userPic = jdenticon.toSvg(auth.uid, 40);

        return (
            <div>
                { (auth.uid) ? (
                    <UserButton
                    hoverColor="secondary"
                    picChild={ReactHtmlParser(userPic)}
                    dropdownList={[
                        {'name': 'Выйти', 'url': '#', 'onClick': userOnClick}
                    ]}
                    />
                ) : ((signIn) ? (
                    <Link to={"/register"}>
                        <Button
                            className={classes.registerNavLink}
                            color="secondary"
                            variant="contained"
                        >
                            <AccountCircleOutlined className={classes.icons}/> Зарегистрироваться
                        </Button>
                    </Link>
                ) : (
                    <Link to={"/login"}>
                        <Button
                        className={classes.registerNavLink}
                        color="secondary"
                        variant="contained"
                        >
                            <AccountCircleOutlined className={classes.icons}/>Войти
                        </Button>
                    </Link>
                ))}
                <Snackbar
                anchorOrigin={{vertical, horizontal}}
                open={open}
                onClose={this.handleClose}
                ContentProps={{ 'aria-describedby': 'message-id' }}
                message={<span id="message-id">Вы выбрали красную таблетку</span>}
                />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => {
            dispatch(signOut());
        }
    }
};
const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(headerLinksStyle)
)(AuthBtn)