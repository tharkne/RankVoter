import React from 'react';
import Proptypes from 'prop-types';

import { makeStyles, Grid, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';

import LogoText from '../icons/LogoText';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main
    },
    bar: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main
    },
    menuOptions: {
        color: theme.palette.text.dark
    }
}));

export default function Header(props){
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Grid container alignItems='center'>
                    <LogoText flex={1} />
                    <MenuItem className={classes.menuOptions}>Create a Poll</MenuItem>
                    <MenuItem className={classes.menuOptions}>Find a Poll</MenuItem>
                    <MenuItem className={classes.menuOptions}>About</MenuItem>
                    <MenuItem className={classes.menuOptions}>Donate</MenuItem>
                </Grid>
            </Toolbar>
        </AppBar>
    )    
}