import React from "react"
import { Link } from "react-router-dom"

import {withStyles} from "@material-ui/core/styles";

import {Button} from "@material-ui/core"

import GridContainer from "../../../components/Grid/GridContainer.jsx"
import GridItem from "../../../components/Grid/GridItem.jsx"

import simpleTestsStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/simpleTestsStyle"

class SimpleTestsSection extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <GridContainer>
                    <GridItem xs={12} sm={12} md={9}>
                        <h2 className={classes.titleContent}>Варианты схожие с реальными</h2>
                        <h5>
                            В этом разделе вы можете найти с экзаменационные варианты по
                            профильной математике, схожие с реальными. Варианты составлены подобно настоящим.
                            Это поможет вам выяснить уровень своей подготовки и прокачать свои навыки.
                        </h5>
                    </GridItem>
                </GridContainer>
                <GridContainer>
                    {[...Array(18)].map((x, i) =>
                        <GridItem xs={12} sm={6} md={2} key={i+1} className={classes.gridItem}>
                            <Link to={`test/${i+1}`}>
                                <Button
                                    size="small"
                                    variant="outlined"
                                    color="primary"
                                    fullWidth={true}
                                >
                                    {i+1} Вариант
                                </Button>
                            </Link>
                        </GridItem>
                    )}
                </GridContainer>
            </div>
        )
    }
}

export default withStyles(simpleTestsStyle)(SimpleTestsSection)