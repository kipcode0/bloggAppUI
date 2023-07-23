import * as React from 'react';
import axios from "axios"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { letterSpacing } from '@mui/system';
import {Route,Routes,NavLink,useNavigate,useParams} from "react-router-dom"
import data from '/Users/andrewkiplagatkipkoech/Desktop/blogAppUI/blogapp-ui/src/data.json'

const useStyles = makeStyles({
    bloggContent: {
      //DON'T MODIFY
        position: "relative",
       
    },
    bloggerContentRead:{
      paddingLeft: "3px",
      paddingRight: "3PX",
      fontFamily:"Roboto",
      fontSize:"18px"
    },
    blogContentTitle:{
      textAlign:"center",
      paddingTop:"20px"
    },
    blogContentWriter:{
      paddingLeft:"10px",
      fontFamily:"Roboto",
      fontSize:"14px"
    },
    blogContentDate:{
      paddingLeft:"10px",
      fontFamily:"Roboto",
      fontSize:"14px"
    },
    cardDisplay:{
      marginBottom: '50px',
      backgroundColor: "blue"
    },
    writerLabel:{
        position:"absolute",
        bottom: -30,
        right: 0,
        padding:5,
        color:"#36454f",
        letterSpacing: "0.02857em",
        fontWeight: "500",
        fontSize: "0.8125rem",
        lineHeight: 1.75

    },
    responsiveBlogStyle:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      height:"100%",
      
    },
    readMore:{
      position: "relative",
      bottom: 10,
      right: 0,
    },
    dateDisplay:{
        position:"absolute",
        bottom: -50,
        right: 0,
        padding:5,
        color:"#36454f",
        letterSpacing: "0.02857em",
        fontWeight: "500",
        fontSize: "0.8125rem",
        fontFamily: "'Roboto','Helvetica','Arial','sans-serif'"
    },
    fullscreen:{
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "auto",
      background: "inherit" /* Just to visualize the extent */
      
    },
    readMoreDisplay:{
      flex: "0 0 100%"
    }

  });
 
export default function BlogDetails({key,readMoreContent}) {
  const [blog,setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = Number(params.blogId);
  const url = `http://localhost:8080/blogs/find-blog/${id}`;
  //runs when the component mounts and when it updates(include [] to prevent infinite loop)
  /*
  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = await axios.get(url);
      console.log("data from the endpoint",res)
      //const res = data;
      setBlog(res.data);
    }
    fetchPosts();
  },[url]);
  */
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          const { blog } = response.data;
          setBlog(blog);
        }
      } catch (error) {
        console.log("Holy Crash!!!!!")
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  console.log("Set value for blog",blog);
  console.log("This is the props",key);

  const handleClick = (update) => {
    readMoreContent = update;
  } 
  const classes = useStyles();
  return (
    
    <div className={classes.responsiveBlogStyle}>
        <h2>Blog Details Page</h2>
      </div>
    
  );
  
}
/*
export async function loader(request){
  const params = request.params;
  const id = Number(params.blogId);
  const response = await fetch(`http://localhost:8080/blogs/find-blog/${id}`);
  if(!response.ok){
      console.log("Error Occured")
  }else{
    const resData = await response.json();
    <BlogDetails data={resData}/>
  }
}
*/
/* 
<Paper>
         <h5 className={classes.blogContentTitle}>{blog.title}</h5>
         <p className={classes.bloggerContentRead}> {blog.content} </p>
        <h6 className={classes.blogContentWriter}>{blog.writer}</h6>
        <h6 className={classes.blogContentDate}>{blog.date}</h6>
          <NavLink to='/'>
            <Button  onClick={((e) => handleClick(false))} size="small">
              Go Back
            </Button>
          </NavLink>
          </Paper>


*/