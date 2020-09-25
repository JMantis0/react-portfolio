import React from "react";
import Grid from "@material-ui/core/Grid";
import Project from "../components/Project";

//  Portfolio contains a grid setup that displays Projects

//Pick which projects to feature
// Brewr
// European translation map
// Budget-tracker
// React-Employee Directory]

//I'd like this to cause a modal to pop up when clicked on.  otherwise
//  has a screenshot with a banner
// Image
//  Link?
const projectData = {
  javaScriptQuiz: {
    title: "JavaScript Quiz",
    deployedLink:
      "https://jmantis0.github.io/depth-of-knowledge-javascript-edition/",
    gitHubRepoLink:
      "https://github.com/JMantis0/depth-of-knowledge-javascript-edition",
    cardImage: "/images/javascript-quiz.jpg",
    description:
      "Interactive browser based application featuring jQuery DOM manipulation, dynamic CSS, Bootstrap Framework, data-attributes, and local storage.",
  },
  weatherDashBoard: {
    title: "Weather Dashboard",
    deployedLink: "https://jmantis0.github.io/weather-dashboard/",
    gitHubRepoLink: "http://github.com/JMantis0/weather-dashboard",
    cardImage: "/images/w-dashboard.png",
    description:
      "Browser based weather forecast application featuring data called from the OpenWeatherMaps api.",
  },
  euroTranslationMap: {
    title: "European Translation Map",
    deployedLink: "https://progharrison234.github.io/european-translation-map/",
    gitHubRepoLink: "https://github.com/ProgHarrison234/european-translation-map",
    cardImage: "/images/eurotrans.gif",
    description: "This web application provides travelers and language enthusiasts alike a tool that translates words from english into several European languages and displays the translations according to their geographic location."
  },
  workDayScheduler: {
    title: "Work Day Scheduler",
    deployedLink: "https://jmantis0.githubio/work-day-scheduler",
    gitHubRepoLink: "https://github.com/JMantis0/work-day-scheduler",
    cardImage: "/images/wd-scheduler.JPG",
    description:
      "Task management scheduler application featuring mobile responsive design, dynamic appearance, data storage, css animations, and sound.",
  },
  budgetTracker: {
    title: "Budget Tracker",
    deployedLink: "https://jbudget-tracker.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/budget-tracker",
    cardImage: "/images/budget-tracker.JPG",
    description:
      "Full Stack progressive web application.  MongoDB, Sequelize, IndexedDB, PWA (look at other things)",
  },
  employeeManagementCLI: {
    title: "Development Team Roster CLI",
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/Employee-Manager_CLI",
    cardImage: "/images/cli.JPG",
    description: "Employee Management App that allows users to quickly draft development teams and generate a website of its roster, featuring Javascript Classes, npm inquirer, and html writing technologies"
  },
  employeeManagementSystem: {
    title: "Employee Database Manager",
    deployedLink: "",
    gitHubRepoLink: "https://hithub.com/Jmantis0/Employee-Management-System",
    cardImage: "/images/emp-dbs-system.JPG",
    description: "Command Line Employee Database Manager and information interface featuring crud functionality with a MySQL database"
  },
  readmeGenerator : {
    title: "Readme Generator",
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/readme-generator",
    cardImage: "/images/readme-generator.JPG",
    description: "Command line node application that aids developers in generating quality readme files for GitHub Repositories"
  },
  brewR: {
    title: "brewR",
    deployedLink: "https://brewrs.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/brewR",
    cardImage: "/images/brewrs.JPG",
    description: "brewR App "
  }


};

const Portfolio = () => {
  console.log("Object.keys(projectData)", Object.keys(projectData));
  Object.keys(projectData).forEach((key) =>
    console.log(projectData[key].deployedLink)
  );
  return (
    <div>
      {/* Need to make the height of each project uniform */}
      <Grid container justify="space-around" spacing={5}>
        {Object.keys(projectData).map((key) => {
          return (
            <Grid item xs={10} sm={6} md={4} lg={4} xl={4}>
              <Project
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
      {/* <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
      </Grid>
      <Grid container justify="space-around" spacing={2}>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
        <Grid item xs={4}>
          <Project />
        </Grid>
      </Grid> */}
    </div>
  );
};

export default Portfolio;
