import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles';
import "./Signup.css";

const Signup=()=>{
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
 
  const handleSignUp =(e)=>{
    e.preventDefault();
    console.log(e.target.firstName);
  }
    return(
        <div>
            <form onSubmit={handleSignUp}>
            <input type="text" 
                id="firstName" 
                placeholder="first name"
                required/>
            <input type="text"
                id="LastName" 
                placeholder="last name"
                required/>
            <input type="password" 
                id="password"  
                placeholder="password"
                required/>
            <input type="email" 
                id="email" 
                placeholder="email"
                required/>
            <input type="submit" value="signup" />
            </form>
        </div>
    )
}

export default Signup