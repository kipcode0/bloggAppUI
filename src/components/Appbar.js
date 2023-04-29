import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
//import Login from './Login'
 import {Route,Routes,NavLink} from "react-router-dom"

export default function Appbar() {
  const handleClick = (e) => {
    console.log("perform auth")
  }

  return (
    <div>
    
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" height="5vh">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blogs
          </Typography>
          <NavLink to='/login'>
          <Button onClick={((e) => handleClick(e))}color="inherit">Login</Button>
          </NavLink>
          
          
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  );
}
