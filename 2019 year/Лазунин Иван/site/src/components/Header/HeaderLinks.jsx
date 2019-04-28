import React from "react";

import {withStyles} from "@material-ui/core/styles";

import { List, ListItem } from "@material-ui/core";

import { ClassOutlined } from "@material-ui/icons";

import DropdownLink from "../CustomDropdown/Dropdown";

import headerLinksStyle from "../../assets/jss/material-kit-react/components/headerLinksStyle";

import AuthBtn from "./AuthButtons";

function HeaderLinks({ ...props }) {
    const { classes, signIn } = props;

    let themes = [];

    for (let i = 1; i < 20; i++) {
        themes.push({'name': `Задача ${i}`, 'url': `/topic/${i}`})
    }

    return (
        
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <DropdownLink
                    buttonText="Подготовка по темам"
                    buttonProps={{
                        className: classes.navLink
                    }}
                    buttonIcon={ClassOutlined}
                    dropdownList={themes}
                />
            </ListItem>
            {/*<ListItem className={classes.listItem}>*/}
                {/*<Link to={"#"}>*/}
                    {/*<Button*/}
                        {/*className={classes.navLink}>*/}
                        {/*<InboxOutlined className={classes.icons} /> Варианты*/}
                    {/*</Button>*/}
                {/*</Link>*/}
            {/*</ListItem>*/}
            <ListItem className={classes.listItem}>
                <AuthBtn signIn = {signIn} />
            </ListItem>
        </List>
    );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
