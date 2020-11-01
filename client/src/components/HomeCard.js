import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: 275,
    padding: "40px 0 40px 0",
    // "&:hover": {
    //   backgroundColor: "#ee0000",
    // },
  },
  media: {
    width: "35%",
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
    }, 250);
  };

  return (
    <Card
      onClick={() => {
        handleChange();
      }}
      className={classes.root}
    >
      <CardActionArea>
        <img className={classes.media} src={cardImage}></img>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button style={{textAlign: "center"}} size="small" color="primary">
          Click
        </Button> */}
      {/* <Button size="small" color="primary">
          Learn more
        </Button> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default HomeCard;
