import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Project from "../components/Project";
import projectData from "../assets/json/portfolioData.json"
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((mainTheme) => ({
  root: {
  },
  outerPaper: {
    backgroundImage: "url(/assets/images/pastelTriangles.jpg)",
    // backgroundSize: "cover",
    padding: "5%",
    marginBottom: "50px",
  },
}));

const Portfolio = ({
  setPageState,
  itemPageState,
  setItemPageState,
  setItemTabState,
  itemTabState,
  setSlideDirection,
  setSlidingIn,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.outerPaper}>
      {/* Need to make the height of each project uniform */}
      <Grid
        container
        className={classes.root}
        justify="space-around"
        alignItems="stretch"
        spacing={5}
      >
        {Object.keys(projectData).map((key) => {
          return (
            <Grid item xs={10} sm={6} md={4} lg={4} xl={4} key={key}>
              <Project
                setSlideDirection={setSlideDirection}
                setSlidingIn={setSlidingIn}
                setPageState={setPageState}
                itemTabState={itemTabState}
                setItemTabState={setItemTabState}
                setItemPageState={setItemPageState}
                itemPageState={itemPageState}
                brief={projectData[key].brief}
                techs={projectData[key].techs}
                projectTitle={projectData[key].title}
                deployedLink={projectData[key].deployedLink}
                gitHubRepoLink={projectData[key].gitHubRepoLink}
                cardImage={projectData[key].cardImage}
                description={projectData[key].description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Portfolio;
