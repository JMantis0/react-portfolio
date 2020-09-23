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

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

const Project = ({ projectTitle, deployedLink, gitHubRepoLink, cardImage, description }) => {
  const classes = useStyles();
console.log(
  "projectTitle",
  projectTitle,
  "deployedLink",
  deployedLink,
  "gitHubRepoLink",
  gitHubRepoLink,
  "cardImage",
  cardImage,
  "description",
  description
)
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardImage}
          title={projectTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {projectTitle}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            This is a description of the project. Blah blah and stuff and
            things.
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
