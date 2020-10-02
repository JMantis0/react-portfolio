import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";

const Footer = ({ classes }) => {
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);
  return (
    <AppBar className={classes.bottomBar}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<RestoreIcon />}
        />
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default Footer;
