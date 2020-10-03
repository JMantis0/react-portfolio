import React from "react";
import {
  makeStyles,
  // useTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Header from "./components/Header";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  // const theme = useTheme();

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

  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up("xs")]: {
        width: "95%",
        margin: "0 0 0 2.5%",
        // backgroundColor: "#000000"
      },
      [theme.breakpoints.up("sm")]: {
        width: "90%",
        margin: "0 0 0 5%",
        // backgroundColor: "#000000"
      },
      [theme.breakpoints.up("md")]: {
        maxWidth: "1170px",
      },
    },
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
      width: "75%",
      margin: "0 0 0 15%",
      // from 600 to 900, make width less and left margin greater.
      //  Effectively move the tabs to the right as viewport increases
      [theme.breakpoints.between("960", "1280")]: {
        width: "70%",
        margin: "0 0 0 30%",
      },
      [theme.breakpoints.between("1280", "1920")]: {
        width: "50%",
        margin: "0 0 0 50%",
      },
    },
    tabsGrid: {},
    bottomBar: {
      backgroundColor: "#eeeeee",
      top: "auto",
      position: "static",
      bottom: 0,
      boxShadow:
        "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
    },
    bottomNavigation: {
      backgroundColor: "#eeeeee",
    },
  }));
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
      <CssBaseline />
      <Router>
        <ThemeProvider theme={headerTheme}>
          <Header classes={classes} />
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
            <Resume />
          </Route>
          <Grid container justify="center">
            <Footer classes={classes} />
          </Grid>
        </ThemeProvider>
      </Router>
    </Grid>
  );
}

export default App;
