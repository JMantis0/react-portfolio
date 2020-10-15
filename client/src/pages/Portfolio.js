import React from "react";
import Grid from "@material-ui/core/Grid";
import Project from "../components/Project";
// import Modal from "@material-ui/core/Modal";

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
    brief:
      "The Depth of Knowledge: Javascript application is designed to provide coding students a timed quiz on JavaScript fundamentals that stores high scores so that they can gauge their progress compared to other students.",
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
    description:
      "Interactive browser based application featuring jQuery DOM manipulation, dynamic CSS, Bootstrap Framework, data-attributes, and local storage.",
  },

  // ## User Story

  // ```
  // AS A traveler
  // I WANT to see the weather outlook for multiple cities
  // SO THAT I can plan a trip accordingly
  // ```

  // ## Acceptance Criteria

  // ```
  // GIVEN a weather dashboard with form inputs
  // WHEN I search for a city
  // THEN I am presented with current and future conditions for that city and that city is added to the search history
  // WHEN I view current weather conditions for that city
  // THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
  // WHEN I view the UV index
  // THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
  // WHEN I view future weather conditions for that city
  // THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
  // WHEN I click on a city in the search history
  // THEN I am again presented with current and future conditions for that city
  // WHEN I open the weather dashboard
  // THEN I am presented with the last searched city forecast
  // ```

  weatherDashBoard: {
    title: "Weather Dashboard",
    brief:
      "The Weather Dashboard is designed to provide travelers a weather outlook for multiple cities so that they can plan their trips accordingly.",
    techs: [
      "Dynamically generated HTML",
      "JavaScript",
      "jQuery",
      "Server-side API",
      "CSS selectors",
      "Media Queries",
      "Local Storage",
      "Data Attributes",
      "Bootstrap Framework",
      "Embedded Audios",
    ],
    deployedLink: "https://jmantis0.github.io/weather-dashboard/",
    gitHubRepoLink: "http://github.com/JMantis0/weather-dashboard",
    cardImage: "/assets/images/w-dashboard.png",
    description:
      "Browser based weather forecast application featuring data called from the OpenWeatherMaps api.",
  },
  euroTranslationMap: {
    title: "European Translation Map",
    brief:
      "This web application provides travelers and language enthusiasts alike a tool that translates words from english into several European languages and displays the translations according to their geographic location.",
    techs: [
      "Systran Translate API",
      "TomTom Maps API",
      "Zurb Foundation Framework",
    ],
    deployedLink: "https://progharrison234.github.io/european-translation-map/",
    gitHubRepoLink:
      "https://github.com/ProgHarrison234/european-translation-map",
    cardImage: "/assets/images/eurotrans.gif",
    description:
      "This web application provides travelers and language enthusiasts alike a tool that translates words from english into several European languages and displays the translations according to their geographic location.",
  },
  workDayScheduler: {
    title: "Work Day Scheduler",
    brief: "The Work Day Scheduler provides employees and entrepren",
    deployedLink: "https://jmantis0.githubio/work-day-scheduler",
    gitHubRepoLink: "https://github.com/JMantis0/work-day-scheduler",
    cardImage: "/assets/images/wd-scheduler.JPG",
    description:
      "Task management scheduler application featuring mobile responsive design, dynamic appearance, data storage, css animations, and sound.",
  },
  budgetTracker: {
    title: "Budget Tracker",
    deployedLink: "https://jbudget-tracker.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/budget-tracker",
    cardImage: "/assets/images/budget-tracker.JPG",
    description:
      "Full Stack progressive web application.  MongoDB, Sequelize, IndexedDB, PWA (look at other things)",
  },
  employeeManagementCLI: {
    title: "Development Team Roster CLI",
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/Employee-Manager_CLI",
    cardImage: "/assets/images/cli.JPG",
    description:
      "Employee Management App that allows users to quickly draft development teams and generate a website of its roster, featuring Javascript Classes, npm inquirer, and html writing technologies",
  },
  employeeManagementSystem: {
    title: "Employee Database Manager",
    deployedLink: "",
    gitHubRepoLink: "https://hithub.com/Jmantis0/Employee-Management-System",
    cardImage: "/assets/images/emp-dbs-system.JPG",
    description:
      "Command Line Employee Database Manager and information interface featuring crud functionality with a MySQL database",
  },
  readmeGenerator: {
    title: "Readme Generator",
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/readme-generator",
    cardImage: "/assets/images/readme-generator.JPG",
    description:
      "Command line node application that aids developers in generating quality readme files for GitHub Repositories",
  },
  brewR: {
    title: "brewR",
    deployedLink: "https://brewrs.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/brewR",
    cardImage: "/assets/images/brewrs.JPG",
    description:
      "Full stack website craft beer afficianados and amateurs alike can create accounts, search breweries, save their favorites, and post to their own blog.",
  },
  eatDaBurger: {
    title: "Eat - Da - Burger",
    deployedLink: "https://secret-scrubland-53219.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/Eat-Da-Burger",
    cardImage: "/assets/images/burger.gif",
    description:
      "A fun full-stack MVC app that allows user to create and consume burgers, featuring mobile first design, MySQL, jQuery, and express-handlebars.",
  },
};

const Portfolio = ({
  setPageState,
  itemPageState,
  setItemPageState,
  setItemTabState,
  itemTabState,
  setSlideDirection,
  setSlidingIn,
}) => {
  // console.log("Object.keys(projectData)", Object.keys(projectData));
  // Object.keys(projectData).forEach((key) =>
  //   console.log(projectData[key].deployedLink)
  // );
  return (
    <div>
      {/* Need to make the height of each project uniform */}
      <Grid container justify="space-around" alignItems="stretch" spacing={5}>
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
    </div>
  );
};

export default Portfolio;
