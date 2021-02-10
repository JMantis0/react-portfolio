import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    backgroundImage: "url(/assets/images/ColorShapes.jpg)",
    padding: "5%",
    marginBottom: "50px",
    opacity: "85%",
  },
  inner: {
    backgroundColor: mainTheme.palette.background.paper,
    padding: "5%",
  },
  horizontalLine: {
    content: " ",
    display: "block",
    width: "100%",
    backgroundColor: "#000000",
    color: "#eeeeee",
    height: "2px",
    marginBottom: "10px",
  },
}));
const About = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Paper className={classes.inner}>
        <h1>About</h1>
        <div className={classes.horizontalLine}></div>
        <p style={{ marginTop: "25px" }}>
          Full Stack Web developer holding a Bachelor of Science in Mathematics
          and Statistics from Miami University. Recently earned a certificate in
          Full Stack Web Development from the University of Washington,
          developing skills in JavaScript, Node.js, Express, React.js, CSS,
          HTML, Responsive Web Design, SQL, Mongo DB, Progressive Web
          Applications, Service-Workers, Server-Side API's, Web API's and more.
        </p>
        <p>
          Currently employed as a Hub Supervisor for UPS, overseeing Air
          Operations, compliance, and equipment administration.
        </p>
        <p>
          Enjoys studying piano and chess, hiking, board games, weight training,
          skiing, good books, and the occasional video game.
        </p>
      </Paper>
    </Paper>
  );
};

export default About;
