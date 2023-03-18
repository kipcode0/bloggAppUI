
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import { Link } from 'react-router-dom';

import {makeStyles} from '@material-ui/core/styles'
import { sizing } from '@mui/system';
import { Paper } from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CopyrightIcon from '@mui/icons-material/Copyright';

const useStyles = makeStyles({
    bottomNav: {
    
    },
  });

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  const classes = useStyles()
  return (
    <Box>
      <BottomNavigation
        position="static"
        className={classes.bottomNav}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Refresh" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Andrew Kipkoech" icon={<CopyrightIcon />}  />
        <BottomNavigationAction href="https://www.linkedin.com/in/andrew-kipkoech-994459130/"label="LinkedIn" icon={< LinkedInIcon />} />
        <BottomNavigationAction href="https://twitter.com/AndrewKoechie"label="Twitter" icon={<TwitterIcon />} />
        

      </BottomNavigation>
    </Box>
   /*
    <Paper>
      <BottomNavigation className={classes.bottomNav}>
      <h5>&copy;Kipcode 2023</h5>
       <p>Twitter</p>
       <p>Linkedln</p>
      </BottomNavigation>

    </Paper>
    */
  );
}
