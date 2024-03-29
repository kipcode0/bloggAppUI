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
import Home from './Home'
import AppbarV2 from './components/AppbarV2';
import AppbarV3 from './components/AppbarV3';
import RootLayout from './components/RootLayout';
import ErrorPage from './components/ErrorPage';
import BlogDetails,{loader as fetchBlogDetails}from './components/BlogDetails';
import WriteBlog, {action as newBlogAction}from './components/WriteBlog';
import MyBlogs from './components/MyBlogs';
import QuillEditor from './components/QuillEditor';
import {action as logoutAction} from './components/Logout';
import {tokenLoader} from "./util/auth";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <ErrorPage/>,
    path: '/', element:<Home/>,
    id:'root',
    loader: tokenLoader,
  },
  {path: '/login', element:<Login/>},
  {path: '/signup', element:<Signup/>},
  {path: '/blog/:blogId', element:<BlogDetails/>,loader:fetchBlogDetails},
  {path: '/user/content', element:<MyBlogs/>},
  {path: '/user/write', element:<QuillEditor/>},
  {path: '/post', element:<WriteBlog/>, action:newBlogAction},
  

]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
