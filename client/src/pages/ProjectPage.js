// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";

const ProjectPage = ({ itemPageState }) => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6}>
          <img alt="projectPic" src={itemPageState.mainPic}></img>
          <h1>{itemPageState.title}</h1>
          <h1>Project Description</h1>
          <p>{itemPageState.description}</p>
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
        </Grid>
      </Grid>
    </div>
  );
};

export default ProjectPage;
