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
          I am a Full Stack Web developer holding a Bachelor of Science in Mathematics and
          Statistics from Miami University. I recently earned a certificate in
          Full Stack Web Development from the University of Washington
          where I developed skills in
          JavaScript, Node.js, Express, React.js, CSS, HTML, Responsive Web
          Design, SQL, Mongo DB, Progressive Web Applications,
          Service-Workers, Server-Side API's, Web API's and more.
        </p>
        <p>
          I currently works as an Hub Supervisor for UPS, overseeing Air
          Operations and equipment administration.
        </p>
        <p>
          In my spare time I enjoy studying piano and chess, hiking, board
          games, weight training, skiing, good books, and the occasional video
          game.
        </p>
      </Paper>
    </Paper>
  );
};

export default About;
