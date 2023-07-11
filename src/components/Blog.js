import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { letterSpacing } from '@mui/system';
import {Route,Routes,NavLink,useNavigate,Link,useParams} from "react-router-dom"


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

  
export default function Blog({blog,onReadMore, posts, loading}) {
  
  const [readMore,setReadMore] = useState(false);
  
  useEffect(() => {
    setReadMore(prev => !prev);
  },[]);

  const updateReadStatus = ()=>{
    setReadMore(prev => !prev);
  }
  const handleClick = (e,data) => {
    onReadMore(data);
  } 
  const navigate = useNavigate();
  const goBack = () => {
		navigate(-1);
	}
  const classes = useStyles();
  
  
  return (
    <div>
      <Card>
      <CardContent className={classes.bloggContent}>
        <Typography gutterBottom variant="h6" component="div">
        {blog.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {blog.content.slice(0,600)} 
        <p className={classes.writerLabel}>{blog.writer}</p>
        <p className={classes.dateDisplay}>{blog.date}</p>
      
      </Typography>
      </CardContent>
      <CardActions>
      <NavLink to={`/blog/${blog.id}`}>
      <Button value={blog.id} onClick={((e) => handleClick(e, blog))}size="small">Read More</Button>
      </NavLink>
      </CardActions>
     </Card>
    </div>
    
  );
  
}