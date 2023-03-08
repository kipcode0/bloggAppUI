import './App.css';
import Appbar from './components/Appbar'
import Textarea from './components/Textarea'
import Blog from './components/Blog'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core/styles'
import BottomNav from './components/BottomNav';
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
  const[blogs,setBlogs] = useState();

  useEffect(()=>{
    fetch("http://localhost:8080/blog/find-blogs")
    .then(res=>res.json())
    .then((result)=>{
     setBlogs(result)
     }
    )
  },[]);
  const classes = useStyles()
  return (
    <div className="App">
     <Appbar/>
     <Grid container spacing={0.5}  className={classes.gridContainer}>
     {blogs && blogs.map((blog)=>{
       return (
      // <Info name={e.name} rollNo={e.rollNo}/>
      <Grid item xs={12} sm={6} md={4}>
          <Blog key={blog.id} blog={blog}/>
      </Grid>
     );})}
     </Grid>
     <BottomNav/>
    </div>
  );
}

export default App;
