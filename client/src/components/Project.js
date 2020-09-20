import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

//I'd like this to cause a modal to pop up when clicked on.  otherwise
//  has a screenshot with a banner
// Image
//  Link?

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.primary,
  },
}));

const Project = () => {
  const classes = useStyles();

  return (
    <div>
      <Paper 
      className={classes.paper}
      >This is a project</Paper>
    </div>
  );
};

export default Project;
