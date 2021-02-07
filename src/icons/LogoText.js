import React from 'react'
import { Typography, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.secondary.main,
        fontSize: '44px',
        cursor: 'pointer',
        '&:hover': {
            textShadow: '0px 0px 5px #eb9b54'
        }
    }
}));

export default function LogoText({handleLinkClick}) {
    const classes = useStyles();
    return (
        <Grid item onClick={() => handleLinkClick('/')}>
            <Typography className={classes.title}>
                Rank<b>Voter</b>
            </Typography>
        </Grid>
    )
}
