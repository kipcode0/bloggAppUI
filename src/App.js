import './App.css';
import Appbar from './components/Appbar'
import Textarea from './components/Textarea'
import Blog from './components/Blog'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core/styles'
import BottomNav from './components/BottomNav';
import data from './data.json'
import {createBrowserRouter,RouterProvider, Link,Route,Routes,useParams} from "react-router-dom"
import { useEffect, useState } from 'react';
import { AppBar } from '@mui/material';
import Login from './components/Login';
import Signup from './components/Signup';
import TinyEditor from "./components/TinyEditor";
import Home from './Home'
import AppbarV2 from './components/AppbarV2';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import BlogDetails from './components/BlogDetails';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    children:[
      {path: '/', element:<Home/>},
      {path: '/blog/:blogId', element:<BlogDetails/>}
    ]
  },
  {path: '/login', element:<Login/>},
  {path: '/signup', element:<Signup/>},
  {path: '/post', element:<TinyEditor/>}
  
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
