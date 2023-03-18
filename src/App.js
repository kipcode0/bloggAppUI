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
  /*
  let blogToRead = {
    "title": "Machine Learning",
    "genre": "Technology",
    "writer": "Luther King",
    "content": "Sed adipiscing diam donec adipiscing tristique. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Volutpat consequat mauris nunc congue nisi vitae suscipit. Sit amet mauris commodo quis imperdiet. A erat nam at lectus. Tincidunt augue interdum velit euismod in pellentesque. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Arcu ac tortor dignissim convallis aenean. Lectus magna fringilla urna porttitor rhoncus dolor. Tristique magna sit amet purus gravida quis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Scelerisque eu ultrices vitae auctor eu augue ut. Ut morbi tincidunt augue interdum. Diam sollicitudin tempor id eu nisl. Id volutpat lacus laoreet non curabitur. Mauris a diam maecenas sed enim ut sem viverra. In hac habitasse platea dictumst quisque sagittis purus sit.",
    "date": "04-17-2030",
    "id": 6
  }
  */
  
  const readMoreContent = (readMore,data) =>{
    setReadMore(readMore);
    setBlogToRead(data);
  }
  
  let activeBlog = data.find(blog => blog.id ===idd);
  //console.log(activeBlog);
  //console.log(readMoreBlogContent);
  const classes = useStyles()
  
  return (
    <div className="App">
     <Appbar/>
     <Grid container spacing={0.5}  className={classes.gridContainer}>
      {readMoreBlogContent===false && data.map((blog)=>{
         return <Grid item xs={12} sm={6} md={4}>
          <Blog key={blog.id} blog={blog} onReadMore={readMoreContent}/>
      </Grid>
     })}
     

     {readMoreBlogContent===true && <Grid item xs={12} sm={12} md={12}>
         <Blog key={idd} blog={blogToRead}/>
      </Grid>}

     
     
     </Grid>
     <BottomNav/>
     
    </div>
    
  );
}

export default App;
