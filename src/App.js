import './App.css';
import Appbar from './components/Appbar'
import Textarea from './components/Textarea'
import Blog from './components/Blog'
import Grid from '@mui/material/Grid';
import {makeStyles} from '@material-ui/core/styles'
import BottomNav from './components/BottomNav';
const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "10px",
    paddingRight: "10px",
    paddingTop: "5px",
    paddingBottom:"10px"
  },
});

function App() {
  const classes = useStyles()
  return (
    <div className="App">
     <Appbar/>
     <Grid container spacing={0.5} className={classes.gridContainer}>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Blog/>
        </Grid>
     </Grid>
     <BottomNav/>
    </div>
  );
}

export default App;
