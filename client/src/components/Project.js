import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    // maxWidth: 345,
    // height: 500
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  project: {
    boxShadow: mainTheme.shadows[24],
    border: `10px solid ${mainTheme.palette.border}`,
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
  borderTop: {
    borderTop: `10px solid ${mainTheme.palette.border}`,
  },
  subText: {
    fontSize: "16px",
  }
}));

const Project = ({
  setPageState,
  setItemPageState,
  itemPageState,
  itemTabState,
  techs,
  brief,
  setSlideDirection,
  setSlidingIn,
  setItemTabState,
  projectTitle,
  deployedLink,
  gitHubRepoLink,
  cardImage,
  description,
}) => {
  const history = useHistory();
  const classes = useStyles();

  //  Give project a large modal with links

  const handleClick = () => {
    setSlideDirection("right");
    setSlidingIn(false);
    setItemTabState(projectTitle);
    setItemPageState({
      ...itemPageState,
      title: projectTitle,
      brief: brief,
      techs: techs,
      mainPic: cardImage,
      description: description,
      repoLink: gitHubRepoLink,
      liveLink: deployedLink,
    });
    setTimeout(() => {
      console.log(itemPageState.techs);
      setSlideDirection("left");
      setSlidingIn(true);
      setPageState("/item");
      history.push("/item");
    }, 200);
  };

  return (
    <Card
      className={classes.project}
      onClick={() => {
        handleClick();
      }}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardImage}
          title={projectTitle}
        />
        <CardContent 
        // className={classes.borderTop}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {projectTitle}
          </Typography>
          <Typography className={classes.subText} variant="body2" color="textSecondary" component="p">
           Click to learn more
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Project;
