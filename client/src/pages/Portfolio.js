import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Project from "../components/Project";

import { makeStyles } from "@material-ui/core/styles";

const projectData = {
  metroApp: {
    title: "Metro App",
    brief:
      "The Metro App provides management teams a tool that protects service commitments to customers by tracking and updating the status of UPS package cars with greater accuracy and efficiency than traditional methods.",
    techs: [
      "Node",
      "Express",
      "MySQL",
      "Sequelize",
      "Axios",
      "Xlsx",
      "React",
      "Material UI",
      "Indexed DB",
      "Dexie",
      "Moment.js",
    ],
    cardImage: "/assets/images/metroApp.JPG",
    deployedLink: "https://metroappx.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/metroApp",
  },
  reactEmployeeDirectory: {
    title: "React Employee Directory",
    brief:
      "The Employee Directory is designed to allow members of management to view and filter their company's entire staff of employees at once so that they have quick access to their information.",
    techs: [
      "React",
      "React Hooks",
      "Stateful Components",
      "HTML",
      "CSS",
      "JavaScript",
      "React-Bootstrap framework",
    ],
    cardImage: "/assets/images/directory.gif",
    deployedLink: "https://jreact-employee-directory.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/react-employee-directory",
  },
  javaScriptQuiz: {
    title: "JavaScript Quiz",
    brief:
      "The Depth of Knowledge: Javascript application is designed to provide coding students a timed quiz on JavaScript fundamentals that stores high scores so that they can gauge and compare their progress to other students.",
    techs: [
      "JavaScript",
      "jQuery",
      "HTML",
      "CSS selectors",
      "Media Queries",
      "Local Storage",
      "Data Attributes",
      "Bootstrap Framework",
      "Embedded Audios",
    ],
    devComments:
      "This is one of the very first sites I made from scratch without boiler plate code.  I learned how to use the jQuery API (event listeners and addClass/removeClass) in combination with CSS selectors to create an interactive interface that changes colors to provide the user with useful feedback as she takse the quiz.",
    deployedLink:
      "https://jmantis0.github.io/depth-of-knowledge-javascript-edition/",
    gitHubRepoLink:
      "https://github.com/JMantis0/depth-of-knowledge-javascript-edition",
    cardImage: "/assets/images/javascript-quiz.jpg",
  },
  weatherDashBoard: {
    title: "Weather Dashboard",
    brief:
      "The Weather Dashboard is designed to provide travelers a weather outlook for multiple cities so that they can plan their trips accordingly.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Server-side API",
      "Media Queries",
      "Local Storage",
      "Data Attributes",
      "Bootstrap Framework",
    ],
    deployedLink: "https://jmantis0.github.io/weather-dashboard/",
    gitHubRepoLink: "http://github.com/JMantis0/weather-dashboard",
    cardImage: "/assets/images/w-dashboard.png",
  },
  euroTranslationMap: {
    title: "European Translation Map",
    brief:
      "This web application provides travelers and language enthusiasts alike a tool that translates words from english into several European languages and displays the translations according to their geographic location.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Responsive Design",
      "MicrosoftAzure Text Translate API",
      "TomTom Maps API",
      "Zurb Foundation Framework",
      "Font awesome",
    ],
    deployedLink: "https://progharrison234.github.io/european-translation-map/",
    gitHubRepoLink:
      "https://github.com/ProgHarrison234/european-translation-map",
    cardImage: "/assets/images/eurotrans.gif",
  },
  workDayScheduler: {
    title: "Work Day Scheduler",
    brief:
      "The Work Day Scheduler provides employees that have a busy schedule with a tool to add important events to a daily planner, so that they can manage their time and tasks more effectively.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "moment.js",
      "Bootstrap",
      "Local Storage",
      "Responsive Design",
    ],
    deployedLink: "https://jmantis0.github.io/work-day-scheduler",
    gitHubRepoLink: "https://github.com/JMantis0/work-day-scheduler",
    cardImage: "/assets/images/wd-scheduler.JPG",
  },
 
  brewR: {
    title: "BrewR",
    brief:
      "The BrewR full stack web application is a place where craft beer afficianados and amatuers alike can create accounts, search and save their favorite breweries, and blog about their brew experiences.",
    techs: [
      "HTML",
      "CSS",
      "Javascript",
      "jQuery",
      "MySQL",
      "Sequelize",
      "Passport",
      "Express",
      "Particle.js",
    ],
    deployedLink: "https://brewrs.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/brewR",
    cardImage: "/assets/images/brewrs.JPG",
  },
  eatDaBurger: {
    title: "Eat - Da - Burger",
    brief:
      "Eat-Da-Burger is a full stack restaurant application that lets users input the names of burgers they'd like to eat.  When a user submits a burger, the app displays it on the left hand side of the page -- waiting to be devoured.  Each burger in the waiting area also has a 'Devour' button.  When clicked the burger will move to the right side of the page.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "MySQL",
      "Sequelize",
      "Express",
      "Express-handlebars",
      "MVC",
    ],
    deployedLink: "https://secret-scrubland-53219.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/Eat-Da-Burger",
    cardImage: "/assets/images/burger.gif",
  },
};

const useStyles = makeStyles((mainTheme) => ({
  root: {
  },
  outerPaper: {
    backgroundImage: "url(/assets/images/pastelTriangles.jpg)",
    padding: "5%",
    marginBottom: "50px",

  },
}));

const Portfolio = ({
  setPageState,
  itemPageState,
  setItemPageState,
  setItemTabState,
  itemTabState,
  setSlideDirection,
  setSlidingIn,
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.outerPaper}>
      {/* Need to make the height of each project uniform */}
      <Grid
        container
        className={classes.root}
        justify="space-around"
        alignItems="stretch"
        spacing={5}
      >
        {Object.keys(projectData).map((key) => {
          return (
            <Grid item xs={10} sm={6} md={4} lg={4} xl={4} key={key}>
              <Project
                setSlideDirection={setSlideDirection}
                setSlidingIn={setSlidingIn}
                setPageState={setPageState}
                itemTabState={itemTabState}
                setItemTabState={setItemTabState}
                setItemPageState={setItemPageState}
                itemPageState={itemPageState}
                brief={projectData[key].brief}
                techs={projectData[key].techs}
                projectTitle={projectData[key].title}
                deployedLink={projectData[key].deployedLink}
                gitHubRepoLink={projectData[key].gitHubRepoLink}
                cardImage={projectData[key].cardImage}
                description={projectData[key].description}
              />
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
};

export default Portfolio;
