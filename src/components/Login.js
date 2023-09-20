import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles';
import {json,useNavigate} from "react-router-dom";
import "./Login.css";

const Login=()=>{
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleLogin = async (event)=>{
    event.preventDefault();
    const userData = {
        password: password,
        email: email
    }
    //ADD INPUT VERIFICATION
    
    try{
        let res = await fetch("http://localhost:8080/authenticate",{
         method: "POST",
         body: JSON.stringify(userData),
         headers:{
            'Content-Type': 'application/json'
           }
        })
        
        if(res.status === 422 || res.status === 401 || res.status === 403){
           console.log("Something went wrong with auth")
           return res;
        }
        if(!res.ok){
          throw json({message: 'Could not authenticate user.'}, {status: 500});
        }

        if(res.ok){
          const responseData = await res.json();
          //const token = responseData.jwt;
          window.localStorage.setItem("Token", responseData.jwt);
          window.localStorage.setItem("firstName", responseData.firstName);
          window.localStorage.setItem("LastName", responseData.lastName);
        }
        
       
        setEmail("");
        setPassword("");
        navigate(`/login`);
    }catch(err){
        console.log("Could not login",err);
    }
    
  }

  const emailInputChangeHandler = event =>{
    setEmail(event.target.value);
  }
  const passwordInputChangeHandler= event =>{
    setPassword(event.target.value);
  }
  
    return(
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="email form-group">
          <input type="email" id="email" 
          name="email" 
          placeholder="EMAIL"
          onChange={emailInputChangeHandler}
          required
          />
        </div>
        <div className="password form-group">
          <input type="password" id="password" 
          name="password" 
          onChange={passwordInputChangeHandler}
          placeholder="PASSWORD"
          required
          />
         </div>
        <button type="submit">Submit</button>
      </form>
      <span>Do not have Account?</span>
      <Link href="/signup">Sign Up</Link>
    </div>
  </div>
        
        
    )
}
export default Login






/*
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

const Login=({data})=>{

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
*/
