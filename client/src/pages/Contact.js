// import axios for RESTfulness
import axios from "axios";

// React Imports
import React from "react";
import { useState, useRef } from "react";

// MUI imports
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((mainTheme) => ({
  root: {
    backgroundImage: "url(/assets/images/pastelTriangles.jpg)",
    padding: "5%",
    marginBottom: "50px",
  },
  inner: {
    backgroundColor: mainTheme.palette.background.paper,
    padding: "5%",
    opacity: "85%",
  },
  textField: {
    margin: "10px 0",
    border: "1px solid white",
    borderRadius: "5px",
    width: "100%",
  },
  box: {
    // border: "1px solid white",
    padding: "20px 0",
    margin: "100px 10% 300px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
    // this is how to select all children of this box class
    // "& *": {
    //   backgroundColor: "#eeff00",
    // },
  },
  horizontalLine: {
    content: " ",
    display: "block",
    width: "100%",
    backgroundColor: "#e7e9eb",
    color: "#eeeeee",
    height: "2px",
    marginBottom: "10px",
  },
}));

const Contact = () => {
  const classes = useStyles();

  // Messages sent to back end to be stored in db expect a body in the form {name: STRING, email: STRING, phone: STRING, message: STRING }

  return (
    <Paper className={classes.root}>
      <Paper className={classes.inner}>
        {/* <Grid item xs={12}> */}
        <Paper className={classes.secondPaper}>
          <Typography variant="h5">Contact Jesse</Typography>
          <div className={classes.horizontalLine}></div>
        </Paper>
        <Typography variant="h6">Email: rootmazur@gmail.com</Typography>
        <Typography variant="h6">Phone/Text: (216)262.2023</Typography>
        {/* </Grid> */}
      </Paper>
    </Paper>
  );
};

export default Contact;
