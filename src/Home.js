import React from "react";
import Blog from './components/Blog';
import BottomNav from './components/BottomNav';
import Appbar from './components/Appbar'
import data from './data.json'
import Grid from '@mui/material/Grid';
import {Route,Routes} from "react-router-dom"
import { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
  
export default function Home() {

    const useStyles = makeStyles({
        gridContainer: {
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom:"55px",
          height: "90vh",
          overflow: "scroll"
        },
      });

  const idd = 10;
  const display= true;
  const [readMoreBlogContent, setReadMore] = useState(false);
  const [blogToRead,setBlogToRead] = useState(null);
  
  
  const readMoreContent = (readMore,data) =>{
    setReadMore(readMore);
    setBlogToRead(data);
  }
  
 
  let activeBlog = data.find(blog => blog.id ===idd);
  
  const classes = useStyles()
    return (
      <div>
        <Appbar/>
        <Grid container spacing={0.5}  className={classes.gridContainer}>
      {readMoreBlogContent===false && data.map((blog)=>{
         return <Grid item xs={12} sm={6} md={4}>
          <Blog key={blog.id} blog={blog} onReadMore={readMoreContent} readingMore={readMoreBlogContent}/>
      </Grid>
     })}
     
     {readMoreBlogContent===true && <Grid item xs={12} sm={12} md={12}>
         <Blog key={idd} blog={blogToRead} readingMore={readMoreBlogContent}/>
      </Grid>}

     </Grid>
     <BottomNav/>
      </div>
    );
  }