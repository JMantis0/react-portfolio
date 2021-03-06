// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    marginBottom: "50px",
  },
  outer: {
    backgroundImage: "url(/assets/images/pastelTriangles.jpg)",
    padding: "5%",
    marginBottom: "50px",
  },
  inner: {
    // backgroundImage: "url(/assets/images/BeigeScratches.jpg)",

    // backgroundColor: mainTheme.palette.background.paper,
    opacity: "90%",
    padding: "2.5%",
  },
  button: {},
  mainImage: {
    // maxWidth: " 500px",
    width: "90%",
    margin: "0 0 0 5%",
  },
  centerText: {
    textAlign: "center",
  },
  pinkButton: {
    textTransform: "capitalize",
    // background: `linear-gradient(45deg, white 30%, #FF8E53 90%)`,
    background: "#white",
    border: "3px solid #1ff0ff",
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "black",
    height: 40,
    padding: "0 30px",
    opacity: "100%!important",
    "&:hover": {
      backgroundColor: "black",
      color: "YELLOW",
    },
    "&:active": {
      backgroundColor: "yellow",
      color: "black",
    },
  },
  link: {
    "&:hover": {
      color: "yellow",
    },
  },
  dog: {
    fontSize: "100px",
  },
  secondPaper: {
    backgroundColor: mainTheme.palette.background.paperSecond,
    margin: "20px 10px 20px 10px",
    padding: "10px",
    boxShadow: `1px 1px 5px 5px ${mainTheme.palette.colors.pink}`,
    opacity: "100%",
  },
  horizontalLine: {
    content: " ",
    display: "block",
    width: "100%",
    backgroundColor: "#000000",
    color: "#eeeeee",
    height: "2px",
    marginBottom: "10px",
  },
}));

const ProjectPage = ({
  itemPageState,
  setSlideDirection,
  setSlidingIn,
  setPageState,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    setSlideDirection("left");
    setSlidingIn(false);
    setPageState("/portfolio");
    setTimeout(() => {
      setSlideDirection("right");
      setSlidingIn(true);
      history.push("/portfolio");
    }, 200);
  };
  return (
    <Paper className={classes.outer}>
      <Paper className={classes.inner}>
        <Grid
          container
          style={{ width: "95%", marginLeft: "2.5%" }}
          justify="space-around"
          alignItems="flex-start"
        >
          {/* First Container */}
          {/* Title of Project */}
          <Grid item xs={12} sm={8}>
            <h1 style={{ display: "inline" }}>{itemPageState.title}</h1>
            <Button
              variant="contained"
              classes={{ root: classes.pinkButton }}
              style={{ margin: "0 0 10px 10px" }}
              onClick={() => {
                handleClick();
              }}
              variant="contained"
            >
              Back to Portfolio
            </Button>
            <div className={classes.horizontalLine}></div>
            <p>{itemPageState.brief}</p>
            {/* Second Container */}
            <img
              className={classes.mainImage}
              alt="projectPic"
              src={itemPageState.mainPic}
            ></img>
          </Grid>

          <Grid xs={12} sm={4} item>
            <Paper className={classes.secondPaper}>
              <h1 style={{ display: "inline" }}>Links</h1>
              <div className={classes.horizontalLine}></div>
              {/* Live Link */}
              <ul>
                <li>
                  <a
                    className={classes.link}
                    target="_blank"
                    href={itemPageState.liveLink}
                  >
                    {itemPageState.title} Site
                  </a>
                </li>
                {/* Repository Link */}
                <li>
                  <a
                    className={classes.link}
                    target="_blank"
                    href={itemPageState.repoLink}
                  >
                    {itemPageState.title} Repository
                  </a>
                </li>
              </ul>
            </Paper>
            {/* Back to Portfolio Button */}
            <Paper className={classes.secondPaper}>
              <h2 style={{ display: "inline" }}>Technical Skills</h2>
              <div className={classes.horizontalLine}></div>
              <ul>
                {itemPageState.techs === null
                  ? null
                  : itemPageState.techs.map((tech) => {
                      return <li>{tech}</li>;
                    })}
              </ul>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Paper>
  );
};

export default ProjectPage;
