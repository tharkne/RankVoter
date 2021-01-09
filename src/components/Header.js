// Top Nav bar component
import { makeStyles, Grid, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';
import Proptypes from 'prop-types';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary
    },
    title: {
        color: theme.palette.primary
    }
}));

export default function Header(props){
    const classes = useStyles();

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Typography variant='h3'>Rank<b>Voter</b></Typography>
            </Toolbar>
        </AppBar>
    )    
}