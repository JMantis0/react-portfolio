import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from '@material-ui/icons/Home';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import InfoIcon from '@material-ui/icons/Info';
import DescriptionIcon from '@material-ui/icons/Description';
import ContactMailIcon from '@material-ui/icons/ContactMail';

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
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Portfolio" icon={<FolderSpecialIcon />} />
        <BottomNavigationAction label="About" icon={<InfoIcon />} />
        <BottomNavigationAction label="Resume" icon={<DescriptionIcon />} />
        <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default Footer;
