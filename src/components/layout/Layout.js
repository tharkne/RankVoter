import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { Container, makeStyles, Grid } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: '100%',
        height: '10vh',
        padding: 0
    },
    main: {
        height: '90vh',
    }
}))


export default function Layout(props) {
    const classes = useStyles();

    return (
        <Container className={classes.root}>
            <Header />

            <Grid container item className={classes.main}>
                {props.children}
            </Grid>

            <Footer />
        </Container>
    )
}
