import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    // height: 275,
    opacity: "85%",
    padding: "40px 0 40px 0",
    "&:hover": {
      boxShadow: "0 0 0 0 rgba(0, 0, 0, 1)",
      transform: "scale(1)",
      animation: "$pulse 2s infinite",
    },
  },
  "@keyframes pulse": {
    "0%": {
      transform: "scale(0.95)",
      boxShadow: "0 0 0 0 rgb(0, 0, 0, .7)",
    },
    "70%": {
      transform: "scale(1)",
      boxShadow: "0 0 0 10px rgba(0, 0, 0, 0)",
    },
    "100%": {
      transform: "scale(0.95)",
    },
  },
  media: {
    width: "35%",
  },
  cardContent: {
    [mainTheme.breakpoints.down("700")]: {
      padding: "5px",
    },
  },
  cardTitle: {
    [mainTheme.breakpoints.between("500", "600")]: {
      fontSize: "4vw",
    },
    [mainTheme.breakpoints.between("0", "499")]: {
      fontSize: "3.5vw",
    },
  },
  cardSubTitle: {
    [mainTheme.breakpoints.between("500", "600")]: {
      fontSize: "3vw",
    },
    [mainTheme.breakpoints.between("0", "499")]: {
      fontSize: "2.5vw",
    },
  },
}));

const HomeCard = ({
  setSlideDirection,
  setSlidingIn,
  cardTitle,
  link,
  cardImage,
  description,
  setPageState,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const handleChange = () => {
    setSlideDirection("right");
    setPageState(link);
    setSlidingIn(false);
    setTimeout(() => {
      setSlideDirection("left");
      setSlidingIn(true);
      history.push(link);
    }, 200);
  };

  return (
    <Card
      onClick={() => {
        handleChange();
      }}
      className={classes.root}
    >
      {/* <CardActionArea> */}
        <img className={classes.media} src={cardImage}></img>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {cardTitle}
          </Typography>
          <Typography
            className={classes.cardSubTitle}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {description}
          </Typography>
        </CardContent>
    </Card>
  );
};

export default HomeCard;
