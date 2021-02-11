import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Paper from "@material-ui/core/Paper";
import MobileDrawer from "./MobileDrawer";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
var classNames = require('classnames');

const Header = ({
  // classes,
  setPageState,
  setSlidingIn,
  pageState,
  setSlideDirection,
  itemTabState,
}) => {
  //  When the pageState changes, history.push sets the route
  const history = useHistory();
  //  use setPageState prop from App.js to route.

  const useStyles = makeStyles((mainTheme) => ({
    headerBanner: {
      //   [theme.breakpoints.down("xs")]: {
      //     margin: "35px 0 0 0",
      //   },
      marginTop: "35px",
      marginBottom: "35px",
      width: "100%",
    },
    headerImage: {
      width: "100px",
      height: "100px",
      position: "relative",
      top: "15px",
      left: "10%",
      [mainTheme.breakpoints.up("1300")]: {
        left: "12%",
      },
    },
    appBar: {
      backgroundImage: `url(/assets/images/jumbo.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      borderRadius: 5,
      marginTop: "10px",
      padding: "2px 0 0 0",
      width: "100%",
      minWidth: "10px",
      padding: "0 0 20px 0",
    },
    tabsGridItem: {
      marginTop: "20px",
      width: "100%",
    },
    lastTab: {
      marginRight: "18px",
      textTransform: "capitalize",
      minWidth: "1px",
      width: "16.666%",
      fontSize: "18px",
    },
    tab: {
      textTransform: "capitalize",
      minWidth: "1px",
      width: "19%",
      fontSize: "22px",
      fontWeight: 600,
      color: mainTheme.palette.text.primary,
      backgroundColor: "#ffffff",
      opacity: "100%",
      border: "8px solid #1ff0ff",
      marginLeft: "3px",
      marginTop: "3px",
    },
    subTab: {
      textTransform: "capitalize",
      minWidth: "1px",
      width: "19%",
      height: "100%",
      fontWeight: 600,
      color: mainTheme.palette.text.primary,
      backgroundColor: "#ffffff",
      opacity: "100%",
      border: "3px solid #1ff0ff",
      marginLeft: "3px",
    },
    bannerParagraph: {
      margin: 0,
      fontSize: "24px",
    },
    mernSpan: {
      textDecorationLine: "underline",
      textDecorationStyle: "dotted",
    },
    tabs: {
      width: "95%",
      margin: "0 0 0 5%",
      //   -ms-transform: skewX(-20deg);
      // -webkit-transform: skewX(-20deg);
      transform: "skewX(-20deg)",
      [mainTheme.breakpoints.between("960", "1280")]: {
        width: "90%",
        margin: "0 0 0 10%",
      },
      [mainTheme.breakpoints.between("1280", "1920")]: {
        width: "90%",
        margin: "0 0 0 10%",
      },
    },
    subTabs: {
      height: "30px!important",
      minHeight: 0,
      "& *": {
        height: "30px!important",
        minHeight: 0,
      },
      width: "95%",
      margin: "0 0 0 33%",
      //   -ms-transform: skewX(-20deg);
      // -webkit-transform: skewX(-20deg);
      transform: "skewX(20deg)",
      [mainTheme.breakpoints.between("960", "1280")]: {
        width: "90%",
        margin: "0 0 0 38%",
      },
      [mainTheme.breakpoints.between("1280", "1920")]: {
        width: "90%",
        margin: "0 0 0 38%",
      },
    },
    tabLabel: {
      transform: "skewX(20deg)",
      fontSize: "22px",
      fontWeight: 600,
      [mainTheme.breakpoints.between("600", "800")]: {
        fontSize: "2.5vw",
      },
    },
    subTabLabel: {
      height: "100%",
      marginTop: "3px",
      transform: "skewX(-20deg)",
      fontSize: "18px",
      fontWeight: 600,
      [mainTheme.breakpoints.between("600", "800")]: {
        fontSize: "15px",
        marginTop: "5px",
      },
    },
    hiddenBelow525: {
      display: "static",
      [mainTheme.breakpoints.between("0", "525")]: {
        display: "none",
      },
    },
    hiddenBelow547: {
      display: "static",
      [mainTheme.breakpoints.down("547")]: {
        display: "none",
      },
    },
    hiddenAbove510: {
      display: "static",
      [mainTheme.breakpoints.up("510")]: {
        display: "none",
      },
    },
    hiddenBelow735: {
      display: "static",
      [mainTheme.breakpoints.down("735")]: {
        display: "none",
      },
    },
    hiddenBelow720: {
      display: "static",
      [mainTheme.breakpoints.down("720")]: {
        display: "none",
      },
    },
    hiddenAbove410: {
      display: "static",
      [mainTheme.breakpoints.up("410")]: {
        display: "none",
      },
    },
    hiddenBelow410: {
      display: "static",
      [mainTheme.breakpoints.down("410")]: {
        display: "none",
      },
    },
    hiddenBelow388: {
      display: "static",
      [mainTheme.breakpoints.down("388")]: {
        display: "none",
      },
    },
  }));

  const classes = useStyles();

  const orderMapper = {
    "/": 1,
    "/portfolio": 2,
    "/about": 3,
    "/resume": 4,
    "/contact": 5,
    "/item": 6,
  };

  //  Handle change switches the page provided by BrowserRouter with the appropriate animations
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
    }, 200);
  };

  return (
    <Grid container id="firstHeaderDiv">
      <AppBar className={classes.appBar} position="static">
        <Grid container>
          <Grid xs={2} item>
            <img
              className={classes.headerImage}
              src={require("../assets/biopic.PNG")}
              alt="bio"
            ></img>
          </Grid>

          <Grid xs={10} className={classes.tabsGridItem} item>
            <Grid container justify="flex-end">
              <Grid item style={{ width: "100%" }}>
                <Hidden smUp>
                  <MobileDrawer
                    itemTabState={itemTabState}
                    setPageState={setPageState}
                    id="DrawerSnippet"
                  />
                </Hidden>
                <Hidden xsDown>
                  <Tabs
                    onChange={handleChange}
                    aria-label="header navigation tabs"
                    indicatorColor={"none"}
                    className={classes.subTabs}
                  >
                    <Tab
                      className={classes.subTab}
                      href="https://github.com/JMantis0/"
                      target="_blank"
                      label={
                        <Typography className={classes.subTabLabel}>
                          GitHub
                        </Typography>
                      }
                    />
                    <Tab
                      className={classes.subTab}
                      href="https://www.linkedin.com/in/jesse-mazur/"
                      target="_blank"
                      label={
                        <Typography className={classes.subTabLabel}>
                          LinkedIn
                        </Typography>
                      }
                    />
                    <Tab
                      className={classes.subTab}
                      href="https://www.facebook.com/jesmaz/"
                      target="_blank"
                      label={
                        <Typography className={classes.subTabLabel}>
                          Facebook
                        </Typography>
                      }
                    />
                  </Tabs>
                  <Tabs
                    value={pageState}
                    onChange={handleChange}
                    aria-label="header navigation tabs"
                    indicatorColor={"none"}
                    className={classes.tabs}
                  >
                    <Tab
                      selected={false}
                      className={classes.tab}
                      value="/"
                      label={
                        <Typography className={classes.tabLabel}>
                          Home
                        </Typography>
                      }
                    />
                    <Tab
                     
                      className={classes.tab}
                      value="/portfolio"
                      label={
                        <Typography className={classes.tabLabel}>
                          Portfolio
                        </Typography>
                      }
                    />
                    <Tab
                      className={classes.tab}
                      value="/about"
                      label={
                        <Typography className={classes.tabLabel}>
                          About
                        </Typography>
                      }
                    />
                    <Tab
                      className={classes.tab}
                      value="/resume"
                      label={
                        <Typography className={classes.tabLabel}>
                          Resume
                        </Typography>
                      }
                    />
                    <Tab
                      className={classes.tab}
                      value="/contact"
                      label={
                        <Typography className={classes.tabLabel}>
                          Contact
                        </Typography>
                      }
                    />
                  </Tabs>
                </Hidden>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container>
        <Grid className={classes.headerBanner} item>
          <Typography variant="h4" align="center">
            <p className={classes.bannerParagraph}>
              {/* Burgeoning  */}
              {"Web Developer "}
              <span className={classes.hiddenBelow525}>{"& Designer "}</span>
              <span className={classes.hiddenBelow388}>{" based "}</span>
              {"in Seattle"}
              <span className={classes.hiddenBelow720}>{", Washington"}</span>
              {"."}
            </p>
            <p className={classes.bannerParagraph}>
              <span>{"Experienced in "}</span>
              <span className={classes.hiddenBelow547}>{"developing "}</span>
              <span className={classes.hiddenBelow735}>{"& designing "}</span>
              <Tooltip
                arrow={true}
                enterTouchDelay={200}
                title={
                  <Paper className={classes.paper}>
                    <ul style={{ marginLeft: "-20px", width: "180px" }}>
                      <li>Mongo DB</li>
                      <li>MySQL</li>
                      <li>Express</li>
                      <li>React</li>
                      <li>Node</li>
                    </ul>
                  </Paper>
                }
              >
                <span className={classes.mernSpan}>{"MERN"}</span>
              </Tooltip>
              <span className={classes.hiddenAbove410}>{" apps."}</span>
              <span className={classes.hiddenBelow410}>{" applications."}</span>
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
