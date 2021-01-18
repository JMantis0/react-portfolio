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
  const [pageState, setPageState] = useState("/");
  const [slideDirection, setSlideDirection] = useState("right");
  const [itemTabState, setItemTabState] = useState("Weather Dashboard");
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
  const [slidingIn, setSlidingIn] = useState(true);

  // Color scheme from adobe site color.adobe.com/explore

  //GLOBAL CITIZEN THEME

  const accent = "#F25CA2";   //pink
  const primary = "#0433BF";  //blue1
  const secondary = "#032CA6";  //blue2
  const tertiary = "#021859";  //blue3
  const altAccent = "#0B9ED9";   //aqua
  const textPrimary = "#ffffff";
  const textSecondary = "#F25CA2";
  
  // OCEAN AGENCY THEME
  
  // const accent = "#D9CB04";
  // const primary = "#D9B504"; 
  // const secondary = "#A68B03";  
  // const tertiary = "#735702"; 
  // const altAccent = "#402401";
  // const textPrimary = "#ffffff";
  // const textSecondary = "#ffe6f7"

  // HUA - LA BRIDGE THEME

  // const accent = "#402232";   //maroon
  // const primary = "#D5E5F2";  //offwhite
  // const secondary = "#364C59";  //steel
  // const tertiary = "#5A798C";  //gray
  // const altAccent = "#A9C6D9";   //light blue
  // const textPrimary = "#ffffff";
  // const textSecondary = "#ffe6f7"

  // const secondTheme = createMuiTheme({
  //   overrides: {
  //     MuiTooltip: {
  //       tooltip: {
  //         fontSize: "1.2em",
  //         color: "#F25CA2",
  //         backgroundColor: "transparent",
  //       },
  //     },
  //   },
  //   palette: {
  //     type: "dark",
  //     border: pink,
  //     colors: {
  //       pink: "#F25CA2",
  //       blue1: "#0433BF",
  //       blue2: "#032CA6",
  //       blue3: "#021859",
  //       aqua: "#0B9ED9",
  //     },
  //     background: {
  //       paper: blue3,
  //       paperSecond: blue2,
  //       default: aqua,
  //     },
  //     text: {
  //       // primary: aqua,
  //       secondary: pink,
  //     },
  //   },
  //   typography: {
  //     fontFamily: "'Kumbh Sans', sans-serif;",
  //   },
  //   spacing: 8,
  // })

  //  mainTheme supplies typography to theme consumers
  const mainTheme = createMuiTheme({
    overrides: {
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
      border: accent,
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
        default: altAccent,
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
        maxWidth: "1170px",
        margin: "0 auto 0 auto",
      },
    },

    tabsGrid: {},
  }));
  const classes = useStyles();

  return (
    <ThemeProvider theme={mainTheme}>
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
                  setItemTabState={setItemTabState}
                  setItemPageState={setItemPageState}
                  itemTabState={itemTabState}
                  itemPageState={itemPageState}
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
    </ThemeProvider>
  );
}

export default App;
