// Top Nav bar component
import { makeStyles, Grid, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';
import Proptypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {

    },
    bar: {

    },
    title: {
        color: theme.palette.secondary.main
    }
}));

export default function Header(props){
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Typography variant='h3' className={classes.title}>Rank<b>Voter</b></Typography>
            </Toolbar>
        </AppBar>
    )    
}