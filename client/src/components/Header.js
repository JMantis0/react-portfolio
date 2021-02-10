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
    //  headerBanner is underneath the Appbar, above the pages.
    headerBanner: {
      //   [theme.breakpoints.down("xs")]: {
      //     margin: "35px 0 0 0",
      //   },
      marginTop: "35px",
      marginBottom: "35px",
      width: "100%",
    },
    //  headerImage is the avatar-like circular photo in the header
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
      // height: "100px",
      width: "100%",
      minWidth: "10px",
      padding: "0 0 20px 0"
    },
    tabsGridItem: {
      marginTop: "50px",
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
      // borderRadius: 8,
      opacity: "100%",
      border: "8px solid #1ff0ff",
      marginLeft: "3px",
      // "&:hover": {
      //   backgroundColor: "black",
      //   color: "white",
      // },
    },
    selectedTab: {},
    bannerParagraph: {
      margin: 0,
      fontSize: "24px",
    },
    mernSpan: {
      textDecorationLine: "underline",
      textDecorationStyle: "dotted",
    },
    tabs: {
      width: "75%",
      margin: "0 0 0 15%",
      //   -ms-transform: skewX(-20deg);
      // -webkit-transform: skewX(-20deg);
      transform: "skewX(-20deg)",
      [mainTheme.breakpoints.between("960", "1280")]: {
        width: "70%",
        margin: "0 0 0 25%",
      },
      [mainTheme.breakpoints.between("1280", "1920")]: {
        width: "50%",
        margin: "0 0 0 45%",
      },
    },
    tabLabel: {
      transform: "skewX(20deg)",
      fontSize: "22px",
      fontWeight: 600,
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
                    value={pageState}
                    onChange={handleChange}
                    aria-label="header navigation tabs"
                    id="<Tabs>"
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
