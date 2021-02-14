// React imports
import React, { useState } from "react";

// MUI imports
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";

//  React Router Dom imports
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom component imports
import Header from "./components/Header";
import Footer from "./components/Footer";

// page imports
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProjectPage from "./pages/ProjectPage";

// Component definition
function App() {
  // pageState and setPageState are passed to components that link to other pages within the React Router
  const [pageState, setPageState] = useState(
    `/${window.location.href.split("/").pop()}`
  );
  const [slideDirection, setSlideDirection] = useState("right");
  const [itemTabState, setItemTabState] = useState("Weather Dashboard");
  const [slidingIn, setSlidingIn] = useState(true);
  const [itemPageState, setItemPageState] = useState({
    title: "Weather Dashboard",
    brief:
      "The Weather Dashboard is designed to provide travelers a weather outlook for multiple cities so that they can plan their trips accordingly.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Server-side API",
      "Media Queries",
      "Local Storage",
      "Data Attributes",
      "Bootstrap Framework",
    ],
    mainPic: "/assets/images/w-dashboard.png",
    repoLink: "http://github.com/JMantis0/weather-dashboard",
    liveLink: "https://jmantis0.github.io/weather-dashboard/",
  });
  const accent = "#F25CA2"; //   not being used?
  const primary = "#eeeeee"; //  not being used?
  const secondary = "#cccccc"; //secondary background paper
  const tertiary = "#eeeeee"; //header, footer, and cards
  const altAccent = "#0B9ED9"; // furthest background and selected Footer Icon
  const background = "#ffffff";
  const textPrimary = "#000000";
  const textSecondary = "#b30059";

  //  mainTheme supplies typography to theme consumers
  const mainTheme = createMuiTheme({
    overrides: {
      MuiTab: {
        root: {
          "&:hover": {
            backgroundColor: "#000000",
            color: "#eeff00",
          },
          "&$selected": {
            backgroundColor: "#eeff00",
            color: "#000000",
            fontWeight: "900",
            "&:hover": {
              backgroundColor: "#eeff00",
              color: "#000000",
            },
          },
        },
      },
      MuiTooltip: {
        tooltip: {
          fontSize: "1.2em",
          color: "#F25CA2",
          backgroundColor: "transparent",
        },
      },
    },
    palette: {
      type: "dark",
      // border: accent,
      colors: {
        accent: accent,
        primary: primary,
        secondary: secondary,
        tertiary: tertiary,
        altAccent: altAccent,
      },
      background: {
        paper: tertiary,
        paperSecond: secondary,
        default: background,
      },
      text: {
        primary: textPrimary,
        secondary: textSecondary,
      },
    },
    typography: {
      fontFamily: "'Kumbh Sans', sans-serif;",
    },
    spacing: 8,
  });
  //  Styles
  const useStyles = makeStyles((mainTheme) => ({
    //  root is the main container and here is where I set its responsive behaviors
    root: {
      [mainTheme.breakpoints.up("xs")]: {
        width: "95%",
        margin: "0 0 0 2.5%",
        overflow: "hidden",
      },
      [mainTheme.breakpoints.up("620")]: {
        width: "90%",
        margin: "0 0 0 5%",
      },
      [mainTheme.breakpoints.up("1300")]: {
        // maxWidth: "1170px",
        margin: "0 auto 0 auto",
      },
    },
    outer: {
      backgroundImage: "url(/assets/images/triangles.jpg)",
      backgroundSize: "cover",
    },
    tabsGrid: {},
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
      <Grid container className={classes.outer}>
        <Grid className={classes.root} container justify="center">
          <CssBaseline />
          <Router>
            {/* HEADER COMPONENT */}
            <Header
              setSlidingIn={setSlidingIn}
              itemTabState={itemTabState}
              setPageState={setPageState}
              slideDirection={slideDirection}
              setSlideDirection={setSlideDirection}
              pageState={pageState}
              classes={classes}
            />
            <Route exact path="/">
              <Slide
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {/* HOME "PAGE" */}
                  <Home
                    setSlidingIn={setSlidingIn}
                    setSlideDirection={setSlideDirection}
                    setPageState={setPageState}
                    pageState={pageState}
                  />
                </div>
              </Slide>
            </Route>
            <Route exact path="/portfolio">
              <Slide
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {/* PORTFOLIO "PAGE" */}
                  <Portfolio
                    setSlideDirection={setSlideDirection}
                    setSlidingIn={setSlidingIn}
                    setPageState={setPageState}
                    itemPageState={itemPageState}
                    setItemPageState={setItemPageState}
                    setItemTabState={setItemTabState}
                    itemTabState={itemTabState}
                  />
                </div>
              </Slide>
            </Route>
            <Route exact path="/about">
              <Slide
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {/* ABOUT "PAGE" */}
                  <About />
                </div>
              </Slide>
            </Route>
            <Route exact path="/resume">
              <Slide
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                <div style={{ width: "100%" }}>
                  <Resume />
                </div>
              </Slide>
            </Route>
            <Route exact path="/contact">
              <Slide
                id="contactSlide"
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                {/* CONTACT "PAGE" */}
                <div style={{ width: "100%" }}>
                  <Contact />
                </div>
              </Slide>
            </Route>
            <Route exact path="/item">
              <Slide
                direction={slideDirection}
                in={slidingIn}
                mountOnEnter
                unmountOnExit
              >
                <div>
                  {/* PROJECTPAGE "PAGE" */}
                  <ProjectPage
                    itemPageState={itemPageState}
                    setSlideDirection={setSlideDirection}
                    setSlidingIn={setSlidingIn}
                    setPageState={setPageState}
                  />
                </div>
              </Slide>
            </Route>
            <Grid container justify="center">
              <Footer
                setSlidingIn={setSlidingIn}
                setSlideDirection={setSlideDirection}
                setPageState={setPageState}
                pageState={pageState}
                classes={classes}
              />
            </Grid>
          </Router>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
