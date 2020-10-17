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
  },
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
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Server-side API",
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
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Mobile Responsive",
      "Systran Translate API",
      "TomTom Maps API",
      "Zurb Foundation Framework",
      "font awesome"
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
    brief:
      "The Work Day Scheduler provides employees with a busy schedule a tool to add important events to a daily planner, so that they can manage their time and tasks more effectively.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "moment.js",
      "Bootstrap",
      "Local Storage",
      "Mobile Responsive Design",
    ],
    deployedLink: "https://jmantis0.githubio/work-day-scheduler",
    gitHubRepoLink: "https://github.com/JMantis0/work-day-scheduler",
    cardImage: "/assets/images/wd-scheduler.JPG",
    description:
      "Task management scheduler application featuring mobile responsive design, dynamic appearance, data storage, css animations, and sound.",
  },
  budgetTracker: {
    title: "Budget Tracker",
    brief:
      "The Budget Tracker is a fullstack progressive web application that allows users to track their withdrawals and deposits with or without an internet connection.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Progressive Web Applications",
      "service-worker.js",
      "IndexedDB",
      "File and Data Caching",
      "MongoDB",
      "Mongoose",
      "Express",
      "Bootstrap",
      "chart.js",
      "asynchronous functions",
    ],
    deployedLink: "https://jbudget-tracker.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/budget-tracker",
    cardImage: "/assets/images/budget-tracker.JPG",
    description:
      "Full Stack progressive web application.  MongoDB, Sequelize, IndexedDB, PWA (look at other things)",
  },
  employeeManagementCLI: {
    title: "Development Team Roster CLI",
    brief: "This Node command line interface application provides managers a tool to quickly draft development teams and generate web pages that display the roster and basic contact information of the team's members.",
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/Employee-Manager_CLI",
    cardImage: "/assets/images/cli.JPG",
    description:
      "Employee Management App that allows users to quickly draft development teams and generate a website of its roster, featuring Javascript Classes, npm inquirer, and html writing technologies",
  },
  employeeManagementSystem: {
    title: "Employee Management System",
    brief:
      "This command line application is a tool for business owners that allows them to view and manage the departments, roles, and employees in their company so that they can organize and plan their business",
    techs: ["Node, MySQL, npm chalk, npm inquirer"],
    deployedLink: "",
    gitHubRepoLink: "https://hithub.com/Jmantis0/Employee-Management-System",
    cardImage: "/assets/images/emp-dbs-system.JPG",
    description:
      "Command Line Employee Database Manager and information interface featuring crud functionality with a MySQL database",
  },
  readmeGenerator: {
    title: "Readme Generator",
    brief:
      "This Command Line Interface application aids developers in easily create good readme.md files for their GitHub repositories.",
    techs: ["Node", "fs (file system)", "npm inquirer"],
    deployedLink: "",
    gitHubRepoLink: "https://github.com/JMantis0/readme-generator",
    cardImage: "/assets/images/readme-generator.JPG",
    description:
      "Command line node application that aids developers in generating quality readme files for GitHub Repositories",
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
      "sequelize",
      "passport",
      "express",
      "particle.js",
    ],
    deployedLink: "https://brewrs.herokuapp.com/",
    gitHubRepoLink: "https://github.com/JMantis0/brewR",
    cardImage: "/assets/images/brewrs.JPG",
    description:
      "Full stack website craft beer afficianados and amateurs alike can create accounts, search breweries, save their favorites, and post to their own blog.",
  },
  eatDaBurger: {
    title: "Eat - Da - Burger",
    brief:
      "Eat-Da-Burger is a full stack resaurant application that lets users input the names of burgers they'd like to eat.  When a user submits a burger, the app displays it on the left hand side of the page -- waiting to be devoured.  Each burger in the waiting area also has a 'Devour' button.  When clicked the burger will move to the right side of the page.",
    techs: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "MySQL",
      "sequelize",
      "express",
      "express-handlebars",
      "MVC",
    ],
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
