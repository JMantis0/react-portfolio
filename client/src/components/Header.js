import React, { useState, useEffect, useRef } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import DrawerSnippet from "./DrawerSnippet";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  headerBanner: {
    [theme.breakpoints.down("xs")]: {
      margin: "35px 0 0 0",
    },
    marginTop: "35px",
    marginBottom: "35px",
    width: "100%",
  },
  bannerParagraph: {
    margin: 0,
    fontSize: "20px",
  },
  appBar: {
    backgroundColor: "#eeeeee",
    padding: "2px 0 0 0",
    height: "100px",
    width: "100%",
    minWidth: "10px",
  },
  headerImage: {
    width: "100px",
    height: "100px",
    position: "absolute",
    top: "15px",
    left: "10%",
  },
  tabsGridItem: {
    marginTop: "50px",
    width: "100%",
  },
  lastTab: {
    marginRight: "20px",
    textTransform: "capitalize",
    color: "black",
    minWidth: "1px",
    width: "20%",
  },
  tab: {
    textTransform: "capitalize",
    color: "black",
    minWidth: "1px",
    // [theme.breakpoints.down("xs")]: {
    //   width:
    // }
    width: "20%",
  },
  tabs: {
    width: "90%",
    margin: "0 0 0 0",
  },
  tabsGrid: {
  },
}));

const Header = (props) => {
  //  used for styling components
  const history = useHistory();
  const classes = useStyles();
  const [tabState, setTabState] = useState("/");

  //  When the tabState changes, history.push sets the route
  useEffect(() => {
    history.push(tabState);
  }, [history, tabState]);

  //  use setTabState prop from App.js to route.

  const handleChange = (event, newValue) => {
    console.log("theme ", props.theme);
    console.log("newValue", newValue);
    setTabState(newValue);
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
                  <DrawerSnippet id="DrawerSnippet" />
                </Hidden>
                <Hidden xsDown>
                  <Tabs
                    value={tabState}
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
