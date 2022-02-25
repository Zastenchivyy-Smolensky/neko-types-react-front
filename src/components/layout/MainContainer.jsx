// src/components/layout/MainContainer.jsx
import React from 'react';
// style
import { Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    marginTop: '3rem',
  },
}));

const MainContainer = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <main>
        <Container maxWidth='lg' className={classes.container}>
          <Grid container justifyContent='center'>
            <Grid item>{children}</Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default MainContainer;