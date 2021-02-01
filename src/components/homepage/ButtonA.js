// Top Nav bar component
import { makeStyles } from '@material-ui/core/styles';

import Proptypes from 'prop-types';
import { Typography, Grid } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
    root: {
        padding: '5px 5px',
        minWidth: '300px',
        textAlign: 'center',

        backgroundColor: theme.palette.secondary.main,
        borderRadius: '20px',

        boxShadow: '2px'
    },
    buttonText: {
        color: theme.palette.text.light,
        fontWeight: 'bold'
    }
}));


export default function ButtonA({ buttonText }){
    const classes = useStyles();

    return (
        <Grid item className={classes.root}>
            <Typography className={classes.buttonText}>{ buttonText }</Typography>
        </Grid>
    )
}