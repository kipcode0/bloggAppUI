import * as React from 'react';
import Appbar from './Appbar'
import './Login.css'
import BottomNav from './BottomNav';
import {useRef, useState, useEffect} from 'react';
const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    
    //when user login we want the focus to be on the first input
    useEffect(()=>{
      userRef.current.focus();
    },[])

    useEffect(()=>{
      setErrorMsg('');
      },[user,password])

      const handleSubmit = async(e)=>{
        e.preventDefault();
      }

    return(
        <div className='Login'>
             <Appbar/>
            <p ref={errRef} className={errorMsg ? "errmsg": "offscreen"}
             aria-live="assertive">{errorMsg}</p>
             <h1 className='header'>Sign In</h1>
             <form onSubmit={handleSubmit} className="Form">
                <div className='labelBox'>
                <label htmlFor='username'>Email</label>
                <input
                  className='userNameInput'
                  type="email"
                  id="username"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e)=>setUser(e.target.value)}
                  value={user}
                  required
                />
                </div>
                <div className='labelBox'>
                <label htmlFor='password'>Password</label>
                <input
                  className='passWordInput'
                  type="password"
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  value={password}
                  required
                />
                </div>
                
                <button className='loginButton'>Sign In</button>
                <p>
                    Do not have an Account? <br/>
                    <span>
                        {/* router link to sign up pafe*/}
                        <a href="#">Sign Up</a>
                    </span>
                </p>
             </form>
             <BottomNav/>
        </div>

    )
}
export default Login