// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    marginBottom: "50px",
  },
  button: {},
  mainImage: {
    maxWidth: "500px",
    width: "90%",
    margin: "0 0 0 5%",
  },
  centerText: {
    textAlign: "center",
  },
  pinkButton: {
    textTransform: "capitalize",
    background: `linear-gradient(45deg, ${mainTheme.palette.colors.pink} 30%, #FF8E53 90%)`,
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 40,
    padding: "0 30px",
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
  const handleChange = () => {
    setSlideDirection("left");
    setSlidingIn(false);
    setPageState("/portfolio");
    setTimeout(() => {
      setSlideDirection("right");
      setSlidingIn(true);
      history.push("/portfolio");
    }, 250);
  };
  return (
    <Paper className={classes.root}>
      {/* First Container */}
      <Grid container style={{width:"95%"}} justify="space-around" alignItems="center">
        {/* Title of Project */}
        <Grid className={classes.centerText} item xs={12} sm={4}>
          <h1>{itemPageState.title}</h1>
        </Grid>
        {/* Live Link Button */}
        <Grid className={classes.centerText} xs={4} sm={1} item>
          <Button
            variant="contained"
            target="_blank"
            href={itemPageState.liveLink}
            className={classes.pinkButton}
            href={itemPageState.liveLink}
          >
            Live Link
          </Button>
        </Grid>
        {/* GitHub Repository Button */}
        <Grid className={classes.centerText} xs={4} sm={1} item>
          <Button
            variant="contained"
            className={classes.pinkButton}
            target="_blank"
            href={itemPageState.repoLink}
          >
            Repo Link
          </Button>
        </Grid>
        {/* Back to Portfolio Button */}
        <Grid className={classes.centerText} item xs={4} sm={1}>
          <Button
            variant="contained"
            // className={classes.pinkButton}
            classes={[classes.pinkButton]}
            onClick={() => {
              handleChange();
            }}
            variant="contained"
          >
            Go Back
          </Button>
        </Grid>
      </Grid>
      {/* Second Container */}
      <Grid container>
        {/* Image for Project */}
        <Grid item xs={12} sm={9}>
          <img
            className={classes.mainImage}
            alt="projectPic"
            src={itemPageState.mainPic}
          ></img>
          <h1>Project Brief</h1>
          <p>{itemPageState.brief}</p>
        </Grid>
        {/* Technologies used by Project */}
        <Grid item xs={12} sm={3}>
          <h3>Technologies</h3>
          <ul>
            {itemPageState.techs === null
              ? null
              : itemPageState.techs.map((tech) => {
                  return <li>{tech}</li>;
                })}
          </ul>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProjectPage;
