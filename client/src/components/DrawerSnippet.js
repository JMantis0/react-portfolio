import React from "react";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import FolderSpecialTwoToneIcon from "@material-ui/icons/FolderSpecialTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";
import DescriptionTwoToneIcon from "@material-ui/icons/DescriptionTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import { useHistory } from "react-router-dom";

// import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function DrawerSnippet({ setPageState }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const history = useHistory();

  const toggleDrawer = (anchor, open) => (event) => {
    //  Console logs to help me understand the drawer function
    console.log("The anchor is : ", anchor);
    console.log(`The ${anchor} anchor is ${open ? "" : "not"} open`);
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleDrawerItemClick = (event, value) => {
    console.log("DrawerItemClick", value);
  };

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
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Home", "Portfolio", "About", "Resume", "Contact"].map(
          (text, index) => (
            <ListItem
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
              <ListItemIcon>
                {text === "Home" ? <HomeTwoToneIcon /> : null}
                {text === "Portfolio" ? <FolderSpecialTwoToneIcon /> : null}
                {text === "About" ? <InfoTwoToneIcon /> : null}
                {text === "Resume" ? <DescriptionTwoToneIcon /> : null}
                {text === "Contact" ? <ContactMailTwoToneIcon /> : null}
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
              <Button onClick={toggleDrawer(anchor, true)}>
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
}
