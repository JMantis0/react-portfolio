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
      [theme.breakpoints.down("xs")]: {
        width: "90%",
        margin: "0 0 0 5%",
        // backgroundColor: "#000000"
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
        margin: "0 0 0 5%",
        // backgroundColor: "#000000"
      },
    },
  }));
  const classes = useStyles();
  return (
    <Grid className={classes.root} container justify="center">
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
          <Resume />
        </Route>
        <Grid container justify="center">
          <Footer />
        </Grid>
      </Router>
    </Grid>
  );
}

export default App;
