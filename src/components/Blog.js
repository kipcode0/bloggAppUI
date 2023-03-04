import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/material';

const useStyles = makeStyles({
    bloggContent: {
        position: "relative"
    },
    writerLabel:{
        position:"absolute",
        bottom: 0,
        right: 0
    },
    readMore:{
        position:"absolute",
        bottom: 0,
        left: 0
    },
    dateDisplay:{
        position:"absolute",
        bottom: 5,
        right: 0
    }

  });

export default function Blog() {
   const classes = useStyles()
  return (
    //sx={{ maxWidth: 500 }
    <Card>
      <CardContent className={classes.bloggContent}>
        <Typography gutterBottom variant="h5" component="div">
         ChatGPT and its implications
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarcticaranging across all continents except Antarctica
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
          <div className={classes.writerLabel}>
            <h4>John Doe</h4>
          </div>
          <div className={classes.dateDisplay}>
            <h4>10-10-2020</h4>
          </div>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className={classes.readMore}>Read More</Button>
      </CardActions>
    </Card>
    
  );
}