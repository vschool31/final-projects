import React from "react";

import radianStatusStyle from "../../assets/jss/material-kit-react/components/radianStatusStyle";

import {withStyles} from "@material-ui/core/styles";

const makeColor = (num) => {
    if (num >= 66) {
        return "#81C784";
    } else if (num >= 33) {
        return "#FFF176";
    } else {
        return "#E57373";
    }
};

const dGrad = (x) => (x < 50) ? `linear-gradient(${x*36/10-90}deg, #eee 50%, transparent 50%), linear-gradient(90deg, #eee 50%, ${makeColor(x)} 50%)` : `linear-gradient(90deg, transparent 50%, ${makeColor(x)} 50%), linear-gradient(${(x-50)*36/10+90}deg, #eee 50%, ${makeColor(x)} 50%)`;

function RadianStatus({...props}) {

    const {classes, num} = props;

    const kek = {
        backgroundImage: dGrad(num)
    };

    return <div className={classes.lol}>
        <div className={classes.cheburek}>{num + "%"}</div>
        <div style={kek} className={classes.kek}/>
    </div>
}

export default withStyles(radianStatusStyle)(RadianStatus)