// React Imports
import React from "react";

// MUI imports
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { makesStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  contactContainer: {
    width: "100%",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.contactContainer} container>
      <Grid item xs={12}>
        <form style={{ width: "100%" }}>
          <div style={{ width: "100%" }}>Question? Inquire below:</div>
            <TextField
              label="Your name"
            />
            <TextField
              label="Email"
            />
            <TextField
              label="Phone"
            />
            <TextField
              label="Message"
            />
        </form>
      </Grid>
    </Grid>
  );
};

export default Contact;
