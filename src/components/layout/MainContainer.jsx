import { Container, Grid } from '@material-ui/core';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(()=>({
  container:{
    marginTop:"3rem"
  }
}))
function MainContainer({children}) {
  const classes = useStyles()
  return (
    <div>
      <main>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container justifyContent='center'>
            <Grid item>{children}</Grid>
          </Grid>
        </Container>
      </main>
    </div>
  )
}

export default MainContainer