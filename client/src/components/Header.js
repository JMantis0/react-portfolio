import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { makeStyles } from "@material-ui/core/styles";
import {
  BrowserRouter as Router,
  Route,
  useLocation,
  Redirect,
  useHistory,
} from "react-router-dom";

const useStyles = makeStyles({
  headerBanner: {
    marginTop: "150px",
    marginBottom: "150px",
    width: "100%"
  },
  bannerParagraph: {
    margin: 0,
  },
  appBar: {
    backgroundColor: "#92A8A8",
    padding: "2px 0 0 0",
  },
  headerImage: {
    width: "250px",
    height: "250px",
    position: "relative",
    top: "150px",
    left: "50px",
  },
  tabsGridItem: {
    width: "100%",
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
    setTabState(newValue);
  };

  return (
    <Grid container>
      <Grid container>
        <AppBar className={classes.appBar} position="static">
          <img
            className={classes.headerImage}
            src={require("../assets/react-portfolio-draft-image.png")}
          ></img>

          <Grid className={classes.tabsGridItem} item>
            <Grid id="tabsGrid?" container justify="flex-end">
              <Tabs
                value={tabState}
                onChange={handleChange}
                aria-label="header navigation tabs"
              >
                <Tab value="/" label="Home" />
                <Tab value="/portfolio" label="Portfolio" />
                <Tab value="/about" label="About" />
                <Tab value="/contact" label="Contact" />
              </Tabs>
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
            <p>Experienced in designing & developing MERN applications.</p>
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
