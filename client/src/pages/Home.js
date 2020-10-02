import React from "react";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  return (
    <Grid container justify="space-around">
      <Grid item>Portfolio Card</Grid>
      <Grid item>About Card</Grid>
      <Grid item>Resume Card</Grid>
    </Grid>
  );
};

export default Home;
