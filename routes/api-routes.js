const router = require("express").Router();
const env = require("dotenv");
const axios = require("axios");

// apiKey = process.env.APIKEY;
// const db = require("../models");

router.get("/test", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  console.log("This is the test route");
  console.log("req", req);
  res.send(200);
});

module.exports = router;
