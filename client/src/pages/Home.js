import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";

const homeCardData = {
  portfolio: {
    cardTitle: "Portfolio",
    link: "/portfolio",
    cardImage: "",
    description: "View Portfolio",
  },
  about: {
    cardTitle: "About",
    link: "/about",
    cardImage: "",
    description: "Click to learn about Jesse",
  },
  resume: {
    cardTitle: "Resume",
    link: "/resume",
    cardImage: "",
    description: "View Resume",
  },
};

const Home = () => {
  return (
    <Grid container justify="space-around">
      {Object.keys(homeCardData).map((key) => {
        return (
          <Grid key={key} xs={4} style={{ textAlign: "center" }} item>
            <HomeCard
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
