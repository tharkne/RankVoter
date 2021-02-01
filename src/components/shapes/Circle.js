import React from 'react';
import { CircularProgress } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({

}));


export default function Circle(props) {
    const classes = useStyles();

    return (
        <CircularProgress variant="determinate" value={75} />
    )
};
