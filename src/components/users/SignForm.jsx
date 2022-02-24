import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import {
  typography,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Button,
  Box
}from "@material-ui/core"
const useStyles = makeStyles((theme)=>({
  container:{
    marginTop:theme.spacing(6),
  },
  submitBtn:{
    marginTop:theme.spacing(2),
    flexGrow:1,
    textTransform:"none"
  },
  header:{
    textAlign:"center"
  },
  card:{
    padding:theme.spacing(2),
    maxWidth:400
  },
  box:{
    marginTop:"2rem"
  },
  link:{
    textDecoration:"none"
  },
}))
function SignForm(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    signType,
    name,
    setName,
    passwordConfirmation,
    setPasswordConfirmation
  } = props;
  const classes = useStyles()
  return (
    <div>
      <form noValidate autoCapitalize='off'>
        <Card className={classes.card}>
          <CardHeader className={classes.header} title={signType}>
            <CardContent>
              {signType === "signUp" && (
                <TextField 
                variant='outlined'
                required
                fullWidth
                label="Name"
                value={name}
                margin="dense"
                onChange={(event)=> setName(event.target.value)}
                />
              )}
              <TextField 
              variant='outlined'
              required
              fullWidth
              label="Email"
              value={email}
              margin="dense"
              onChange={(event)=>setEmail(event.target.value)}
              />
               <TextField
              variant='outlined'
              required
              fullWidth
              label='Password'
              type='password'
              placeholder='At least 6 characters'
              value={password}
              margin='dense'
              autoComplete='current-password'
              onChange={(event) => setPassword(event.target.value)}
            />
            {signType === "signUp" && (
              <TextField
              variant='outliend'
              required
              fullWidth
              label="password confirmation"
              value={passwordConfirmation}
              margin="dense"
              autoComplete="current-password"
              onChange={(event) =>
               setPasswordConfirmation(event.target.value)
              }
              />
            )}
            <Button 
            type="submit"
            size="large"
            fullWidth
            color="default"
            disabled={!email || !password ? true: false }
            className={classes.submitBtn}
            onClick={handleSubmit}
            >
              Submit
            </Button>
            {signType === "signIn" && (
              <Box textAlign="center" className={classes.box}>
                <typography variant="body2">
                Don't have an account? &nbsp;
                <Link to="/signup" className={classes.link}>
                  Sign up Now!
                </Link>
                </typography>
              </Box>
            ) }
            </CardContent>

          </CardHeader>
        </Card>
      </form>
    </div>
  )
}

export default SignForm