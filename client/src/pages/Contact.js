// React Imports
import React from "react";

// MUI imports
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makesStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  contactContainer: {
    width: "100%",
  },
  textField: {
    margin: "2px 0 2px 0",
    border: "1px solid white",
    borderRadius: "5px",
    width: "100%",
  },
  box: {
    // this is how to select all children of this box class
    // "& *": {
    //   backgroundColor: "#eeff00",
    // },
  },
}));

const Contact = ({ heme }) => {
  const classes = useStyles();
  console.log(heme);
  return (
    <Grid className={classes.contactContainer} container>
      <Box className={classes.box}>
        <h1>Have a question or comment?</h1>
        <h3>Fill out the form to leave me a message ! :)</h3>
        <Grid item xs={12}>
          {/* <form> */}
          {/* <div>Question? Inquire below:</div> */}
          <Grid container justify="space-around">
            <Grid item xs={10}>
              <TextField className={classes.textField} label="Your name" />
            </Grid>
            <Grid item xs={10}>
              {/* <Box m={2}> */}
              <TextField className={classes.textField} label="Email" />
              {/* </Box> */}
            </Grid>
            <Grid m="2px" item xs={10}>
              <TextField className={classes.textField} label="Phone" />
            </Grid>
            <Grid item xs={10}>
              <TextField
                className={classes.textField}
                multiline
                rowsMax={4}
                label="Message"
              />
            </Grid>
          </Grid>
          {/* </form> */}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Contact;
