import React from 'react';
import Proptypes from 'prop-types';

import { makeStyles, Grid, AppBar, Toolbar, MenuItem, Typography } from '@material-ui/core';

import { useRouter } from 'next/router'

import { goToUrl } from '../functions/routing/siteNavigation'

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
    const router = useRouter();

    const handleLinkClick = (path) => {
        goToUrl(path, router);
    }

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.bar}>
                <Grid container alignItems='center'>
                    <LogoText flex={1} />
                    <MenuItem className={classes.menuOptions} onClick={() => handleLinkClick('/create')}>Create a Poll</MenuItem>
                    <MenuItem className={classes.menuOptions} onClick={() => handleLinkClick('/polls')}>Find a Poll</MenuItem>
                    <MenuItem className={classes.menuOptions} onClick={() => handleLinkClick('/about')}>About</MenuItem>
                    <MenuItem className={classes.menuOptions}>Donate</MenuItem>
                </Grid>
            </Toolbar>
        </AppBar>
    )    
}