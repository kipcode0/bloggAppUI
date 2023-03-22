import './App.css';
import Appbar from './components/Appbar'
import Textarea from './components/Textarea'
import Blog from './components/Blog'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core/styles'
import BottomNav from './components/BottomNav';
import data from './data.json'
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom:"10px"
  },
});

function App() {
  /*
  const[blogs,setBlogs] = useState();

  useEffect(()=>{
    fetch("http://localhost:8080/blog/find-blogs")
    .then(res=>res.json())
    .then((result)=>{
     setBlogs(result)
     }
    )
  },[]);
  */
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
    <div className="App">
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

export default App;
