import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    backgroundColor: mainTheme.palette.background.paperSecond,
    padding: "5%",
    marginBottom: "50px",
  },
  inner: {
    backgroundColor: mainTheme.palette.background.paper,
    padding: "5%",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Paper className={classes.inner}>
        <p>
          Jesse Mazur is a new full-stack web developer. He recently completed
          Trilogy's six-month Full Stack Web Development Boot Camp at The
          University of Washington. He holds a Bachelor of Science in
          Mathematics and Statistics from Miami University.
        </p>
        <p>
          Jesse currently works as an Operations Management Supervisor for UPS,
          where he has been working for 4 years. He specializes in Air
          Operations as an Instructor, Trainer, and Operations Supervisor.
        </p>
        <p>
          In his spare time Jesse enjoys studying Piano and Chess, hiking, board
          games, and the occasional video game.
        </p>
      </Paper>
    </Paper>
  );
};

export default About;
