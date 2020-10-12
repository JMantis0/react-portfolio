// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width:"90%",
    margin: "0 0 0 5%",
  }
}));

const ProjectPage = ({ itemPageState }) => {
  const classes = useStyles();
  console.log(itemPageState);
  console.log(itemPageState.repoLink)
  console.log(itemPageState.liveLink)
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <img className={classes.mainImage} alt="projectPic" src={itemPageState.mainPic}></img>
          <h1>{itemPageState.title}</h1>
          <h1>Project Brief</h1>
          <p>{itemPageState.brief}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>About the application</h1>
          <p>{itemPageState.description}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>Images</h1>
        </Grid>
        <Grid>
          <p>links</p>
          <Link target="_blank" href={itemPageState.liveLink}>Live Link</Link>
          <Link target="_blank" href={itemPageState.repoLink}>Repo Link</Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPage;
