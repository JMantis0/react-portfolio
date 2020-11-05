// import axios for RESTfulness
import axios from "axios";

// React Imports
import React from "react";
import { useState, useRef } from "react";

// MUI imports
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makesStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((mainTheme) => ({
  root: {},
  contactContainer: {
    width: "100%",
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
}));

const Contact = () => {
  const classes = useStyles();
  
  // Messages sent to back end to be stored in db expect a body in the form {name: STRING, email: STRING, phone: STRING, message: STRING }
  const [messageState, setMessageState] = useState({
    name: "none",
    email: "none",
    phone: "none",
    message: "none",
  });

  const [emailIsValid, setEmailIsValid] = useState(false);

  const handleNameInputChange = (event) => {
    console.log(event);
    setMessageState({ ...messageState, name: event.target.value });
  };
  const handlePhoneInputChange = (event) => {
    console.log(event);
    setMessageState({ ...messageState, phone: event.target.value });
  };
  const handleEmailInputChange = (event) => {
    console.log(event);
    setMessageState({ ...messageState, email: event.target.value });
  };
  const handleMessageInputChange = (event) => {
    console.log(event);
    setMessageState({ ...messageState, message: event.target.value });
  };

  const handleSubmit = () => {
    console.log("messageState", messageState);
    axios
      .get("/api/test")
      .then((response) => {
        console.log("test route response", response);
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
    axios
      .post("/api/saveMessage", {
        name: messageState.name,
        email: messageState.email,
        phone: messageState.phone,
        message: messageState.message,
      })
      .then((response) => {
        console.log("saveMessage route response", response);
      })
      .catch((err) => {
        console.log("There was an error: ", err);
      });
  };


  return (
    <Grid className={classes.contactContainer} container>
      <Paper className={classes.box}>
        <Grid item xs={12}>
          Contact methods:
          Email: rootmazur@gmail.com
          Phone/Text: (216)262.2023
          <form>
            {/* <div>Question? Inquire below:</div> */}
            <Grid container justify="space-around">
              <Grid item xs={10}>
                <Box mb={5}>
                  <Typography variant="h3">
                    Have a question or comment?
                  </Typography>
                  <Typography variant="h4">
                    Fill out this form to leave me a message!)
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  className={classes.textField}
                  label="Your name"
                  variant="filled"
                  onChange={handleNameInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                {/* <Box m={2}> */}
                <TextField
                  className={classes.textField}
                  label="Email"
                  variant="filled"
                  helperText="Must be an email address"
                  onChange={handleEmailInputChange}
                />
                {/* </Box> */}
              </Grid>
              <Grid m="2px" item xs={10}>
                <TextField
                  className={classes.textField}
                  label="Phone"
                  variant="filled"
                  onChange={handlePhoneInputChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  className={classes.textField}
                  multiline
                  rows={4}
                  defaultValue=""
                  label="Message"
                  variant="filled"
                  onChange={handleMessageInputChange}
                />
                <TextField
                  error={emailIsValid}
                  id="standard-error-helper-text"
                  label="Error"
                  defaultValue="Hello World"
                  helperText="Incorrect entry."
                  onChange={() => {
                    console.log("change");
                  }}
                />
              </Grid>
              <Grid item xs={10}>
                <Button
                  type="submit"
                  value="Submit"
                  variant="contained"
                  onClick={(event) => {
                    event.preventDefault();
                    handleSubmit();
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Contact;
