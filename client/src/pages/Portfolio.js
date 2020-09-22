import React from "react";
import Grid from "@material-ui/core/Grid";
import Project from "../components/Project";

//  Portfolio contains a grid setup that displays Projects

//Pick which projects to feature
// Javascript quiz
// Weather Dashboard
// Employee Management System
// Employee Management CLI
// readme-generator
// work-day scheduler
// Brewr
// Budget-tracker
// React-Employee Directory]

const Portfolio = () => {
  return (
    <div>
    <Grid container justify="space-around" spacing={2}>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
    </Grid>
    <Grid container justify="space-around" spacing={2}>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
    </Grid>
    <Grid container justify="space-around" spacing={2}>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
    </Grid>
    <Grid container justify="space-around" spacing={2}>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
      <Grid item xs={4}>
        <Project />
      </Grid>
    </Grid>
      </div>
    
  );
};

export default Portfolio;
