import React from "react";
import Grid from "@material-ui/core/Grid";
import Project from "../components/Project";

//  Portfolio contains a grid setup that displays Projects

//Pick which projects to feature
// Javascript quiz
// Weather Dashboard
// Employee Management System
// Employee Management CLI
// readme-generator
// work-day scheduler
// Brewr
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
    cardImage: "/javascript-quiz.jpg",
    description:
      "Interactive browser based application featuring jQuery DOM manipulation, dynamic CSS, Bootstrap Framework, data-attributes, and local storage.",
  },
  weatherDashBoard: {
    title: "Weather Dashboard",
    deployedLink: "https://jmantis0.github.io/weather-dashboard/",
    gitHubRepoLink: "http://github.com/JMantis0/weather-dashboard",
    cardImage: "/w-dashboard.png",
    description:
      "Browser based weather forecast application featuring data called from the OpenWeatherMaps api. ",
  },
  workDayScheduler: {
    title: "Work Day Scheduler",
    deployedLink: "https://jmantis0.githubio/work-day-scheduler",
    gitHubRepoLink: "https://github.com/JMantis0/work-day-scheduler",
    cardImage: "/wd-scheduler.JPG",
    description:
      "Task management scheduler application featuring mobile responsive design, dynamic appearance, data storage, css animations, and sound.",
  },
  budgetTracker: {
    title: "Budget Tracker",
    deployedLink: "https://jbudget-tracker.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/budget-tracker",
    cardImage: "/budget-tracker.JPG",
    description:
      "Full Stack progressive web application.  MongoDB, Sequelize, IndexedDB, PWA (look at other things)",
  },
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
