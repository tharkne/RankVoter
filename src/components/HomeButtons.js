// Top Nav bar component
import { useStyles, Grid } from '@material-ui/core/styles';
import Proptypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {

    }
}));

export default function HomeButtons(props){
    const classes = useStyles();
    <Grid container className={classes.root}>
        <Typography>HomeButtons</Typography>
    </Grid>
}