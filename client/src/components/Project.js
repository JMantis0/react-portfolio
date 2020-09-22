import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

//I'd like this to cause a modal to pop up when clicked on.  otherwise
//  has a screenshot with a banner
// Image
//  Link?

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140
  }
}));

const Project = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
        image={require("../assets/high-scores.png")}
        title="High Scores"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            High Scores
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a description of the project.  Blah blah and stuff and things.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Click
        </Button>
        <Button size="small" color="primary">
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
