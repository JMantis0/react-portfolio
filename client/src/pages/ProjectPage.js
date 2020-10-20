// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    maxWidth: "500px",
    width: "90%",
    margin: "0 0 0 5%",
  },
  centerText: {
    textAlign: "center",
  },
}));

const ProjectPage = ({ itemPageState }) => {
  const classes = useStyles();
  console.log(itemPageState);
  console.log(itemPageState.repoLink);
  console.log(itemPageState.liveLink);
  return (
    <div>
      {/* First Container */}
      <Grid container justify="space-around" alignItems="center">
        {/* Title of Project */}
        <Grid className={classes.centerText} item xs={12}>
          <h1>{itemPageState.title}</h1>
        </Grid>
        {/* Link to Deployed Site */}
        <Grid className={classes.centerText} xs={6} item>
          <Link variant="h5" target="_blank" href={itemPageState.liveLink}>
            Live Link
          </Link>
        </Grid>
        {/* Link to GitHub Repository */}
        <Grid className={classes.centerText} xs={6} item>
          <Link variant="h5" target="_blank" href={itemPageState.repoLink}>
            Repo Link
          </Link>
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
        {/* <Grid item xs={12} md={6}>
          <h1>Images</h1>
        </Grid>
        <Grid>
          <p>links</p>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default ProjectPage;
