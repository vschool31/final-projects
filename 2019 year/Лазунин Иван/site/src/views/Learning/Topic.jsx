import React from "react"
import Config from '../../config/projectInfo';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import {Button, Paper, TextField} from '@material-ui/core'

import { withStyles } from "@material-ui/core/styles";

import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import GridContainer from "../../components/Grid/GridContainer"
import GridItem from "../../components/Grid/GridItem"
import HeaderLinks from "../../components/Header/HeaderLinks"
import Parallax from "../../components/Parallax/Parallax"

import topicPageStyle from "../../assets/jss/material-kit-react/views/topicPage"
import Link from "react-router-dom/es/Link";

const dashboardRoutes = [];

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 5
        };
    };

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    handleChange = (e) => {
        this.setState({[e.target.id]: Number(e.target.value)});
    };

    render() {
        const { classes, themes, ...rest } = this.props;
        const id = Number(this.props.match.params.id);

        let num = [];
        for (let i = 1; i < 20; i++) {
            num.push(i);
        }

        let theme = {};
        themes && themes.map(x => {
            if (x.id === id) {
                theme = x;
            }
        });

        return (
            <div>
                <Header
                    color="transparent"
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks signIn={false}/>}
                    fixed
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
                <Parallax
                    style={{background: '#37474f'}}
                    sm
                >
                    <div className={classes.container}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={5}>
                            <h2 className={classes.title}>
                                {id}. {theme.name}
                            </h2>
                            <h4>
                                {theme.desc}
                            </h4>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={7} className={classes.youTube}>
                            <iframe width="100%" height="300px" src={`https://www.youtube.com/embed/${theme.youtube}`}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen />
                        </GridItem>
                    </GridContainer>
                    </div>
                </Parallax>
                <div className={classes.main}>
                    <div className={classes.container}>
                        <div className={classes.section}>
                            <h2 className={classes.titleContent}>Классификация</h2>
                            <h5>
                                {theme.class ?
                                    'Данное задание имеет несколько видов. Обычно его можно отнести к следующим категориям:'
                                    :
                                    'Простите, но эта задача имеет только один вид.'}
                                {theme.class ?
                                    <ul>
                                        {theme.class && theme.class.map(x => <li>{x}</li>)}
                                    </ul>
                                    :
                                    null
                                }
                            </h5>
                        </div>
                        <div className={classes.section}>
                            <h2 className={classes.titleContent}>Пример задачи</h2>
                            <h5>
                                Задачи по данной теме обычно имеют следующий вид:
                            </h5>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={(theme.sample && theme.sample.img) ? 6 : 8}>
                                    <Paper className={classes.paper} elevation={1}>
                                        <h5>{theme.sample && theme.sample.task}</h5>
                                        {(theme.sample && theme.sample.equ) ?
                                        <img style={{margin:'10px 0'}} src={theme.sample && theme.sample.equ} alt='Формула к задаче'/> : <br/>
                                        }
                                        <h5>Ответ: {theme.sample && theme.sample.ans}</h5>

                                    </Paper>
                                </GridItem>
                                {(theme.sample && theme.sample.img) ?
                                    <GridItem xs={12} sm={12} md={6} className={classes.imageBox}>
                                        <img src={theme.sample && theme.sample.img} alt='Рисунок к задаче'/>
                                    </GridItem>
                                    :
                                    null
                                }
                            </GridContainer>
                        </div>
                        <div className={classes.section}>
                            <h2 className={classes.titleContent}>Решение</h2>
                            <h5>
                                Предлагаю вашему вниманию следующее решение задачи из примера
                            </h5>
                            <h5>
                                {theme.solution}
                            </h5>
                        </div>
                        <div className={classes.section}>
                            <h2 className={classes.titleContent}>Пройти тесты</h2>
                            <h5>
                                Можете протестировать свои знания по данной теме собрав тест из данных задач
                            </h5>
                            <div style={{display: 'flex', alignItems: 'center', marginTop: '30px'}}>
                                <TextField
                                    style={{margin: '0 30px'}}
                                    label="Количество задач"
                                    type='text'
                                    id='count'
                                    InputProps={{
                                        onChange: this.handleChange
                                    }}
                                    variant="outlined"
                                />
                                <Link to={`/learn/${id}/${this.state.count}/${theme.name}`}>
                                    <Button color='secondary' size='large' onClick={this.handleSubmit} variant='raised'>
                                        Собрать тест
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        themes: state.firestore.ordered.themes
    }
};

export default compose(
    withStyles(topicPageStyle),
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'themes',
        orderBy: 'id'
    }])
)(Topic);
