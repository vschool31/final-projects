import React from 'react';
import Config from '../../config/projectInfo';
import classNames from 'classnames';
import {compose} from "redux";
import firebase from 'firebase/app';

import {withStyles} from "@material-ui/core/styles";

import {Button, CircularProgress, Paper, TextField} from "@material-ui/core";

import Header from '../../components/Header/Header';
import HeaderLinks from '../../components/Header/HeaderLinks';
import Footer from '../../components/Footer/Footer';
import GridContainer from '../../components/Grid/GridContainer';
import GridItem from '../../components/Grid/GridItem';
import Parallax from "../../components/Parallax/Parallax";

import testPageStyle from '../../assets/jss/material-kit-react/views/testPage';
import {Link} from "react-router-dom";

const dashboardRoutes = [];

class ThematicTest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            ans: [],
            tested: false,
            task_count: 0
        };
    }

    getTasks = async(topic) => {
        const db = firebase.firestore();
        const collection = db.collection('tasks');
        const query = collection
            .where('id', '==', topic);
        const snapshot = await query.get();
        return snapshot.docs.map(doc => (doc.data()));
    };

    runQuery = async(topic, task_count) => {
        const data = await this.getTasks(topic);
        this.setState({tasks: data.slice(0, task_count)});
    };

    componentDidMount() {
        const id = Number(this.props.match.params.id);
        const taskCount = Number(this.props.match.params.count);
        this.runQuery(id, taskCount);
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
        for (let task = 0; task < this.state.tasks.length; task += 1) {
            if (this.state.ans[task] === ( this.state.tasks[task] && this.state.tasks[task].ans[0])) {
                this.state.task_count += 1;
            }
        }
    };

    render() {
        const { classes, ...rest } = this.props;
        const {ans, tasks} = this.state;
        const topic = this.props.match.params.name;

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
                                    {`Задачи по теме "${topic}"`}
                                </h2>
                                <h4>
                                    Подборка задач по теме.
                                    В поля ответов вписываются только числа.
                                    При наличии нескольких ответов разделять ; и пробелом.
                                    На часть С принимаются только ответы (без решений).
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
                                {this.state.tasks && this.state.tasks.map((job, i) =>
                                    <GridItem xs={12} sm={12} md={12} className={classes.task}>
                                        <h3 className={classes.taskNum}>Задание {i+1}</h3>
                                        <GridContainer>
                                            <GridItem xs={12} sm={12} md={job.img ? 6 : 12}>
                                                <Paper className={classes.paper} elevation={1}>
                                                    <h5>{job.task}</h5>
                                                    {job.equ ? <img style={{margin:'10px 0', display: "block"}} src={job.equ} alt='Формула к задаче'/> : <br/>}
                                                    <TextField
                                                        style={{fontStyle: "normal"}}
                                                        label="Ответ..."
                                                        type='text'
                                                        id={i}
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
                                        <GridItem xs={12} sm={12} md={12} className={classes.progressCell}>
                                            <div>
                                                <h4>Решено задач</h4>
                                                <div className={classes.progressBox}>
                                                    <CircularProgress className={classes.progress} variant="static" value={Math.floor(this.state.task_count*100/this.state.tasks.length)} size={160} thickness={22} color='secondary'/>
                                                </div>
                                                <h2>{this.state.task_count} / {this.state.tasks.length}</h2>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                    <GridContainer>
                                        <GridItem>
                                            <GridContainer className={classNames(classes.tableRow)}>
                                                <GridItem xs={9} sm={8} md={7}><h5 className={classes.numberName}> Задание </h5></GridItem>
                                                <GridItem xs={3} sm={4} md={5} className={classes.flexCell}> Решена </GridItem>
                                            </GridContainer>
                                        </GridItem>
                                        {tasks && tasks.map((task, i) =>
                                            <GridItem key={i+1} md={12}>
                                                <GridContainer className={classNames(classes.tableRow, classes.geg)}>
                                                    <GridItem xs={9} sm={8} md={7}>
                                                        <h5 className={classes.numberName}>Задача {i+1}</h5>
                                                    </GridItem>
                                                    <GridItem xs={3} sm={4} md={5} className={classes.flexCell}>
                                                        <div style={{
                                                            borderRadius: '50%',
                                                            width: '38px',
                                                            height: '38px',
                                                            textAlign: 'center',
                                                            lineHeight: '38px',
                                                            fontSize: '2rem',
                                                            fontWeight: '400',
                                                            backgroundColor: (ans[i] === task.ans[0] ) ? '#66bb6a' : '#ef5350',
                                                        }}>
                                                            {(ans[i] === task.ans[0]) ? '+' : '-'}
                                                        </div>
                                                    </GridItem>
                                                </GridContainer>
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



export default compose(
    withStyles(testPageStyle)
)(ThematicTest)
