import './App.css';
import Appbar from './components/Appbar'
import Textarea from './components/Textarea'
import Blog from './components/Blog'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core/styles'
import BottomNav from './components/BottomNav';
import data from './data.json'
import {BrowserRouter,Switch, Link,Route,Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import { AppBar } from '@mui/material';
import Login from './components/Login';
import SearchBlog from './components/SearchBlog';
import Signup from './components/Signup';
import TinyEditor from "./components/TinyEditor";


import Home from './Home'


function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>}/>
      <Route exact path="/post" element={<TinyEditor/>}/>
      <Route exact path="/search" element={<SearchBlog/>}/>
    </Routes>
    
  );
}

export default App;
