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

        filter: 'drop-shadow(0px 3px 5px #AAAAAA)',

        '&:hover': {
            boxShadow: '0px 0px 5px #eb9b54'
        }
    },
    buttonText: {
        color: theme.palette.text.light,
        fontWeight: 'bold'
    }
}));


export default function ButtonA({ buttonText, handleButtonClick, path }){
    const classes = useStyles();

    return (
        <Grid item className={classes.root} onClick={() => handleButtonClick(path)}>
            <Typography className={classes.buttonText}>{ buttonText }</Typography>
        </Grid>
    )
}