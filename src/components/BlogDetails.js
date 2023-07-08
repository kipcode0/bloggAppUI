import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { letterSpacing } from '@mui/system';
import {Route,Routes,NavLink,useNavigate} from "react-router-dom"

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
    responsiveBlogStyle:{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      width:"100%",
      height:"100%",
      
    }

  });
  
export default function BlogDetails(blog) {
    const classes = useStyles();
    const btnStyling={paddingLeft :"10px",paddingBottom:"10px"}
    let contentSliced = blog.content.split('\n\n')
    return (
    <div className={classes.responsiveBlogStyle}>
    <Paper>
      <h5 className={classes.blogContentTitle}>{blog.title}</h5>
     <p className={classes.bloggerContentRead}> {contentSliced} </p>
     <h6 className={classes.blogContentWriter}>{blog.writer}</h6>
     <h6 className={classes.blogContentDate}>{blog.date}</h6>
     <NavLink to='..'>
       <Button style={btnStyling} value={blog.id} /*onClick={updateReadStatus()}*/  size="small">
         Go Back
       </Button>
     </NavLink>
     </Paper>
  </div>
    )
}
