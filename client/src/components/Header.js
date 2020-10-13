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

// const useStyles = makeStyles((theme) => ({

// }));

const Header = ({
  classes,
  slideDirection,
  setPageState,
  setSlidingIn,
  pageState,
  setSlideDirection,
  itemTabState,
}) => {
  //  When the pageState changes, history.push sets the route
  const history = useHistory();
  //  use setPageState prop from App.js to route.

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
              // src={require("../assets/biopic.PNG")}
              alt="bio"
            ></img>
          </Grid>

          <Grid xs={10} className={classes.tabsGridItem} item>
            <Grid container justify="flex-end">
              <Grid item style={{ width: "100%" }}>
                <Hidden smUp>
                  <MobileDrawer
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
                    />
                    <Tab
                      className={classes.lastTab}
                      value="/item"
                      // eventually label should be a state variable that displays the name of the currently selected project
                      label={itemTabState}
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
              Burgeoning Web Designer & Developer based in Seattle
              {/* I want this to appear at 735 and smaller and to disappear at 736 and Larger  */}
              <Hidden only={["xs","stf"]}>
                <span>.</span>
              </Hidden>
              {/* I want this to appear at 736px and larger, and to disappear at 735 and smaller */}
              <Hidden only="736">
                <span>, Washington.</span>
              </Hidden>
            </p>
            <p className={classes.bannerParagraph}>
              Experienced in designing & developing MERN applications.
            </p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
