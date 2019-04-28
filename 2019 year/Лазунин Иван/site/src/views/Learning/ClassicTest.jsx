import React from 'react';
import Config from '../../config/projectInfo';
import classNames from 'classnames';
import {compose} from "redux";
import firebase from 'firebase/app';

import {withStyles} from "@material-ui/core/styles";

import {Button, Paper, TextField, CircularProgress} from "@material-ui/core";

import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from "../../components/Parallax/Parallax";

import testPageStyle from '../../assets/jss/material-kit-react/views/testPage';
import {connect} from "react-redux";
import {firestoreConnect} from "react-redux-firebase";
import {Link} from "react-router-dom";

const dashboardRoutes = [];

class ClassicTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            ans: [],
            tested: false,
            task_count: 0,
            point_count: 0,
            translate: [0, 5, 9, 14, 18, 23, 27, 33, 39, 45, 50, 56, 62, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 99, 100, 100, 100]
        };
    }

    getTasks = async(test_num = 1) => {
        const db = firebase.firestore();
        const collection = db.collection('tasks');
        const query = collection
            .where('test_num', '==', test_num)
            .orderBy('id');
        const snapshot = await query.get();
        return snapshot.docs.map(doc => (doc.data()));
    };

    runQuery = async(test_num) => {
        const data = await this.getTasks(test_num);
        this.setState({tasks: data});
    };

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        this.runQuery(id);
    }

    handleChange = (e) => {
        if (!this.state.tested) {
            let ans = this.state.ans;
            ans[e.target.id] = e.target.value;
            this.setState({ans: ans});
        }
    };

    handleSubmit = () => {
        this.setState({tested: true});
        for (let task = 0; task < 19; task += 1) {
            if (this.state.ans[task] === ( this.state.tasks[task] && this.state.tasks[task].ans[0])) {
                this.state.task_count += 1;
                this.state.point_count += Number(this.props.themes[task].mark);
            }
        }
    };

    render() {
        const { classes, themes, ...rest } = this.props;
        const { ans, tasks} = this.state;
        const id = Number(this.props.match.params.id);

        return (
            <div style={{background: '#37474f'}}>
                <Header
                    color='transparent'
                    routes={dashboardRoutes}
                    brand={Config.projectName}
                    rightLinks={<HeaderLinks authButton='login'/>}
                    fixed
                    changeColorOnScroll={{
                        height: 50,
                        color: 'white'
                    }}
                    {...rest}
                />
                <Parallax
                    className={classes.parallax}
                    xs
                >
                    <div className={classes.container}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                                <h2 className={classes.title}>
                                    {(id > 2000) ? `Вариант ${id} года` : `Вариант №${id}`}
                                </h2>
                                <h4>
                                    {(id > 2000) ? 'Настоящий экзаменационный вариант представленный на ЕГЭ предыдущие годы и доступный школьникам Владимирской области. ' : 'Вариант схожий с настоящим экзаменационным тестом. ' }
                                    В поля ответов вписываются только числа.
                                    При наличии нескольких ответов разделять ; и пробелом.
                                    На часть С принимаются только ответы (без решений).
                                    На решение теста отводится 3 часа 55 минут.
                                    Успехов!
                                </h4>
                            </GridItem>
                        </GridContainer>
                    </div>
                </Parallax>
                <div className={classes.container}>
                    <div className={classNames(classes.main, classes.mainFirst)}>
                        <div className={classes.container}>
                            <GridContainer>
                                {this.state.tasks && this.state.tasks.map(job =>
                                    <GridItem xs={12} sm={12} md={12} className={classes.task}>
                                        <h3 className={classes.taskNum}>Задание {job.id}</h3>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={job.img ? 6 : 12}>
                                                <Paper className={classes.paper} elevation={1}>
                                                    <h5>{job.task}</h5>
                                                    {job.equ ? <img style={{margin:'10px 0', display: "block"}} src={job.equ} alt='Формула к задаче'/> : <br/>}
                                                    <TextField
                                                        style={{fontStyle: "normal"}}
                                                        label="Ответ..."
                                                        type='text'
                                                        id={job.id-1}
                                                        InputProps={{
                                                            onChange: this.handleChange,
                                                        }}
                                                        margin="normal"
                                                        variant="filled"
                                                    />
                                                    <h5 style={{display: this.state.tested ? 'block' : 'none'}}>Правильный ответ: {job.ans[0]}</h5>
                                                </Paper>
                                            </GridItem>
                                            {job.img ?
                                                <GridItem xs={12} sm={12} md={6} className={classes.imageBox}>
                                                    <img src={job.img} alt='Рисунок к задаче'/>
                                                </GridItem>
                                                :
                                                null
                                            }
                                        </GridContainer>
                                    </GridItem>
                                )}
                            </GridContainer>
                        </div>
                        <div className={classes.submit}>
                            <Button color='secondary' size='large' onClick={this.handleSubmit} variant='raised'>
                                Проверить
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={classes.container} style={{ display: this.state.tested ? 'block' : 'none' }}>
                    <div className={classNames(classes.main, classes.mainSecond)}>
                        <div className={classes.container}>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={12} className={classes.task}>
                                    <h3 className={classes.taskNum}>Результаты</h3>
                                    <GridContainer style={{padding: '30px 0'}}>
                                        <GridItem xs={12} sm={4} md={4} className={classes.progressCell}>
                                            <div>
                                                <h4>Решено задач</h4>
                                                <div className={classes.progressBox}>
                                                    <CircularProgress className={classes.progress} variant="static" value={Math.floor(this.state.task_count*100/18)} size={160} thickness={22} color='secondary'/>
                                                </div>
                                                <h2>{this.state.task_count} / 18</h2>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={12} sm={4} md={4} className={classes.progressCell}>
                                            <div>
                                                <h4>Первичных балла</h4>
                                                <div className={classes.progressBox}>
                                                    <CircularProgress className={classes.progress} variant="static" value={Math.floor(this.state.point_count*100/32)} size={160} thickness={22} color='secondary'/>
                                                </div>
                                                <h2>{this.state.point_count} / 32</h2>
                                            </div>
                                        </GridItem>
                                        <GridItem xs={12} sm={4} md={4} className={classes.progressCell}>
                                            <div>
                                                <h4>Реальных баллов</h4>
                                                <div className={classes.progressBox}>
                                                    <CircularProgress className={classes.progress} variant="static" value={this.state.translate[this.state.point_count]} size={160} thickness={22} color='secondary'/>
                                                </div>
                                                <h2>{this.state.translate[this.state.point_count]} / 100</h2>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem>
                                            <GridContainer className={classNames(classes.tableRow)}>
                                                <GridItem xs={12} sm={6} md={6}><h5 className={classes.numberName}> Задание </h5></GridItem>
                                                <GridItem xs={6} sm={3} md={3} className={classes.flexCell}> Баллы </GridItem>
                                                <GridItem xs={6} sm={3} md={3} className={classes.flexCell}> Решена </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                        {themes && themes.map(theme =>
                                            <GridItem key={theme.id} md={12}>
                                                <Link to={`/topic/${theme.id}`}>
                                                    <GridContainer className={classNames(classes.tableRow, classes.geg)}>
                                                        <GridItem xs={12} sm={6} md={6}>
                                                            <h5 className={classes.numberName}>{theme.id + ". " + theme.name}</h5>
                                                        </GridItem>
                                                        <GridItem xs={6} sm={3} md={3} className={classes.flexCell}>
                                                            {theme.mark + " б"}
                                                        </GridItem>
                                                        <GridItem xs={6} sm={3} md={3} className={classes.flexCell}>
                                                                  <div style={{
                                                                      borderRadius: '50%',
                                                                      width: '38px',
                                                                      height: '38px',
                                                                      textAlign: 'center',
                                                                      lineHeight: '38px',
                                                                      fontSize: '2rem',
                                                                      fontWeight: '400',
                                                                      backgroundColor: (ans[Number(theme.id)-1] === ( tasks[Number(theme.id)-1] && tasks[Number(theme.id)-1].ans[0]) ) ? '#66bb6a' : '#ef5350',
                                                                  }}>
                                                                      {(ans[Number(theme.id)-1] === ( tasks[Number(theme.id)-1] && tasks[Number(theme.id)-1].ans[0]) ) ? '+' : '-'}
                                                                  </div>
                                                        </GridItem>
                                                    </GridContainer>
                                                </Link>
                                            </GridItem>
                                        )}
                                    </GridContainer>
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer whiteFont />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        themes: state.firestore.ordered.themes
    };
};

export default compose(
    withStyles(testPageStyle),
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'themes',
        orderBy: 'id'
    }])
)(ClassicTest)
