
  const Header = ({ classes }) => {
    //  used for styling components
    const history = useHistory();
    // const classes = useStyles();/
    const [tabState, setTabState] = useState("/");
  
    //  When the tabState changes, history.push sets the route
    useEffect(() => {
      history.push(tabState);
    }, [history, tabState]);
  
    //  use setTabState prop from App.js to route.
  
    const handleChange = (event, newValue) => {
      console.log("newValue", newValue);
      setTabState(newValue);
    };
  
    return (
      <Grid container id="firstHeaderDiv">
        <AppBar className={classes.appBar} position="static">
          <Grid container>
            <Grid xs={2} item>
              <img
                className={classes.headerImage}
                src={require("../assets/biopic.PNG")}
                alt="bio"
              ></img>
            </Grid>
  
            <Grid xs={10} className={classes.tabsGridItem} item>
              <Grid container justify="flex-end">
                <Grid item style={{ width: "100%" }}>
                  <Hidden smUp>
                    <DrawerSnippet id="DrawerSnippet" />
                  </Hidden>
                  <Hidden xsDown>
                    <Tabs
                      value={tabState}
                      onChange={handleChange}
                      aria-label="header navigation tabs"
                      id="<Tabs>"
                      className={classes.tabs}
                    >
                      <Tab className={classes.tab} value="/" label="Home" />
                      <Tab
                        className={classes.tab}
                        value="/portfolio"
                        label="Portfolio"
                      />
                      <Tab className={classes.tab} value="/about" label="About" />
                      <Tab
                        className={classes.tab}
                        value="/resume"
                        label="Resume"
                      />
                      <Tab
                        className={classes.lastTab}
                        value="/contact"
                        label="Contact"
                      />
                    </Tabs>
                  </Hidden>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
        <Grid container>
          <Grid className={classes.headerBanner} item>
            <Typography variant="h4" align="center">
              <p className={classes.bannerParagraph}>
                Burgeoning Web Designer & Developer based in Seattle
                <Hidden smUp>
                  <span>.</span>
                </Hidden>
                <Hidden xsDown>
                  <span>, Washington.</span>
                </Hidden>
              </p>
              <p className={classes.bannerParagraph}>
                Experienced in designing & developing MERN applications.
              </p>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    );
  };