import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import MobileDrawer from "./MobileDrawer";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

// const useStyles = makeStyles((theme) => ({

// }));

const Header = ({ classes, setPageState, pageState, setSlideDirection }) => {
  const history = useHistory();

  //  When the pageState changes, history.push sets the route

  //  use setPageState prop from App.js to route.

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
      setSlideDirection("right");
    } else if (orderMapper[newValue] > orderMapper[pageState]) {
      setSlideDirection("left");
    }
    console.log("pageState is: ", pageState);
    console.log("newValue is: ", newValue);
    setPageState(newValue);
    console.log("pageState set to: ", pageState);

    //  Add code that transitions previous page out and makes history.push wait for it to finish first
    history.push(newValue);
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
                      className={classes.lastTab}
                      value="/contact"
                      label="Contact"
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
              <Hidden smUp>
                <span>.</span>
              </Hidden>
              <Hidden xsDown>
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
