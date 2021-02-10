import React from "react";
import Grid from "@material-ui/core/Grid";
import HomeCard from "../components/HomeCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import homeCardData from "../assets/json/homeCardData.json"

const useStyles = makeStyles((mainTheme) => ({
  outerPaper: {
    backgroundImage: "url(/assets/images/YellowShapes.jpg)",
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
