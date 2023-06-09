import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles'
import Checkbox from '@material-ui/core/Checkbox';
import {Route,Routes,NavLink} from "react-router-dom"



const useStyles = makeStyles({
    inputField: {
     fontSize: "12px",
     padding:"10px",
    },
  });

const Login=()=>{

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const classes = useStyles()
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h1>Sign In</h1>
                </Grid>
                <TextField className={classes.inputField} label='Email' placeholder='Enter Email' variant="outlined" type='email' fullWidth required/>
                <TextField  className={classes.inputField} label='Password' placeholder='Enter password' type='password' variant="outlined" fullWidth required/>
                
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
                <Typography >
                     <Link href="#" >
                        Forgot password ?
                </Link>
                </Typography>
                <Typography > Do you have an account ?
                  <NavLink to='/signup'>
                    <Button  size="small" variant="contained" style={btnstyle}>
                     Sign up
                   </Button>
                  </NavLink>
                </Typography>

                <Typography > Write blog ?
                  <NavLink to='/post'>
                    <Button  size="small" variant="contained" style={btnstyle}>
                     Post
                   </Button>
                  </NavLink>
                </Typography>


            </Paper>
        </Grid>
    )
}

export default Login