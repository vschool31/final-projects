import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { signUp } from '../../store/actions/auth'
import Config from '../../config/projectInfo';

import {AlternateEmail, PeopleOutlined, VisibilityOffOutlined, VisibilityOutlined} from '@material-ui/icons';

import {withStyles} from "@material-ui/core/styles";

import {InputAdornment, TextField, Button} from '@material-ui/core';

import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import IconButton from '../../components/CustomButtons/IconButton';
import Card from '../../components/Card/Card';
import CardBody from '../../components/Card/CardBody';
import CardHeader from '../../components/Card/CardHeader';
import CardFooter from '../../components/Card/CardFooter';

import loginPageStyle from '../../assets/jss/material-kit-react/views/loginPage';

import imageSm from '../../assets/img/classSm.jpg';


class LogIn extends React.Component {
    state = {
        email: '',
        password: '',
        username: '',
        showPassword: false
    };

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value});
    };
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword});
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    };

    render() {
        const { classes, auth, authError, ...rest } = this.props;
        if (auth.uid) return <Redirect to='/' />;
        return (
            <div>
                <Header
                    absolute
                    color='transparent'
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks signIn={false}/>}
                    {...rest}
                />
                <div
                    className={classes.pageHeader}
                    style={{
                        backgroundImage: `url(${imageSm})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center'
                    }}
                >
                    <div className={classes.container}>
                        <GridContainer justify='center'>
                            <GridItem xs={12} sm={8} md={4}>
                                <Card>
                                    <form className={classes.form} onSubmit={this.handleSubmit}>
                                        <CardHeader color='primary' className={classes.cardHeader}>
                                            <h4>Регистрация</h4>
                                            <div className={classes.socialLine}>
                                                <IconButton
                                                    href='#pablo'
                                                    target='_blank'
                                                    color='transparent'
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={classes.socialIcons + ' fab fa-twitter'}/>
                                                </IconButton>
                                                <IconButton
                                                    href='#pablo'
                                                    target='_blank'
                                                    color='transparent'
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={classes.socialIcons + ' fab fa-facebook'}/>
                                                </IconButton>
                                                <IconButton
                                                    href='#pablo'
                                                    target='_blank'
                                                    color='transparent'
                                                    onClick={e => e.preventDefault()}
                                                >
                                                    <i className={classes.socialIcons + ' fab fa-google-plus-g'}/>
                                                </IconButton>
                                            </div>
                                        </CardHeader>
                                        <CardBody>
                                            <p className={classes.divider}>Стандартная регистрация</p>
                                            <TextField
                                                label="Имя пользователя"
                                                type="text"
                                                id="username"
                                                InputProps={{
                                                    onChange: this.handleChange,
                                                    endAdornment: (
                                                        <InputAdornment position='end'>
                                                            <PeopleOutlined className={classes.inputIconsColor}/>
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                fullWidth={true}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <TextField
                                                label="Электронная почта"
                                                type="email"
                                                id="email"
                                                InputProps={{
                                                    onChange: this.handleChange,
                                                    endAdornment: (
                                                        <InputAdornment position="end">
                                                            <AlternateEmail className={classes.inputIconsColor} />
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                fullWidth={true}
                                                margin="normal"
                                                variant="outlined"
                                            />
                                            <TextField
                                                label="Пароль"
                                                type={this.state.showPassword ? 'text' : 'password'}
                                                id="password"
                                                InputProps={{
                                                    onChange: this.handleChange,
                                                    endAdornment: (
                                                        <InputAdornment position="end" onClick={this.handleClickShowPassword}>
                                                            {this.state.showPassword ?
                                                                <VisibilityOffOutlined className={classes.inputIconsColor} />
                                                                :
                                                                <VisibilityOutlined className={classes.inputIconsColor} />
                                                            }
                                                        </InputAdornment>
                                                    ),
                                                }}
                                                fullWidth={true}
                                                margin="normal"
                                                variant="outlined"
                                            />

                                            <button style={{display:'none'}}/>
                                            {authError ? <p className={classes.authError}>Введены некорректные данные</p> : null}
                                        </CardBody>
                                        <CardFooter className={classes.cardFooter}>
                                            <Button color='primary' size='large' onClick={this.handleSubmit}>
                                                Начать
                                            </Button>
                                        </CardFooter>
                                    </form>
                                </Card>
                            </GridItem>
                        </GridContainer>
                    </div>
                    <Footer whiteFont />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
};

export default compose(
    withStyles(loginPageStyle),
    connect(mapStateToProps, mapDispatchToProps)
)(LogIn)
