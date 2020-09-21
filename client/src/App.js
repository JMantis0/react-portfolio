import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const theme = useTheme();
  //  This is a media query hook for React from the material-ui library
  const aboveSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const useStyles = makeStyles({
    root: {
      //  Control margins based on useMediaQuery hooks
      width: aboveSmall ? "90%" : "100%",
      marginLeft: aboveSmall ? "5%" : "0%",
      backgroundColor: "eeff00",
    },
  });
  const classes = useStyles();
  return (
    <Grid className={classes.root} container>
      <CssBaseline />
      <Router>
        <Header />
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Router>
    </Grid>
  );
}

export default App;
