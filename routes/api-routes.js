const router = require("express").Router();
const models = require("../models");
const env = require("dotenv");
const axios = require("axios");
const Sequelize = require("sequelize");

// apiKey = process.env.APIKEY;
// const db = require("../models");

router.get("/test", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  console.log("This is the test route");
  console.log("req", req);
  res.send(200);
});

router.post("/saveMessage", (req, res) => {
  console.log("inside /saveMessage route");
  console.log("the request body is: ", req.body);

  models.Message.create({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message,
  })
    .then((response) => {
      // console.log("response from MySQL is: ", response);
      res.send(response);
    })
    .catch((err) => {
      console.log("There was an error: ", err);
      res.status(404).json(err);
    });
});

module.exports = router;
