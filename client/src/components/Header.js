import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Header = ({ tabState, setTabState }) => {
  //  use setTabState prop from App.js to route.

  const handleChange = (event, newValue) => {
    console.log("newValue", newValue);
    setTabState(newValue);
  };

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            // className={classes.title}
          >
            Jesse Mazur
          </Typography>
        </Toolbar>
        <Tabs
          value={tabState}
          onChange={handleChange}
          aria-label="header navigation tabs"
        >
          <Link to="/">
            <Tab value="/" label="Home" onClick={() => console.log("home")} />
          </Link>
          <Link to="/portfolio">
            <Tab value="/portfolio" label="Portfolio" />
          </Link>
          <Link to="/about">
            <Tab value="/about" label="About" />
          </Link>
        </Tabs>
      </AppBar>

      <Router>
        <Route></Route>
      </Router>
    </div>
  );
};

export default Header;
