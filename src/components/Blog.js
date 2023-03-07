import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
    bloggContent: {
        position: "relative"
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
    readMore:{
     
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
    }

  });

export default function Blog() {
  const[blogs,setBlogs] = useState();
  useEffect(()=>{
    fetch("http://localhost:8080/blog/find-blogs")
    .then(res=>res.json())
    .then((result)=>{
     setBlogs(result)
    }
    )
  },[])
   const classes = useStyles();
  return (
    //sx={{ maxWidth: 500 }
    blogs.map((blog,key)=>{
      return <Card>
      <CardContent className={classes.bloggContent}>
        <Typography gutterBottom variant="h5" component="div">
        {(blog.title)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {(blog.content)}
          <div className={classes.writerLabel}>
            <h4>John Developer</h4>
          </div>
          <div className={classes.dateDisplay}>
            <h4 key={key}>{(blog.date)}</h4>
          </div>
        </Typography>
      </CardContent>
      <CardActions  className={classes.readMore}>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
    })
    
    
  );
}