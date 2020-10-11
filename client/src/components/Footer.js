// React imports
import React from "react";

// MUI imports
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import InfoIcon from "@material-ui/icons/Info";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";

// React router dom imports
import { useHistory } from "react-router-dom";

const Footer = ({ setSlidingIn, setSlideDirection,classes, pageState, setPageState }) => {
  const history = useHistory();
  const orderMapper = {
    "/": 1,
    "/portfolio": 2,
    "/about": 3,
    "/resume": 4,
    "/contact": 5,
    "/item": 6,
  };

  const handleChange = (event, newValue) => {

    if (orderMapper[newValue] < orderMapper[pageState]) {
      setSlideDirection("left");
    } else if (orderMapper[newValue] > orderMapper[pageState]) {
      setSlideDirection("right");
    }
    setSlidingIn(false);
    setPageState(newValue);

    setTimeout(() => {
      if (orderMapper[newValue] < orderMapper[pageState]) {
        setSlideDirection("right");
      } else if (orderMapper[newValue] > orderMapper[pageState]) {
        setSlideDirection("left");
      }
      setSlidingIn(true);
      history.push(newValue);
    }, 250);
  };
  return (
    <AppBar className={classes.bottomBar}>
      <BottomNavigation
        value={pageState}
        onChange={(event, value) => {
          handleChange(event, value);
        }}
        showLabels
        className={classes.bottomNavigation}
      >
        <BottomNavigationAction value="/" label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          value="/portfolio"
          label="Portfolio"
          icon={<FolderSpecialIcon />}
        />
        <BottomNavigationAction
          value="/about"
          label="About"
          icon={<InfoIcon />}
        />
        <BottomNavigationAction
          value="/resume"
          label="Resume"
          icon={<DescriptionIcon />}
        />
        <BottomNavigationAction
          value="/contact"
          label="Contact"
          icon={<ContactMailIcon />}
        />
      </BottomNavigation>
    </AppBar>
  );
};

export default Footer;
