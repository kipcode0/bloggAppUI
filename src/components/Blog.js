import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useEffect, useState } from 'react';
import { letterSpacing } from '@mui/system';

const useStyles = makeStyles({
    bloggContent: {
        position: "relative",
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
    },
    fullscreen:{
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      overflow: "auto",
      background: "rgb(143, 168, 143)" /* Just to visualize the extent */
      
    },
    readMoreDisplay:{
      flex: "0 0 100%"
    }

  });

export default function Blog({blog,onReadMore}) {
  const [readMore,setReadMore] = useState(false);
  const handleClick = () => {
    setReadMore(true);
    onReadMore(readMore);
  }
  const classes = useStyles();
  
  return (
     <Card>
      <CardContent className={classes.bloggContent}>
        <Typography gutterBottom variant="h5" component="div">
        {blog.title} 
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {blog.content} 
        <p className={classes.writerLabel}>{blog.writer}</p>
        <p className={classes.dateDisplay}>{blog.date}</p>
      
      </Typography>
      </CardContent>
      <CardActions  className={classes.readMore}>
      <Button onClick={handleClick}size="small">Read More</Button>
      </CardActions>
    </Card>
    
  );
  
}