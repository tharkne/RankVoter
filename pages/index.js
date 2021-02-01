import Head from 'next/head'

import { Grid } from '@material-ui/core'

import styles from '../styles/Home.module.css'
import Layout from '../src/components/layout/Layout'

import ButtonA from '../src/components/homepage/ButtonA'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  button1: {
    position: 'fixed',
    top: '55vh',
    left: '15vw',        
  },
  button2: {
    position: 'fixed',
    top: '70vh',
    left: '15vw' 
  }
}));

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <Grid 
        container 
        className={classes.button1}
      >
        <ButtonA buttonText="Create a New Poll" />
      </Grid>
      <Grid 
        container 
        className={classes.button2}
        
      >
        <ButtonA buttonText="Find an Existing Poll" />
      </Grid>
    </Layout>
  )
}
