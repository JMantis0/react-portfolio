import React, { useState, useEffect } from "react";
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
import { useHistory } from "react-router-dom";

function App() {
  const [pageState, setPageState] = useState("");
  const history = useHistory(null);
  useEffect(() => {
    history.push(pageState);
  }, [history, pageState]);

  //  mainTheme supplies typogrophy to theme consumers
  const mainTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
    spacing: 8,
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up("xs")]: {
        width: "95%",
        margin: "0 0 0 2.5%",
      },
      [theme.breakpoints.up("sm")]: {
        width: "90%",
        margin: "0 0 0 5%",
      },
      [theme.breakpoints.up("1300")]: {
        maxWidth: "1170px",
        margin: "0 auto 0 auto",
      },
    },
    headerImage: {
      width: "100px",
      height: "100px",
      position: "absolute",
      top: "15px",
      left: "10%",
      [theme.breakpoints.up("1300")]: {
        left: "12%",
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
      // backgroundColor: "#eeeeee",
      padding: "2px 0 0 0",
      height: "100px",
      width: "100%",
      minWidth: "10px",
    },
    tabsGridItem: {
      marginTop: "50px",
      width: "100%",
    },
    lastTab: {
      marginRight: "20px",
      textTransform: "capitalize",
      // color: "black",
      minWidth: "1px",
      width: "20%",
    },
    tab: {
      textTransform: "capitalize",
      // color: "black",
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
      // backgroundColor: "#eeeeee",
      top: "auto",
      position: "static",
      bottom: 0,
      boxShadow:
        "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
    },
    bottomNavigation: {
      // backgroundColor: "#eeeeee",
    },
  }));
  const classes = useStyles();
  return (
    <ThemeProvider theme={mainTheme}>
      <Grid className={classes.root} container justify="center">
        <CssBaseline />
        <Router>
          <Header
            setPageState={setPageState}
            pageState={pageState}
            classes={classes}
          />
          <Route exact path="/">
            <Home setPageState={setPageState} pageState={pageState} />
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
        </Router>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
