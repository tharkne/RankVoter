import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from '../styles/Home.module.css'
import Layout from '../src/components/layout/Layout'
import ButtonA from '../src/components/homepage/ButtonA'

import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { goToUrl } from '../src/functions/routing/siteNavigation'

const useStyles = makeStyles(theme => ({
  button1: {
    position: 'fixed',
    top: '55vh',
    left: '15vw',   
    cursor: 'pointer'     
  },
  button2: {
    position: 'fixed',
    top: '70vh',
    left: '15vw',
    cursor: 'pointer'      
  }
}));

const pageEnum = {
  CREATE: '/create',
  POLLS: '/polls'
}

export default function Home() {
  const classes = useStyles();
  const router = useRouter();

  const handleButtonClick = (path) => {
    console.log(path)
    goToUrl(path, router);
  }

  return (
    <Layout>
      <Grid 
        container 
        className={classes.button1}
      >
        <ButtonA buttonText="Create a New Poll" handleButtonClick={handleButtonClick} path={pageEnum.CREATE} />
      </Grid>
      <Grid 
        container 
        className={classes.button2}
        
      >
        <ButtonA buttonText="Find an Existing Poll" handleButtonClick={handleButtonClick} path={pageEnum.POLLS} />
      </Grid>
    </Layout>
  )
}
