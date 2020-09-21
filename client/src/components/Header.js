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
  activeTab: {
    color: "white",
  },
  inactiveTab: {
    color: "gray",
  },
  appBar: {
    backgroundColor: "#92A8A8",
    padding: "5rem 0 0 0",
  },
  headerImage: {
    width: "250px",
    height: "250px",
    marginRight: "50%"
  }
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
    <AppBar className={classes.appBar} position="static">
      {/* <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Jesse Mazur</Typography>
        </Toolbar> */}

      <Grid id="tabsGrid?" container justify="flex-end">
        <Grid item>
          <img className={classes.headerImage} src={require("../assets/react-portfolio-draft-image.png")}></img>
        </Grid>
        <Tabs
          value={tabState}
          onChange={handleChange}
          aria-label="header navigation tabs"
        >
          <Tab value="/" label="Home" />
          <Tab value="/portfolio" label="Portfolio" />
          <Tab value="/about" label="About" />
        </Tabs>
      </Grid>

      <div>This is the banner</div>
    </AppBar>
  );
};

export default Header;
