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
import ProjectPage from "./pages/ProjectPage";


// Component definition
function App() {
  
  // pageState and setPageState are passed to components that link to other pages within the React Router
  const [pageState, setPageState] = useState("/");
  const [slideDirection, setSlideDirection] = useState("right");
  const [itemTabState, setItemTabState] = useState("Item");
  const [itemPageState, setItemPageState] = useState({
    title: null,
    description: null,
    about: null,
    mainPic: null,
    secondPic: null,
    thirdPic: null,
    repoLink: null,
    liveLink: null,
  });
  const [slidingIn, setSlidingIn] = useState(true);

  const gotoPage = () => {
  }

  //  mainTheme supplies typography to theme consumers
  const mainTheme = createMuiTheme({
    palette: {
      type: "dark",
    },
    typography: {
      fontFamily: "'Kumbh Sans', sans-serif;",
    },
    spacing: 8,
  });
  //  Styles
  const useStyles = makeStyles((theme) => ({
    //  root is the main container and here is where I set its responsive behaviors
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
    //  headerImage is the avatar-like circular photo in the header
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
    //  headerBanner is underneath the Appbar, above the pages.
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
      minWidth: "1px",
      width: "16.666%",
    },
    tab: {
      textTransform: "capitalize",
      minWidth: "1px",
      width: "16.666%",
    },
    tabs: {
      width: "75%",
      margin: "0 0 0 15%",
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
                <Home setPageState={setPageState} pageState={pageState} />
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
                  setPageState={setPageState}
                  itemTabState={itemTabState}
                  setItemTabState={setItemTabState}
                  itemPageState={itemPageState}
                  setItemPageState={setItemPageState}
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
              direction={slideDirection}
              in={slidingIn}
              mountOnEnter
              unmountOnExit
            >
              {/* CONTACT "PAGE" */}
              <div>Contact</div>
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
                <ProjectPage itemPageState={itemPageState} />
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
