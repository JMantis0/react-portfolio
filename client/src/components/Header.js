import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
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
      backgroundColor: mainTheme.palette.background.paper,
      padding: "2px 0 0 0",
      // height: "100px",
      width: "100%",
      minWidth: "10px",
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
      width: "20%",
      fontSize: "18px",
    },
    bannerParagraph: {
      margin: 0,
      fontSize: "24px",
    },
    tabs: {
      width: "75%",
      margin: "0 0 0 15%",
      [mainTheme.breakpoints.between("960", "1280")]: {
        width: "70%",
        margin: "0 0 0 25%",
      },
      [mainTheme.breakpoints.between("1280", "1920")]: {
        width: "50%",
        margin: "0 0 0 45%",
      },
    },
    hiddenBelow460: {
      display: "static",
      [mainTheme.breakpoints.between("0", "460")]: {
        display: "none",
      },
    },
    hiddenBelow510: {
      display: "static",
      [mainTheme.breakpoints.down("510")]: {
        display: "none",
      },
    },
    hiddenAbove510: {
      display: "static",
      [mainTheme.breakpoints.up("510")]: {
        display: "none",
      },
    },
    hiddenBelow580: {
      display: "static",
      [mainTheme.breakpoints.down("580")]: {
        display: "none",
      },
    },
    hiddenBelow570: {
      display: "static",
      [mainTheme.breakpoints.down("570")]: {
        display: "none",
      },
    },
    hiddenAbove345: {
      display: "static",
      [mainTheme.breakpoints.up("345")]: {
        display: "none",
      },
    },
    hiddenBelow345: {
      display: "static",
      [mainTheme.breakpoints.down("345")]: {
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
    }, 250);
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
                    <Tab className={classes.tab} value="/" label="Home" />
                    <Tab
                      className={classes.tab}
                      value="/portfolio"
                      label="Portfolio"
                    />
                    <Tab className={classes.tab} value="/about" label="About" />
                    <Tab
                      className={classes.tab}
                      value="/resume"
                      label="Resume"
                    />
                    <Tab
                      className={classes.tab}
                      value="/contact"
                      label="Contact"
                      selected
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
              <span className={classes.hiddenBelow460}>{"& Designer "}</span>
              {" based in Seattle"}
              <span className={classes.hiddenBelow570}>{", Washington"}</span>
              {"."}
            </p>
            <p className={classes.bannerParagraph}>
              <span
              // className={classes.hiddenBelow540}
              >
                {"Experienced in "}
              </span>
              <span className={classes.hiddenBelow510}>{"developing"}</span>
              <span className={classes.hiddenBelow580}>{" & designing "}</span>
              <span>{" MERN "}</span>
              <span className={classes.hiddenAbove345}>{"apps."}</span>
              <span className={classes.hiddenBelow345}>{"applications."}</span>
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
