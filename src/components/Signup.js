import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles'


const useStyles = makeStyles({
    inputField: {
     fontSize: "12px",
     padding:"10px",
    },
  });

const Signup=()=>{

    const paperStyle={padding :20,height:'70vh',width:400, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    const classes = useStyles()
    return(
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h1>Sign Up</h1>
                </Grid>
                <TextField className={classes.inputField} label='First Name' placeholder='Enter First Name' variant="outlined" type='text' fullWidth required/>
                <TextField  className={classes.inputField} label='Last Name' placeholder='Enter Last Name' type='text' variant="outlined" fullWidth required/>
                <TextField className={classes.inputField} label='Email' placeholder='Enter Email' variant="outlined" type='email' fullWidth required/>
                <Button type='submit' color='primary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>
            </Paper>
        </Grid>
    )
}

export default Signup