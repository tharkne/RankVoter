// Top Nav bar component
import { makeStyles, Grid, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';
import Proptypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main
    },
    bar: {
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.main
    },
    title: {
        color: theme.palette.secondary.main,
        fontSize: '48px'
    }
}));

export default function Header(props){
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Typography className={classes.title}>Rank<b>Voter</b></Typography>
            </Toolbar>
        </AppBar>
    )    
}