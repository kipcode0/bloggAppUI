import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles';
import {json} from "react-router-dom";
import "./Signup.css";

const Signup=()=>{
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
 
  const handleSignUp =(event)=>{
    event.preventDefault();
    const userData = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
    }
    //ADD INPUT VERIFICATION
    createUserHandler(userData);
    
  }
  function createUserHandler(userData){
    fetch('http://localhost:8080/blogs/signup',{
        method: 'POST',
        headers:{
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    }).then(function(response){
        console.log(response.json());
    });
    
  }
  const firstNameInputChangeHandler = event =>{
    setFirstName(event.target.value);
  }
  const lastNameInputChangeHandler = event =>{
    setLastName(event.target.value);
  }
  const emailInputChangeHandler = event =>{
    setEmail(event.target.value);
  }
  const passwordInputChangeHandler= event =>{
    setPassword(event.target.value);
  }
  
    return(
    <body>
    <div className="login-container">
    <div class="login-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSignUp}>
        <div class="firstName" className="form-group">
          <input type="text" id="firstName" 
          name="firstName" 
          placeholder="FIRST NAME"
          onChange={firstNameInputChangeHandler}
          required
          />
        </div>
        <div class="lastName" className="form-group">
          <input type="text" id="lastName" 
          name="lastName" 
          placeholder="LAST NAME"
          onChange={lastNameInputChangeHandler}
          required
          />
        </div>
        <div class="email" className="form-group">
          <input type="email" id="email" 
          name="email" 
          placeholder="EMAIL"
          onChange={emailInputChangeHandler}
          required
          />
        </div>
        <div class="password" className="form-group">
          <input type="password" id="password" 
          name="password" 
          onChange={passwordInputChangeHandler}
          placeholder="PASSWORD"
          required
          />
         </div>
        <button type="submit">Submit</button>
        <div class="signup">
          <p>Already Registered?</p>
        </div>
      </form>
    </div>
  </div>
        
  </body>  
        
    )
}

export default Signup
/* 
<Grid>
             <h2>Create Account</h2>
            <form onSubmit={handleSignUp} className='form-control'>
            <label htmlFor='firstName'>first name</label>
            <input type="text" 
                id="firstName" 
                placeholder="first name"
                required/>
            <label htmlFor='lastName'>last name</label>
            <input type="text"
                id="LastName" 
                placeholder="last name"
                required/>
            <label htmlFor='password'>password</label>
            <input type="password" 
                id="password"  
                placeholder="password"
                required/>
            <label htmlFor='email'>email</label>
            <input type="email" 
                id="email" 
                placeholder="email"
                required/>
            <input type="submit" value="signup" />
            </form>
        </Grid>


*/