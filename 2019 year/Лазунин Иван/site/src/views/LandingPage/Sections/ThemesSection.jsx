import React from "react";
import classNames from "classnames";
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Link} from "react-router-dom";

import {withStyles} from "@material-ui/core/styles";

import GridContainer from "../../../components/Grid/GridContainer.jsx";
import GridItem from "../../../components/Grid/GridItem.jsx";
import RadianStatus from "../../../components/RadianStatus/RadianStatus";
import HiddenBlock from "../../../components/HiddenBlock/HiddenBlock";

import themesStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/themesStyle";

class ThemesSection extends React.Component {
    render() {
        const {classes, themes} = this.props;
        return (
            <div className={classes.section}>
                <HiddenBlock zipSize={500} fullSize={2000}>
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={9}>
                            <h2 className={classes.titleContent}>Подготовка по темам</h2>
                            <h5>
                                Вы можете выбрать тему по которой хотите подготовиться,
                                узнать уровень ее сложности и процент решаемых на экзамене задач.
                                По каждой теме представлены примеры задач, их разбор,
                                а так же классификация и обучающее видео.
                            </h5>
                        </GridItem>
                    </GridContainer>
                    <GridContainer>
                        <GridItem>
                            <GridContainer className={classNames(classes.tableRow)}>
                                <GridItem xs={12} sm={6} md={6}><h5 className={classes.numberName}> Задание </h5></GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Баллы </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Сложность </GridItem>
                                <GridItem xs={4} sm={2} md={2} className={classes.flexCell}> Решили </GridItem>
                            </GridContainer>
                        </GridItem>
                        {themes && themes.map(theme =>
                        <GridItem key={theme.id} md={12}>
                            <Link to={`topic/${theme.id}`}>
                                <GridContainer className={classNames(classes.tableRow, classes.geg)}>
                                    <GridItem xs={12} sm={6} md={6}>
                                        <h5 className={classes.numberName}>{theme.id + ". " + theme.name}</h5>
                                    </GridItem>
                                    <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                        {theme.mark + " б"}
                                    </GridItem>
                                    <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                        <div className={classNames(classes["level" + theme.level], classes.level)}>
                                            {theme.level}
                                        </div>
                                    </GridItem>
                                    <GridItem xs={4} sm={2} md={2} className={classes.flexCell}>
                                        <RadianStatus num= {theme.succ} />
                                    </GridItem>
                                </GridContainer>
                            </Link>
                        </GridItem>
                        )}
                    </GridContainer>
                </HiddenBlock>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // console.log(state.firestore);
    return {
        themes: state.firestore.ordered.themes
    };
};

export default compose(
    withStyles(themesStyle),
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'themes',
        orderBy: 'id'
    }])
)(ThemesSection)