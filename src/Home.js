import React from "react";
import axios from "axios";
import Blog from './components/Blog';
//import axios from 'axios';
import BottomNav from './components/BottomNav';
import Appbar from './components/Appbar'
import AppbarV2 from "./components/AppbarV2";
import data from './data.json'
import Grid from '@mui/material/Grid';
import { useEffect, useState,useRef } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Pagination from './components/Pagination';
import BlogDetails from "./components/BlogDetails";
import {Route,Routes,NavLink,useNavigate,useParams} from "react-router-dom";
import AppbarV3 from "./components/AppbarV3";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  
  
  const idd = 10;
  //const bloggyToRead = data.find(blog=>blog.id===iddy);
  
  const display= true;
  const [readMoreBlogContent, setReadMore] = useState(false);
  const [blogToRead,setBlogToRead] = useState(null);
 
  //runs when the component mounts and when it updates(include [] to prevent infinite loop)
  useEffect(()=>{
    let isMounted = true;
    const fetchPosts = async () =>{
      setLoading(true);
      await axios.get('http://localhost:8080/blogs/all')
      .then((value)=>{
        if(isMounted){
          setPosts(value.data);
          setLoading(false);
        }
      });
     //cleanup
     return () => {
      isMounted = false;
    }
      
    }
    fetchPosts();
  },[blogToRead]);

 
  //get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost-postsPerPage;
  const currentBlogs = posts.slice(indexOfFirstPost,indexOfLastPost);

   //change page
   const paginate= (pageNumber) => setCurrentPage(pageNumber);
    const useStyles = makeStyles({
        gridContainer: {
          paddingLeft: "2px",
          paddingRight: "2px",
          paddingTop: "5px",
          paddingBottom:"10px",
          height: "87vh",
          overflow: "auto"
        },
      });

  
  
    
  const readMoreContent = (readMore,data) =>{
    setReadMore(readMore);
    setBlogToRead(data);
    
  }
  
  //<Blog key={blog.id} blog={blog} onReadMore={readMoreContent} readingMore={readMoreBlogContent} posts={posts} loading={loading}/>
 
  let activeBlog = data.find(blog => blog.id ===idd);
  
  const classes = useStyles()
   if(loading){
     return (
       <div>
          <AppbarV2/>
          <h2>Loading...</h2>
          <BottomNav/>
       </div>
     );
     
   }else{

    return (
      <div>
        <AppbarV3/>
        <Grid container spacing={0.5}  className={classes.gridContainer}>
      {readMoreBlogContent===false && currentBlogs.map((blog)=>{
         return <Grid item xs={12} sm={6} md={4}>
              <Blog key={blog.id} blog={blog} onReadMore={readMoreContent} posts={posts} loading={loading}/>
            </Grid>
       })
       
     }
     
     {readMoreBlogContent===false && <div   className={classes.paginate}>
         <Pagination 
         postsPerPage={postsPerPage} 
         totalPages={posts.length}
         currentPage={currentPage} 
         paginate={paginate}/>
      </div>}

      {readMoreBlogContent===true && <div item xs={12} sm={12} md={12}>
     <BlogDetails key={blogToRead.id} blog={blogToRead} readMoreContent={readMoreBlogContent}/>
      </div>}
     
     </Grid>
     <BottomNav/>
      </div>
    );

   }
    
  }
  /*
   
  
  */