// React imports
import React from "react";
import clsx from "clsx";
// react-router-dom imports
import { useHistory } from "react-router-dom";
//  MUI component imports
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import FolderSpecialTwoToneIcon from "@material-ui/icons/FolderSpecialTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import WebTwoToneIcon from "@material-ui/icons/WebTwoTone";
// MUI style import
import { makeStyles } from "@material-ui/core/styles";

//  Styles
const useStyles = makeStyles({
  list: {
    width: 200,
    backgroundColor: "white",
  },
  listItem: {
    borderTop: "1px solid #1ff0ff",
  },
  drawerIcon: {
    border: "8px solid #1ff0ff",
    backgroundColor: "#ffffff",
    margin: "0 10px 0 0",
    "&:hover": {
      backgroundColor: "#ffffff",
    },
    "&:active": {
      backgroundColor: "#000000",
      color: "#eeff00",
    },
  },
  outer: {
    backgroundColor: "white",
  },
  accountIcon: {
    color: "black",
  },
  homeIcon: {
    color: "#fbe341",
  },
  portfolioIcon: {
    color: "#ff936c",
  },
  aboutIcon: {
    color: "#fd3661",
  },
  resumeIcon: {
    color: "#1899b8",
  },
  contactIcon: {
    color: "#c2448d",
  },
  fullList: {
    width: "auto",
  },
});

//  Component definition
const MobileDrawer = ({ setPageState, itemTabState }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    right: false,
  });

  //  used to navigate within the BrowserRouter
  const history = useHistory();

  //  function for opening/closing the drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  //  define the list that appears inside the drawer
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Jesse Mazur"].map((text, index) => (
          <ListItem className={classes.listItem} button key={text}>
            <ListItemIcon>
              <AccountCircleTwoToneIcon className={classes.accountIcon} />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Home", "Portfolio", "About", "Resume", "Contact"].map(
          (text, index) => (
            <ListItem
              className={classes.listItem}
              button
              key={text}
              onClick={() => {
                if (text === "Home") {
                  setPageState(`/`);
                  history.push(`/`);
                } else {
                  setPageState(`/${text.toLowerCase()}`);
                  history.push(`/${text.toLowerCase()}`);
                }
              }}
            >
              <ListItemIcon className={classes.listIcon}>
                {text === "Home" ? (
                  <HomeTwoToneIcon className={classes.homeIcon} />
                ) : null}
                {text === "Portfolio" ? (
                  <FolderSpecialTwoToneIcon className={classes.portfolioIcon} />
                ) : null}
                {text === "About" ? (
                  <InfoTwoToneIcon className={classes.aboutIcon} />
                ) : null}
                {text === "Resume" ? (
                  <DescriptionTwoToneIcon className={classes.resumeIcon} />
                ) : null}
                {text === "Contact" ? (
                  <ContactMailTwoToneIcon className={classes.contactIcon} />
                ) : null}
              </ListItemIcon>
              {/* primary prop is what text on actual element button inside drawer*/}
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );

  return (
    <div>
      <Grid container alignItems="center" justify="flex-end">
        <Grid item>
          {/* Here is where anchor goes in. */}
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              {/* Here is where to implement Hamburger Icon or Menu Icon */}
              <Button
                className={classes.drawerIcon}
                onClick={toggleDrawer(anchor, true)}
              >
                <MenuIcon />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default MobileDrawer;
