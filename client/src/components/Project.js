import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
    height: 400
  },
  media: {
    height: 0,
    paddingTop: "56.25%"
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
  "typeOf cardImage",
  typeof cardImage,
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
            {description}
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
