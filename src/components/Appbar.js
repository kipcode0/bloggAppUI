import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { StyledEngineProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo512 from './logo512.png'; 
import './Appbar.css';
//import Login from './Login'
 import {Route,Routes,NavLink} from "react-router-dom"

export default function Appbar() {
  const handleClick = (e) => {
    console.log("perform auth")
  }

  const handleSearch = (e) =>{
    console.log("Search for blog")
  }

  return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" height="5vh">
          <Toolbar className='appBar' variant='dense' disableGutters sx={{ minHeight: 45, height: 45 }}>
            
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <NavLink to='/search'>
              <MenuIcon 
               onClick={((e) => handleSearch(e))}
              />
              </NavLink>
            </IconButton>
            <Typography className="logo" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img className="logo"src={logo512} alt="Logo"/>
              InscriberPost
              <span className='theme'> for ideas & stories</span>
            </Typography>
            <NavLink to='/login'>
            <Button onClick={((e) => handleClick(e))}color="inherit">Login</Button>
            </NavLink>
            
            
          </Toolbar>
        </AppBar>
      </Box>
  );
}
