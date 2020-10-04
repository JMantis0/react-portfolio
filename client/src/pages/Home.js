import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import { makeStyles } from "@material-ui/core/styles";

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
    description: "Click to learn about Jesse",
  },
  resume: {
    cardTitle: "Resume",
    link: "/resume",
    cardImage: "/assets/images/resume-icon.png",
    description: "View Resume",
  },
};
const useStyles = makeStyles((theme) => ({
  homeContainer: {
    margin: "150px 0 150px 0",
  },
}));

const Home = ({ setPageState }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.homeContainer} justify="space-around">
      {Object.keys(homeCardData).map((key) => {
        return (
          <Grid key={key} xs={3} style={{ textAlign: "center" }} item>
            <HomeCard
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
  );
};

export default Home;
