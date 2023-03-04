
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles({
    bottomNav: {
     justifyContent: "center",
     paddingTop:"15px",
     color:"blue"
    },
  });

export default function BottomNav() {
  const classes = useStyles()
  return (
   
    <Box sx={{ height: 10 }}>
      <BottomNavigation className={classes.bottomNav}>
       <h5>&copy;Kipcode 2023</h5>
       
      </BottomNavigation>

    </Box>
  );
}
