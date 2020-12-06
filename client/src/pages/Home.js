import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const homeCardData = {
  portfolio: {
    cardTitle: "Portfolio",
    link: "/portfolio",
    cardImage: "/assets/images/portfolio-icon.png",
    description: "View Portfolio",
  },
  about: {
    cardTitle: "About",
    link: "/about",
    cardImage: "/assets/images/about-icon.png",
    description: "Learn about Jesse",
  },
  resume: {
    cardTitle: "Resume",
    link: "/resume",
    cardImage: "/assets/images/resume-icon.png",
    description: "View Resume",
  },
};
const useStyles = makeStyles((mainTheme) => ({
  outerPaper: {
    backgroundColor: mainTheme.palette.background.paperSecond,
    padding: "3.5%",
    marginBottom: "40px",
  },
}));

const Home = ({ setPageState, setSlideDirection, setSlidingIn }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.outerPaper}>
      <Grid container justify="space-around">
        {Object.keys(homeCardData).map((key) => {
          return (
            <Grid key={key} xs={3} style={{ textAlign: "center" }} item>
              <HomeCard
                setSlidingIn={setSlidingIn}
                setSlideDirection={setSlideDirection}
                setPageState={setPageState}
                cardTitle={homeCardData[key].cardTitle}
                link={homeCardData[key].link}
                cardImage={homeCardData[key].cardImage}
                description={homeCardData[key].description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Home;
