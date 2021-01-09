// Top Nav bar component
import { makeStyles, Grid, AppBar, ToolBar, MenuItem } from '@material-ui/core/styles';
import Proptypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {

    },
    title: {

    }
}));

export default function Header(props){
    const classes = useStyles();

    

    return (
        <AppBar>
            <ToolBar>
                <Typography>RankVoter</Typography>
            </ToolBar>
        </AppBar>
    )

    
}