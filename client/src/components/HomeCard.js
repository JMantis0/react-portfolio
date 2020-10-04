import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 275,
    padding: "20px 0 0 0",
    // "&:hover": {
    //   backgroundColor: "#ee0000",
    // },
  },
  media: {
    width: "35%",
  },
}));

const HomeCard = ({ cardTitle, link, cardImage, description }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card onClick={() => {
      history.push(link);
      console.log("cardClick on home page")
    }} className={classes.root}>
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
      <CardActions>
        <Button style={{textAlign: "center"}} size="small" color="primary">
          Click
        </Button>
        {/* <Button size="small" color="primary">
          Learn more
        </Button> */}
      </CardActions>
    </Card>
  );
};

export default HomeCard;
