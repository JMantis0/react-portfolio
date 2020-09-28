import React from "react";
import {
  makeStyles,
  useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const theme = useTheme();

  //  Try creating a theme
  const headerTheme = createMuiTheme({
    typography: {
      fontFamily: ["'Kumbh Sans'", "sans-serif"].join(","),
    },
    spacing: 8,
  });

  //  Try a responsive h3
  headerTheme.typography.h3 = {
    fontSize: "1.2rem",
    "@media (min-width:600px)": {
      fontSize: "1.5rem",
    },
    [headerTheme.breakpoints.up("md")]: {
      fontSize: "2.4rem",
    },
  };

  //  This is a media query hook for React from the material-ui library

  const aboveSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const useStyles = makeStyles({
    // root: {
    //   //  Control margins based on useMediaQuery hooks
    //   width: aboveSmall ? "90%" : "100%",
    //   marginLeft: aboveSmall ? "5%" : "0%",
    //   backgroundColor: "eeff00",
    // },
  });
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <Grid item sm={11} lg={11}>
        <CssBaseline />
        <Router>
          <ThemeProvider theme={headerTheme}>
            <Header />
          </ThemeProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            Contact
          </Route>
          <Route exact path="/resume">
            
          </Route>
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
