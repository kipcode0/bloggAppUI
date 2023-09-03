import React, { useState } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles} from '@material-ui/core/styles';
import {json,useNavigate} from "react-router-dom";
import "./Signup.css";

const Signup=()=>{
    
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const  [email, setEmail] = useState("");
  const  [password, setPassword] = useState("");
  const navigate = useNavigate();
 
  const handleSignUp = async (event)=>{
    event.preventDefault();
    const userData = {
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email
    }
    //ADD INPUT VERIFICATION
    //createUserHandler(userData);
    try{
        let res = await fetch("http://localhost:8080/signup",{
         method: "POST",
         body: JSON.stringify(userData),
         headers:{
            'Content-Type': 'application/json'
           }
        })
        console.log("USER CREATED");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        /* 
         Implement notification for success full user creation
         Implement success status
        */
        navigate(`/login`);
    }catch(err){
        console.log("USER COULD NOT BE CREATED",err);
    }
    
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
    <div className="login-container">
    <div className="login-box">
      <h2>Create Account</h2>
      <form onSubmit={handleSignUp}>
        <div className="firstName form-group">
          <input type="text" id="firstName" 
          name="firstName" 
          placeholder="FIRST NAME"
          onChange={firstNameInputChangeHandler}
          required
          />
        </div>
        <div className="lastName form-group">
          <input type="text" id="lastName" 
          name="lastName" 
          placeholder="LAST NAME"
          onChange={lastNameInputChangeHandler}
          required
          />
        </div>
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
        <div className="signup">
          <p>Already Registered?</p>
        </div>
      </form>
    </div>
  </div>
        
        
    )
}
export default Signup
