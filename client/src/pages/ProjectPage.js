// React imports
import React from "react";

// MUI Imports
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainImage: {
    width: "90%",
    margin: "0 0 0 5%",
  },
  center: {
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
      <Grid container justify="space-around" alignItems="center">
        <Grid className={classes.center} item xs={12}>
          <h1>{itemPageState.title}</h1>
        </Grid>
        <Grid className={classes.center} xs={6} item>
          <Link variant="h5" target="_blank" href={itemPageState.liveLink}>
            Live Link
          </Link>
        </Grid>
        <Grid className={classes.center} xs={6} item>
          <Link variant="h5" target="_blank" href={itemPageState.repoLink}>
            Repo Link
          </Link>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <img
            className={classes.mainImage}
            alt="projectPic"
            src={itemPageState.mainPic}
          ></img>
          <h1>Project Brief</h1>
          <p>{itemPageState.brief}</p>
        </Grid>
        <Grid item xs={12} md={6}>
          <h1>About the application</h1>
          <p>{itemPageState.description}</p>
          <ol>
            {itemPageState.techs.map(tech => {
              return <li>{tech}</li>
            })}
          </ol>
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
