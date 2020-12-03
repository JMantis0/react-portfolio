// React imports
import React from "react";

// MUI imports
import Grid from "@material-ui/core/Grid";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import FolderSpecialIcon from "@material-ui/icons/FolderSpecial";
import Button from "@material-ui/core/Button";

import InfoIcon from "@material-ui/icons/Info";
import FacebookIcon from "@material-ui/icons/Facebook";
import DescriptionIcon from "@material-ui/icons/Description";
import ContactMailIcon from "@material-ui/icons/ContactMail";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import { makeStyles } from "@material-ui/core/styles";

// React router dom imports
import { useHistory } from "react-router-dom";

const Footer = ({
  setSlidingIn,
  setSlideDirection,
  pageState,
  setPageState,
}) => {
  const useStyles = makeStyles((mainTheme) => ({
    root: {},
    otherLinks: {},
    bottomBar: {
      top: "auto",
      position: "static",
      bottom: 0,
      boxShadow: "none",
    },
    bottomNavigation: {
      // backgroundColor: "#eeeeee",
    },
    footerContainer: {
      boxShadow:
        "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
      backgroundColor: mainTheme.palette.background.paper,
      // position: "fixed",
      bottom: "0",
      "& *": {
        textAlign: "center",
        textTransform: "capitalize",
      },
    },
  }));
  const classes = useStyles();
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
    <Grid container className={classes.footerContainer}>
      <Grid container justify="center">
        <Grid xs={2} item>
          <Button target="_blank" href="https://github.com/JMantis0/">
            {"GitHub "}
            <GitHubIcon />
          </Button>
        </Grid>
        <Grid xs={2} item>
          <Button
            target="_blank"
            href="https://www.linkedin.com/in/jesse-mazur/"
          >
            {"LinkedIn "}
            <LinkedInIcon />
          </Button>
        </Grid>
        <Grid xs={2} item>
          <Button target="_blank" href="https://www.facebook.com/jesmaz/">
            {"Facebook "}
            <FacebookIcon />
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="space-around">
        <Grid item xs={12}>
          <AppBar className={classes.bottomBar}>
            <BottomNavigation
              value={pageState}
              onChange={(event, value) => {
                handleChange(event, value);
              }}
              showLabels
              className={classes.bottomNavigation}
            >
              <BottomNavigationAction
                value="/"
                label="Home"
                icon={<HomeIcon />}
              />
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
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
