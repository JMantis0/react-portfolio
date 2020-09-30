import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Hidden from "@material-ui/core/Hidden";
import DrawerSnippet from "./DrawerSnippet";
import { makeStyles } from "@material-ui/core/styles";
import { borders } from "@material-ui/system";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  headerBanner: {
    marginTop: "150px",
    marginBottom: "150px",
    width: "100%",
  },
  bannerParagraph: {
    margin: 0,
    fontSize: "24px"
  },
  appBar: {
    backgroundColor: "#eeeeee",
    padding: "2px 0 0 0",
    height: "100px",
  },
  headerImage: {
    width: "125px",
    height: "125px",
    position: "absolute",
    top: "25px",
    left: "50px",
  },
  tabsGridItem: {
    marginTop: "50px",
    width: "100%",
  },
  tab: {
    textTransform: "capitalize",
    color: "black",
    minWidth: "50px",
    width: "70px",
  },
});

const Header = (props) => {
  //  used for styling components
  const history = useHistory();
  const classes = useStyles();
  const location = useLocation();
  const [tabState, setTabState] = useState("/");

  //  When the tabState changes, history.push sets the route
  useEffect(() => {
    history.push(tabState);
  }, [tabState]);

  //  use setTabState prop from App.js to route.

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setTabState(newValue);
  };

  return (
    <Grid container id="firstHeaderDiv">
      <Grid container>
        <AppBar className={classes.appBar} 
        position="static"
        >
        <img
          className={classes.headerImage}
          src={require("../assets/react-portfolio-draft-image.png")}
        ></img>

          <Grid className={classes.tabsGridItem} item>
            <Grid id="tabsGrid?" container justify="flex-end">
              <Hidden smUp>
                <DrawerSnippet />
              </Hidden>
              <Hidden xsDown>
                <Tabs
                  value={tabState}
                  onChange={handleChange}
                  aria-label="header navigation tabs"
                >
                  <Tab className={classes.tab} value="/" label="Home" />
                  <Tab
                    className={classes.tab}
                    value="/portfolio"
                    label="Portfolio"
                  />
                  <Tab className={classes.tab} value="/about" label="About" />
                  <Tab className={classes.tab} value="/resume" label="Resume" />
                  <Tab
                    className={classes.tab}
                    value="/contact"
                    label="Contact"
                  />
                </Tabs>
              </Hidden>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
      <Grid container>
        <Grid className={classes.headerBanner} item>
          <Typography variant="h4" align="center">
            <p className={classes.bannerParagraph}>
              Burgeoning Web Designer & Developer based in Seattle, Washington.
            </p>
            <p className={classes.bannerParagraph}>Experienced in designing & developing MERN applications.</p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
