import {createMuiTheme} from "@material-ui/core";

const projectName = 'Math+';

const primaryColor = '#1b5e20';
const secondaryColor = '#4c8c4a';

const theme = createMuiTheme({
    palette: {
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
        danger: { main: '#f44336'},
    },
});

export default {
    projectName,
    primaryColor,
    secondaryColor,
    theme
};