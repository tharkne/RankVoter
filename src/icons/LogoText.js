import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.secondary.main,
        fontSize: '48px'
    }
}));

export default function LogoText() {
    const classes = useStyles();
    return (
        <Typography className={classes.title}>Rank<b>Voter</b></Typography>
    )
}
