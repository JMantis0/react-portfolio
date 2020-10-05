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
import { useHistory } from "react-router-dom";

const Footer = ({ classes, pageState, setPageState }) => {
  const history = useHistory();

  const handleChange = (event, newValue) => {
    console.log("Footer Click")
    setPageState(newValue);
    history.push(newValue);
  };
  
  return (
    <AppBar className={classes.bottomBar}>
      <BottomNavigation
        value={pageState}
        onChange={handleChange}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction value="/portfolio" label="Portfolio" icon={<FolderSpecialIcon />} />
        <BottomNavigationAction value="/about" label="About" icon={<InfoIcon />} />
        <BottomNavigationAction value="/resume" label="Resume" icon={<DescriptionIcon />} />
        <BottomNavigationAction value="/contact" label="Contact" icon={<ContactMailIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default Footer;
